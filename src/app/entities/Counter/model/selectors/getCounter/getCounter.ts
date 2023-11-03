import { CounterSchema } from '../../types/counterSchema';

export const getCounter = (state: CounterSchema) => state.counter;
