import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { CommonNamesComponent } from './common-names/common-names.component'
import { RankingComponent } from './ranking/ranking.component'
import { HomeComponent } from './home/home.component'

const routes : Routes = [
  {path:'common-names', component: CommonNamesComponent},
  {path:'ranking', component: RankingComponent},
  {path:'home', component: HomeComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}

export const routingComponents = [CommonNamesComponent, RankingComponent,HomeComponent]
