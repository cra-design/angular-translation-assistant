import {Routes} from '@angular/router';
import {ContentAssistantComponent} from './content-assistant/content-assistant.component';
import {PageAssistantComponent} from './page-assistant/page-assistant.component';
import {ImageAssistantComponent} from './image-assistant/image-assistant.component';
import {AboutUsComponent} from './about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentAssistantComponent,
    title: 'Content assistant',
  },
  {
    path: 'page-assistant',
    component: PageAssistantComponent,
    title: 'Page assistant',
  },
  {
    path: 'image-assistant',
    component: ImageAssistantComponent,
    title: 'Image assistant',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'About us',
  },
];
export default routes;
