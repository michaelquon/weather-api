import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  dallas: any;
  constructor(private _httpService: HttpService) { 
    this.dallas = {humidity: 0, temp: 0, temp_min:0, temp_max:0, description:""}
  }

  ngOnInit() {
    this._httpService.getDallas().subscribe(data=>{
      console.log("dallas Weather Data", data);
      this.dallas.humidity = data['list'][data['list'].length-1]['main']['humidity']
      this.dallas.temp = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp'])-273)+32)
      this.dallas.temp_min = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_min'])-273)+32)
      this.dallas.temp_max = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_max'])-273)+32)
      this.dallas.description = data['list'][data['list'].length-1]['weather'][0]['description']
    })
  }
}
