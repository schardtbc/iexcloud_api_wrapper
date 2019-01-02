import { Greeter } from './index';
test('My Greeter', () => {
  expect(Greeter('Bruce')).toBe('Hello Bruce');
});