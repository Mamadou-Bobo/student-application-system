import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcademicQualification } from '../model/AcademicQualification';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/v1";

  headers = new HttpHeaders(
    {
      'No-Auth': 'True'
    }
  );

  formData = new FormData();

  constructor(private httpClient: HttpClient) { }

  public login(user: User) {
    this.formData.append("username",user.username);
    this.formData.append("password",user.password);
    return this.httpClient.post(this.baseUrl + "/login", this.formData);
  }

  public register(user: User): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "/user/add", user);
  }

  public addAcademicQualification(academicQualification: AcademicQualification): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "/application/add", academicQualification);
  }
}
