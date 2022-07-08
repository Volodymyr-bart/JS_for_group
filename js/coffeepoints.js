
/*Створити класс і екземляр який матиме наступний вигляд

class CoffeePointsProffesional { 
   name
   location
   coffeeeQuipment{
        coffeemachine{
            this.model = Rancilio/Astoria/Iberital
            this.serialNumber = 'S/N' ....
            this.repairs = {
                [Дата, Ім'я техніка, Які запчастини були використані(якщо ні то -), Які роботи виконувалися]  чи {}      
                }

            }
        grinder [fiorenzato/obel/eureka]
            fiorenzato {
                this.serialNumber = 'S/N'
                Формат зберігання даних
                [08.07.22, 100, 231, 501,]
                [date, statistic-of-day, statistic-of-weeks, statistic-total-1] чи  {}  
                [date, statistic-of-day, statistic-of-weeks, statistic-total-2] чи  {} 

                Добавляється новий масив при знятті статистики з кавової точки                
                ...
                1) добавити метод обрахування і виведення користувачу statistic-total = statistic-total-2 - statistic-total-1  чи  {} 
                2) добавити метод заміни будь якого значення statistic-of-day, statistic-of-weeks, statistic-total-1,  чи  {} 
                }

            obel {
                this.serialNumber = 'S/N'
                [08.07.22, 100, 231, 501,]
                [date, statistic-one-portion-1, statistic-two-portion-1]
                [date, statistic-one-portion-2, statistic-two-portion-2]
                Добавляється новий масив при знятті статистики з кавової точки
                ...
                1) добавити метод обрахування statistic-one-portion = tatistic-one-portion-2 - statistic-one-portion-1,
                2) добавити метод обрахування statistic-two-portion = tatistic-two-portion-2 - statistic-two-portion-1,
                3) Обрахувати і вивести користувачу результат  statistic = statistic-one-portion + statistic-two-portion
                2) добавити метод заміни будь якого значення statistic-one-portion, statistic-two-portion-2
                }
                }
   
   }

*/
class CoffeePoints {
    constructor({name = '', location = ''} = {}) {
        this.name = name;
        this.location = location; 
        console.log(`Build new coffee point. Name ${this.name} location ${this.location}`);
    }

    changeNameCoffeePoint(name) {
        this.name = name;        
    }

    changeLocationCoffeePoint(location) {
        this.location = location;        
    }
    
    getInfoAboutCoffeePoint() {        
        return console.log(this);
    }
    
    // }
}

class CoffeePointsProffesional extends CoffeePoints {
    constructor(config) {
        super(config);
    }
    addCoffeeGrinder(model) {
        // const modelToLowerCase = model.toLowerCase();
        switch (model.toLowerCase()) {
            case 'fiorenzato':
                console.log(`The model ${model} is create `);
                break;

            case 'obel':
                console.log(`The model ${model} is create `);
                break;
            
            case 'eureka':
                console.log(`The model ${model} is create `);
                break;
            default:
                console.log(`Error. The model ${model} isn't find `);;
        }
    }

}


// ================================================================================

// const coffeePoint_1 = new CoffeePointsProffesional();
// coffeePoint_1.getInfoAboutCoffeePoint();
// coffeePoint_1.addCoffeeGrinder('f54');
// coffeePoint_1.addCoffeeGrinder('fiorenzato');
// coffeePoint_1.addCoffeeGrinder('FiorenZato')
// console.log(coffee_point_1);