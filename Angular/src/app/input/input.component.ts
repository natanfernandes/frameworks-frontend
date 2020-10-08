import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl:'./input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent  {
  @Input() label: string
  @Input() placeholder: string
}
