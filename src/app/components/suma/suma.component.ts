import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
  resultado: number = 0;
  operandoA: number = 0;
  operandoB: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }

}
