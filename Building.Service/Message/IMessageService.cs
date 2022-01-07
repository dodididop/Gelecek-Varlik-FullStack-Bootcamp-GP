using Building.Model;
using Building.Model.Message;

namespace Building.Service.Message
{
    public interface IMessageService
    {
        public Response<bool> AddMessage(MessageCreation newMessage);
        public Response<bool> DeleteMessage(int id);
    }
}
