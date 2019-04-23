import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  private picture:string = 'assets/img/profile-0.jpg';

  constructor() { }

  ngOnInit() {
  }

}
