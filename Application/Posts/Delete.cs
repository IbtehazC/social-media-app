using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistance;

namespace Application.Posts
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await context.Posts.FindAsync(request.Id);

                if (post == null) return null;

                context.Remove(post);

                var result = await context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to delete the post");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}