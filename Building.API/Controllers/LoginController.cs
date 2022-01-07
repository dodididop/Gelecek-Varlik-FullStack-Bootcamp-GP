using Building.Model.User;
using Building.Service.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc; 

namespace Building.API.Controllers
{
    [Route("api/[controller]s")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUserService _userService;

        public LoginController(IUserService userService)
        { 
            _userService = userService;
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]Login login)
        {
            return Ok(_userService.Login(login));
        } 
    }
}
