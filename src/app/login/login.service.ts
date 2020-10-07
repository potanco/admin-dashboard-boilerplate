import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoginService {

  private isLoggedInSource = new BehaviorSubject(false);
  isLoggedIn = this.isLoggedInSource.asObservable();

  changeLoginStatus(newStatus: boolean): void {
    this.isLoggedInSource.next(newStatus);
  }
}
