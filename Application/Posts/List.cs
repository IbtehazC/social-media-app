using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Posts
{
    public class List
    {
        public class Query : IRequest<Result<List<Post>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Post>>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Result<List<Post>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Post>>.Success(await this.context.Posts.ToListAsync());
            }
        }
    }
}