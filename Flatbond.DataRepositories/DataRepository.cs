using Flatbond.Domain.Models;
using System.Collections.Generic;

namespace Flatbond.DataRepositories
{
    public class DataRepository : IDataRepository
    {
        public IEnumerable<Config> GetAllConfigs()
        {
            return new List<Config>
            {
                new Config
                {
                    Client_Id = 1,
                    Fixed_Membership_Fee = false,
                    Fixed_Membership_Fee_Amount = 0
                },
                new Config
                {
                    Client_Id = 2,
                    Fixed_Membership_Fee = true,
                    Fixed_Membership_Fee_Amount = 500
                },
                new Config
                {
                    Client_Id = 3,
                    Fixed_Membership_Fee = true,
                    Fixed_Membership_Fee_Amount = 350
                }
            };
        }
    }
}
