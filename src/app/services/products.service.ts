import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL = "https://task-manager-by-abhi.herokuapp.com"

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
}
