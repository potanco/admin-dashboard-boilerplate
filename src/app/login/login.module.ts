import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    NgZorroAntdModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class LoginModule {
}
