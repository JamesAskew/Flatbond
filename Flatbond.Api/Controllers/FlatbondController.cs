using Flatbond.Domain.Models;
using Flatbond.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Flatbond.Api.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    [EnableCors("AllowNetlify")]
    public class FlatbondController : ControllerBase
    {
        private readonly IFlatbondService _flatbondService;

        public FlatbondController(IFlatbondService flatbondService)
        {
            this._flatbondService = flatbondService;
        }

        [HttpPost]
        public IActionResult Index(FlatbondDto flatbond)
        {
            var membershipFee = this._flatbondService.CalculateMembershipFee(flatbond);

            flatbond.Membership_Fee = membershipFee;

            return Ok(flatbond);
        }
    }
}
