// The Command Pattern Use Case Example. A smart Light Switch

import Light from './light';
import Switch from './switch';
import SwitchOnCommand from './switch-on-command';
import SwitchOffCommand from './switch-off-command';

// Create a receiver
const LIGHT = new Light();

// Create Commands
const SWITCH_ON = new SwitchOnCommand(LIGHT);
const SWITCH_OFF = new SwitchOffCommand(LIGHT);

// Register the commands with the Invoker
const SWITCH = new Switch();
SWITCH.register('ON', SWITCH_ON);
SWITCH.register('OFF', SWITCH_OFF);

// Execute the commands that are registered on the Invoker
SWITCH.execute('ON');
SWITCH.execute('OFF');
SWITCH.execute('ON');
SWITCH.execute('OFF');

SWITCH.showHistory();

// Replay last two executed commands
SWITCH.replayLast(2);
