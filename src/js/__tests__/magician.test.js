import Magician from '../magician';

test('создание класса наследника Magician', () => {
    const swordsman = new Magician('Toro');
    const expected = {
        name: 'Toro',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(swordsman).toEqual(expected);
});