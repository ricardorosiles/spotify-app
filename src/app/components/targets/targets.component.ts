import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styles: []
})
export class TargetsComponent {
  @Input() items: any[] = [];

  constructor(private readonly router: Router) { }

  getArtist(item: any) {
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id
    }
    this.router.navigate(['/artist', artistId]);
  }


}
