import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  sanjose: any;
  constructor(private _httpService: HttpService) { 
    this.sanjose = {humidity: 0, temp: 0, temp_min:0, temp_max:0, description:""}
  }

  ngOnInit() {
    this._httpService.getSanjose().subscribe(data=>{
      console.log("san Jose Weather Data", data);
      this.sanjose.humidity = data['list'][data['list'].length-1]['main']['humidity']
      this.sanjose.temp = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp'])-273)+32)
      this.sanjose.temp_min = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_min'])-273)+32)
      this.sanjose.temp_max = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_max'])-273)+32)
      this.sanjose.description = data['list'][data['list'].length-1]['weather'][0]['description']
    })
  }
}
