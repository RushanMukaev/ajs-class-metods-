import Swordsman from '../js/Swordsman.js'

test('Swordsman', () => {
	expect(new Swordsman('Petr')).toEqual({
        name: 'Petr',
		type: 'Swordsman',
		health: 100,
		level: 1,
        attack: 40,
        defence: 10
	});
});