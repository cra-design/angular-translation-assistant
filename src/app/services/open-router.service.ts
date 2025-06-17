// src/app/services/open-router.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiKeyService } from './api-key.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OpenRouterService {
  private url = 'https://openrouter.ai/api/v1/chat/completions';

  constructor(private http: HttpClient, private apiKeyService: ApiKeyService) {}

  getORData(
    model: string,
    messages: any[],
    temperature = 0.0
  ): Observable<any> {
    const key = this.apiKeyService.getKey();
    if (!key) {
      return throwError(() => new Error('No API key'));
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    });
    return this.http
      .post(this.url, { model, messages, temperature }, { headers })
      .pipe(
        catchError((err) => {
          console.error('OpenRouter API error:', err);
          return throwError(() => err);
        })
      );
  }
}
