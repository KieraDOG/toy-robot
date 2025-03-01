import modulo from "../modulo";

const FACES = ["North", "East", "South", "West"];
const turn = (face, di) => {
  const currentIndex = FACES.indexOf(face);
  const nextIndex = modulo(currentIndex + di, FACES.length);

  return FACES[nextIndex];
};

export default turn;
