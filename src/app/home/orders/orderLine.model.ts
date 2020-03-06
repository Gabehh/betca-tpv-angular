export interface OrderLine {
  articleId: string;
  requiredAmount: number;
  finalAmount?: number;
}
