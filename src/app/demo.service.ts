import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private httpClient: HttpClient) { }

  getChartDetails() {
    return this.httpClient.get('http://localhost:7071/api/statistics/getdailysalesstats');
  }
}
