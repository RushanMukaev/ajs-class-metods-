export default class Character {
    constructor(name, type) {
        const error = (a) => {throw new Error(a)};
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        
        name.length < 2 || name.length > 10 ?  error('Неверная длина имени') : this.name = name;
        !types.includes(type) ? error('Неверный тип персонажа') : this.type = type;

        this.health = 100;
        this.level = 1;
		this.attack = undefined;
		this.defence = undefined;
    }
    levelUp() {
        if(this.health === 0) {
            throw new Error("Нельзя повысить левел умершего")
        } else {
            this.level += 1;
            this.health = 100;
            this.attack *= 1.2;
            this.defence *= 1.2;
        }
    }
    damage(points) {
        this.health !== 0 ? this.health -= points * (1 - this.defence / 100) : this.health = 0
    }
}
