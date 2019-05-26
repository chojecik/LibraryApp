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
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { RegistrationFormComponent } from './components/account/registration-form/registration-form.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { UserService } from './services/user.service';
import { ConfigService } from './utils/config.service';
import { BookComponent } from './components/book/book.component';
import { BooksService } from './components/services/books.service';
import { BooksBackendService } from './services/books-backend.service';
import { HttpBookBackendService } from './services/http-books-backend.service';
//import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        RegistrationFormComponent,
        LoginFormComponent,
        EmailValidator,
        PasswordValidator,
        BookComponent
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
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },  
            { path: 'register', component: RegistrationFormComponent },
            { path: 'login', component: LoginFormComponent },
            { path: 'book', component: BookComponent },
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
