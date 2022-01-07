namespace Building.Model.FlatCreation
{
    public class FlatCreation
    {
        public string Block { get; set; }
        public bool IsFull { get; set; } = true;
        public string Type { get; set; }
        public int Storey { get; set; }
        public int FlatNumber { get; set; }
        public bool IsFlatOwner { get; set; }
        public int? UserId { get; set; }
    }   
}
