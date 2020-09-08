import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from 'src/app/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private data: LoginService, private fb: FormBuilder, private router: Router) {
  }

  validateForm!: FormGroup;
  isLoggedIn = false;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.data.changeLoginStatus(true);
    this.router.navigate(['welcome']);
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

  }

}
