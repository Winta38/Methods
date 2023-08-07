import Character from '../app';
import Bowman from '../bowman';

test('parent class Character', () => {
    const input = new Character('Max', 'Bowman');
    const expected = {
        name: 'Max', type: 'Bowman', health: 100, level: 1,
    };

    expect(input).toEqual(expected);
});

test('number of characters in the name', () => {
    expect(() => {
        const ch1 = new Character('Jhofastasthewind', 'Bowman');
    }).toThrowError('имя должно содержать от 2 до 10 символов');
});

test('level up', () => {
    const bowman = new Bowman('Max');
    const expected = {
        name: 'Max',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    };
    bowman.levelUp();
    expect(bowman).toEqual(expected);
});

test('check сharacter error type', () => {
    expect(() => {
        const bowman = new Bowman('Max');
        bowman.level = 0;
        bowman.levelUp();
    }).toThrowError('Нельзя повысить левел умершего');
});

test('character life after damage', () => {
    const bowman = new Bowman('Max');
    bowman.damage(10);
    const expected = {
        name: 'Max',
        type: 'Bowman',
        health: 92.5,
        level: 1,
        attack: 25,
        defence: 25,
    };

    expect(bowman).toEqual(expected);
});

test('error output when health < 0', () => {
    expect(() => {
        const bowman = new Bowman('Max');
        bowman.health = -1;
        bowman.damage(10);
    }).toThrowError('Нельзя нанести урон умершему');
});