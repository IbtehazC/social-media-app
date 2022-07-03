using Domain;

namespace Persistance
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Posts.Any()) return;

            var posts = new List<Post>
            {
                new Post
                {
                    Heading = "Past Post 1",
                    CreatedAt = DateTime.Now.AddMonths(-2),
                    Description = "Post 2 months ago",
                    Category = "drinks",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Past Post 2",
                    CreatedAt = DateTime.Now.AddMonths(-1),
                    Description = "Post 1 month ago",
                    Category = "culture",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Future Post 1",
                    CreatedAt = DateTime.Now.AddMonths(1),
                    Description = "Post 1 month in future",
                    Category = "culture",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Future Post 2",
                    CreatedAt = DateTime.Now.AddMonths(2),
                    Description = "Post 2 months in future",
                    Category = "music",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Future Post 3",
                    CreatedAt = DateTime.Now.AddMonths(3),
                    Description = "Post 3 months in future",
                    Category = "drinks",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Future Post 4",
                    CreatedAt = DateTime.Now.AddMonths(4),
                    Description = "Post 4 months in future",
                    Category = "drinks",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Future Post 5",
                    CreatedAt = DateTime.Now.AddMonths(5),
                    Description = "Post 5 months in future",
                    Category = "drinks",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Future Post 6",
                    CreatedAt = DateTime.Now.AddMonths(6),
                    Description = "Post 6 months in future",
                    Category = "music",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Future Post 7",
                    CreatedAt = DateTime.Now.AddMonths(7),
                    Description = "Post 2 months ago",
                    Category = "travel",
                    Reacts = 1,
                },
                new Post
                {
                    Heading = "Future Post 8",
                    CreatedAt = DateTime.Now.AddMonths(8),
                    Description = "Post 8 months in future",
                    Category = "film",
                    Reacts = 1,
                }
            };

            await context.Posts.AddRangeAsync(posts);
            await context.SaveChangesAsync();
        }
    }
}