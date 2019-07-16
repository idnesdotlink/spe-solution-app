import { Component, OnInit } from "@angular/core";
import { CoffeeOrderService } from '../../services/firebase/coffee-order.service';

@Component({
  selector: 'screen-firebase-order-list',
  templateUrl: './screen-firebase-order-list.component.html',
  styleUrls: ['./screen-firebase-order-list.component.scss']
})
export class ScreenFirebaseOrderListComponent implements OnInit {
  constructor(private ordersService: CoffeeOrderService) { }

  ngOnInit() {
    this.getCoffeeOrders();
  }

  coffeeOrders;

  getCoffeeOrders = () =>
    this.ordersService
      .getCoffeeOrders()
      .subscribe(res => (this.coffeeOrders = res));

  deleteOrder = data => this.ordersService.deleteCoffeeOrder(data);

  markCompleted = data => this.ordersService.updateCoffeeOrder(data);
}

