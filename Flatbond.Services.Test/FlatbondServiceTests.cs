using Flatbond.Domain.Models;
using Xunit;

namespace Flatbond.Services.Tests
{
    public class FlatbondServiceTests
    {
        public FlatbondDto _flatbondDto { get; private set; }
        public FlatbondService _flatbondService { get; private set; }

        public FlatbondServiceTests()
        {
            this._flatbondService = new FlatbondService();
            this._flatbondDto = new FlatbondDto
            {
                Postcode = "HP5 1QD",
                Rent = 0,
                Rent_Frequency = "Monthly",
                ClientConfig = new Config
                {
                    Client_Id = 1,
                    Fixed_Membership_Fee = false,
                    Fixed_Membership_Fee_Amount = 0
                }
            };
        }

        [Fact]
        public void CalculateMembershipFee_Returns_WeeklyFee()
        {
            this._flatbondDto.Rent = 120000;

            var membershipFee = this._flatbondService.CalculateMembershipFee(this._flatbondDto);

            Assert.Equal(36000, membershipFee);
        }

        [Fact]
        public void CalculateMembershipFee_Returns_MinimumFee()
        {
            this._flatbondDto.Rent = 10000;
            this._flatbondDto.Rent_Frequency = "weekly";

            var membershipFee = this._flatbondService.CalculateMembershipFee(this._flatbondDto);

            Assert.Equal(14400, membershipFee);
        }

        [Fact]
        public void CalculateMembershipFee_Returns_FixedFeePlusVat()
        {
            this._flatbondDto.ClientConfig.Fixed_Membership_Fee = true;
            this._flatbondDto.ClientConfig.Fixed_Membership_Fee_Amount = 50000;

            var membershipFee = this._flatbondService.CalculateMembershipFee(this._flatbondDto);

            Assert.Equal(60000, membershipFee);
        }
    }
}
