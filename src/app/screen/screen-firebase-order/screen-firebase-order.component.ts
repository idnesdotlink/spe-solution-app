import { Component, OnInit } from '@angular/core';
import { CoffeeOrderService } from '../../services/firebase/coffee-order.service';

@Component({
  selector: 'screen-firebase-order',
  templateUrl: 'screen-firebase-order.component.html',
  styleUrls: ['screen-firebase-order.component.scss']
})
export class ScreenFirebaseOrderComponent implements OnInit {

  constructor(public ordersService: CoffeeOrderService) { }

  ngOnInit() {
  }

  coffees = [
    "Americano",
    "Flat White",
    "Cappuccino",
    "Latte",
    "Espresso",
    "Machiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];

  coffeeOrder = [];

  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }

}

