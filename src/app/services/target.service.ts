import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Target} from '../model/target';
import {User} from '../model/user';
import {AIStarget} from '../model/AIStarget';

@Injectable()
export class TargetService {

  private targetsUrl: string;

  constructor(private http: HttpClient) {
    this.targetsUrl = 'http://localhost:8080/targets';
  }

  // public findAll(): Observable<Target[]> {
  //   return this.http.get<Target[]>(this.targetsUrl);
  // }
  //
  public findAllStr(): Observable<AIStarget[]> {
    return this.http.get<AIStarget[]>(this.targetsUrl);
  }

  public save(target: Target) {
    return this.http.post<Target>(this.targetsUrl, target);
  }
}
