import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-account-card',
  imports: [MatIconModule],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss',
})
export class AccountCardComponent {

  @Input() accountName: string = '';
  @Input() accountType: string = '';
  @Input() balance: string = '';

}
