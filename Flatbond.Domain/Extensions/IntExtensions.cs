namespace Flatbond.Domain.Extensions
{
    public static class IntExtensions
    {
        public static int PlusVat(this int value, int rate)
        {
            return value + ((value / 100) * rate);
        }
    }
}
