import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenAI Content Assistant';
}
