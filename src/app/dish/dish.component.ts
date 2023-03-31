import {Component, OnInit} from '@angular/core';
import {DishService} from "../dish.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Dish} from "../Models/Dish";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent{
  dish: Dish=new Dish();

  constructor(private dishService: DishService,activatedRoute: ActivatedRoute, private router: Router) {
  }

  getInputValue(name:string, cost:string, costElav:string){
    this.dish.name=name;
    this.dish.cost=cost;
    this.dish.costoElav=costElav;

    this.dishService.dishnew(this.dish).subscribe({
      next:() => {
        console.log('paso');
      },
      error:(errorResponse) => {
        console.log('error');
        //this.toastrService.error(errorResponse.error, 'Cart');
      }
    });
    console.log('update exitoso');
  }
}
