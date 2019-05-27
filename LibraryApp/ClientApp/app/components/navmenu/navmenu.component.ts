import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent /*implements OnInit, OnDestroy*/ {
   
    private userLoggedIn: boolean = false;
    private subscription: Subscription = new Subscription();

    constructor(private _userService: UserService) { }


    //ngOnInit(): void {
    //    this.subscription = this._userService.isLoggedIn().subscribe(
    //        (value: boolean) => { this.userLoggedIn = value }
    //    );
    //}

    //ngOnDestroy(): void {
    //    if (this.subscription) {
    //        this.subscription.unsubscribe();
    //    }
    //}
}
