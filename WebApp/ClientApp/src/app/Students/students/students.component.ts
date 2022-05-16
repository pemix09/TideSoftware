import {Component, Inject, OnInit} from '@angular/core';
import {Student} from "../../Models/student";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[];
  private endPointName: string = 'Student';
  private Http: HttpClient;
  private BaseUrl: string;
  public status: string;

  //in constructor we get All students
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.Http = http;
    this.BaseUrl = baseUrl;

    http.get<Student[]>(baseUrl + this.endPointName+'/GetAll').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }

  public DeleteStudent(StudentId: string)
  {
    this.Http.delete(this.BaseUrl+ this.endPointName+'/Delete/'+StudentId)
      .subscribe(() => this.status = 'Student Deleted successfully!');
  }

  ngOnInit() {
  }

}
