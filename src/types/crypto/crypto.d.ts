export interface IResponse {
  success: boolean;
  data?: {
    from: string;
    from_id?: number;
    to: string;
    to_id?: number;
    amount: number;
    converted_amount: number;
    conversion_rate: number;
    last_updated: number;
    last_updated_readable: string;
  };
  error?: {
    code: number;
    message: string;
  };
}

export interface Quote {
  cryptoId: number;
  symbol: string;
  price: number;
  lastUpdated: number;
}

export interface Data {
  symbol: string;
  id: string;
  name: string;
  amount: number;
  last_updated: number;
  quote: Quote[];
}

export interface Status {
  timestamp: string;
  error_code: string;
  error_message: string;
  elapsed: string;
  credit_count: number;
}

export interface ApiResponse {
  data: Data;
  status: Status;
}
