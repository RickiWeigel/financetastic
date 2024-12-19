import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from  '@angular/material/chips' ;
import { DatepickerComponent } from "../../shared/components/datepicker/datepicker.component";
import {MatCardModule} from '@angular/material/card';
import { AccountCardComponent } from "./dashboard-cards/account-card/account-card.component";


@Component({
  selector: 'app-summary',
  imports: [MatIconModule, MatChipsModule, DatepickerComponent, MatCardModule, AccountCardComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
