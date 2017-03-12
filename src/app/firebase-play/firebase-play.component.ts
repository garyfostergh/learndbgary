import { SafeUrl } from './../../../node_modules/@angular/platform-browser/src/security/dom_sanitization_service.d';
import { SafeJsonPipe } from 'angular2-prettyjson';
import { UserService } from './../shared/user.service';
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
    
    topNode: string   = "users";
    category   = {data: '', key: ''};
    subjectData: string;
    subjectKey: string;

    contentData;

    constructor(private af: AngularFire, private userService: UserService) {
        this.af.database.object("/").remove();
    }

    ngOnInit() {
        this.af.database.list("/").subscribe(data => this.allData = data);
    }

    async remove() {
        this.af.database.object("/").remove();
    }

    async test1() {

        const root = this.af.database.object("/");
        await root.set(      

                {
    "users": {
       "1001": {
            "name": "gary",
            "categories": {
                "1001": "sports",
                "1002": "car",
                "1003": "school"

            }
        }
    }
}
            );
     
        this.af.database.object("gary/1001/")
            .do(item => console.log("incomingdata", item))
            .subscribe(item => this.selectData = item);

        // this.af.database.object("gary/4")
        //     .do(item => console.log("incomingdata", item))
        //     .subscribe(item => this.selectData = item);
    }

    async createCategory() {    

        const categories = this.af.database.list(`user-categories/${this.userService.user.uid}`);        
        this.category.data = "recipes";   


        const catpush = categories.push(`${this.category.data}`);
        this.category.key = catpush.key;
        await catpush;

        this.af.database.object(`${this.userService.user.uid}`)
           .subscribe(item => this.selectData = item);        
    }

        async subject() {      

        const subjects = this.af.database.list(`user-category-subjects/${this.userService.user.uid}/${this.category.key}`);
        this.subjectData = "spaghetti";
        await subjects.push(`${this.subjectData}`);
        this.subjectData = "meatloaf";
        await subjects.push(`${this.subjectData}`);
        this.subjectData = "lasagna";
        const subjectpush = subjects.push(`${this.subjectData}`); 
        this.subjectKey = subjectpush.key;
        await subjectpush;

       

        this.af.database.object(`${this.userService.user.uid}`)
           .subscribe(item => this.selectData = item);      

    }

    async data() {


      const contents = this.af.database.object(`user-category-subject-data/${this.userService.user.uid}/${this.category.key}/${this.subjectKey}`);
      this.contentData = "noodles cheese sauce";
      await contents.set(`${this.contentData}`);
      

        this.af.database.object(`user-category-subject-data/${this.userService.user.uid}/${this.category.key}/${this.subjectKey}`)
           .subscribe(item => this.selectData = item);

      
      

    //   const contents = this.af.database.list(`${this.userService.user.uid}/${this.categoryData}/${this.subjectData}`);
    //   this.contentData = "noodles";
    //   await contents.push(`${this.contentData}`);
    //   this.contentData = "sauce";
    //   await contents.push(`${this.contentData}`);
    //   this.contentData = "cheese";
    //   await contents.push(`${this.contentData}`);





     
     

        
    }

    async test5() {
        const root = this.af.database.object("/");
        await root.set(
            {}
        );

        this.af.database.object("")
            .subscribe(item => this.selectData = item);

    }
}
