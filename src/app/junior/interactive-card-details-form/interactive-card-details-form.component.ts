import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-interactive-card-details-form',
  templateUrl: './interactive-card-details-form.component.html',
  styleUrls: ['./interactive-card-details-form.component.scss']
})
export class InteractiveCardDetailsFormComponent implements OnInit {

  @ViewChild('form') formElement!: ElementRef;
  @ViewChild('sucess') sucessElement!: ElementRef;

  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('cardNumberField') cardNumberField!: ElementRef;
  @ViewChild('cvcField') cardCvcField!: ElementRef;
  @ViewChild('expiryMonth') expiryMonthField!: ElementRef;
  @ViewChild('expiryYear') expiryYearField!: ElementRef;
  
  submitted = false;
  name: string = '';
  cardNumber: string = '';
  cvc: string = '';
  expiryMonth: string = '';
  expiryYear: string = '';

  constructor( ) { }

  ngOnInit(): void {  }

  onSubmit(){
    this.submitted = true;
    if(this.name != '' && this.cardNumber != '' && this.cvc != '' && this.expiryMonth != '' && this.expiryYear != ''){
      this.formElement.nativeElement.style.display = 'none';
      this.sucessElement.nativeElement.style.display = 'block';
    }else{
      this.nameField.nativeElement.focus();
    }
  }

  onReset(){
    this.submitted = false;
    this.formElement.nativeElement.style.display = 'block';
    this.sucessElement.nativeElement.style.display = 'none';
  }


  onKeyPressCardholderName(event: any) {
    this.name = event.target.value;
  }
  onKeyPressCardNumber(event: any) {
    this.cardNumber = this.creditCardParse(event.target.value);
    this.cardNumberField.nativeElement.value = this.cardNumber;
  }
  onKeyPressCardCvv(event: any) {
    this.cvc = event.target.value;
  }
  onKeyPressExpiryMonth(event: any) {
    this.expiryMonth = event.target.value;
  }
  onKeyPressExpiryYear(event: any) {
    this.expiryYear = event.target.value;
  }
  
  creditCardParse(value: any) {
    return value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  }
    

}
