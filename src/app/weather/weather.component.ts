import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
myWeater: any
temparatur: number = 0
minTemp: number = 0
maxTemp: number = 0
feelsTemp: number = 0
pressure: number = 0
humity: number = 0
summary: string = ""
iconUrl: string = ""
hourly: string[] = []


      private weatherCobwert (nowDate: string){
        const newN = new Date(nowDate)
        const years = newN.getFullYear()
        const month = newN.getMonth() 
        
      
        
      }

  
   



constructor(private weatherService: WeatherService){}



        ngOnInit(): void {
          // this.weatherService.getWeather().subscribe({
          //   next: (res) => {
          //     this.myWeater = res
          //     console.log(this.myWeater);
          //     this.temparatur = this.myWeater.main.temp
          //     this.maxTemp = this.myWeater.main.temp_max
          //     this.minTemp = this.myWeater.main.temp_min
          //     this.feelsTemp = this.myWeater.main.feels_like
          //     this.pressure = this.myWeater.main.pressure
          //     this.humity = this.myWeater.main.humidity
          //     this.summary = this.myWeater.weather[0].main
              
              

            
        //       this.iconUrl = "https://openweathermap.org/img/wn/" +this.myWeater.weather[0].icon + "@2x.png"

        //     },
            
        //     error: (error) => {
        //       alert("errror")
        //     }   
 
        //  })

              this.getWeather()
        }

                        getWeather(){
                          this.weatherService.getWeather().subscribe(res =>{
                            console.log(res);
                            
                          })
                        }

      }


