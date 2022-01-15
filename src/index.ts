import { Command } from 'commander';

import DiConfig from './config/Di.config';

DiConfig.init();

const program = new Command();

program
  .requiredOption('-v', '--value', 'Set a base value')
  .option('-s', '--subtract', 'Subtract value from base number')
  .option('-a', '--add', 'Add value to base number')
  .option('-d', '--divide', 'Divide base number by value');

program.parse(process.argv);

program.opts();
