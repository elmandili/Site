import { Component } from '@angular/core';
import { TableFourComponent } from '../tables/table-four/table-four.component';
import { MatListItem } from '@angular/material/list';
import { MatActionList } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-page-two',
  standalone: true,
  imports: [TableFourComponent, TableFourComponent, MatListItem, MatActionList, MatInputModule],
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.css'
})
export class PageTwoComponent {

}
