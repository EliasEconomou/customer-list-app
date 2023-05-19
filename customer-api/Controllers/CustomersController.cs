using api.Models;
using customer_api.Data;
using customer_api.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;

namespace customer_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly DataContext _DataContext;

        public CustomersController(DataContext dataContext)
        {
            _DataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            var customers = await _DataContext.Customers.ToListAsync();
            return Ok(customers);
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddCustomer(CustomerDTO customerdto)
        {
            return Ok();
        }
    }
}
