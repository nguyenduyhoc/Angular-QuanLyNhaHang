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
    public class GuestTableController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public GuestTableController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<GuestTable> Get()
        {
            return _context.GuestTable.ToList();
        }
    }
}
