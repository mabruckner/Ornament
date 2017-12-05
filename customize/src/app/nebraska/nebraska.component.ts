import { Component, OnInit, Input } from '@angular/core';
import { TextParam } from '../textparam'

@Component({
  selector: 'app-nebraska',
  templateUrl: './nebraska.component.html',
  styleUrls: ['./nebraska.component.css']
})
export class NebraskaComponent implements OnInit {
    @Input() labels: [TextParam] = <[TextParam]>[]

  constructor() { }

  ngOnInit() {
  }

}
