import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import { AppComponent } from './app.component';
var config = {
  apiKey: "AIzaSyAMLD1D6GQQ3gy9_hcwGa9UUkkAYPSzFl8",
  authDomain: "learndb-tolga.firebaseapp.com",
  databaseURL: "https://learndb-tolga.firebaseio.com",
  storageBucket: "learndb-tolga.appspot.com",
  messagingSenderId: "692251656873"
};

const authConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config, authConfig),
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
