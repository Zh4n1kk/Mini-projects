const initialList = [
    "John",
    "Jack",
    "Harry",
    "Mario",
    "Link",
    "Zelda",
    "Bowser",
];

const host = {
    guestList: [],
    
    setGuestList: function (list) {
        this.guestList = [];
        
        for (let i = 0; i < list.length; i++) {
            if (Math.random() < 0.80) {
                this.guestList.push(list[i]);
            }
        }
        // Вывод в консоль итогового списка гостей
        console.log(`Initially, the guest list had: ${list.length} names.`);
        console.log(`After Host decided, only ${this.guestList.length} names were left.`);
        console.log(`Host decided on: ${this.guestList.join(', ')} to come to the party.`);
    },
};

host.setGuestList(initialList)