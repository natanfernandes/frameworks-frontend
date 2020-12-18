import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = ""
  isBtnDisabled = true
  constructor(public appService: AppService, private http: HttpClient) {}

  ngOnInit(): void {
  }

  handleChangeName(event): void {
    this.name = event.target.value
    this.appService.addUser(this.name)
    
    if(this.name.length >= 3){
      this.isBtnDisabled = false
    } else {
      this.isBtnDisabled = true
    }
  }

  handleSearch(): void{
    this.http.get<any>('https://servicodados.ibge.gov.br/api/v2/censos/nomes/'+this.name).subscribe(data => {
      this.appService.setUserInfos(data[0].res);
    })
  }
}
