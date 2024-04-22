import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatButtonModule} from"@angular/material/button"
import {MatListModule} from "@angular/material/list"
import { MatListItem } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";

import exp from "constants";


@NgModule({
    exports: [
        MatInputModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatTableModule
    ]
})

export class MaterialModule{
    
}