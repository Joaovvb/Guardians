import { Component, Inject, Input, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-details.component.html',
  styleUrl: './cars-details.component.scss'
})
export class CarsDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { car: Car[] },
    private dialogRef: MatDialogRef<CarsDetailsComponent>
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
