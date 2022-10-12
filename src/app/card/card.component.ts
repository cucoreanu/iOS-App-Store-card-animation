import { Component, Directive } from '@angular/core';
import { CardCoordinatesSpyDirective } from './card-coordinates-spy.directive';
import { cardContentTrigger, cardCoverTrigger, cardToggleTrigger } from './triggers';

export const cardHeight = '250px';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  animations: [
    cardToggleTrigger,
    cardCoverTrigger,
    cardContentTrigger
  ],
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  isExpanded = false;

  toggleCard(div: HTMLDivElement, coordinatesSpy: CardCoordinatesSpyDirective) {
    if (this.isExpanded) {
      Object.assign(div.style, {
        width: '',
        top: '0',
        left: '0'
      });
      this.isExpanded = false;
    } else {
      const openCardProperties = coordinatesSpy.getOpenCardProperties();

      Object.assign(div.style, {
        width: `${openCardProperties.containerWidth}px`,
        top: `${openCardProperties.offsetTop}px`,
        left: `${openCardProperties.offsetLeft}px`
      });
      this.isExpanded = true;
    }
  }
}

@Directive({
  selector: '[appCardCoverHeight]',
  host: {
    style: `min-height: ${cardHeight}`
  }
})
export class CardCoverHeightDirective {

}
