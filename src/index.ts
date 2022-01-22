import 'reflect-metadata';

import { container } from 'tsyringe';

import DiConfig from './config/Di.config';
import CalculateController from './controllers/Calculate.controller';

DiConfig.init();

const controller = container.resolve<CalculateController>('CalculateController');

controller.calc();
