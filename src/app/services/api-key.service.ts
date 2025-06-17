import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiKeyService {
  private key$ = new BehaviorSubject<string | null>(null);

  constructor() {
    const saved = localStorage.getItem('apiKey');
    this.key$.next(saved);
  }

  setKey(key: string) {
    this.key$.next(key);
    localStorage.setItem('apiKey', key);
  }

  getKey(): string | null {
    return this.key$.value;
  }

  hasKey(): boolean {
    return !!this.key$.value;
  }

  keyChanges() {
    return this.key$.asObservable();
  }
}
