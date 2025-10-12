const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //!I want my money
    //resolve(100)
    reject("He's dead");
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`Mi dinero está de regreso ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log("Continuar con mi vida");
  });
