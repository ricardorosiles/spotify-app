import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {}
  topTracks: any[] = [];
  loading: boolean;


  constructor(private readonly activatedRoute: ActivatedRoute, private readonly spotify: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtist(id: string) {
    this.loading = true;

    this.spotify.getArtist(id).subscribe(data => {

      this.artist = data;
      this.loading = false

    });


  }

  getTopTracks(id: string) {
    this.spotify.getTopTrack(id).subscribe(data => {
      this.topTracks = data;
    });
  }
}
