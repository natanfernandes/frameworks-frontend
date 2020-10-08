import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = ""
  constructor() { }

  ngOnInit(): void {
  }

  handleChangeName(event): void {
    this.name = event.target.value
  }

  handleSearch(): void{
    alert('Busca por :'+ this.name)
  }
}
