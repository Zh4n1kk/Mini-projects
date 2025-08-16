const Griffin = {
    hp: 2000, // Жизненная энергия
    defense: 120, // Защита
    str: 150, // Сила
    weapon: 0, // Оружие
    getStatus: function () {
        return `Griffin: ${this.hp} HP`;
    },
    changeHp: function (damage) {
        if (damage < 0) {
            // DMG
            this.hp += damage;
        } else if (damage > 0) {
            // HEAL
            this.hp += damage;
        }
        if (this.hp < 0) {
            this.hp = 0;
        }
    },
    attack: function () {
        const countDMG = -(this.str + this.weapon - Witcher.defense);
        if (Witcher.hp >= 1) {
            Witcher.changeHp(countDMG);
            return `Griffin dealt ${-countDMG} dmg! ${Witcher.getStatus()}`;
        }
    },
    fly: function () {
        return `Griffin decided to fly`;
    },
};

const Witcher = {
    hp: 1000,
    defense: 100,
    str: 120,
    weapon: 250,

    getStatus: function () {
        return `Witcher: ${this.hp} HP`;
    },
    changeHp: function (damage) {
        if (damage < 0) {
            // DMG
            this.hp += damage;
        } else if (damage > 0) {
            // HEAL
            this.hp += damage;
            if (this.hp > 1000) {
                this.hp = 1000;
            }
        }
        if (this.hp < 0) {
            this.hp = 0;
        }
    },
    attack: function () {
        const chanceToHit = game.getRandomNumber(1, 100);
        const countDMG = -(this.str + this.weapon - Griffin.defense);
        if (chanceToHit <= 75) {
            if (Griffin.hp >= 1) {
                Griffin.changeHp(countDMG);
                return `Witcher dealt ${-countDMG} dmg! ${Griffin.getStatus()} `;
            }
        } else if ((chanceToHit) => 75) {
            return `Witcher missed!`;
        }
    },

    drinkSwallow: function () {
        const healCost = game.getRandomNumber(50, 100);
        this.changeHp(healCost);
        return `+${healCost}HP | ${Witcher.getStatus()}`;
    },
    getIgniDamage: function () {
        return -game.getRandomNumber(150, 200);
    },
    listenToJaskier: function () {
        const phrases = [
            "Хватит валять дурака, пора уже тушить пожар в этой программе.",
            "Когда скромняга бард, отдыхал от дел, с Геральтом из Ривии, он песню эту пел...",
            "Трус умирает сто раз. Мужественный человек – лишь однажды.",
            "Людям для жизни необходимы три вещи: еда, питье и сплетни.",
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
    },
};

const game = {
    getRandomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    startGame: function () {
        let swallowRounds = 3; // Заряды зелья 'Ласточки'
        while (Griffin.hp > 0 && Witcher.hp > 0) {
            if (Witcher.hp > 0) {
                const askUser = prompt(
                    `1 - Атака\n2 - Знак Игни!\n3 - Слушать Лютика\n4 - Бежать\n5 - Выпить зелье "Ласточка"`
                );
                if (askUser === null) {
                    return `Отмена`;
                    break;
                }
                if (askUser == 1) {
                    console.log(Witcher.attack());
                } else if (askUser == 2) {
                    const castFire = Witcher.getIgniDamage();
                    Griffin.changeHp(castFire);
                    console.log(
                        `Igni's fire can burn everything! You dealt ${-castFire}dmg, ${Griffin.getStatus()}`
                    );
                } else if (askUser == 3) {
                    console.log(Witcher.listenToJaskier());
                } else if (askUser == 4) {
                    return `You decided to run!\n${Witcher.getStatus()}\n${Griffin.getStatus()}`;
                } else if (askUser == 5) {
                    if (swallowRounds > 0) {
                        console.log(Witcher.drinkSwallow());
                        swallowRounds--;
                    } else {
                        console.log(`You used all your potions`);
                        console.log(
                            `===========================================`
                        );
                        continue;
                    }
                } else {
                    continue;
                }
            }
            console.log(`===========================================`);
            if (Griffin.hp > 0) {
                const griffinAction = this.getRandomNumber(0, 100);
                if (griffinAction > 50) {
                    console.log(Griffin.attack());
                } else if (griffinAction < 50) {
                    console.log(Griffin.fly());
                }
            }
            console.log(`===========================================`);
            if (Griffin.hp == 0) {
                return `Griffin is lost!`;
            }
            if (Witcher.hp == 0) {
                return `Witcher is lost!`;
            }
        }
    },
};

console.log(game.startGame());
