using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    [PrimaryKey("Id")]
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string HomeAddress { get; set; }
        public ContactPhones? ContactPhones { get; set; }
        [EmailAddress]
        public string Email { get; set; }
    }
}
