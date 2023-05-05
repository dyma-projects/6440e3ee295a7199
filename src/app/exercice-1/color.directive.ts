import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef<any>) {}

  @HostListener('window:keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    console.log(event);
    switch (event.code) {
      case 'ArrowLeft':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'ArrowUp':
        this.el.nativeElement.style.color = 'green';
        break;
      case 'ArrowRight':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'ArrowDown':
        this.el.nativeElement.style.color = 'orange';
        break;
    }
  }
}
