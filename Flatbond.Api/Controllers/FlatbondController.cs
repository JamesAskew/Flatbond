using Flatbond.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Flatbond.Api.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class FlatbondController : ControllerBase
    {
        [HttpPost]
        public IActionResult Index(FlatbondDto flatbond)
        {
            return Ok();
        }
    }
}
