import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Credentials } from '../../../models/credentials.interface';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
/** login-form component*/
export class LoginFormComponent implements OnInit, OnDestroy {

    private subscription: Subscription = new Subscription();

    brandNew: boolean = false;
    errors: string = '';
    isRequesting: boolean = false;
    submitted: boolean = false;
    credentials: Credentials = { email: '', password: '' };

    constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {}
   
    ngOnInit(): void {
        this.subscription = this.activatedRoute.queryParams.subscribe(
            (param: any) => {
                this.brandNew = param['brandNew'];
                this.credentials.email = param['email'];
            });
    }
  
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    login({ value, valid }: { value: Credentials, valid: boolean }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(() => this.isRequesting = false)
                .subscribe(
                    result => {
                        if (result) {
                            this.router.navigate(['/book']);
                        }
                    },
                    error => this.errors = error);
        }
    }
}