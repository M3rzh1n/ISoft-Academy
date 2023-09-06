import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
        <img
          class="nav-bar__logo"
          src="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/main/logo%20academy.png"
          alt="ISoft logo"
          width="100%"
          height="50"
        />
      </a>
      <p style="font-size: 27px; padding-top: 20px; padding-left: 10px; color: white;">ISoft Academy</p>
    </div>
  `,
})
export class NavBarBrandComponent {}
