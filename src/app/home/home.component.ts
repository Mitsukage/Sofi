import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  addrSlideDown;
  addrSlideUp;
  index = 1;
  indexStatus = 0;
  mySlider;
  opacitySlide = 1;
  slides = [
    {
      name: 'Повязки',
      addr: '../assets/povazka.png',
      status: true
    },
    {
      name: 'Обручі',
      addr: '../assets/obruch.png',
      status: false
    },
    {
      name: 'Біжутерія',
      addr: '../assets/biga.png',
      status: false
    },
    {
      name: 'Корони',
      addr: '../assets/korona.png',
      status: false
    },
    {
      name: 'Заколки',
      addr: '../assets/zakolka.png',
      status: false
    }
  ];

  constructor() {
    this.addrSlideUp = this.slides[0].addr;
    this.addrSlideDown = this.slides[1].addr;
  }

  ngOnInit() {
    this.mySlider = setInterval(() => {
      this.checkSlide();
    }, 3000);
  }

  checkThisSlide(index) {
    clearInterval(this.mySlider);
    this.slides[this.indexStatus].status = false;
    this.indexStatus = index;
    this.slides[this.indexStatus].status = true;
    if (this.opacitySlide) {
      this.addrSlideDown =  this.slides[index].addr;
      this.opacitySlide = 0;
    } else {
        this.addrSlideUp =  this.slides[index].addr;
        this.opacitySlide = 1;
    }
  }

  checkSlide(index = this.index + 1, indexStatus = this.indexStatus + 1) {
    this.opacitySlide = 0;
    this.slides[this.indexStatus].status = false;
    this.indexStatus = indexStatus;
    if (this.indexStatus === this.slides.length) {
      this.indexStatus = 0;
    }
    this.index = index;
    if (this.index === this.slides.length) {
      this.index = 0;
    }
    const sl = this.slides[this.index];
    this.slides[this.indexStatus].status = true;
    setTimeout(() => {
      this.addrSlideUp = this.addrSlideDown;
      this.opacitySlide = 1;
    }, 500);
    setTimeout(() => {
      this.addrSlideDown = sl.addr;
    }, 1000);
  }

}
