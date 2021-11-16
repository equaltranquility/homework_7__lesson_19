const a = +prompt('Введите первое число');
const operator = prompt('Введите знак');
const b = +prompt('Введите второе число');
(isNaN(a) || isNaN(b)) ? console.log('Некорректный ввод чисел') :
    (!a) ? console.log('Первое число не введено') :
        (!operator) ? console.log('Не введен знак') :
            (!b) ? console.log('Второе число не указано') :
                (operator==='+') ? console.log(a + b) :
                (operator==='-') ? console.log(a - b) :
                (operator==='/') ? console.log(a / b) :
                (operator==='*') ? console.log(a * b) :
                    console.log('Программа не поддерживает такую операцию');
