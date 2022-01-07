using System;

#nullable disable

namespace Building.DB.Entities
{
    public partial class Payments
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime PaidDate { get; set; }
        public decimal Amount { get; set; }
        public bool IsPaid { get; set; }
        public int? FlatId { get; set; }

        public virtual Flats Flat { get; set; }
    }
}
