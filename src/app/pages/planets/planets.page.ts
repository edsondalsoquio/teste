import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

    planets: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.planets = this.api.getPlanets();
    }

    openDetails(planet) {
        let split = planet.url.split('/');
        let planetId = split[split.length-2];
        this.router.navigateByUrl(`/tabs/planets/${planetId}`);
    }

}
