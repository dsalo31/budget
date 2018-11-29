var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: {money},
    timedata:{time} ,
    expenses: {
        e1: prompt("Введите обязательную статью расходов в этом месяце"),
        e2: prompt("Во сколько обойдется?"),
    },
    optionalExpenses,
    income,
    savings: false
};

