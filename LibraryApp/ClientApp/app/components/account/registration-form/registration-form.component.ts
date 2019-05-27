import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AppUser } from '../../../models/appUser';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})
/** registration-form component*/
export class RegistrationFormComponent implements OnInit{

    errors: string | undefined;
    isRequesting: boolean = false;
    submitted: boolean = false;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() { }

    registerUser({ value, valid }: { value: AppUser, valid: boolean }) {
        debugger;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';

        if (valid) {
            this.userService.register(
                value.email,
                value.password,
                value.firstName,
                value.lastName,
                value.street,
                value.streetNumber,
                value.localNumber,
                value.city,
                value.zipCode)
                .finally(() => this.isRequesting = false)
                .subscribe(
                    (result: any) => {if (result) {
                            this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                        }},
                    errors => this.errors = errors);
        }
    }

}
