export interface Product {
  id: string;
  name: string;
  brandId: string;
  price: number;
  costPrice: number;
  withIva: boolean;
  percentageOfGain: number;
  withDiscount: boolean;
  percentageOfDiscount?: number;
  forDivision: boolean;
  numberOfDivisions?: number;
}
