using System.ComponentModel.DataAnnotations;

namespace Building.Model.User
{
    public class Login
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
