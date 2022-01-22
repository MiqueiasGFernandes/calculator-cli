import 'reflect-metadata';

import { container } from 'tsyringe';
import CalculateController from '../controllers/Calculate.controller';
import CalculateService from '../services/Calculate.service';

export default class DiConfig {
  static init(): void {
    container
      .register<CalculateController>('CalculateController', { useClass: CalculateController })
      .register<CalculateService>('CalculateService', { useClass: CalculateService });
  }
}
