import { CarType } from "../enum/car-type.enum";

export interface Car {
  name: CarType;
  type: string;
  engine: string;
  seats: number;
  image: string;
}
