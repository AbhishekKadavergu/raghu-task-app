import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL = "https://task-manager-by-abhi.herokuapp.com"

  private creatTaskSub = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products").toPromise()
  }

  createTask(task:any){
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })  
    return this.http.post(this.apiURL+'/tasks', task, { headers: headers, observe:'response' }).toPromise()   

  }

  getTasks(){
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })  
    return this.http.get<any>(this.apiURL+"/tasks", { headers: headers }).toPromise()
  }

  setCreateTaskSub(created: boolean){
    this.creatTaskSub.next(created)
  }

  getCreateTaskSub(): Observable<boolean>{
    return this.creatTaskSub.asObservable()
  }


}
