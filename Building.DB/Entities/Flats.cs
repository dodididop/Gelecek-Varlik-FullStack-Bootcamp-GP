using System.Collections.Generic;

#nullable disable

namespace Building.DB.Entities
{
    public partial class Flats
    {
        public Flats()
        {
            Payments = new HashSet<Payments>();
        }

        public int Id { get; set; }
        public string Block { get; set; }
        public string Type { get; set; }
        public int Storey { get; set; }
        public int FlatNumber { get; set; }
        public bool IsFlatOwner { get; set; }
        public int? UserId { get; set; }
        public bool IsFull { get; set; }

        public virtual Users User { get; set; }
        public virtual ICollection<Payments> Payments { get; set; }
    }
}
