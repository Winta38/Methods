import Zombie from '../zombie';

test('создание класса наследника Zombie', () => {
    const zombie = new Zombie('Lu');
    const expected = {
        name: 'Lu',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(zombie).toEqual(expected);
});