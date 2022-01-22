import { injectable } from 'tsyringe';

import Eval from 'math-expression-evaluator';

@injectable()
export default class CalculateService {
  calc(expresion: string): number {
    return Number(Eval.eval(expresion));
  }
}
