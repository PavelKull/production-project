import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        // @ts-ignore
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
