using AutoMapper;
using Building.DB.Entities;
using Building.Model.FlatCreation;
using Building.Model.Message;
using Building.Model.Payment;
using Building.Model.User;

namespace Building.API.Infrastructure
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region
            CreateMap<FlatCreation, Flats>();
            //CreateMap<Flats, FlatCreation>();
            #endregion
            #region
            CreateMap<UserCreation, Users>();
            //CreateMap<Users,UserCreation>();
            #endregion
            #region
            CreateMap<PaymentCreation, Payments>();
            //CreateMap<Payments,PaymentCreation>();
            CreateMap<Payments,PaymentList >();
            #endregion
            #region
            CreateMap<MessageCreation, Messages>();
            //CreateMap<Messages,MessageCreation>();
            #endregion
           
        }
    }
}
