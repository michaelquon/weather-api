import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  seattle: any;
  constructor(private _httpService: HttpService) { 
    this.seattle = {humidity: 0, temp: 0, temp_min:0, temp_max:0, description:""}
  }

  ngOnInit() {
    this._httpService.getSeattle().subscribe(data=>{
      console.log("Seattle Weather Data", data);
      this.seattle.humidity = data['list'][data['list'].length-1]['main']['humidity']
      this.seattle.temp = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp'])-273)+32)
      this.seattle.temp_min = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_min'])-273)+32)
      this.seattle.temp_max = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_max'])-273)+32)
      this.seattle.description = data['list'][data['list'].length-1]['weather'][0]['description']
    })
  }
}
