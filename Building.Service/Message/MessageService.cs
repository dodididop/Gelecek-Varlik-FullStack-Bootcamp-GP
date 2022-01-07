using System.Linq;
using AutoMapper;
using Building.DB.Entities;
using Building.DB.Entities.DatabaseContext;
using Building.Model;
using Building.Model.Message;

namespace Building.Service.Message
{
    public class MessageService : IMessageService
    {
        private readonly IMapper mapper;
        public MessageService(IMapper _mapper)
        {
            mapper = _mapper;
        }
        
        public Response<bool> AddMessage(MessageCreation newMessage)
        {
            using (var context = new ApartmentDBContext())
            {
                var message = mapper.Map<Messages>(newMessage);
                context.Messages.Add(message);
                context.SaveChanges();
            }
            return new Response<bool>(true, true);
        }

        public Response<bool> DeleteMessage(int id)
        {
            using (var context = new ApartmentDBContext())
            {
                var message = context.Messages.SingleOrDefault(x => x.Id == id);
                if (message is null)
                    return new Response<bool>(false, false);
                context.Messages.Remove(message);
                context.SaveChanges();
            }
            return new Response<bool>(true, true);
        }
    }
}
