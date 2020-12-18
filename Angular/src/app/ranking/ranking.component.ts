import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service'
@Component({
  selector: 'app-ranking',
  templateUrl:'./ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {

  constructor(public appService: AppService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking').subscribe(data => {
      console.log(data)
      this.appService.setRanking(data[0].res);
    })
  }

}
