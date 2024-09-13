import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Car } from './models/car.model';
import { CARS } from './car-data';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {
  cars: Car[] = CARS;
}
