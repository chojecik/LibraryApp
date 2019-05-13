/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RegistrationFormComponent } from './registration-form.component';

let component: RegistrationFormComponent;
let fixture: ComponentFixture<RegistrationFormComponent>;

describe('registration-form component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RegistrationFormComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RegistrationFormComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});