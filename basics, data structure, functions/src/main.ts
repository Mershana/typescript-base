import "./style.css";

// Типы данных в TypeScript
/* №1⊗jstsPmBsDT
Сделайте три переменные: одну строковую, одну числовую и одну логическую. */

/* let testNum: number = 123;
console.log(testNum);

let testStr: string = 'abc';
console.log(testStr);

let testBol: boolean = true;
console.log(testBol); */

// Изменение значений
// Операции над данными в TypeScript
/* №1⊗jstsPmBsOp
Не запуская код определите каким будет результат выполнения кода: */
/* let test1: number = 123;
let test2: number = 456;
console.log(test1 + test2); */ //579

/* №2⊗jstsPmBsOp
Не запуская код определите каким будет результат выполнения кода: */
/* let test1: string = '123';
let test2: string = '456';

console.log(test1 + test2); */ //'123456'

/* №3⊗jstsPmBsOp
Не запуская код определите каким будет результат выполнения кода: */
/* let test1: string = '123';
let test2: string = '456';

let test3: number = test1 + test2;
console.log(test3); */ //ошибка тип string не может быть назначен для типа number

/* №4⊗jstsPmBsOp
Не запуская код определите каким будет результат выполнения кода: */
/* let test1: number = 123;
let test2: number = 456;

let test3: string = test1 + test2;
console.log(test3); */ //ошибка - тип number не может быть назначен для типа string

/* №5⊗jstsPmBsOp
Не запуская код определите каким будет результат выполнения кода: */
/* let test1: number = 123;
let test2: number = 456;

let test3: string = test1 + ' ' + test2;
console.log(test3); */ // '123 456'

/* №6⊗jstsPmBsOp
Не запуская код определите каким будет результат выполнения кода: */
/* let test1: number = 123;
let test2: number = 456;
let test3: string = '!';

let test4: string = test1 + test2 + test3;
console.log(test4);  */ // string: '579!;

/* №7⊗jstsPmBsOp
Не запуская код определите каким будет результат выполнения кода: */
/* let test1: number = '123';
let test2: number = '456';

console.log(test1 + test2); */ // ошибка - тип string не может быть назначен для типа number

/* №8⊗jstsPmBsOp
Не запуская код определите каким будет результат выполнения кода: */
/* let test1: number = +'123';
let test2: number = +'456';

console.log(test1 + test2); */ //number: 579

// Массивы в TypeScript
/* №1⊗jstsPmBsAr
Укажите тип данных в следующем массиве:
let arr = [1, 2, 3, 4, 5]; */

/* let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr[0]); */

// Второй способ
/* Существует альтернативный способ объявления массива. В нем мы указываем ключевое слово Array, а затем в угловых скобках указывается тип данных. Смотрите пример: */
/* №2⊗jstsPmBsAr
Укажите тип данных в следующем массиве:
let arr = [1, 2, 3, 4, 5]; */

/* let arr: Array<number> = [1, 2, 3, 4, 5];
console.log(arr[3]); */

// Объекты в TypeScript
/* №1⊗jstsPmBsOb
Не запуская код определите каким будет результат выполнения кода: */

/* let date = {year: 2025, month: 12, day: 31};
date.isLeap = true;
console.log(date); */ // ошибка ключа isLeap не сущеуствет в типе

/* №2⊗jstsPmBsOb
Не запуская код определите каким будет результат выполнения кода: */
/* let date = {year: 2025, month: 12, day: 31};
date = {year: 2025, month: 12}; */ //свойство day отстуствует в типе

/* №3⊗jstsPmBsOb
Не запуская код определите каким будет результат выполнения кода: */
/* let date = {year: 2025, month: 12, day: 31};
date = {year: 2025, month: 12, date: 7}; */ //date:7 не существует в типе

// Циклы в TypeScript
/* №1⊗jstsPmBsLp
Перепишите следующий код через TypeScript:
let res = 0;
for (let i = 0; i < 100; i++) {
	res += i;
}
console.log(res); */

/* let res: number = 0;
for (let i:number = 0; i < 100; i++){
  res += i;
}
console.log(res); */

/* №2⊗jstsPmBsLp
Перепишите следующий код через TypeScript:
let i = 0;
let res = 0;
while (i < 100) {
	res += i;
	i++;
}
console.log(res); */

/* let i: number = 0;
let res: number = 0;
while(i < 100){
  res += i;
  i++;
}
console.log(res); */

/* №3⊗jstsPmBsLp
Перепишите следующий код через TypeScript:
let arr = [1, 2, 3, 4, 5];
let res = 0;

for (let elem of arr) {
	res += elem;
}

console.log(res); */

/* let arr :number[] = [1, 2, 3, 4, 5];
let res: number = 0;

for (let elem of arr){
  res += elem;
}
console.log(res); */

/* №4⊗jstsPmBsLp
Перепишите следующий код через TypeScript: */
/* let obj = {a: 1, b: 2, c: 3};
let res = 0;

for (let key in obj) {
	let elem = obj[key];
	res += elem;
}

console.log(res); */

/* let obj: Record<string, number> = { a: 1, b: 2, c: 3 }
let res: number = 0;

for (let key in obj) {
  res += obj[key]
}
console.log(res);
 */

// Функции в TypeScript

/* №1⊗jstsPmBsFn
Укажите тип результату и параметрам функции: */
/* function sum(x: number, y: number): number {
	return x + y;
} */

/* №2⊗jstsPmBsFn
Укажите тип результату и параметрам функции: */
/* function sum(arr: number[]): number {
  let res: number = 0;

  for (let num of arr) {
    res += num;
  }
  return res;
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr)); */

// Пустой результат
/* №3⊗jstsPmBsFn
Укажите тип возвращаемого значения: */
/* function func(elem: HTMLElement, text: string): void {
	elem.textContent = text;
} */

// Кортежи в TypeScript
/* №1⊗jstsPmBsTp
Сделайте кортеж, который будет хранить номер года и номер месяца. */
/* let date: [number, number] = [2003, 12];
console.log(date); */

/* №2⊗jstsPmBsTp
Сделайте кортеж, который будет хранить номер года и название месяца. */
/* let date: [number, string] = [2003, 'april'];
console.log(date); */

/* №3⊗jstsPmBsTp
Сделайте кортеж, который будет хранить номер года, номер месяца и номер дня. */
/* let date : [number, number, number] = [2006, 3, 16];
console.log(date); */

// Изменение кортежа
// Кортеж для чтения
/* let time: readonly [number, number, number] = [12, 59, 59];
time[0] = 13;
console.log(time); //ошибка */

// Необязательные элементы кортежей
/* №7⊗jstsPmBsTp
Заполните данными следующий кортеж: */
/* let date: [number, number?, number?] = [1]; */

// Деструктуризация кортежа
/* №8⊗jstsPmBsTp
Дан следующий кортеж: 
Разбейте части времени в отдельные переменные.
*/
/* let time: [number, number, number] = [12, 59, 59];
let [hour, minute, second] = time;
console.log(hour);
console.log(minute);
console.log(second);
 */

// Заполнение кортежа
/* №9⊗jstsPmBsTp
Заполните данными следующий кортеж:
 */
/* let tpl: [string, string, ...number[]];
tpl = ['name1', 'name2', 1, 2,3, 4, 5];
console.log(tpl); */

/* №10⊗jstsPmBsTp
Заполните данными следующий кортеж: */
/* let tpl: [number, boolean, ...string[]];
tpl = [12, true, "str1", "str2", "str3", "str5"];
console.log(tpl);
 */

// Перечисления в TypeScript
// Практические задачи
/* №1⊗jstsPmBsEn
Сделайте перечисление с названиями дней недели. */
/* enum Days { 
	Sunday = 'Воскресенье', 
	Monday = 'Понедельник',
	Tuesday = 'Вторник', 
	Wednesday = 'Среда',
	Thursday = 'Четверг',
	Friday = 'Пятница',
	Saturday = 'Суббота'
};

let thurs : Days = Days.Thursday;
console.log(thurs); */

/* №2⊗jstsPmBsEn
Сделайте перечисление с названиями месяцев. */
/* enum Month {
  January = "Январь",
  February = "Февраль",
  March = " Март",
  April = "Апрель",
  May = "Май",
  June = "Июнь",
  July = "Июль",
  August = "Август",
}
let jan: Month = Month.January;
console.log(jan); */

// Тип any в TypeScript
/* №2⊗jstsPmBsTA
Перепишите следующий код через TypeScript: */
/* let arr: any = [1, "2", "3", 4, 5];
console.log(arr);
 */

// Объединение типов в TypeScript
/* №1⊗jstsPmBsUn
Сделайте переменную, которая может быть либо числом, либо null. */
/* let test : number | null;
test = 123;
test = 4 || 2;
console.log(test); */

/* №2⊗jstsPmBsUn
Сделайте переменную, которая может быть либо числом, либо строкой, либо логической. */
/* let test: number | string | boolean;
test = 111;
test = "str";
test = false;
console.log(test); */

// Псевдонимы типов в TypeScript
/* Практические задачи
№1⊗jstsPmBsAl
Создайте новый тип, объединяющий логический тип и null. */
/* type boonull = boolean | null;
let test: boonull;
test = false;
test = null;
console.log(test); */

/* №2⊗jstsPmBsAl
Создайте новый тип, объединяющий логический тип, null и undefined. */
/* type bonudefined = boolean | null | undefined;
let test: bonudefined;
test = null;
test = true;
test = undefined;
console.log(test);
 */

// Тип строкового литерала в TypeScript
/* №1⊗jstsPmBsSL
Сделайте так, чтобы переменная могла принимать одно из трех значений: 'error', 'warning' или 'success'. */
/* let str: "error" | "warning" | "succes";
str = 'error';
str = 'warning';
str = 'succes'; */
// str = 'str'; будет ошибкой

// Псевдонимы

/* №2⊗jstsPmBsSL
Сделайте тип данных, который будет разрешать переменной принимать одно из трех значений: 'error', 'warning' или 'success'. */
/* type mistakes = 'error' | 'warning' | 'success';
let str: mistakes;
str = 'error';
str = 'warning';
str = 'success';
console.log(str); */

// Встроенные типы объектов в TypeScript
// Практические задачи
/* №1⊗jstsPmBsIOT
Сделайте переменную, которая будет содержать объект с датой. */
/* let date: Date = new Date(2023, 2, 20);
console.log(date); */

// №2⊗jstsPmBsIOT
// Сделайте переменную, которая будет содержать регулярное выражение.
/* let reg: RegExp = new RegExp('.+?');
console.log(reg); */

// №4⊗jstsPmBsIOT
// Сделайте переменную, которая будет содержать DOM элемент.
/* let elem: HTMLDivElement = document.querySelector('div')!;
console.log(elem); */

/* №5⊗jstsPmBsIOT
Сделайте переменную, которая будет содержать ссылку на тег ul. */
/* let ulElement: HTMLUListElement = document.querySelector('ul')!;
console.log(ulElement); */

/* №6⊗jstsPmBsIOT
Сделайте переменную, которая будет содержать коллекцию Map. */
/* let lst: Map<string, boolean> = new Map(); */

/* №7⊗jstsPmBsIOT
Сделайте переменную, которая будет содержать коллекцию Set. */
/* let collection: Set<number>[] = [
  new Set([1, 2, 3])
]
console.log(collection); */

/* №8⊗jstsPmBsIOT
Сделайте переменную, которая будет содержать коллекцию NodeList. */
/* let lst: NodeList = document.querySelectorAll('li');
console.log(lst); */

/* №9⊗jstsPmBsIOT
Сделайте переменную, которая будет содержать коллекцию HTMLCollection. */
/* let myCollection: HTMLCollection = document.getElementsByTagName("div");
console.log(myCollection);
 */

// Структура объекта в TypeScript
/* №1⊗jstsPmDSOS
Не запуская код определите каким будет результат выполнения кода: */
/* let date = {year: number, month: number, day: number};
date = {year: 2025, month: 12, day: '01'}; */ //ошибка в day объявлен тип number

/* №2⊗jstsPmDSOS
Не запуская код определите каким будет результат выполнения кода: */
/* 
let date = {year: number, month: number, day?: number};
date = {year: 2025, month: 12}; */ //ошибка number относится к типу, но используется здесь как значнеия.
//испрваленный вид
/* let date : {year: number, month: number, day?: number};
date = {year: 2025, month: 12};  */

// Интерфейсы в TypeScript
/* №1⊗jstsPmDSIn */
/* Создайте три объекта, реализующих следующий интерфейс: */
/* interface Employee {
	name: string,
	age: number,
	salaryday: number
}
let employee : Employee = {name: 'albert', age: 25, salaryday: 2000};
console.log(employee) */

/* №2⊗jstsPmDSIn
Создайте три объекта, реализующих следующий интерфейс: */
/* interface Time {
  hour: number;
  minute: number;
  second: number;
}
let time: Time = {
  hour: 12,
  minute: 55,
  second: 59,
};
console.log(time);
 */

// Массивы в объектах в TypeScript
/* interface Country {
  name: string;
  cities: string[];
}
let exampleСapitals: Country = {
  name: "Spain",
  cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
};
console.log(exampleСapitals);
 */

// Сложные объекты в TypeScript
/* interface Event {
  name: string;
  time: {
    start: string;
    finish: string;
  };
}
let event: Event = {
  name: "my new event",
  time: {
    start: "2025-11-01",
    finish: "2025-12-31",
  },
};
console.log(event); */

/* №2⊗jstsPmDSCO
Дан объект: */
/* let employee {
	name: 'andrew',
	potision: {
		name: 'programmer'
		salary: 1000,
	}
	addr: {
		country: 'Belarus',
		city: 'minsk'
	}
}; */
/* Сделайте интерфейс, описывающий структуру этого объекта. */
/* interface Employee {
  name: string;
  potision: {
    name: string;
    salary: number;
  };
  addr: {
    country: string;
    city: string;
  };
}

let employee: Employee = {
  name: "andrew",
  potision: {
    name: "programmer",
    salary: 1000,
  },
  addr: {
    country: "Belarus",
    city: "minsk",
  },
};

console.log(employee); */

// Объекты в объектах в TypeScript
/* Практические задачи
№1⊗jstsPmDSOIO
Дан объект:
let employee {
	name: 'andrew',
	potision: {
		name: 'programmer'
		salary: 1000,
	},
	addr: {
		country: 'Belarus',
		city: 'minsk'
	}
};
Сделайте интерфейс, описывающий структуру этого объекта. Вынесите вложенные объекты в отдельные интерфейсы. */

/* interface Employee {
  name: string;
  potision: {
    name: string;
    salary: number;
  };
}
interface Addr {
  country: string;
  city: string;
}

let employee: Employee = {
  name: "andrew",
  potision: {
    name: "frontend",
    salary: 4000,
  },
};
let addr: Addr = {
  country: "Belarus",
  city: "Minks",

};
console.log(employee);
console.log(addr); */

/* №2⊗jstsPmDSOIO
Дан объект:
let user: User = {
	name: 'john',
	age: 30,
	parents: {
		mother: {
			name: 'jane',
			age: 30,
			parents: null
		},
		father: {
			name: 'eric',
			age: 30,
			parents: null
		}
	}
}
Сделайте интерфейс, описывающий структуру этого объекта. Вынесите вложенные объекты в отдельные интерфейсы. */

/* interface Mother {
  name: string,
  age: number,
  parents: null,
}

interface Father {
  name: string,
  age: number,
  parents: null,
}


interface User {
  name : string,
  age: number,
  parents: {
    mother: Mother;
    father: Father;
  }
}

let user: User = {
	name: 'john',
	age: 30,
	parents: {
		mother: {
			name: 'jane',
			age: 30,
			parents: null
		},
		father: {
			name: 'eric',
			age: 30,
			parents: null
		}
	}
}
console.log(user); */

// Массивы объектов в TypeScript
// №1
// Сделайте массив, элементы которого будут регулярными выражениями.
/* let regexArray: RegExp[] = [/hello/, /[0-9]+/, /\w+\s\w+/];
console.log(regexArray); */

// №2
// Сделайте массив, элементы которого будут промисами.
/* let promises : Promise<any>[] = [
  new Promise((resolve, reject) => {
...
  }),

  new Promise((resolve, reject)=> {
...
  }),
]; */

// №3
/* Сделайте интерфейс, описывающий работника. Сделайте массив, состоящий из объектов с этими работниками. */
/* interface Employee {
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  salary: number;
}

let employees: Employee[] = [
  {
    firstName: "Johm",
    lastName: "Doe",
    position: "Manager",
    department: "Sales",
    salary: 75000,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    position: "Engineer",
    department: "Engineering",
    salary: 85000,
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    position: "Assistant",
    department: "Administration",
    salary: 45000,
  },
];

console.log(employees);
 */

// Количество параметров функции в TypeScript
/* function func(a: number, b: number) {
	return a + b;
}
console.log(func(1)); //мало аргументов
console.log(func(1, 2, 3));//много аргументов
console.log(func(1, 2)); 
 */

// Необязательные параметры функций в TypeScript
/* №1⊗jstsPmFnOP
Сделайте функцию, которая принимать параметрами день, месяц и год, и возвращать день недели, соответствующий этой дате. Пусть все три параметра будут не обязательными. Если какой-то параметр не передан, он должен принять значение, соответствующее текущей дате. */
/* function getDayOfWeek(day?: number, month?: number, year?: number) {
  const date = new Date();

  if (day !== undefined) {
    date.setDate(day);
  }

  if (month !== undefined) {
    date.setMonth(month - 1);
  }

  if (year !== undefined) {
    date.setFullYear(year);
  }
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
}
console.log(getDayOfWeek(1, 11, 2012)); */

// Значения параметров по умолчанию в TypeScript
// №1
/* Сделайте функцию, которая будет возводить число в заданную степень. Пусть первым параметром функция принимает число, а вторым - степень. Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень. */
/* function power(base: number, extent: number = 2) {
  return Math.pow(base, extent);
}
console.log(power(3, 3));
 */

// Rest параметры функции в TypeScript
/* function sum(...rest: number[]): number {
  let summer = 0;
  for (let i = 0; i < rest; i++) {
    summer += i;
  }
  return summer;
}

let arr: number[] = [1, 2, 3, 4, 5, 6];
console.log(sum(arr)); */

// Тип функций в TypeScript
/* №1⊗jstsPmFnFT
Укажите переменной тип функции:
let func = function(text: string): void {
	alert(text);
}; */

/* type Func = (x: string) => void;
let func: Func = function (text: string): void {
  alert(text);
};
func('text'); */

// Функции-коллбэки в TypeScript
/* type Func = (num: number) => number;

function make(arr: number[], func: Func): number[] {
	return arr.map(function(elem: number) {
		return func(elem);
	});
}

let res: number[] = make([1, 2, 3], function(num: number): number {
	return num ** 2;
});

console.log(res);*/

/* type Func = (num: number) => number;
function make(arr: number[], func: Func): number {
	let sum = 0;
	for (let elem of arr) {
		sum += func(elem);
	}
	
	return sum;
}
let res: number[] = make([1, 2, 3], function(num: number): number {
	return num ** 2;
});
console.log(res); */

// Стрелочные функции в TypeScript
/* №1⊗jstsPmFnAF
Переделайте следующую функцию на стрелочную: */
/* let func = function(num1: number, num2: number): number {
	return num1 + num2;
} */
/* let func = (num1: number, num2: number): number => num1 + num2;
console.log(func(1, 2)); */


/* №2⊗jstsPmFnAF
Переделайте следующую функцию на стрелочную:
let func = function(str: string): string[] {
	return str.split('');
} */
/* let func = (str: string) : string[] => str.split('');
console.log(func('edsdssdsdsds')); */
