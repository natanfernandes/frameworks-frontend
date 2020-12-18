import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class AppService {
  informedUser = ""
  userInfos = []
  commonNamesF = []
  commonNamesM = []
  ranking = []

  addUser(user: string) {
    this.informedUser = user
  }

  setUserInfos(data:any ){
    this.userInfos = data
  }
  setCommonNamesF(data:any ){
    this.commonNamesF = data
  }
  setCommonNamesM(data:any ){
    this.commonNamesM = data
  }
  setRanking(data:any ){
    this.ranking = data
  }
}
