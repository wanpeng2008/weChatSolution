import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrgService {

  rootOrg: object

  constructor(private http: Http) {
  }

  init() {
    return new Observable(observer => {
      this.http.get('/assets/data/org.json').map(res => res.json()).subscribe(
        org => {
          this.rootOrg = org
          observer.next(org)
          observer.complete()
        }
      )
    })

  }

  getOrgByCode(org, code) {
    if (!org || !org.length) return null;
    for (var i = 0, len = org.length; i < len; i++) {
      if (org[i].code == code) {
        return org[i];
      } else {
        var result = this.getOrgByCode(org[i].children, code);
        if (result)
          return result;
      }
    }
    return null;
  }

  getProvinceList():Observable<object[]> {
    return new Observable(observer => {
      if (this.rootOrg) {
        let provinceList = this._getProvinceList(this.rootOrg)
        observer.next(provinceList)
        observer.complete()
      }else{
        this.init().subscribe(
          org => {
            this.rootOrg = org
            this.getProvinceList().subscribe(
              provinceList => {
                observer.next(provinceList)
                observer.complete()
              }
            )
          }
        )
      }
    })
  }
  private _getProvinceList(org) {
    var result = [];
    for (var i in org) {
      var province = {
        code: org[i].code,
        name: org[i].name
      };
      result.push(province);
    }
    return result
  }

  getCityList(parentCode) :Observable<object[]> {
    return new Observable(observer => {
      var province = this.getOrgByCode(this.rootOrg, parentCode);
      var cityList = province.children;
      var result = [];
      for (var i in cityList) {
        var city = {
          code: cityList[i].code,
          name: cityList[i].name
        };
        result.push(city);
      }
      observer.next(result)
      observer.complete()
    })
  }

  getCountyList(parentCode) :Observable<object[]> {
    return new Observable(observer => {
      var city = this.getOrgByCode(this.rootOrg, parentCode);
      var countyList = city.children;
      var result = [];
      for (var i in countyList) {
        var town = {
          code: countyList[i].code,
          name: countyList[i].name
        };
        result.push(town);
      }
      observer.next(result)
      observer.complete()
    })
  }

}
