import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private readonly http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCD6U9-qYPKehFEgp0y9oWiHQw-6t__RQQHFfEBZ_Qe2Rcw51dtMWwovwsmzs-iaVVGmP3pAhM2NqoY78Y'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=es&limit=50').pipe(map(data => data["albums"].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(map(data => data["artists"].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTrack(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(map(data => data["tracks"]));
  }
}
