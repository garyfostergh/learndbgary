import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'firebase-play',
    templateUrl: './firebase-play.component.html',
    styleUrls: ['./firebase-play.component.css']
})
export class FirebasePlayComponent implements OnInit {
    allData;
    selectData;

    constructor(private af: AngularFire) { 
        this.af.database.object("/").remove();        
    }

    ngOnInit() {
        this.af.database.list("/").subscribe(data => this.allData = data);
    }

    async test1() {

    }

    async test2() {

    }

    async test3() {

    }

    async test4() {

    }

    async test5() {

    }
}
