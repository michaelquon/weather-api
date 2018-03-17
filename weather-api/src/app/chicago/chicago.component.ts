import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  chicago: any;
  constructor(private _httpService: HttpService) { 
    this.chicago = {humidity: 0, temp: 0, temp_min:0, temp_max:0, description:""}
  }

  ngOnInit() {
    this._httpService.getChicago().subscribe(data=>{
      console.log("chicago Weather Data", data);
      this.chicago.humidity = data['list'][data['list'].length-1]['main']['humidity']
      this.chicago.temp = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp'])-273)+32)
      this.chicago.temp_min = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_min'])-273)+32)
      this.chicago.temp_max = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_max'])-273)+32)
      this.chicago.description = data['list'][data['list'].length-1]['weather'][0]['description']
    })
  }
}

