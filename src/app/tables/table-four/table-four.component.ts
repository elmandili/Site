import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TableOneComponent } from '../table-one/table-one.component';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  newCol: string;
  newColTwo: string;
  newColThree: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', name: 'Hydrogen', weight: '1.0079', symbol: 'H', newCol: '', newColTwo: '', newColThree: ''},
 
  
];

@Component({
  selector: 'app-table-four',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-four.component.html',
  styleUrl: './table-four.component.css'
})
export class TableFourComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'newCol', 'newColTwo', 'newColThree'];
  dataSource = ELEMENT_DATA;
}
