import {Component, Inject, OnInit} from '@angular/core';
import {Student} from "../../Models/student";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {



  ngOnInit() {
  }

}
