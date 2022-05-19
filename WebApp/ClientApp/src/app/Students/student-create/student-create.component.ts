import { Component, OnInit } from '@angular/core';
import {Student} from "../../Models/student";
import {HttpServiceService} from "../../Services/http-service.service";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {

  public newStudent: Student = new Student();

  constructor(private httpService: HttpServiceService) { }

  public CreateStudent():void
  {
    this.httpService.CreateStudent(this.newStudent);
  }

}
