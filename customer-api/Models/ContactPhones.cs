using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    [PrimaryKey("Id")]
    public class ContactPhones
    {
        
        public int Id { get; set; }
        [Phone]
        public string HomeNumber { get; set; }
        [Phone]
        public string WorkNumber { get; set; }
        [Phone]
        public string CellphoneNumber { get; set; }
    }
}
