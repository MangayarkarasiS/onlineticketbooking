import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 





/*{path:'', redirectTo:'bus-list',pathMatch:'full'},
  {path:'bus-list',component:BusListComponent},
  {path:'bus-route-list/:bid',component:BusRouteListComponent}*/