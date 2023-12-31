export default class Character {
    constructor(name, type) {
      if (name.length < 2 || name.length > 10) {
        throw new Error('имя должно содержать от 2 до 10 символов');
      }
  
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (types.includes(type) === false) {
        throw new Error('тип не установлен');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    }
  
    levelUp() {
      if (this.level !== 0) {
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
      } else {
        throw new Error('Нельзя повысить левел умершего');
      }
    }
  
    damage(points) {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      } else {
        throw new Error('Нельзя нанести урон умершему');
      }
    }
  }