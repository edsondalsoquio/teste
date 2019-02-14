import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

    people: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.people = this.api.getPeople();
    }

    openDetails(person) {
        let split = person.url.split('/');
        let personId = split[split.length-2];
        this.router.navigateByUrl(`/tabs/people/${personId}`);
    }

}
