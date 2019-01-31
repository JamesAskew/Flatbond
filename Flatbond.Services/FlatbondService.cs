using Flatbond.Domain.Constants;
using Flatbond.Domain.Models;
using Flatbond.Domain.Extensions;

namespace Flatbond.Services
{
    public class FlatbondService : IFlatbondService
    {
        const int InterestRate = 20;
        const int MinimumMembershipFeeAmount = 12000;

        public int CalculateMembershipFee(FlatbondDto input)
        {
            int membershipFee = 0;
            
            if (input.ClientConfig.Fixed_Membership_Fee)
            {
                membershipFee = input.ClientConfig.Fixed_Membership_Fee_Amount.PlusVat(InterestRate);
            }
            else
            {
                var weeklyRent = this.CalculateWeeklyRent(input.Rent_Frequency, input.Rent);
                membershipFee = ReturnHighestFee(MinimumMembershipFeeAmount.PlusVat(InterestRate), weeklyRent.PlusVat(InterestRate));
            }

            return membershipFee;
        }

        private int CalculateWeeklyRent(string rentFrequency, int rent)
        {
            return (rentFrequency.ToLower() == Constants.Monthly) ? rent / 4 : rent;
        }
        private int ReturnHighestFee(int minimumFee, int weeklyFee)
        {
            return (weeklyFee > minimumFee) ? weeklyFee : minimumFee;
        }
    }
}
