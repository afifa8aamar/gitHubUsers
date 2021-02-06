import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
 
@Directive({
  selector: '[appCard]'
})
export class CardDirective implements OnInit {
  @Input('appCard') style : 'list' | 'grid' = 'list';

  constructor(private el: ElementRef) { }
 
  ngOnInit(): void {
    this.el.nativeElement.style.border = '1px solid #EDF0F5';
    this.el.nativeElement.style['box-shadow'] = '10px 10px 10px 0px rgba(0,51,70,0.05)';
    this.el.nativeElement.style['border-radius'] = '10px';
    this.el.nativeElement.style['padding-top'] = '10px';
    this.el.nativeElement.style['padding-bottom'] = '43px';
    this.el.nativeElement.style['margin-bottom'] = '10px';
    this.el.nativeElement.style['padding-left'] = '28px';
    this.el.nativeElement.style['padding-right'] = '28px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.background = '#003346';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.cursor = 'pointer'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.background = '#FFFFFF 0% 0% no-repeat padding-box';
    this.el.nativeElement.style.color = '#003346';

  }

 
}