using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using FluentValidation;

namespace Application.Posts
{
    public class PostValidatior : AbstractValidator<Post>
    {
        public PostValidatior()
        {
            RuleFor(x => x.Heading).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}