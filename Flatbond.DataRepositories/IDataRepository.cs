using Flatbond.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flatbond.DataRepositories
{
    public interface IDataRepository
    {
        IEnumerable<Config> GetAllConfigs();
    }
}
