import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserAuthService } from "../../services/user-auth.service";
import { UserService } from "../../services/user.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private userAuthService: UserAuthService,
                private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.userAuthService.getAccessToken() !== null) {
        const role = route.data["roles"] as Array<String>;
   
        if(role) {
          const match = this.userAuthService.roleMatch(role);
          if(match) {
            return true;
          } else {
            this.router.navigate(['forbidden']);
            return false;
          }
        } 
      }
  
      this.router.navigate(['login']);
      return false;
    }
    
  }