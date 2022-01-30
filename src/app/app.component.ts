import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],

})
export class AppComponent {
  title = 'CarProject'
  name = ''
  warning = 'Name cannot be empty'
  carsEndpoint = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Cars9096be5.json'

  cars = []
  selectedCar = ''
  selectedColor : any

  constructor(){
    this.getCars()
  }

  selectCar(car:string){
    this.selectedCar = car
  }

  getCars(){
    fetch(this.carsEndpoint)
    .then(response => response.json())
    .then(data => {
      this.cars = data
    })
  }

  onTypingName(name: string){
    // check length

    if (!name.length){
      this.warning = 'Name cannot be empty'
    }

    else if(this.name.length > 75){
      this.warning = 'Cannot Exceed 75 characters'
    }
    // if name has a-z or A-Z only
    else if(!this.name.match(/^[a-zA-Z]+$/) && this.name.length > 0){
      this.warning = 'Cannot contain numbers or special characters'
    }

    else{
      this.warning = ''
    }

  }

}
