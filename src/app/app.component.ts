import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: AppService) {}

  upload() {
    let myFile = (<HTMLInputElement>document.getElementById('simpleFile')).files[0];
    let formData = new FormData();
    formData.append('file ', myFile);
    this.service.upload(formData);
  }

  getRequest() {
    this.service.getRequest();
  }
}
