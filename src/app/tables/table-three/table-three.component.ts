import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

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
  {position: '个数', name: '人工录入', weight: '本系统有默人值', symbol: '不惨改接默认值', newCol: '', newColTwo:'', newColThree:''},
  {position: '重量', name: '', weight: '', symbol: '', newCol: '', newColTwo:'', newColThree:''},
 
];


@Component({
  selector: 'app-table-three',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-three.component.html',
  styleUrl: './table-three.component.css'
})
export class TableThreeComponent {
  displayedColumnsThree: string[] = ['position', 'name', 'weight', 'symbol', 'newCol', 'newColTwo', 'newColThree'];
  dataSourceThree = ELEMENT_DATA;
}
