import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svgtext',
  templateUrl: './svgtext.component.html',
  styleUrls: ['./svgtext.component.css']
})
export class SvgtextComponent implements OnInit {
    x = 50;
    y = 50;

  constructor() { }

  ngOnInit() {
  }

}
