using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Building.DB.Entities;
using Building.DB.Entities.DatabaseContext;
using Building.Model;
using Building.Model.Payment;
using Microsoft.EntityFrameworkCore;

namespace Building.Service.Payment
{
    public class PaymentService : IPaymentService
    {
        private readonly IMapper mapper;

        public PaymentService(IMapper mapper)
        {
            this.mapper = mapper;
        }
        public Response<List<PaymentList>> GetPayment()
        {
            var paymentList = new Response<List<PaymentList>>();
            using (var context = new ApartmentDBContext())
            {
                var data = context.Payments.Where(x => x.IsPaid).OrderBy(x => x.Id).ToList();
                if (data.Any())
                {
                    paymentList.Entity = mapper.Map<List<PaymentList>>(data);
                    paymentList.IsSuccess = true;

                }
                  

            }
            return paymentList;
        }
            

        public Response<bool> AddPayment(PaymentCreation newPayment)
        {
            //to add multiple payment?
            using( var context = new ApartmentDBContext())
            {
                var flat = context.Flats.FirstOrDefault(x => x.Id == newPayment.FlatId);
                if (flat is null)
                    return new Response<bool>(false, false) { ErrorMessage ="Daire bilgisi bulunamadı."};
                //var payment = context.Payments.Find(newPayment.FlatId);
                
                var payment = mapper.Map<Payments>(newPayment);
                context.Payments.Add(payment);
                context.SaveChanges();
            }
            return new Response<bool>(true,true);
        }

        public Response<bool> DeletePayment(int id)
        {
            using (var context = new ApartmentDBContext())
            {
                var payment = context.Payments.SingleOrDefault(x => x.Id == id);
                if (payment is null)
                    return new Response<bool>(false, false);
                context.Payments.Remove(payment);
                context.SaveChanges();
            }
            return new Response<bool>(true, true);
        }
    }
}
