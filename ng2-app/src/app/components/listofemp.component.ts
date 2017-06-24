import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ts-list-of-emp',
    templateUrl: './listofemp.component.html'
})
export class ListOfEmployeeComponent implements OnInit {

    public employees: any[];
    public errMsg: string;
    constructor(private _empservice: EmployeeService) { }

    ngOnInit() { 

        this._empservice.getEmployees().subscribe( (response) => this.employees = response,
                                                  (errResponse) => this.errMsg = errResponse ); 
    }
}