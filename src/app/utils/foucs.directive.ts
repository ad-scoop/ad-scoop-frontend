import { Directive, Renderer, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[focuced]'
})
export class FoucsDirective implements AfterViewInit {

  constructor(public renderer: Renderer, public elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'focus', []);
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'click', []);
  }
}