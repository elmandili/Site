import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  colOne: string;
  colTwo: string;
  colThree: string;
  colFour: string;
  colFive: string;
  colSix: string;
  colSeven: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', colOne: '', colTwo: '', colThree: '', colFour: '', colFive: '', colSix: '', colSeven:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', colOne: '', colTwo: '', colThree: '', colFour: '', colFive: '', colSix: '', colSeven:''},
  
];


@Component({
  selector: 'app-table-five',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-five.component.html',
  styleUrl: './table-five.component.css'
})
export class TableFiveComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'colOne', 'colTwo', 'colThree', 'colFour', 'colFive', 'colSix', 'colSeven'];
  dataSource = ELEMENT_DATA;
}
