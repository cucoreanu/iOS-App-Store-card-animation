import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-card>
        <card-cover>
          <div class="cover-container" appCardCoverHeight>
            <img class="cover-background" src="./assets/images/wallpaper.jpeg">
            <div class="category">Category goes here</div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
          </div>
        </card-cover>

        <card-story>
          <div class="story-container">
            <p>Aliquam ultrices vel eros non faucibus. Phasellus interdum, metus sit amet consectetur finibus, elit nulla tempor purus, at interdum nibh
              ipsum id erat. Vivamus viverra libero eget sem fermentum condimentum. Suspendisse dictum nulla a libero molestie venenatis. Aliquam porta
              erat quis ligula placerat gravida. Sed egestas risus ante, eu aliquam odio consectetur at. Donec mattis quis erat id molestie. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id tristique lectus. Etiam dignissim justo et nisi
              suscipit semper. Etiam sodales mattis ullamcorper. Duis vestibulum metus fermentum, rutrum nibh non, congue mi. Aenean rhoncus consectetur
              lobortis. Donec ullamcorper auctor purus, non pretium arcu pharetra in. In hendrerit tempus imperdiet.</p>

            <p>Nam sit amet tempor est. Aliquam erat volutpat. Nullam tempus, ex nec feugiat volutpat, orci ipsum viverra lorem, elementum blandit
              lectus tortor maximus augue. Duis metus ligula, hendrerit quis tortor eu, malesuada malesuada risus. Cras in facilisis lectus, a molestie
              elit. Curabitur dictum ultrices orci ac volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Sed ante lorem, pellentesque eu consectetur vitae, scelerisque eu lacus. Morbi posuere hendrerit velit a placerat. Ut et semper
              enim. Nunc faucibus dictum magna, non facilisis lorem consectetur a. Suspendisse posuere quis felis ac cursus. Maecenas quis enim non sem
              posuere pulvinar ac ac felis.</p>

            <p>Curabitur tempor semper venenatis. In mauris turpis, luctus sed elit in, cursus consectetur neque. Morbi et mauris magna. Fusce elementum
              aliquet elementum. Duis eleifend dui urna, nec condimentum dolor venenatis et. Vivamus scelerisque ut mi in lacinia. Sed ultrices maximus
              rutrum.</p>

            <p>Etiam iaculis odio quis tempor vulputate. Aenean faucibus mauris vel elit congue, quis fringilla purus faucibus. In velit mi, tincidunt
              tincidunt aliquam aliquet, tincidunt eu metus. Duis at ipsum nec quam lobortis condimentum. Pellentesque tellus mi, congue ac imperdiet
              eget, tincidunt a est. Etiam gravida a metus iaculis faucibus. Mauris risus dolor, pulvinar quis convallis sed, gravida a dolor. Sed
              euismod eget diam eu sollicitudin. Aenean sit amet turpis sit amet mauris semper mattis in sit amet nisi. Quisque aliquam tortor metus.
              Aenean eros libero, porta ac pharetra non, condimentum in magna. Proin ut est sagittis, tempor neque in, tempor dolor. Nulla tincidunt
              diam et leo viverra malesuada. Nam pharetra venenatis metus, a vulputate ipsum. Etiam sagittis semper nulla, nec ullamcorper dui euismod
              vel. Etiam nec lectus sem.</p>

            <p>Curabitur scelerisque rhoncus dui, at ullamcorper tortor iaculis dignissim. Vivamus posuere massa orci, vel scelerisque eros placerat
              vitae. Sed ac velit suscipit, egestas erat a, hendrerit dolor. Curabitur at elementum metus. Donec porttitor vehicula mi, in semper odio
              fringilla vitae. Praesent eleifend sapien eget lorem viverra, at pulvinar libero molestie. Donec laoreet quis erat quis placerat. Mauris
              finibus fermentum sem, et vehicula tellus maximus eget. Sed convallis efficitur finibus.</p>
          </div>
        </card-story>
      </app-card>
    </div>
  `,
  styles: [
    `
      .container {
        position: relative;
        min-height: 100vh;
        max-width: 800px;
        margin: auto;
        background: #F4F4F4;
        padding: 30px;

        .cover-background {
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
          width: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .gradient-1 {
          width: 100%;
          height: 100%;
          background: linear-gradient(247.99deg, #FF8A8A 2.6%, #403DFF 96.62%);
        }

        .cover-container {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 24px;
          box-sizing: border-box;
          justify-content: space-between;
        }

        .story-container {
          padding: 24px;
        }

        h1 {
          color: white;
          position: relative;
          width: 100%;
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 19px;
          line-height: 110.2%;
        }

        .category {
          color: white;
          position: relative;
          left: 0;
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          padding-bottom: 7px;
          font-weight: 400;
          font-size: 14px;
          text-transform: uppercase;
          opacity: .7;
        }

        p {
          font-family: sans-serif;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          padding: 10px 0;
        }
      }
    `
  ]
})
export class AppComponent {
}
