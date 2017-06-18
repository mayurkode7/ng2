import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

    /**
     * getEmployees will return set of employees
     * 
     */
    

    constructor(private _http: Http){}
    
    public getEmployees() : any{

        return this._http.get('http://mayurkode7.github.io/api/user.json')
                    .map((respone: Response) => respone.json())
                    .catch(this.empError);
    
    }

    public empError(error : Response){
        console.error(error);
        return Observable.throw('Service is not available');

    }
}