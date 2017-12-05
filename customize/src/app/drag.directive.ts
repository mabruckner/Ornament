import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
    startMouse = [0, 0];
    startPos = [0, 0];
    drag = false;
}
