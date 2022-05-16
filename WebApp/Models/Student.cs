namespace WebApp.Models
{
    public class Student
    {
        private string FirstName { get; set; }
        private string LastName { get; set; }
        private int Age { get; set; }
        private string Degree { get; set; }

        public void SetFirstName(string firstName) => FirstName = firstName;
        public void SetLastName(string lastName) => LastName = lastName;
        public void SetAge(int age) => Age = age;
        public void SetDegree(string degree) => Degree = degree;

    }
}