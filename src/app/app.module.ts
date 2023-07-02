import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { DataInputComponent } from './data-input/data-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NameInputComponent,
        DataInputComponent,
        EmailInputComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
