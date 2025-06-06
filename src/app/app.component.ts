import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentAssistantComponent} from './content-assistant/content-assistant.component';
import {PageAssistantComponent} from './page-assistant/page-assistant.component';
import {ImageAssistantComponent} from './image-assistant/image-assistant.component';
import {AboutUsComponent} from './about-us/about-us.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, SidebarComponent, ContentAssistantComponent, PageAssistantComponent, ImageAssistantComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ca';
}
