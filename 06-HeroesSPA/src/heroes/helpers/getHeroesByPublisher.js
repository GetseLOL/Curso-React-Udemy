import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher = "Marvel Comics") => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher))
    throw new Error(
      `El ${publisher} que mando no existe en nuestra base de datos`
    );

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
