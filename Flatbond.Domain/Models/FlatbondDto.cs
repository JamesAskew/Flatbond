namespace Flatbond.Domain.Models
{
    public class FlatbondDto 
    {
        public int Rent { get; set; }
        public string Rent_Frequency { get; set; }
        public string Postcode { get; set; }
        public int Membership_Fee { get; set; }
        public Config ClientConfig { get; set; }
    }
}
