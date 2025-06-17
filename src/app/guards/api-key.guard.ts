import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiKeyService } from '../services/api-key.service';

@Injectable({ providedIn: 'root' })
export class ApiKeyGuard implements CanActivate {
  constructor(private apiKey: ApiKeyService, private router: Router) {}

  canActivate(): boolean {
    if (!this.apiKey.hasKey()) {
      this.router.navigate(['/api-key']);
      return false;
    }
    return true;
  }
}
