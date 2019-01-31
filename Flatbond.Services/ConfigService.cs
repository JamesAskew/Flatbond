using System.Collections.Generic;
using System.Linq;
using Flatbond.DataRepositories;
using Flatbond.Domain.Models;

namespace Flatbond.Services
{
    public class ConfigService : IConfigService
    {
        private readonly IDataRepository _dataRepository;

        public ConfigService(IDataRepository dataRepository)
        {
            this._dataRepository = dataRepository;
        }

        public IEnumerable<Config> GetAllConfigs()
        {
            var configs = this._dataRepository.GetAllConfigs();
            if (configs != null)
            {
                return configs;
            }

            return new List<Config> { new Config() };
        }

        public Config GetConfigByClientId(int clientId)
        {
            var config = this._dataRepository.GetAllConfigs().FirstOrDefault(x => x.Client_Id == clientId);
            if (config != null)
            {
                return config;
            }

            return new Config();
        }
    }
}
