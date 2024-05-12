import Daemon from '../js/Daemon'

test('level up test', () => {

    const daemon = new Daemon('Petr');
    daemon.levelUp();



	expect(daemon).toEqual({
		name: 'Petr',
		type: 'Daemon',
		health: 100,
		level: 2,
		attack: 12,
		defence: 48
	});
});

test('level up test error', () => {

    const daemon = new Daemon('Petr');
	daemon.health = 0;

	expect(() => {
		daemon.levelUp()
	}).toThrow('Нельзя повысить левел умершего');
});

test('damage test', () => {

    const daemon = new Daemon('Petr');
    daemon.damage(20);



	expect(daemon).toEqual({
		name: 'Petr',
		type: 'Daemon',
		health: 88,
		level: 1,
		attack: 10,
		defence: 40
	});
});

test('damage test error', () => {

    const daemon = new Daemon('Petr');
	daemon.health = 0;
    daemon.damage(20);



	expect(daemon).toEqual({
		name: 'Petr',
		type: 'Daemon',
		health: 0,
		level: 1,
		attack: 10,
		defence: 40
	});
});