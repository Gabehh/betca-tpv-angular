export interface StockAlarm {
  id: string;
  Description: string;
  Article: string;
  provider?: string;
  warning: number;
  critical: number;
}
