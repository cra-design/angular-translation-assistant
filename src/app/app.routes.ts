import { Routes } from '@angular/router';
import { ApiKeyComponent } from './api-key/api-key.component';
import { ContentAssistantComponent } from './content-assistant/content-assistant.component';
import { PageAssistantComponent } from './page-assistant/page-assistant.component';
import { ImageAssistantComponent } from './image-assistant/image-assistant.component';
import { TranslationAssistantComponent } from './translation-assistant/translation-assistant.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApiKeyGuard } from './guards/api-key.guard';

export const routes: Routes = [
  {
    path: '',
    component: ContentAssistantComponent,
    title: 'Content assistant',
  },

  { path: 'api-key', component: ApiKeyComponent, title: 'Enter API Key' },

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
    path: 'translation-assistant',
    component: TranslationAssistantComponent,
    canActivate: [ApiKeyGuard],
    title: 'Translation assistant',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'About us',
  },
  { path: '', redirectTo: 'api-key', pathMatch: 'full' },
  { path: '**', redirectTo: 'api-key' },
];
export default routes;
