import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {

    person: any;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.api.getPerson(id).subscribe(res => {
          this.person = res;
      });
  }

}
