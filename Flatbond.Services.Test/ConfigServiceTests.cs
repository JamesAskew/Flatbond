using Flatbond.DataRepositories;
using Flatbond.Domain.Models;
using Moq;
using System;
using System.Collections.Generic;
using Xunit;

namespace Flatbond.Services.Test
{
    public class ConfigServiceTests
    {
        [Fact]
        public void GetConfigByClientId_ReturnTypeIs_Config()
        {
            var configService = new ConfigService(new DataRepository());

            var config = configService.GetConfigByClientId(1);

            Assert.IsType<Config>(config);
        }

        [Fact]
        public void GetConfigByClientId_ReturnsEmptyConfig_ForNotFound()
        {
            var configService = new ConfigService(new DataRepository());

            var config = configService.GetConfigByClientId(99);

            Assert.IsType<Config>(config);
            Assert.Equal(0, config.Client_Id);
            Assert.Equal(0, config.Fixed_Membership_Fee_Amount);
            Assert.False(config.Fixed_Membership_Fee);
        }

        [Fact]
        public void GetAllConfigs_Returns_AtLeastOneConfig()
        {
            var mockRepository = new Mock<IDataRepository>();
            mockRepository.Setup(m => m.GetAllConfigs()).Returns((IEnumerable<Config>)null);

            var configService = new ConfigService(mockRepository.Object);

            var configs = configService.GetAllConfigs();

            Assert.NotEmpty(configs);
        }
    }
}
