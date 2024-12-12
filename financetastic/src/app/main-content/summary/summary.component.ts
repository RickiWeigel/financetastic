import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from  '@angular/material/chips' ;


@Component({
  selector: 'app-summary',
  imports: [MatIconModule,MatChipsModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
