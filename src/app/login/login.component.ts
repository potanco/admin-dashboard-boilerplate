import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from 'src/app/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
  }

  validateForm: FormGroup;
  isLoggedIn = false;

  submitForm(): void {
    // check login inputs
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // login form input valid
    if (this.validateForm.valid){
      this.router.navigate(['welcome']);
      this.loginService.changeLoginStatus(true);
    }

  }

  ngOnInit(): void {
    // define validation criteria
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      remember: [true]
    });
  }
}
