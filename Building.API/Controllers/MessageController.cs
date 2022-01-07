using Building.Model.Message;
using Building.Service.Message;
using Microsoft.AspNetCore.Mvc;

namespace Building.API.Controllers
{
    [Route("api/[controller]s")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService messageService;
        public MessageController(IMessageService _messageService)
        {
            messageService = _messageService;
        }

        [HttpPost]
        public IActionResult AddMessage([FromBody]  MessageCreation newMessage)
        {
            return Ok(messageService.AddMessage(newMessage));
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteMessage(int id)
        {
            return Ok(messageService.DeleteMessage(id));
        }
    }
}