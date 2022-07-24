using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistance;

namespace Application.Posts
{
    public class Details
    {
        public class Query : IRequest<Result<Post>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Post>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Result<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                var post = await this.context.Posts.FindAsync(request.Id);
                return Result<Post>.Success(post);
            }
        }
    }
}