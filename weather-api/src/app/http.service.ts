import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getSeattle(){
    
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=5809844&APPID=7846dbf356aaaf1587d142f0c2cb1ed0');
  }
  getSanjose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=5391959&APPID=7846dbf356aaaf1587d142f0c2cb1ed0');
  }
  getDc(){
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=4366164&APPID=7846dbf356aaaf1587d142f0c2cb1ed0');
  }
  getDallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=4684888&APPID=7846dbf356aaaf1587d142f0c2cb1ed0');
  }
  getChicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=4887398&APPID=7846dbf356aaaf1587d142f0c2cb1ed0');
  }
  getBurbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=4885983&APPID=7846dbf356aaaf1587d142f0c2cb1ed0');
  }

}
