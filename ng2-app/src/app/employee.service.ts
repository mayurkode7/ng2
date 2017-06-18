import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    /**
     * getEmployees will return set of employees
     * 
     */
    

    constructor(private _http: Http){

    }
    
    public getEmployees() : any{

        return this._http.get('http://mayurkode7.github.io/api/user.json')
                    .map((respone: Response) => respone.json());
    
    }
}