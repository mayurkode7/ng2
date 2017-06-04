import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './components/about.component'; 

const appRoutes : Routes = [

    {    
        path :'',
        component : AboutComponent
    }

]

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);