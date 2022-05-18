import { Component, OnInit } from '@angular/core';
import {Student} from "../../Models/student";
import {HttpServiceService} from "../../Services/http-service.service";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  public newStudent: Student;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
  }

}
