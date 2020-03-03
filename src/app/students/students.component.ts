import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'; //import

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentData: any = []; //Create var of type any, set to empty array

  constructor(private service: DataService) { } //add arg

  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
      (data) => {
        this.studentData = data.students; //Whatever comes back from the web service is put into studentData array
        console.log(this.studentData);
      }
    );
  }
}
