export class ProductNotFound extends Error {
  constructor(...params: any) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProductNotFound);
    }

    this.name = 'ProductNotFound';
  }
}
