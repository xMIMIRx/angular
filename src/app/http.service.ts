// http.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums } from './app.component';
import { Observable } from 'rxjs';


@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    // Pobierz wszystkie albumy
    getAlbums(): Observable<Array<Albums>>{
        return this.http.get<Array<Albums>>("https://jsonplaceholder.typicode.com/albums");
    }

    // Pobierz JEDNAEGO wybranego albumu
    getOneAlbum(id: number): Observable<Albums>{
        return this.http.get<Albums>("https://jsonplaceholder.typicode.com/albums/" + id);
    }

    // Dodawanie albumu
    postAlbum(album: Albums): Observable<Albums>{
        return this.http.post<Albums>("https://jsonplaceholder.typicode.com/albums/", album);
    }
}