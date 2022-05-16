using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]/[Action]")]
    public class StudentController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Student> GetAll()
        {
            IEnumerable<Student> students = new List<Student>();
            return students;
        }

        [HttpGet]
        public Student Get(string Id)
        {
            Student student = new Student();
            return student;
        }

        [HttpPost]
        public void Create(Student student)
        {
            
        }

        [HttpDelete]
        public void Delete(string Id)
        {
            
        }

        [HttpPut]
        public void Update(Student student)
        {
            //some database operations to perform
        }
    }
}