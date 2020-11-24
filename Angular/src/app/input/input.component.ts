import { Component, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl:'./input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent  {
  insertedName
  @Input() label: string
  @Input() placeholder: string
  @Input() isRequired: boolean
  @Input() minlength: number
  @Input() value: string
  
  ngOnInit(): void {
    this.insertedName = new FormControl('', [Validators.required, Validators.minLength(this.minlength)]);
  }
   

  getErrorMessage() {
    if (this.insertedName.hasError('required')) {
      return 'Campo obrigátório';
    }
    return this.insertedName.hasError('minlength') ? `Insira ao menos ${this.minlength} caracteres` : '';
  }

}
