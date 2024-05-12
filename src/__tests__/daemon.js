import Daemon from '../js/Daemon'

test('Daemon', () => {
	expect(new Daemon('Petr')).toEqual({
		name: 'Petr',
		type: 'Daemon',
		health: 100,
		level: 1,
        attack: 10,
        defence: 40
	});
});
