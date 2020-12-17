import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) { }


  getApiData<T>(): Observable<T | any> {
    const apiUrl = 'https://www.googleapis.com/youtube/v3';
    const apiKey = 'AIzaSyBqmUuhoSGR1QQb7ZLn9J8mcKRrCZPNFwU';

    return this.http.get(`${apiUrl}/search?key=${apiKey}&maxResults=10&type=video&part=snippet&q=john`);
  }

  getMockData<T>(): Observable<T | any> {
    return this.http.get('assets/mockData.json');
  }
}
