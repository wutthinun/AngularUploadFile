import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

  private URL = 'http://localhost:8080';

  constructor(private http: Http) { }

  upload(formData: FormData) {
    console.log(formData);
    this.http.post(this.URL, formData)
    .subscribe();
  }

  getRequest() {
    this.http.get(this.URL)
    .subscribe();
  }
}
