import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from '../../components/menu/menu.component';
import { CarsComponent } from "../../components/cars/cars.component";
import { FilterComponent } from '../../components/filter/filter.component';
import { CARS } from '../../components/cars/car-data';
import { Car } from '../../components/cars/models/car.model';
import { CarsDetailsComponent } from '../../components/cars/cars-details/cars-details.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MenuComponent,
    CarsComponent,
    CarsDetailsComponent,
    FilterComponent,
    CarsDetailsComponent,
    MatDialogModule,
    CommonModule,
    FilterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cars: Car[] = CARS;
  searchControl = new FormControl<string | null>('');
  filteredCars: Car[] = CARS;
  selectedCar: Car | null = null;

  constructor(public dialog: MatDialog) {
    this.searchControl.valueChanges
      .pipe(debounceTime(800))
      .subscribe(value => {
        this.filterCars(value);
      });
  }

  filterCars(searchTerm: string | null) {
    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      this.filteredCars = CARS.filter(car =>
        car.name.toLowerCase().includes(lowerCaseTerm)
      );
    } else {
      this.filteredCars = CARS;
    }
    this.openCarDetails();
  }

  clearSearch() {
    this.searchControl.setValue('');
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

  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      panelClass: 'full-screen-dialog'
    });

    dialogRef.componentInstance.filtersApplied.subscribe((filteredCars: Car[]) => {
      this.cars = filteredCars;
    });
  }
}
