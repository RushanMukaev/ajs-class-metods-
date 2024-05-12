import Magician from '../js/Magician.js'

test('Magician', () => {
	expect(new Magician('Petr')).toEqual({
        name: 'Petr',
		type: 'Magician',
		health: 100,
		level: 1,
        attack: 10,
        defence: 40
	});
});