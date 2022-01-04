using System;
namespace Building.Model
{
    public class Response<T>
    {
        public bool IsSuccess { get; set; } = false;
        public T Entity { get; set; }
        public string ExceptionMessage { get; set; }

    }
}
