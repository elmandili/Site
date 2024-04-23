import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../Material.Module';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  {path: 'page-one', component: PageOneComponent},
{path: 'page-two', component: PageTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
