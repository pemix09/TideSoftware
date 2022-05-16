using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApp.Database;
using WebApp.Models;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]/[Action]")]
    public class StudentController : ControllerBase
    {
        private AppDbContext context;
        public StudentController(AppDbContext _context) => context = _context;
        
        [HttpGet]
        public IEnumerable<Student> GetAll()
        {
            return context.Students.ToList();
        }

        [HttpGet]
        public Student Get(string Id)
        {
            Student student = context.Students.Find(Id);
            return student;
        }

        [HttpPost]
        public void Create(Student student)
        {
            context.Students.Add(student);
            context.SaveChanges();
        }

        [HttpDelete]
        public void Delete(string Id)
        {
            Student student = context.Students.Find(Id);
            context.Students.Remove(student);
            context.SaveChanges();
        }

        [HttpPut]
        public void Update(Student student)
        {
            context.Students.Update(student);
            context.SaveChanges();
        }
    }
}