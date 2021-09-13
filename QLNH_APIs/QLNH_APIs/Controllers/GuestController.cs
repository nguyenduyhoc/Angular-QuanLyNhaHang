using Microsoft.AspNetCore.Mvc;
using QLNH_APIs.Data;
using QLNH_APIs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLNH_APIs.Controllers
{
    
        [ApiController]
        [Route("[controller]")]
        public class GuestController : ControllerBase
        {
            private readonly ApplicationDbContext _context;
            public GuestController(ApplicationDbContext context)
            {
                _context = context;
            }

            [HttpGet]
            public IEnumerable<Guest> Get()
            {
                return _context.Guest.ToList();
            }
        }
    
}
