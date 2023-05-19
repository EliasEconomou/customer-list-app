using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    [PrimaryKey("Id")]
    public class ContactPhones
    {
        
        public int Id { get; set; }
        [Phone]
        public int HomeNumber { get; set; }
        [Phone]
        public int WorkNumber { get; set; }
        [Phone]
        public int CellphoneNumber { get; set; }
    }
}
