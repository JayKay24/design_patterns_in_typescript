import ISWitchCommand from './iswitch-command';
import Light from './light';

export default class SwitchOnCommand implements ISWitchCommand {
  #light: Light;

  constructor(light: Light) {
    this.#light = light;
  }

  execute(): void {
    this.#light.turnOn();
  }
}
