import { Component, Directive } from '@angular/core';
import { animate, sequence, state, style, transition, trigger } from '@angular/animations';
import { CardCoordinatesSpyDirective } from './card-coordinates-spy.directive';

export const cardHeight = 250;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  animations: [
    trigger('cardToggle', [
      state('collapsed',
        style({
          height: '*',
          borderRadius: '*'
        })
      ),
      state('expanded',
        style({
          height: '100vh',
          borderRadius: 0
        })
      ),
      transition('collapsed <=> expanded', [
        sequence([
          animate('500ms cubic-bezier(0.83, 0, 0.17, 1)')
        ])
      ])
    ])
  ],
  styles: [`
    .card-container {

      .card {
        transition: top 400ms ease-in-out,
                    left 700ms cubic-bezier(0.83, 0, 0.17, 1),
                    width 700ms cubic-bezier(0.83, 0, 0.17, 1);
        position: relative;
        cursor: pointer;
        border-radius: 18px;
        height: 250px;

        // card initial position
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;

        background: white;
        filter: drop-shadow(0px 22px 29px rgba(0, 0, 0, 0.05));
        overflow: hidden;

        .card-cover {
          padding: 25px;
          border-radius: 18px;
        }
      }
    }
  `]
})
export class CardComponent {
  isExpanded = false;
  cardHeight = cardHeight;

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
