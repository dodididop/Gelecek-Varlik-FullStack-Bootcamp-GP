using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Building.Model.Payment
{
    public class PaymentCreation
    {
        public int FlatId { get; set; }
        public string Type { get; set; }
        public DateTime DueDate { get; set; }
        public decimal Amount { get; set; }
        public bool IsPaid { get; set; } = false;
    }
}
