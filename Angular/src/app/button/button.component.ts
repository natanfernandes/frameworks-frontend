import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl:'./button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string
  @Output() press = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
