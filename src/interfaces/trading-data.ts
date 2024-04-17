export interface TradingData {
  id: number;
  symbol: string;
  price: number;
  quantity: number;
  date: string;
  transaction_type: string;
  market: string;
  status: string;
  broker: string;
  open_price: number;
  high_price: number;
  low_price: number;
  closing_price: number;
  net_change: number;
  currency: string;
}
