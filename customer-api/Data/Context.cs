using api.Models;
using Microsoft.EntityFrameworkCore;

namespace customer_api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<ContactPhones> ContactPhones { get; set; }
    }
}
