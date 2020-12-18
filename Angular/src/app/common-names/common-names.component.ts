import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service'
@Component({
  selector: 'app-common-names',
  templateUrl:'./common-names.component.html',
  styleUrls: ['./common-names.component.css'],
})
export class CommonNamesComponent implements OnInit {

  constructor(public appService: AppService, private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get<any>('https://servicodados.ibge.gov.br/api/v2/censos/nomes/?sexo=F').subscribe(data => {
      console.log(data)
      this.appService.setCommonNamesF(data);
    })
    this.http.get<any>('https://servicodados.ibge.gov.br/api/v2/censos/nomes/?sexo=M').subscribe(data => {
      this.appService.setCommonNamesM(data);
    })
  }

}
