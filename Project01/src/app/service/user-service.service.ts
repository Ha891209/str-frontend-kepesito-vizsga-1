import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAll = "https://api.github.com/repos/angular/angular/contributors?per_page=100";

  urlRepos = "https://api.github.com/users";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUser(): Observable<Contributor[]> {
    return this.httpClient.get<Contributor[]>(this.urlAll)
  }

  getUserById(login: string): Observable<Contributor> {
    return this.httpClient.get<Contributor>(`${this.urlRepos}/${login}/repos`);
  }

}