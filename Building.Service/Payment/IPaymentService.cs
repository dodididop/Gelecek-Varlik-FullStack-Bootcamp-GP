using System;
using System.Collections.Generic;
using Building.Model;
using Building.Model.Payment;

namespace Building.Service.Payment
{
    public interface IPaymentService
    {
        public Response<bool> AddPayment(PaymentCreation newPayment);
        public Response<bool> DeletePayment(int id);
        public Response<List<PaymentList>> GetPayment();
      
    }
}
