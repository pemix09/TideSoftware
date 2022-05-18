import { Component, OnInit } from '@angular/core';
import {Student} from "../../Models/student";
import {HttpServiceService} from "../../Services/http-service.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: Student[];
  columnsToDisplay = ['FirstName', 'LastName', 'Age', 'Degree'];
  expandedElement: EditedStudent | null;



  constructor(private httpService: HttpServiceService)
  {
    this.students = this.httpService.GetAllStudents();
  }

  ngOnInit() {

  }

}
export interface EditedStudent {
  FirstName: string;
  LastName: string;
  Age: number;
  Degree: string;
}
