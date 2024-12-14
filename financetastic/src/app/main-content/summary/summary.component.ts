import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from  '@angular/material/chips' ;
import { DatepickerComponent } from "../../shared/components/datepicker/datepicker.component";


@Component({
  selector: 'app-summary',
  imports: [MatIconModule, MatChipsModule, DatepickerComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
