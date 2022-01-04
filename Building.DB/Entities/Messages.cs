using System;

#nullable disable

namespace Building.DB.Entities
{
    public partial class Messages
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public int FromUserId { get; set; }
        public int ToUserId { get; set; }
        public DateTime SendDate { get; set; }
        public bool IsRead { get; set; }

        public virtual Users FromUser { get; set; }
        public virtual Users ToUser { get; set; }
    }
}
