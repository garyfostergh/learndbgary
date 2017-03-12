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
    apiKey: "AIzaSyBAoXi4s33rPOfelSUH_qE5r4Wy1wLLS4U",
    authDomain: "learndb-gary.firebaseapp.com",
    databaseURL: "https://learndb-gary.firebaseio.com",
    storageBucket: "learndb-gary.appspot.com",
    messagingSenderId: "732844936598"
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
