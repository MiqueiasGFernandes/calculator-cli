import { program } from 'commander';
import { injectable } from 'tsyringe';
import CalculateService from '../services/Calculate.service';

@injectable()
export default class CalculateController {
  private readonly calculateService: CalculateService;

  constructor(
    calculateService: CalculateService,
  ) {
    this.calculateService = calculateService;
  }

  calc(): void {
    try {
      program
        .argument('<expression>', 'Set a calc expression: Example: "(1 + 1) / 2"')
        .action((expression) => {
          console.log(`Result from expression "${expression}" is: ${this.calculateService.calc(expression)}`);
        });
      program.parse();
    } catch ({ message }) {
      console.log(message);
    }
  }
}
