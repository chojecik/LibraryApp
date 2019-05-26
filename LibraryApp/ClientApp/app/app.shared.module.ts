import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { EmailValidator } from './directives/email.validator.directive';
import { PasswordValidator } from './directives/password.validator.directive';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationFormComponent } from './components/account/registration-form/registration-form.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { UserService } from './services/user.service';
import { ConfigService } from './utils/config.service';
import { BookComponent } from './components/books/book/book.component';
import { BooksService } from './components/services/books.service';
import { BooksBackendService } from './services/books-backend.service';
import { HttpBookBackendService } from './services/http-books-backend.service';
import {BookDetailsComponent } from './components/books/book-details/book-details.component'
//import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        RegistrationFormComponent,
        LoginFormComponent,
        EmailValidator,
        PasswordValidator,
        BookComponent,
        BookDetailsComponent
        //SpinnerComponent
    ],
    imports: [
        //SpinnerComponent,
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'register', component: RegistrationFormComponent },
            { path: 'login', component: LoginFormComponent },
            { path: 'book', component: BookComponent },
            { path: 'books/book-add', component: BookDetailsComponent },
            { path: 'books/book-update/:id', component: BookDetailsComponent },
            { path: 'books/book-details/:id', component: BookDetailsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        UserService,
        ConfigService,
        BooksService,
        { provide: BooksBackendService, useClass: HttpBookBackendService }
    ]
})
export class AppModuleShared {
}
