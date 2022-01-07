using System.ComponentModel.DataAnnotations.Schema;

namespace Building.Model.Flat
{
    public class Flat
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Block { get; set; }
        public bool IsFull { get; set; } = true;
        public string Type { get; set; }
        public int Storey { get; set; }
        public int FlatNumber { get; set; }
        public bool IsFlatOwner { get; set; }
    }   
}
