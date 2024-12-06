import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'hotel-app';
  //domainUrl =  '';

  constructor(
    private titleService: Title,
    
  ){

    this.titleService.setTitle("Chirohi App Portal")
    //this.domainUrl='https://hoap-dv.chirohi.com/';
  }
}
