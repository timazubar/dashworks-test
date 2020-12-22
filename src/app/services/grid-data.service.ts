import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBqmUuhoSGR1QQb7ZLn9J8mcKRrCZPNFwU';

  private apiUrl = `${this.apiBaseUrl}/search?key=${this.apiKey}&maxResults=10&type=video&part=snippet&q=john`;

  /* mockUrl is the url to mock data for development */
  private mockUrl = 'assets/mockData.json';

  getData<T>(): Observable<T | any> {
    return this.http.get(this.apiUrl);
  /*if 'exceeded request quota' error in youtube data API appeared, use the method below*/
  // return this.http.get(this.mockUrl)
  }
}
