import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiKeyService } from '../services/api-key.service';

@Component({
  selector: 'app-api-key',
  standalone: true,
  imports: [
    CommonModule, // *ngIf
    FormsModule, // ngModel
  ],
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.css'],
})
export class ApiKeyComponent implements OnInit {
  key = '';
  showError = false;

  constructor(
    private apiKeyService: ApiKeyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // 如果从 URL 带 ?key=xxx 进来，自动存并跳转
    this.route.queryParamMap.subscribe((params) => {
      const qp = params.get('key');
      if (qp) {
        this.saveAndGo(qp);
      }
    });

    // 如果本地已经有 key，直接跳过
    if (this.apiKeyService.hasKey()) {
      this.router.navigate(['/translation-assistant'], { replaceUrl: true });
    }
  }

  onSubmit() {
    if (!this.key.trim()) {
      this.showError = true;
      return;
    }
    this.saveAndGo(this.key.trim());
  }

  private saveAndGo(key: string) {
    this.apiKeyService.setKey(key);
    this.router.navigate(['/translation-assistant'], { replaceUrl: true });
  }
}
