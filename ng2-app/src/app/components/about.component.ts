import { FilterPipe } from './../pipes/pipe.filter';
import { Component} from "@angular/core";


@Component({
    selector:'ts-about',
    templateUrl: './about.component.html'
})

export class AboutComponent{

    items = ["mayur","Mau","UTibM"];
    
}