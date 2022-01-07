using Building.Model.FlatCreation;
using Building.Service.Flat;
using Microsoft.AspNetCore.Mvc;

namespace Building.API.Controllers
{
    [Route("api/[controller]s")]
    [ApiController]
    public class FlatController : ControllerBase
    {
        private readonly IFlatService flatService;

        public FlatController(IFlatService _flatService)
        {
            flatService = _flatService;
        }
        //[Authorize(Role="Admin")]
        [HttpPost]
        public IActionResult AddFlat([FromBody] FlatCreation newFlat)
        {
            return Ok(flatService.AddFlat(newFlat));
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteFlat(int id)
        {
            return Ok(flatService.DeleteFlat(id));
        }
    }
}