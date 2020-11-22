import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css']
})
export class EmpolyeeComponent implements OnInit {

  constructor( public service: EmployeeService ) { }

  departments = [
    { id: 1, value: 'Department 1' },
    { id: 2, value: 'Department 2' },
    { id: 3, value: 'Department 3' },
  ];

  ngOnInit(): void {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
