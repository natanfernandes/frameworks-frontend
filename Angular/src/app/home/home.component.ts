import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = ""
  isBtnDisabled = true
  constructor() { }

  ngOnInit(): void {
  }

  handleChangeName(event): void {
    this.name = event.target.value
    console.log(this.name.length)
    if(this.name.length >= 3){
      this.isBtnDisabled = false
    } else {
      this.isBtnDisabled = true
    }
  }

  handleSearch(): void{
    alert('Busca por :'+ this.name)
  }
}
