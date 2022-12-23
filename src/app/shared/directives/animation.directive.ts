import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective {

  constructor(public elementRef: ElementRef) { }

  @Input('appAnimation') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}
