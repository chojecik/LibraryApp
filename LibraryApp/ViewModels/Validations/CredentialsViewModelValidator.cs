using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApp.ViewModels.Validations
{
    public class CredentialsViewModelValidator : AbstractValidator<CredentialsViewModel>
    {
        public CredentialsViewModelValidator()
        {
            RuleFor(vm => vm.UserName).NotEmpty().WithMessage("Please enter the username");
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Please enter the password");
            RuleFor(vm => vm.Password).MinimumLength(8).WithMessage("Password must contain at least 8 characters");
        }
    }
}
