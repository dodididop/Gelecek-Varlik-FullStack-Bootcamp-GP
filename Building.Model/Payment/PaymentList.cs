using System;
namespace Building.Model.Payment
{
    public class PaymentList
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public int Id { get; set; }
        public int FlatId { get; set; }
        public string Type { get; set; }
        public DateTime DueDate { get; set; }
        public decimal Amount { get; set; }
        public bool IsPaid { get; set; }
    }
}
