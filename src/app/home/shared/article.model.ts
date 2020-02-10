export interface Article {
  code: string;
  description: string;
  retailPrice: number;
  reference?: string;
  stock?: number;
  provider?: string;
  discontinued?: boolean;
  registrationDate?: Date;
}
