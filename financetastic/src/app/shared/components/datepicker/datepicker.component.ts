import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-datepicker',
  imports: [MatIconModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent implements OnInit {
  currentDate: Date = new Date();
  displayMonth: string = '';

  ngOnInit(): void {
    this.updateDisplayMonth();
  }

  changeMonth(direction: number): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + direction);
    this.updateDisplayMonth();
  }

  private updateDisplayMonth(): void {
    const months = [
      'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 
      'Oktober', 'November', 'Dezember'
    ];

    const currentMonth = this.currentDate.getMonth();
    const currentYear = new Date().getFullYear();  // Aktuelles Jahr
    const requestedYear = this.currentDate.getFullYear(); // Jahr des angezeigten Monats

    // Wenn der angeforderte Monat im aktuellen Jahr liegt, zeige nur den Monat an
    if (requestedYear === currentYear) {
      this.displayMonth = months[currentMonth]; // Nur den Monat anzeigen
    } else {
      this.displayMonth = `${months[currentMonth]} ${requestedYear}`; // Monat + Jahr anzeigen
    }
  }
}

