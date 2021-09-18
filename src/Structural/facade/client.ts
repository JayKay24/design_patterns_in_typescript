import GameAPI from './game-api';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function facadeExample() {
  const gameAPI = new GameAPI();

  const user = { user_name: 'sean' };
  const userId = gameAPI.registerUser(user);

  await sleep(500);

  gameAPI.submitEntry(userId, 5);

  await sleep(500);

  console.log();
  console.log(`${'-'.repeat(4)} GameState Snapshot ${'-'.repeat(4)}`);
  console.log(gameAPI.gameState());

  await sleep(1000);

  const HISTORY = gameAPI.getHistory();

  console.log();
  console.log(`${'-'.repeat(4)} Reports History ${'-'.repeat(4)}`);
  Object.keys(HISTORY).forEach((key) => {
    console.log(`${key}: ${HISTORY[key][0]} : ${HISTORY[key][1]}`);
  });

  await sleep(1000);

  console.log();
  console.log(`${'-'.repeat(4)} User Balance ${'-'.repeat(4)}`);
  console.log(`${user.user_name} : ${gameAPI.getBalance(userId)}`);

  await sleep(1000);

  console.log();
  console.log(`${'-'.repeat(4)} GameState Snapshot ${'-'.repeat(4)}`);
  console.log(gameAPI.gameState());
}

facadeExample();
