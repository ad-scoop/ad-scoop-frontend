import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector : '[focuced]'
})
export class DirectiveFoucs {
  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'focus', []);
    this.renderer.invokeElementMethod(
            this.elementRef.nativeElement, 'click', []);
  }
}