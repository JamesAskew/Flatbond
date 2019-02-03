using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flatbond.Services;
using Flatbond.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Flatbond.Api.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ConfigController : ControllerBase
    {
        private readonly IConfigService _configService;

        public ConfigController(IConfigService configService)
        {
            this._configService = configService;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var configs = this._configService.GetAllConfigs();
            return Ok(configs);
        }

        [HttpGet("{client_id}")]
        public IActionResult Index(int client_Id)
        {
            var config = this._configService.GetConfigByClientId(client_Id);
            if (config == null)
                return NotFound();

            return Ok(config);
        }
    }
}