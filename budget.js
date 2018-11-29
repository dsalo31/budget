var money = prompt("Ваш бюджет на месяц?", '');
var time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timedata:time ,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: false
};


let e1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    e2 = prompt("Во сколько обойдется?", ''),
    e3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    e4 = prompt("Во сколько обойдется?", '');

appData.expenses.e1 = e2;
appData.expenses.e3 = e4;

alert(appData.budget / 30);