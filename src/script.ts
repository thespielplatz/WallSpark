console.info('WLED UDP Control!')

import GameEngine from './lib/GameEngine/GameEngine'
import { Config } from './lib/Config'

import MovingPixel from './lib/animations/MovingPixel'

const config = new Config()
const gameEngine = new GameEngine(config.config)

gameEngine.addGameObject(new MovingPixel({
  x: 0,
  y: 0,
  width: config.config.width,
  height: config.config.height,
}))

;(async () => {
  await gameEngine.run()
})()
