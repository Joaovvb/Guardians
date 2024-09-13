import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CARS } from '../cars/car-data';
import { CarsDetailsComponent } from '../cars/cars-details/cars-details.component';
import { Car } from '../cars/models/car.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  carTypes: string[] = ['Hatch compacto', 'Hatch médio', 'SUV compacto', 'SUV médio', 'SUV grande', 'Crossover', 'Coupé', 'Picape leve', 'Picape leve-média', 'Picape média', 'Sedan Compacto', 'Sedan Médio', 'Sedan Grande', 'Minivan', 'Utilitário leve', 'Utilitário'];
  engines: string[] = ['Motor 1.0', 'Motor 1.4', 'Motor 1.6', 'Motor 1.8', 'Motor 2.0'];
  seats: number[] = [2, 3, 4, 5, 6, 7];

  selectedCarTypes: string[] = [];
  selectedEngines: string[] = [];
  selectedSeats: number[] = [];
  filteredCars: Car[] = [];

  @Output() filtersApplied = new EventEmitter<Car[]>();

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<FilterComponent>) { }

  toggleSelection<T>(selectionList: T[], item: T): void {
    const index = selectionList.indexOf(item);
    if (index === -1) {
      selectionList.push(item);
    } else {
      selectionList.splice(index, 1);
    }
  }

  toggleCarType(carType: string) {
    this.toggleSelection(this.selectedCarTypes, carType);
  }

  toggleEngine(engine: string) {
    this.toggleSelection(this.selectedEngines, engine);
  }

  toggleSeat(seat: number) {
    this.toggleSelection(this.selectedSeats, seat);
  }

  filterByCarType(cars: Car[]): Car[] {
    return this.selectedCarTypes.length > 0
      ? cars.filter(car => this.selectedCarTypes.includes(car.type))
      : cars;
  }

  filterByEngine(cars: Car[]): Car[] {
    return this.selectedEngines.length > 0
      ? cars.filter(car => this.selectedEngines.includes(car.engine))
      : cars;
  }

  filterBySeats(cars: Car[]): Car[] {
    return this.selectedSeats.length > 0
      ? cars.filter(car => this.selectedSeats.includes(car.seats))
      : cars;
  }

  applyFilters() {
    let filteredCars = CARS;
    filteredCars = this.filterByCarType(filteredCars);
    filteredCars = this.filterByEngine(filteredCars);
    filteredCars = this.filterBySeats(filteredCars);

    this.filteredCars = filteredCars;
    this.filtersApplied.emit(filteredCars);
    this.openCarDetails();
  }

  clearFilters() {
    this.selectedCarTypes = [];
    this.selectedEngines = [];
    this.selectedSeats = [];
    this.filteredCars = CARS;

    this.filtersApplied.emit(this.filteredCars);
  }

  openCarDetails() {
    this.dialog.open(CarsDetailsComponent, {
      data: { car: this.filteredCars },
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      panelClass: 'full-screen-dialog'
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
