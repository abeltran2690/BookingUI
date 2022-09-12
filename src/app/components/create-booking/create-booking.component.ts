import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createBookingDTO, createClientDTO, identificationType } from 'src/app/interfaces/booking';
import { createClientService } from 'src/app/services/create-client.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  
  identificationTypes: identificationType[] = [
    {value: '1', viewValue: 'CC'},
    {value: '2', viewValue: 'CE' },
    {value: '3', viewValue: 'NIT' }
  ]

  constructor(private router: Router, private formBuilder: FormBuilder, 
    private clientsService: createClientService) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      surname: ['', {
        validators: [Validators.required]
      }],
      identification: ['', {
        validators: [Validators.required]
      }],
      identificationType:''
    })
  }

  getErrorName(){
    var fieldName = this.form.get('name');
    if (fieldName?.hasError('required')){
      return 'El nombre es requerido';
    } 
    return '';
  }

  getErrorSurname(){
    var fieldSurname = this.form.get('surname');
    if (fieldSurname?.hasError('required')){
      return 'El apellido es requerido';
    }
    return '';
  }

  getErrorIdentification(){
    var fieldSurname = this.form.get('identification');
    if (fieldSurname?.hasError('required')){
      return 'El número de identificación es requerido';
    }
    return '';
  }

  createBooking(){
    var client: createClientDTO 
    client = this.form.value 
    this.clientsService.create(client).subscribe(() => {
      console.log(client);  
     }, error => console.error(error))
    
  }




}
