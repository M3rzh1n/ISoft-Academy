import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner hero-banner--academy" style="padding-top: 50px; padding-bottom: 50px"> 

      <h1 class="hero-banner__headline"></h1>
      
      <a
        id="code-sample-link"
        class="button button--secondary"
        href="https://integrity-software.co.il"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book your seat in our new Okta CIC Training →
      </a>
    </div>
  `,
})
export class HeroBannerComponent {
  logo = 'https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/main/logo%20academy.png';
}
