import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBw_10zlVo-SghHiEchGhK2FDAy4-MqaljeXe0yIAYa4CtFde3T11HWRa33qYZq01R24ARLAn_KljTrX4'
    });

    this.http
      .get("https://api.spotify.com/v1/browse/new-releases", {headers})
      .subscribe(data => {
        console.log(data);
      });
  }
}
