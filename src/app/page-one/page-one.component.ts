import { Component } from '@angular/core';
import { TableOneComponent } from '../tables/table-one/table-one.component';
import { TableTwoComponent } from '../tables/table-two/table-two.component';
import { TableThreeComponent } from '../tables/table-three/table-three.component';

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [TableOneComponent, TableTwoComponent, TableThreeComponent],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.css'
})
export class PageOneComponent {

}


let variableTwo: string;
let hal3ar: string;
let haaal3ar: string;
