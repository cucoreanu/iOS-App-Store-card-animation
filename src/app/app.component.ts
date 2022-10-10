import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-card>
        <card-cover>
          <div class="gradient-1"></div>
          <cn-card-title>Lorem ipsum dolor sit amet, consectetur adipiscing</cn-card-title>
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
      }
    `
  ]
})
export class AppComponent {
}
