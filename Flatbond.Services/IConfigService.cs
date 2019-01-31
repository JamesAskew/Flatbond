using Flatbond.Domain.Models;
using System.Collections.Generic;

namespace Flatbond.Services
{
    public interface IConfigService
    {
        IEnumerable<Config> GetAllConfigs();
        Config GetConfigByClientId(int clientId);
    }
}
