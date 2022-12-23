import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  errorMessage: string = '';
  isError: boolean = false;

  userForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private userService: UserService,
              private userAuthService: UserAuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  login():void {
    if(this.userForm.valid) {
      this.user = this.userForm.value;

      this.userService.login(this.user).subscribe({
        next: (data: any) => {
          console.log(data);
          this.userAuthService.setAccessToken(data.access_token);
          this.userAuthService.setRefreshToken(data.refresh_token);
          this.userAuthService.setRoles(data.roles);

          this.router.navigate(['/onboarding']);
        },
        error: (e) => console.log(e),
        complete: () => console.log("complete")
      });
    } else {
      this.isError = true;
      this.errorMessage = "Fill all fields";
    }
  }

  hideAlert(): void {
    this.isError = false;
  }

}
