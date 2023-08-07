import Bowman from '../bowman';

test('создание класса наследника Bowman', () => {
    const bowman = new Bowman('Max');
    const expected = {
        name: 'Max',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(bowman).toEqual(expected);
});

test('checking  by type for an error', () => {
    expect(() => {
        const ch1 = new Bowman('Max', 'Bowmanus');
    }).toThrowError('тип не установлен');
});