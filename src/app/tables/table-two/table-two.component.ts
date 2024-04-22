import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElementTwo {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  newCol: string;
  newColTwo: string;
  newColThree: string;
}

const ELEMENT_DATA_TWO: PeriodicElementTwo[] = [
  {position: '系统铁水量最大安全', name: '人工输入', weight: '本系统提供默认值', symbol: '不修改则接默认自产', newCol: '', newColTwo: '', newColThree:''},
  {position: '最优系统铁水量', name: '人工输入', weight: '本系统提供默认值', symbol: '不修改则接默认自产', newCol: '', newColTwo: '', newColThree:''},
  {position: '系统铁水量最小安全', name: '人工输入', weight: '本系统提供默认值', symbol: '不修改则接默认自产', newCol: '', newColTwo: '', newColThree:''},
  
];


@Component({
  selector: 'app-table-two',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-two.component.html',
  styleUrl: './table-two.component.css'
})
export class TableTwoComponent {
  displayedColumnsTwo: string[] = ['position', 'name', 'weight', 'symbol', 'newCol', 'newColTwo', 'newColThree'];
  dataSourceTwo = ELEMENT_DATA_TWO;
}
