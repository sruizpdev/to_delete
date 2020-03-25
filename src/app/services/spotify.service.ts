import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDrCyydebdxuwLPZbDz7yvE2JA5QVYSrsWO57CFhAB_aJppmUXZwSZ6MfDMTsz4QU8aOdCrBTlxOX_G_IU"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {
      headers
    }).pipe(map(data =>
      data['albums'].items
    ));
  }
  getArtista(termino:string){
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDrCyydebdxuwLPZbDz7yvE2JA5QVYSrsWO57CFhAB_aJppmUXZwSZ6MfDMTsz4QU8aOdCrBTlxOX_G_IU"
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {
      headers
    }).pipe(map(data =>
      data['artists'].items
    ));
  }
}
