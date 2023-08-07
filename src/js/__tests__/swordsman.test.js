import Swordsman from '../swordsman';

test('создание класса наследника Swordsman', () => {
    const swordsman = new Swordsman('Mag');
    const expected = {
        name: 'Mag',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(swordsman).toEqual(expected);
});