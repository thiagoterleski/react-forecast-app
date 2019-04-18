export const timeout = ms => new Promise(res => setTimeout(res, ms));

export const to = promise => {
  return promise
    .then(data => {
      return [null, data];
    })
    .catch(err => [err]);
};

export const isProductionEnv = !(
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
);