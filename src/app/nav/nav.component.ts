import { Component } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { TableOneComponent } from '../tables/table-one/table-one.component';
import { TableTwoComponent } from '../tables/table-two/table-two.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MaterialModule, TableOneComponent, PageOneComponent, TableTwoComponent, PageTwoComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
