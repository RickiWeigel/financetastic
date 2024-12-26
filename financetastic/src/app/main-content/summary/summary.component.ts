import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from  '@angular/material/chips' ;
import { DatepickerComponent } from "../../shared/components/datepicker/datepicker.component";
import {MatCardModule} from '@angular/material/card';
import { AccountCardComponent } from "./dashboard-cards/account-card/account-card.component";
import { CashFlowCardComponent } from "./dashboard-cards/cash-flow-card/cash-flow-card.component";


@Component({
  selector: 'app-summary',
  imports: [MatIconModule, MatChipsModule, DatepickerComponent, MatCardModule, AccountCardComponent, CashFlowCardComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
