// async - await

// const getImagesPromesa = () =>
//   new Promise((resolve) => resolve("https://google.com"));

const getImagesPromesa = async () => {
  try {
    return "https://google.com";
  } catch (error) {
    console.error(error);
  }
};

getImagesPromesa().then(console.log);
