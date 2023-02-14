// app.component.ts

import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id_get: number = 0;
  userId_post: number = 0;
  title_post: string = "";

  constructor(private httpService: HttpService) { }

  getAlbums(){
    this.httpService.getAlbums().subscribe(albums => {
      console.log(albums);
    })
  }

  getOneAlbum(id: number){
    this.httpService.getOneAlbum(id).subscribe(album => {
      console.log(album)
    });
  }

  postAlbum(userId: number, title: string){
    const al: Albums = ({
      userId: userId,
      id: null,
      title: title
    });

    this.httpService.postAlbum(al).subscribe(album => {
      console.log(album)
    });
  }
}
export interface Albums {
  userId?: number;
  id?: number | null;
  title?: string;
}