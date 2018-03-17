import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  dc: any;
  constructor(private _httpService: HttpService) { 
    this.dc = {humidity: 0, temp: 0, temp_min:0, temp_max:0, description:""}
  }

  ngOnInit() {
    this._httpService.getDc().subscribe(data=>{
      console.log("DC Weather Data", data);
      this.dc.humidity = data['list'][data['list'].length-1]['main']['humidity']
      this.dc.temp = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp'])-273)+32)
      this.dc.temp_min = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_min'])-273)+32)
      this.dc.temp_max = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_max'])-273)+32)
      this.dc.description = data['list'][data['list'].length-1]['weather'][0]['description']
    })
  }
}

