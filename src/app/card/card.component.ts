import { Component, Directive } from '@angular/core';
import { CardCoordinatesSpyDirective } from './card-coordinates-spy.directive';
import { cardContentTrigger, cardCoverTrigger, cardToggleTrigger } from './card.animations';
import { CardService } from './card.service';

export const cardHeight = '250px';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  animations: [
    cardToggleTrigger,
    cardCoverTrigger,
    cardContentTrigger
  ],
  styleUrls: ['./card.component.scss'],
  styles: [
    `
      .card-appearance {
        height: ${cardHeight};
      }
    `
  ]
})
export class CardComponent {
  isExpanded = false;

  constructor(private readonly cardService: CardService) {
  }

  toggleCard(div: HTMLDivElement, coordinatesSpy: CardCoordinatesSpyDirective) {
    if (this.isExpanded) {
      this.collapseCard(div);
    } else {
      this.expandCard(coordinatesSpy, div);
    }
  }

  private expandCard(coordinatesSpy: CardCoordinatesSpyDirective, div: HTMLDivElement) {
    const openCardProperties = coordinatesSpy.getExpandedCardProperties();
    const expandedCardStyles = this.cardService.convertOffsetValuesToStyleDeclarations(openCardProperties);

    Object.assign(div.style, {
      ...expandedCardStyles
    });
    this.isExpanded = true;
  }

  private collapseCard(div: HTMLDivElement) {
    Object.assign(div.style, this.cardService.getCardCollapsedStyles());
    this.isExpanded = false;
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
