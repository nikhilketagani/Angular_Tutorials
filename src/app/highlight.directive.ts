import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color='yellow';
  constructor(private element: ElementRef) { 
    console.log(element);
    
    
  }
  @HostListener('mouseenter') addHighLight(){
this.element.nativeElement.style.backgroundColor=this.color;
  }
  @HostListener('mouseleave') removeHighLight(){
    this.element.nativeElement.style.backgroundColor=null;
  }
    

}
