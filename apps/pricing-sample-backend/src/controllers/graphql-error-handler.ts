export function graphQLErrorHandler(err: Error): void {
  const errType = err.name;
  console.log(
    `================================================ ${errType} ======================================================`
  );
  console.log('err: ', err);
  switch (errType) {
    default:
      throw err;
  }
}
