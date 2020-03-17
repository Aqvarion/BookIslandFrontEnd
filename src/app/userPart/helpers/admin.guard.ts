import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import decode from 'jwt-decode';
import {TokenStorageService} from '../service/token-storage.service';
import {AuthGuard} from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private tokenStorageService: TokenStorageService, private authGuard: AuthGuard) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this.authGuard.canActivate(route, state)) {
      const expectedRole = route.data.expectedRole;
      const token = this.tokenStorageService.getToken();
      const decodeToken  = decode(token);

      if (decodeToken.sub !== expectedRole) {
        alert('You are not allowed to access this page.');
        this.router.navigate(['/catalog']);
        return false;
      }
      return true;
    }
  }
}
