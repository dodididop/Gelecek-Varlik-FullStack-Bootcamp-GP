using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using Building.DB.Entities;
using Building.DB.Entities.DatabaseContext;
using Building.Model;
using Building.Model.User;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Building.Service.User
{
    public class UserService : IUserService
    {
        private readonly IMapper mapper; 

        private IConfiguration config;

        public UserService(IMapper mapper, IConfiguration config)
        {
            this.mapper = mapper; 
            this.config = config;
        }
        public string Login(Login model)
        {
            using (var context = new ApartmentDBContext())
            {
                var user = context.Users.FirstOrDefault(x => x.Email == model.Email && x.Password == model.Password);

                // return null if user not found
                if (user == null) return null;

                // authentication successful so generate jwt token
                return GenerateToken(user); 
            }
        } 

        private string GenerateToken(Users user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            { 
                new Claim(ClaimTypes.Role,user.Role),

                new Claim(nameof(CurrentUser.Id), user.Id.ToString()),
                new Claim(nameof(CurrentUser.Name), user.Name),
                new Claim(nameof(CurrentUser.Surname), user.Surname),
                new Claim(nameof(CurrentUser.Email), user.Email),
                new Claim(nameof(CurrentUser.PhoneNumber), user.PhoneNumber),
                new Claim(nameof(CurrentUser.TCNo), user.TCNo)
            };

            var token = new JwtSecurityToken(this.config["Jwt:Issuer"],
                this.config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public Response<bool> AddUser(UserCreation newUser)
        {
            using (var context = new ApartmentDBContext())
            {
                var user = context.Users.FirstOrDefault(x=>x.TCNo == newUser.TCNo);
                if (user is not null)
                    return new Response<bool>(false, false) { ErrorMessage = "Kullanıcı zaten bulunmaktadır."};
                user = mapper.Map<Users>(newUser);

                user.Password = "1234";

                context.Users.Add(user);
                context.SaveChanges();
            }
            return new Response<bool>(true, true);
        }
        public Users GetById(int id)
        {
            using (var context = new ApartmentDBContext())
            {
                return context.Users.FirstOrDefault(x => x.Id == id);
            }
        
        }

        public Response<bool> DeleteUser(int id)
        {
            using (var context = new ApartmentDBContext())
            {
                var user = context.Users.SingleOrDefault(x => x.Id == id);
                if (user is null)
                    return new Response<bool>(false, false);
                context.Users.Remove(user);
                context.SaveChanges();
            }
            return new Response<bool>(true, true);
        } 
    }
}
