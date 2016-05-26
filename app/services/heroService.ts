import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from './hero.model';
import 'rxjs/Rx';

@Injectable()
export class HeroService {
    private BASE_URL: string = 'https://hero-merge.herokuapp.com/';
    private API_KEY: string;
    private API: string;

    constructor(private http: Http) {
        this.API = this.BASE_URL + this.API_KEY;
    }

    getApiKey() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                `${this.BASE_URL}getApiKey/`,
                { headers }
            )
            .map(
                res => {
                    this.API_KEY = res.json().apiKey;
                    this.API = this.BASE_URL + this.API_KEY;
                    return this.API_KEY;
                }
            );
    }

    listHeroes() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                `${this.API}/heroes/`,
                { headers }
            )
            .map(
                res => res.json()
            );
    }

    getHero(id) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                `${this.API}/heroes/${id}/`,
                { headers }
            )
            .map(
                res => res.json()
            );
    }

    createHero(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                `${this.API}/heroes/`,
                JSON.stringify(hero),
                { headers }
            )
            .map(
                res => res.json()
            );
    }

    updateHero(id, change) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .patch(
                `${this.API}/heroes/${id}/`,
                JSON.stringify({ change }),
                { headers }
            )
            .map(
                res => res.json()
            );
    }
}
