import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs"

@Injectable()
export class DataService{

    private isLoggedInSource = new BehaviorSubject(false); 
    isLoggedIn=this.isLoggedInSource.asObservable()

    changeLoginStatus(newStatus){
        this.isLoggedInSource.next(newStatus);
    }
}
