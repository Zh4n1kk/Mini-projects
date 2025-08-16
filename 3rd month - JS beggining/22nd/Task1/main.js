        const moodArray = ['Злой','Спокойный','Счастливый','Игривый','Грустный']

        const catCleo = {
            name: "Клео",
            age: 7,
            color: "черно-белый",
            mood: "Злой",
            
            getInfo: function() {
                return `Кот: ${this.name}, возраст: ${this.age}, цвет: ${this.color}, настроение: ${this.mood}`;
            },
            
            changeMood: function() {
                this.mood = moodArray[Math.floor(Math.random() * moodArray.length)];
            }
        };

        const house = {
            address: "ул. Вильямса, 1",
            floors: 1,
            area: 180,
            lightsOn: false,

            getInfo: function() {
                return `Дом на ${this.address}, этажей: ${this.floors}, площадь: ${this.area} м², освещение: ${this.lightsOn ? "Вкл" : "Выкл"}`;
            },

            toggleLights: function() {
                if (this.lightsOn == true) {
                    this.lightsOn = false
                } else if (this.lightsOn !== true) {
                    this.lightsOn = true
                }
            }
        };

        const car = {
            brand: 'Nissan',
            model: 'Qashqai',
            year: '2021',
            engineOn: false,
        
            // Метод для включения/выключения двигателя
            turnKey() {
                this.engineOn = !this.engineOn;
            },
        
            // Метод для получения информации о машине
            getInfo() {
                return `${this.brand} ${this.model} ${this.year}, двигатель: ${this.engineOn ? "Вкл" : "Выкл"}`;
            },
        };
        
// catCleo
alert(catCleo.getInfo());  
alert('Смена настроения!')
catCleo.changeMood();      
alert(catCleo.getInfo());  

// House
alert(house.getInfo()); 
alert('Включаем свет!')
house.toggleLights();      
alert(house.getInfo()); 

// Car
alert(car.getInfo());      
alert('Заводим двигатель!')
car.turnKey();             
alert(car.getInfo());      
