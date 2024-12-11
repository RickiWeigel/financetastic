import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadmenuComponent } from "./shared/components/headmenu/headmenu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'financetastic';
}
