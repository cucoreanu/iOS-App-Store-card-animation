import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-card>
        <card-cover>
          <div class="content-container" appCardCoverHeight>
            <div class="gradient-1 cover-background"></div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
          </div>
        </card-cover>
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
        }

        .gradient-1 {
          width: 100%;
          height: 100%;
          background: linear-gradient(247.99deg, #FF8A8A 2.6%, #403DFF 96.62%);
        }

        card-cover {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .content-container {
          display: flex;
          align-items: flex-end;
          padding: 24px;
          box-sizing: border-box;
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
      }
    `
  ]
})
export class AppComponent {
}
