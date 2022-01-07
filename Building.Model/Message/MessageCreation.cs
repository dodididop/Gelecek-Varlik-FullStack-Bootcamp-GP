using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Building.Model.Message
{
    public class MessageCreation
    {
        public string Content { get; set; }
        public DateTime SendDate { get; set; } = DateTime.Now;
        public int FromUserId { get; set; }
        public int ToUserId { get; set; }
    }
}
