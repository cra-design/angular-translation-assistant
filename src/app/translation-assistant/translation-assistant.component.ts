import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiKeyService } from '../services/api-key.service';
import { RouterModule } from '@angular/router';
import { ApiKeyComponent } from '../api-key/api-key.component';
import { FileParseService } from '../services/file-parse.service';

@Component({
  selector: 'app-translation-assistant',
  imports: [
    CommonModule, // *ngIf / <ng-template>
    RouterModule,
    ApiKeyComponent,
  ],
  templateUrl: './translation-assistant.component.html',
  styleUrls: ['./translation-assistant.component.css'],
})
export class TranslationAssistantComponent implements OnInit {
  apiKey: string | null = null;
  selectedFile: File | null = null;
  previewText = '';
  previewVisible = false;
  showSecondUpload = false;
  sourceError = '';

  constructor(
    private apiKeyService: ApiKeyService,
    private router: Router,
    private parseSrv: FileParseService
  ) {}

  onClear(): void {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([this.router.url]));
  }

  ngOnInit() {
    this.apiKey = this.apiKeyService.getKey();
    if (!this.apiKey) {
      this.router.navigate(['/api-key'], { replaceUrl: true });
    }
  }

  onFileSelected(event: Event) {
    this.previewText = '';
    this.showSecondUpload = false;
    this.sourceError = '';
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  async previewSource() {
    if (!this.selectedFile) {
      this.sourceError = 'Please select a file first.';
      return;
    }

    const buf = await this.selectedFile.arrayBuffer();
    const ext = this.selectedFile.name.split('.').pop()?.toLowerCase();

    try {
      if (ext === 'docx') {
        this.previewText = await this.parseSrv.extractDocxParagraphs(buf);
      } else if (ext === 'pptx') {
        this.previewText = await this.parseSrv.extractPptxText(buf);
      } else {
        this.sourceError = 'Only .docx or .pptx files are supported.';
      }
      this.showSecondUpload = true;
    } catch (e) {
      console.error(e);
      this.sourceError = 'Failed to extract text for preview.';
    }
  }

  copyAll(event: MouseEvent) {
    event.stopPropagation();

    const textToCopy = this.previewText.trim();
    if (!textToCopy) {
      alert('There is no text to copy!');
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).catch((err) => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy text.');
      });
    } else {
      const textarea = document.createElement('textarea');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback: Unable to copy', err);
        alert('Failed to copy text.');
      }
      document.body.removeChild(textarea);
    }
  }
}
