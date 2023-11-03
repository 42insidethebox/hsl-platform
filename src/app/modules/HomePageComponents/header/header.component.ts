import { Component, HostListener, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAdmin: boolean = false;
  selectedLanguage: string = 'en';
  selectedCurrency: string = '€';
  menuVisible: boolean = false;
  headerHeight: string = 'auto';
  isLargeScreen: boolean = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // Update the headerHeight variable when the window is resized
    this.adjustHeaderHeight();
    this.checkScreenSize(); // Check screen size on resize
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.adjustHeaderHeight();
    this.animateMenu();
    this.animateBurger();
  }

  animateMenu() {
    // GSAP 3 syntax
    gsap.to('.menu-list, .utility-icons', {
      duration: 0.5,
      opacity: this.menuVisible ? 1 : 0,
      height: this.menuVisible ? 'auto' : '0px',
      ease: 'power2.inOut',
      display: this.menuVisible ? 'flex' : 'none',
    });
  }

  animateBurger() {
    // GSAP 3 syntax
    const burgerBars = document.querySelectorAll('.burger-icon .bar');
    if (this.menuVisible) {
      gsap.to(burgerBars[0], 0.3, {
        transform: 'rotate(-45deg) translate(-5px, 6px)',
        ease: 'power2.out',
      });
      gsap.to(burgerBars[1], 0.3, { opacity: 0 });
      gsap.to(burgerBars[2], 0.3, {
        transform: 'rotate(45deg) translate(-5px, -6px)',
        ease: 'power2.out',
      });
    } else {
      gsap.to(burgerBars, 0.3, {
        clearProps: 'all',
      });
    }
  }

  logout() {
    // Your logout logic here
  }

  ngOnInit() {
    window.addEventListener('resize', this.adjustMenuVisibility);
    this.adjustMenuVisibility();
    this.checkScreenSize(); // Check screen size on initialization
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.adjustMenuVisibility);
  }

  adjustMenuVisibility = () => {
    if (window.innerWidth > 1360 && !this.menuVisible) {
      gsap.set(['.menu-list', '.utility-icons'], { clearProps: 'all' });
    }
  };

  adjustHeaderHeight() {
    this.headerHeight = this.menuVisible ? '110px' : 'auto';
  }

  // Function to check screen size and update isLargeScreen
  checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 1340;
    this.updateToolbarHeight();
  }

  updateToolbarHeight() {
    const matToolbarRow = document.querySelector('.mat-toolbar-row');
    if (matToolbarRow) {
      if (this.isLargeScreen) {
        matToolbarRow.classList.add('large-screen');
        // Apply the height style to .mat-toolbar-row.large-screen
        this.renderer.setStyle(matToolbarRow, 'height', '50px');
      } else {
        matToolbarRow.classList.remove('large-screen');
        // Remove the height style
        this.renderer.removeStyle(matToolbarRow, 'height');
      }
    }
  }
}
