import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardPoster: string = '';
  cardTitle: string = 'Avar the way of water';
  cardRating: string = '4.5';
  cardDetails: string =
    'https://www.google.com/search?q=avatar+the+way+of+water';

  constructor() {}
  ngOnInit() {}
}
