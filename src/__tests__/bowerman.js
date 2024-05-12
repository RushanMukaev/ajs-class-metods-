import Bowerman from '../js/Bowerman.js'

test('Bowerman', () => {
	expect(new Bowerman('Petr')).toEqual({
        name: 'Petr',
		type: 'Bowerman',
		health: 100,
		level: 1,
        attack: 25,
        defence: 25,
	});
});