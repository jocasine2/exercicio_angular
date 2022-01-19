import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-credit-card',
  templateUrl: './input-credit-card.component.html',
  styleUrls: ['./input-credit-card.component.css']
})
export class InputCreditCardComponent implements OnInit {
  displayVal = '';
  constructor() { }

  ngOnInit(): void {
  }

  checkCreditCard(numero:string){
    switch (numero) {
      case '37':
        this.displayVal = '<img class="img img-responsive"  width="50" height="24" src="assets/img/amex.svg">';
      break;
      case '4':
        this.displayVal = '<img class="img img-responsive"  width="50" height="24" src="assets/img/Visa_Inc._logo.svg">';
      break;
      case '5':
        this.displayVal = '<img class="img img-responsive"  width="50" height="24" src="assets/img/MasterCard_Logo.svg">';
      break;
      case '':
        this.displayVal = '<i class="fas fa-star"></i>';
      break;
      default:
      break;
    }
  }
}
