import { Injectable } from '@angular/core';
import { ExpandedCardProperties } from './card-coordinates-spy.directive';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  getCardCollapsedStyles(): Partial<CSSStyleDeclaration> {
    return {
      width: '',
      top: '0',
      left: '0'
    }
  }

  convertOffsetValuesToStyleDeclarations(expandedCardProperties: ExpandedCardProperties): Partial<CSSStyleDeclaration> {
    return {
      width: `${expandedCardProperties.containerWidth}px`,
      left: `${expandedCardProperties.offsetLeft}px`,
      top: `${expandedCardProperties.offsetTop}px`
    }
  }
}
