using System;
using Building.Model;
using Building.Model.FlatCreation;

namespace Building.Service.Flat
{
    public interface IFlatService
    {
        public Response<bool> AddFlat(FlatCreation newFlat);
        public Response<bool> DeleteFlat(int id);
    }
}
