import { Directive, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface ExpandedCardProperties {
  offsetLeft: number;
  offsetTop: number;
  containerWidth?: number;
}

@Directive({
  selector: '[appCardCoordinatesSpy]',
  exportAs: 'cardCoordinatesSpy'
})
export class CardCoordinatesSpyDirective {

  constructor(private readonly elementRef: ElementRef<HTMLElement>,
              @Inject(DOCUMENT) private readonly document: Document) {
  }

  /* *
  *  Gets the properties of a card for it's expanded state.
  * */
  getExpandedCardProperties(): ExpandedCardProperties {

    const containerWidth = document.getElementsByClassName('container').item(0)?.clientWidth
    const nativeElement = this.elementRef.nativeElement;
    return {
      offsetLeft: nativeElement.offsetLeft * -1,
      offsetTop: (nativeElement.offsetTop * -1)
        + (this.document?.defaultView?.scrollY ?? 0), // this is for the case when only a part of the card is on the screen, due to the scroll state
      containerWidth
    }
  }
}
