import { CarType } from "./enum/car-type.enum";
import { Car } from "./models/car.model";

export const CARS: Car[] = [
  {
    name: CarType.MINI_COOPER,
    type: 'Hatch compacto',
    engine: 'Motor 1.8',
    seats: 5,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.FORD_KA,
    type: 'Hatch médio',
    engine: 'Motor 1.0',
    seats: 5,
    image: '../../../assets/car-pictures/svg/ford-ka.svg',
  },
  {
    name: CarType.DUSTER,
    type: 'SUV Compacta',
    engine: 'Motor 1.6',
    seats: 5,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.JEEP_COMPASS,
    type: 'SUV Médio',
    engine: 'Motor 1.8',
    seats: 7,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.TORO,
    type: 'Picape média',
    engine: 'Motor 1.6',
    seats: 5,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.T_CROSS,
    type: 'Crossover',
    engine: 'Motor 1.6',
    seats: 5,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.STRADA,
    type: 'Picape leve',
    engine: 'Motor 1.4',
    seats: 2,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.SAVEIRO,
    type: 'Picape leve-média',
    engine: 'Motor 1.6',
    seats: 5,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.VERSA,
    type: 'Sedan médio',
    engine: 'Motor 1.4',
    seats: 5,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.JETTA,
    type: 'Sedan grande',
    engine: 'Motor 2.0.8',
    seats: 5,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.DOBLO,
    type: 'Minivan',
    engine: 'Motor 1.8',
    seats: 7,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.FIORINO,
    type: 'Utilitário leve',
    engine: 'Motor 1.6',
    seats: 2,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  },
  {
    name: CarType.PARTNER,
    type: 'Utilitário',
    engine: 'Motor 1.6',
    seats: 2,
    image: '../../../assets/car-pictures/svg/miniCooper.svg',
  }
];
