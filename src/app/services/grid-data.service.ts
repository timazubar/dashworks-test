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
    const apiKey = 'AIzaSyCHUnKnfEeAa79N3Ao4GE2EGAq0x446-Do';

    return this.http.get(`${apiUrl}/search?key=${apiKey}&maxResults=5&type=video&part=snippet&q=john`);
  }
}
