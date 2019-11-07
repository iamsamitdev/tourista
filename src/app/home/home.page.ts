import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user  = {
    name: "Samit Koyom",
    interest: [
      'Ionic','Angular','Youtube','Sport'
    ]
  }

  studentsData: any;

  constructor(
    private router: Router, 
    private dataService: DataService, 
    private storage: Storage,
    private api: ApiService) {

    // set ตัวแปรลง storage
    this.storage.set('name', 'Samit Koyom');

  }

  ngOnInit() {
    console.log(this.storage.get('name'));
    this.storage.remove('name').then(() =>{
     console.log('remove success');
    });

    // ทดสอบเรียกใช้งาน get
    this.api.getList().subscribe(response =>{
        this.studentsData = response;
        console.log(response);
    });

  }

  gotoContact(){
    /*
    let navigate: NavigationExtras = {
      queryParams :{
        special: JSON.stringify(this.user)
      }
    }
    this.router.navigate(['contact'], navigate);
    */

    this.dataService.setData(12, this.user);
    this.router.navigateByUrl('contact/12');

  }

}
