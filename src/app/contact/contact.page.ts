import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  data: any;

  constructor(private router: Router, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.data = JSON.parse(params.special);
      });
   }

  ngOnInit() {
    console.log(this.data);
  }



}
