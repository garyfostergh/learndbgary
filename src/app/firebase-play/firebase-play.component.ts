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
        const root = this.af.database.object("/");
        await root.set(
            {
                "items": {
                    "1002001": {
                        "description": "MtDew",
                        "manpartno": "MtDew",
                        "onHand": 40
                    },
                    "1002002": {
                        "description": "Regular Pepsi",
                        "manpartno": "Pepsi",
                        "onHand": 44
                    },
                    "1002003": {
                        "description": "Diet Pepsi",
                        "manpartno": "PepsiDiet",
                        "onHand": 100
                    },
                    "1002004": {
                        "description": "Lemon Pepsi",
                        "manpartno": "PepsiLemon",
                        "onHand": 3
                    },
                    "1002005": {
                        "description": "Sprite",
                        "manpartno": "Sprite",
                        "onHand": 20
                    }
                }
            }
        );

        this.af.database.object("items/1002001")
            .subscribe(item => this.selectData = item);
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
