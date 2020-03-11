export interface CashierClosureSearch {
  openingDate: Date;
  initialCash: number;
  salesCard: number;
  salesCash: number;
  usedVouchers: number;
  deposit: number;
  withdrawal: number;
  lostCard: number;
  finalCash?: number;
  comment: string;
  closureDate?: Date;
}
