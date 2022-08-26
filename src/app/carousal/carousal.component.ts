import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;
 
  slidesChangeMessage = '';
 
  slides = [
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-2.jpg'},
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-3.jpg'},
    {image: 'assets/images/nature-4.jpg'},
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-2.jpg'},
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-2.jpg'},
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-3.jpg'},
    {image: 'assets/images/nature-4.jpg'},
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-2.jpg'}

  ];
 
  onSlideRangeChange(indexes: number[]|void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
