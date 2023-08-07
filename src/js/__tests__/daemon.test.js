import Daemon from '../daemon';

test('создание класса наследника Daemon', () => {
    const daemon = new Daemon('Lux');
    const expected = {
        name: 'Lux',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(daemon).toEqual(expected);
});