import { Injectable } from '@angular/core';
import { Role } from '../model/Role';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: Role[]): void {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem("roles") || '{}');
  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem("access_token", accessToken);
  }

  public getAccessToken(): any {
    return localStorage.getItem("access_token");
  }

  public setRefreshToken(refreshToken: string): void {
    localStorage.setItem("refresh_token", refreshToken);
  }

  public getRefreshToken(): any {
    return localStorage.getItem("refresh_token");
  }

  public clear() {
    localStorage.clear();
  }

  public roleMatch(allowedRoles: string[] | any[]): boolean {
    let isMatch = false;
    const userRoles: any = this.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].authority === allowedRoles[j].name) {
            isMatch = true;
            return isMatch;
          } 
        }
      }
    }

    return isMatch;
  }

  // public loggedIn() {
  //   return this.getRoles() && this.getToken();
  // }
}
