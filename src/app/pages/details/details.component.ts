import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((response) => console.log(response));
  }
}
