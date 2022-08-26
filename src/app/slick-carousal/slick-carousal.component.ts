import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slick-carousal',
  templateUrl: './slick-carousal.component.html',
  styleUrls: ['./slick-carousal.component.css']
})
export class SlickCarousalComponent{
  title = 'ng-carousel-demo';

  slides = [
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-2.jpg'},
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-3.jpg'},
    {image: 'assets/images/nature-4.jpg'},
    {image: 'assets/images/nature-1.jpg'},
    {image: 'assets/images/nature-2.jpg'}

  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  addSlide() {
    this.slides.push({ image: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() {}
  ngOnInit(): void {}
}
