import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  displayVal = '';
  constructor() { }

  ngOnInit(): void {
  }

  checkCreditCard(numero:string){
    console.log(numero);

    switch (numero) {
      case '37':
        this.displayVal = '<img class="img img-responsive" style="width: 50px;" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg">';
      break;
      case '4':
        this.displayVal = '<img class="img img-responsive" style="width: 50px;" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg">';
      break;
      case '5':
        this.displayVal = '<img class="img img-responsive" style="width: 50px;" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg">';
      break;
      case '':
        this.displayVal = '';
      break;
      default:
      break;
    }
    
  }
}
