import Zombie from '../js/Zombie'

test('Zombie', () => {
	expect(new Zombie('Petr')).toEqual({
        name: 'Petr',
		type: 'Zombie',
		health: 100,
		level: 1,
        attack: 40,
        defence: 10
	});
});