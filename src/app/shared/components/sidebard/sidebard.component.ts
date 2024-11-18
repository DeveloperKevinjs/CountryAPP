import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebard',
  templateUrl: './sidebard.component.html',
  styleUrl: './sidebard.component.css',
})
export class SidebardComponent {

  public isOpen:boolean = false;

  toggleSidebar(){
    this.isOpen = !this.isOpen;
  }
}
