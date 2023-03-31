import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish} from "./Models/Dish";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient) { }

  dishnew(dish: Dish){
    return this.http.post<Dish>('http://localhost:8080/api/dish/nuevo',dish);
  }
}
