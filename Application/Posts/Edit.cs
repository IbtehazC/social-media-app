using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistance;

namespace Application.Posts
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Post Post { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Post).SetValidator(new PostValidatior());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.mapper = mapper;
                this.context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await context.Posts.FindAsync(request.Post.Id);

                if (post == null) return null;

                mapper.Map(request.Post, post);

                var result = await context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Faile to update post");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}