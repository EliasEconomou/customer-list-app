using api.Models;
using customer_api.Data;
using customer_api.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
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

        // CustomerDTO contains all customer properties from both tables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            var customers = await (from c in _DataContext.Customers
                         join cp in _DataContext.ContactPhones on c.ContactPhones.Id equals cp.Id
                         select new
                         {
                             c.Id,
                             c.Name,
                             c.Surname,
                             c.HomeAddress,
                             c.Email,
                             cp.HomeNumber,
                             cp.WorkNumber,
                             cp.CellphoneNumber
                         }).ToListAsync();
            return Ok(customers);
        }

        [HttpPost("insert")]
        public async Task<ActionResult> InsertCustomer([FromBody] CustomerDTO customerdto)
        {
            if (customerdto is null)
            {
                return BadRequest("Customer object is null");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid model object");
            }

            Console.WriteLine(customerdto);
            Customer customer = new Customer
            {
                Name = customerdto.Name,
                Surname = customerdto.Surname,
                HomeAddress = customerdto.HomeAddress,
                Email = customerdto.Email,
                ContactPhones = new ContactPhones
                {
                    HomeNumber = customerdto.HomeNumber,
                    WorkNumber = customerdto.WorkNumber,
                    CellphoneNumber = customerdto.CellphoneNumber,
                }
            };
            _DataContext.Customers.Add(customer);
            await _DataContext.SaveChangesAsync();
            return Ok("Customer object created successfully");
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult> DeleteCustomer(int id)
        {
            Customer customer = await _DataContext.Customers.Include(c => c.ContactPhones).SingleOrDefaultAsync(c => c.Id == id);
            if (customer == null)
            {
                return BadRequest("Customer with id = " + id + " doesn't exist");
            }
            int contactPhonesId = customer.ContactPhones.Id;
            ContactPhones contactPhones = await _DataContext.ContactPhones
                .SingleOrDefaultAsync(c => c.Id == contactPhonesId);
            _DataContext.Customers.Remove(customer);
            _DataContext.ContactPhones.Remove(contactPhones);
            await _DataContext.SaveChangesAsync();
            return Ok(id);
        }

    }
}
