import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ){
    this.iconRegistry.addSvgIcon(
      'menu_hamburguer',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/Hamburger_menu.svg')
    )
  }

  toggle(){
    
  }

  title = 'countryAppv2';
}
