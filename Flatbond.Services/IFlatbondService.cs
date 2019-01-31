using Flatbond.Domain.Models;

namespace Flatbond.Services
{
    public interface IFlatbondService
    {
        int CalculateMembershipFee(FlatbondDto input);
    }
}
