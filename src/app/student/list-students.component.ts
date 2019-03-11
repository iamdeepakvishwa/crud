import { Component, OnInit } from '@angular/core';
import { student } from '../models/student.model';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students : student[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'male',
      email: 'mark@example.com',
      phoneNumber : 9598494868,
      dateOfBirth : new Date(11/08/1999),
      dapartment: 'Computer Science',
      isActive: true,
      photoPath : 'assets/images/mark.png',
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'female',
      email: 'mary@example.com',
      phoneNumber: 9698494868,
      dateOfBirth: new Date(12/08/1999),
      dapartment: 'Computer Science',
      isActive: true,
      photoPath: 'assets/images/mary.png',
    },
    {
      id: 3,
      name: 'John',
      gender: 'male',
      email: 'John@example.com',
      phoneNumber: 9798494868,
      dateOfBirth: new Date (13/08/1999),
      dapartment: 'Computer Science',
      isActive: true,
      photoPath: 'assets/images/john.png',
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
