import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  burbank: any;
  constructor(private _httpService: HttpService) { 
    this.burbank = {humidity: 0, temp: 0, temp_min:0, temp_max:0, description:""}
  }

  ngOnInit() {
    this._httpService.getBurbank().subscribe(data=>{
      console.log("burbank Weather Data", data);
      this.burbank.humidity = data['list'][data['list'].length-1]['main']['humidity']
      this.burbank.temp = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp'])-273)+32)
      this.burbank.temp_min = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_min'])-273)+32)
      this.burbank.temp_max = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_max'])-273)+32)
      this.burbank.description = data['list'][data['list'].length-1]['weather'][0]['description']
    })
  }
}
