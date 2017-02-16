import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { PrettyJsonModule, PrettyJsonPipe, SafeJsonPipe } from 'angular2-prettyjson';

import { AppComponent } from './app.component';
import { FirebasePlayComponent } from './firebase-play/firebase-play.component';
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
    AppComponent,
    FirebasePlayComponent
  ],
  imports: [
    PrettyJsonModule,
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config, authConfig),
    HttpModule
  ],
  providers: [UserService, { provide: PrettyJsonPipe, useClass: SafeJsonPipe }],
  bootstrap: [AppComponent]
})
export class AppModule { }
