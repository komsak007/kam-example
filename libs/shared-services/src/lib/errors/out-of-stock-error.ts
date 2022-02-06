export class OutOfStockError extends Error {
  constructor(...params: any) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, OutOfStockError);
    }

    this.name = 'OutOfStockError';
  }
}
