using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Building.Model.Payment;
using Building.Service.Payment;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Building.API.Controllers
{
    [Route("api/[controller]s")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentService paymentService;

        public PaymentController(IPaymentService _paymentService)
        {
            paymentService = _paymentService;
        }

        [HttpGet]
        public IActionResult GetPayment()
        {
            return Ok(paymentService.GetPayment());
        }

        [HttpPost]
        public IActionResult AddPayment([FromBody] PaymentCreation newPayment)
        {
            return Ok(paymentService.AddPayment(newPayment));
        }
        [HttpDelete("{id}")]
        public IActionResult DeletePayment(int id)
        {
            return Ok(paymentService.DeletePayment(id));
        }
    }
}