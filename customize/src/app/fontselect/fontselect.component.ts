import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fontselect',
  templateUrl: './fontselect.component.html',
  styleUrls: ['./fontselect.component.css']
})
export class FontselectComponent implements OnInit {
    @Input() font = "Roboto";
    fonts = ["Roboto", "Barlow Condensed", "Open Sans", "Indie Flower"];

  constructor() { }

  ngOnInit() {
  }

}
