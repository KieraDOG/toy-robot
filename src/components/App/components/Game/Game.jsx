import Commands from "./components/Commands";
import Provider from "./components/Provider";
import Stage from "./components/Stage";

const Game = () => (
  <Provider>
    <main className="p-12 flex justify-between items-center">
      <Stage />
      <Commands />
    </main>
  </Provider>
);

export default Game;
