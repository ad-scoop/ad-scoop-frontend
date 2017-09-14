import {Input, ViewChildren, Directive, Renderer, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[focuced]'
})
export class FoucsDirective implements OnInit {

  constructor(private hostElement: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
      this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
  }

}
