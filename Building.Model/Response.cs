namespace Building.Model
{
    public class Response<T>
    {
        public Response() { }
        public Response(T entity, bool _IsSuccess, string errorMessage)
        {
            IsSuccess = _IsSuccess;
            Entity = entity;
            ErrorMessage = errorMessage;
        }
        public Response(T entity, bool _IsSuccess)
        {
            IsSuccess = _IsSuccess;
            Entity = entity; 
        }
        public bool IsSuccess { get; set; } = false;
        public T Entity { get; set; }
        public string ErrorMessage { get; set; }
    }
}
