const appInit = () => {
  return () => {
    return new Promise(
      (resolve) => {
        console.log('resolved');


        resolve();
      }
    );
  };
};

export { appInit };


