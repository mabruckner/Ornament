import { Component, OnInit, Input } from '@angular/core';
import { TextParam } from '../textparam';

@Component({
  selector: 'app-textparams',
  templateUrl: './textparams.component.html',
  styleUrls: ['./textparams.component.css']
})
export class TextparamsComponent implements OnInit {
    @Input() params:TextParam = {
        font: "Roboto",
        size: 5,
        text: "",
        x: 0,
        y: 0
    };
    sizes = [10, 11, 12, 13, 15, 18, 21, 25, 30, 35, 40, 50, 60, 80, 100];
    fonts = ["Roboto", "Barlow Condensed", "Open Sans", "Indie Flower", "Lobster", "Pacifico", "Amatic SC", "Satisfy", "Courgette", "Cabin Sketch", "Fredericka the Great"];

  constructor() { }

    ngOnInit() {
        this.fonts.sort();
  }

}
