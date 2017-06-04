import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'ts-add-employee',
    templateUrl: './addemployee.component.html'
})

export class AddEmployeeComponent implements OnInit{
    
    addEmployeeForm : FormGroup;
    empnamecontrol;


    constructor(private _formbuilder : FormBuilder){
         
         this.buildAddEmployeeForm();        
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
       

    }

    buildAddEmployeeForm(){

        this.addEmployeeForm = this._formbuilder.group({
            empname : this._formbuilder.control(null,[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
            email: this._formbuilder.control(null),
            graduation : this._formbuilder.control(null),
            other: this._formbuilder.control(null),
            gender : this._formbuilder.control(null),
    
            hobbies: this._formbuilder.group({
                gaming : this._formbuilder.control(true),
                swimming: this._formbuilder.control(null),
                music: this._formbuilder.control(null)
            })
        });

        this.empnamecontrol = this.addEmployeeForm.get('empname');

        console.log(this.empnamecontrol);
    }

    onsubmit(){
        console.info(this.addEmployeeForm.value);
    }
    onreset(){
        this.addEmployeeForm.reset();
    }
    
}

