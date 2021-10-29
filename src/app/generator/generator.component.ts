import {Component} from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
  numbers: number[] = [];

  constructor() {
    this.numbers = this.generateNumbers();
  }

  generateNumbers() {
    this.numbers = [];
    for (let i = 0; i < 5; i++) {
      this.numbers.push(Math.floor(Math.random() * (36 - 5 + 1) + 5));
    }
    this.sortNumbers();
    return this.numbers;
  }

  sortNumbers() {
    this.numbers.sort(function (a, b) {
      return a - b;
    });
  }
}
