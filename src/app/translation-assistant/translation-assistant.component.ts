import { Component } from '@angular/core';
import { APIKeyComponent } from '../api-key/api-key.component';

@Component({
  selector: 'app-translation-assistant',
  imports: [APIKeyComponent],
  templateUrl: './translation-assistant.component.html',
  styleUrl: './translation-assistant.component.css',
})
export class TranslationAssistantComponent {}
