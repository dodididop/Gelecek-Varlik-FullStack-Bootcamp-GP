using Building.DB.Entities;
using Building.Model;
using Building.Model.User;

namespace Building.Service.User
{
    public interface IUserService
    {
        public Response<bool> AddUser(UserCreation newUser);
        public Response<bool> DeleteUser(int id);
        public string Login(Login model);
        public Users GetById(int id);
    }
}
