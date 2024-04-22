import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  newCol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '系统铁水量最大安全', name: '人工输入', weight: '本系统提供默认值', symbol: '不修改则按默认值计算', newCol: ''},
  {position: '最优系统铁水量', name: '人工输入', weight: '本系统提供默认值', symbol: '不修改则按默认值计算', newCol: ''},
  {position: '系统铁水量最小安全', name: '人工输入', weight: '本系统提供默认值', symbol: '不修改则按默认值计算', newCol: ''},
  
];



@Component({
  selector: 'app-table-one',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-one.component.html',
  styleUrl: './table-one.component.css'
})
export class TableOneComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'newCol'];
  dataSource = ELEMENT_DATA;
}
