import Undead from '../undead'

test('создание класса наследника Undead', () => {
    const undead = new Undead('Torn');
    const expected = {
        name: 'Torn',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(undead).toEqual(expected);
});