import Undead from '../js/Undead.js'

test('Undead', () => {
	expect(new Undead('Petr')).toEqual({
        name: 'Petr',
		type: 'Undead',
		health: 100,
		level: 1,
        attack: 25,
        defence: 25
	});
});