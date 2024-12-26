import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-account-card',
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss',
})
export class AccountCardComponent {

  accountName: string = 'Girokonto';
  accountType: string = 'Allgemein';
  balance: string = '1.500';
}
