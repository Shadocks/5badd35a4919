import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public text: string = 'text';
  public color: string = 'red';
  public content: string = '';

  constructor() { }

  ngOnInit() {
  }

  squareClick(color: string): void {
      this.color = color;
  }
}
