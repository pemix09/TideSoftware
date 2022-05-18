import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../Models/student";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private students: Student[];
  private endPointName: string = 'Student';
  private Http: HttpClient;
  private BaseUrl: string;
  public status: string;

  //in constructor we get All students
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.Http = http;
    this.BaseUrl = baseUrl;


  }

  public GetAllStudents() : Student[]
  {
    this.Http.get<Student[]>(this.BaseUrl + this.endPointName+'/GetAll').subscribe(result => {
      this.students = result;
    }, error => console.error(error));

    return this.students;
  }
  public DeleteStudent(StudentId: string)
  {
    this.Http.delete(this.BaseUrl+ this.endPointName+'/Delete/'+StudentId)
      .subscribe(() => this.status = 'Student Deleted successfully!');
  }

  public CreateStudent(student: Student)
  {
    this.Http.post(this.BaseUrl+this.endPointName+'/Create/', student)
      .subscribe(() => this.status = 'Student created successfully');
  }

  public UpdateStudent(student: Student)
  {
    this.Http.put(this.BaseUrl+this.endPointName+'/Update/',student)
      .subscribe(() => this.status = 'Student Updated successfully');
  }

  public GetStudentById(studentId: number)
  {
    this.Http.get(this.BaseUrl+this.endPointName+'/Get/'+studentId)
      .subscribe(() => this.status = 'Student get successfully');
  }
}
