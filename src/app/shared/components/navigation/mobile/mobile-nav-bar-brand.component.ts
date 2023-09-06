import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-bar-brand',
  template: `
  <div class="mobile-nav-bar__brand">
  <a routerLink="/">
    <img
      class="nav-bar__logo"
      src="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/main/logo%20academy.png"
      alt="ISoft logo"
    />
  </a>
  <p style="font-size: 20px; padding-top: 20px; padding-left: 10px; color: white;">ISoft Academy</p>
</div>
  `,
})
export class MobileNavBarBrandComponent {
  @Output() mobileNavBarBrandClick = new EventEmitter<void>();

  onMobileNavBarBrandClick(): void {
    this.mobileNavBarBrandClick.emit();
  }
}
