namespace Domain
{
    public class Post
    {
        public Guid Id { get; set; }
        public string Heading { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public int Reacts { get; set; }
    }
}
