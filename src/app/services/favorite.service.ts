import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteFilms';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {

    constructor(private storage: Storage) { }

    getAllFavoriteFilms() {
        return this.storage.get(STORAGE_KEY);
    }

    isFavorite(filmId) {
        return this.getAllFavoriteFilms().then(result => {
            return result && result.indexOf(filmId) !== -1;
        });
    }

    favoriteFilm(filmId) {
        return this.getAllFavoriteFilms().then(result => {
            if (result) {
                result.push(filmId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [filmId]);
            }
        });
    }

    unfavoriteFilm(filmId) {
        return this.getAllFavoriteFilms().then(result => {
            if (result) {
                var index = result.indexOf(filmId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }

}