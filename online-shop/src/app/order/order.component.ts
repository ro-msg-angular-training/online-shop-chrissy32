import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  placeOrder(form: any) {
    var formValues = form.value;
    let address = new Address(formValues.addressCountry, formValues.addressCity, formValues.addressCounty, formValues.addressStreet);

    this.cartService.placeOrder(address);
  }

}
