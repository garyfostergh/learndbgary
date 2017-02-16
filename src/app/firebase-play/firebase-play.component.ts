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
                "users": {
                    "1001": {
                        "groups": {
                            "1001": true,
                            "1002": true,
                            "1005": true
                        }
                    },
                    "1002": {
                        "groups": {
                            "1001": true,
                            "1009": true
                        }
                    },
                    "1005": {
                        "groups": {
                            "1001": true,
                            "1004": true,
                            "1011": true,
                            "1014": true,
                            "1021": true,
                            "1024": true,
                            "1007": true
                        }
                    }
                }
            }
        );

        const groups = this.af.database.list("users/1001/groups");    
        groups
            .do(console.log)    
            .subscribe(groups => this.selectData = groups);
    }


    async test2() {
        const root = this.af.database.object("/");
        await root.set(
{
    "transactions": {
        "1001": {
            "lines": {
                "1001": {
                    "item": {
                        "sku": 1002001,
                        "description": "MtDew",
                        "planogram": {
                            "name": "Drink-a-gon",
                            "location": "backroom",
                            "seqnum": 14
                        }
                    },
                    "discounts": {
                        "1": {
                            "amount": 1,
                            "type": "employee"
                        },
                        "2": {
                            "amount": 0.5,
                            "type": "Buy one get one"
                        }
                    }
                }
            }
        }
    }
}
        );

        await root.update(
{
                "transactions/1001/lines/1001/item/sku": "1002002",
                "transactions/1001/lines/1001/item/description": "MtWho",
}
        );

        const groups = this.af.database.object("transactions/1001/lines/1001/item/sku");    
        groups
            .do(data => console.log("Update received for selectData", data))    
            .subscribe(groups => this.selectData = groups,
            err => console.log("Error Retrieving selectData", err));
    }
}
