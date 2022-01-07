using System;
using System.Linq;
using System.Security.Claims;
using Building.Model.User;
using Building.Service.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Building.API.Controllers
{
    [Route("api/[controller]s")]
    [ApiController]

    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService _userService)
        {
            userService = _userService;
        }

        [HttpPost]
        [Authorize(Roles ="Admin")]
        public IActionResult AddUser([FromBody] UserCreation request)
        {
            return Ok(userService.AddUser(request));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult DeleteUser(int id)
        {
            return Ok(userService.DeleteUser(id));
        }
        private CurrentUser GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if(identity != null)
            {
                var userClaims = identity.Claims;
                return new CurrentUser()
                {
                    Id = Convert.ToInt32(userClaims.FirstOrDefault(x => x.Type == nameof(CurrentUser.Id))?.Value),
                    Email = userClaims.FirstOrDefault(x => x.Type == nameof(CurrentUser.Email))?.Value,
                    PhoneNumber = userClaims.FirstOrDefault(x => x.Type == nameof(CurrentUser.PhoneNumber))?.Value,
                    Name = userClaims.FirstOrDefault(x => x.Type == nameof(CurrentUser.Name))?.Value,
                    Surname = userClaims.FirstOrDefault(x => x.Type == nameof(CurrentUser.Surname))?.Value,
                    TCNo = userClaims.FirstOrDefault(x => x.Type == nameof(CurrentUser.TCNo))?.Value,
                    Role = userClaims.FirstOrDefault(x => x.Type == ClaimTypes.Role)?.Value
                }; 
            }
            return null;
        } 
    }
}