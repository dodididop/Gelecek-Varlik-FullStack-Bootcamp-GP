using System;
using System.Linq;
using AutoMapper;
using Building.DB.Entities;
using Building.DB.Entities.DatabaseContext;
using Building.Model;
using Building.Model.FlatCreation;

namespace Building.Service.Flat
{
    public class FlatService : IFlatService
    {
        private readonly IMapper mapper;

        public FlatService(IMapper mapper)
        {
            this.mapper = mapper;
        }
        
        public Response<bool> AddFlat(FlatCreation newFlat)
        {
            using (var context = new ApartmentDBContext())
            {
                var flat = context.Flats.FirstOrDefault(x => x.FlatNumber == newFlat.FlatNumber && x.Block == newFlat.Block );
                if (flat is not null)
                    return new Response<bool>() { ErrorMessage ="Aynı daire numarası bulunmaktadır.", IsSuccess = false };
                        
                
                flat = mapper.Map<Flats>(newFlat);
                context.Flats.Add(flat);
                context.SaveChanges();
            }
            return new Response<bool>(true,true);
        }

        public Response<bool> DeleteFlat(int id)
        {
            using (var context = new ApartmentDBContext())
            {
                var flat = context.Flats.SingleOrDefault(x => x.Id == id);
                if (flat is null)
                    return new Response<bool>(false, false);
                context.Flats.Remove(flat);
                context.SaveChanges();
            }
            return new Response<bool>(true,true);
        }
    }
}
