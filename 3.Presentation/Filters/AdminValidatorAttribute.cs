using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc.Controllers;

namespace Presentation
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public sealed class AdminValidatorAttribute : ActionFilterAttribute
    {

        public override void OnActionExecuting(ActionExecutingContext actionContext)
        {
            var headerValue = actionContext.HttpContext.Request.Headers.FirstOrDefault(item => item.Key == "key").Value.FirstOrDefault();

            if (string.IsNullOrWhiteSpace(headerValue) || !headerValue.Equals("adminPassword", StringComparison.Ordinal))
            {
                throw new UnauthorizedAccessException();
            }

            base.OnActionExecuting(actionContext);
        }
    }
}
