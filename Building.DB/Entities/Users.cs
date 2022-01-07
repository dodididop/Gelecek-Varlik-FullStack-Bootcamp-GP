using System;
using System.Collections.Generic;

#nullable disable

namespace Building.DB.Entities
{
    public partial class Users
    {
        public Users()
        {
            Flats = new HashSet<Flats>();
            MessagesFromUser = new HashSet<Messages>();
            MessagesToUser = new HashSet<Messages>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string TCNo { get; set; }
        public string Email { get; set; }
        public DateTime CreateDate { get; set; }
        public string PhoneNumber { get; set; }
        public string PlateNumber { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        public virtual ICollection<Flats> Flats { get; set; }
        public virtual ICollection<Messages> MessagesFromUser { get; set; }
        public virtual ICollection<Messages> MessagesToUser { get; set; }
    }
}
