// Home Work 6/19/2021 Event_Loop ergiy's part

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Vityas homework>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Зробити свій розпорядок дня.
//
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі


// let money = 1350
// let kalories = 0;

// function wakeUp(bathroomEx){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=> {
//             if(bathroomEx) {
//                 resolve('Took a shower in the morning, and brushed my' +
//                     'teeth')
//             } else {
//                 reject('Unfortunately, got up too late')
//             }
//         },500)
//     })
// }
//
// function mealOne (tookBreakfast){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(tookBreakfast){
//                 kalories += 1100
//                 resolve('Took a breakfast')
//
//             } else {
//                 reject('Unfortunately, didnt have a time for breakfast, I woke up too late.')
//             }
//         }, 900)
//     })
// }
//
// function roadToWork (roadToWork){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(roadToWork === 'car'){
//                 console.log('Used to a car to get to my job')
//                 resolve(money += -300)
//             } else if(roadToWork === 'bolt'){
//                 money += -100
//                 reject('Went to by Bolt vehicle')
//             }
//         },800)
//     })
// }
//
// function work (workMyProject){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(workMyProject){
//                 money += 3000
//                 resolve( 'Continuing my project of "PGS_1171"')
//             } else {
//                 reject ('Didnt work my project')
//             }
//         },3000)
//     })
// }
//
// function mealTwo (moneyForBreakfast){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(moneyForBreakfast) {
//                 moneyForBreakfast += -350
//                 kalories += 900
//                 console.log('Had a breakfast outside')
//                 resolve(moneyForBreakfast)
//             }    else {
//                 reject('Reject breakfast')
//             }
//         }, 800)
//     })
// }
//
// function additionalExpenses(addExpenses){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(addExpenses) {
//                 console.log('Unpredicted expenses')
//                 resolve(money += -500)
//             } else{
//                 reject('There is no any unpredicted expenses')
//             }
//         })
//     }, 100)
// }
//
// function workout(workout){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(workout){
//                 console.log('Had a workout that day')
//                 resolve(kalories += -1000)
//             } else{
//                 reject ('Didnt get any workout')
//             }
//         },800)
//     })
// }
//
// function mealThree (moneyForDinner){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(moneyForDinner === 'outside') {
//                 kalories += 900
//                 moneyForDinner += 800
//                 console.log('I took some dinner')
//                 resolve(money += -800)
//             } else if (moneyForDinner === 'athome'){
//                 moneyForDinner += 0
//                 kalories += 900
//                 console.log('Took some dinner at home')
//                 reject(moneyForDinner)
//             }
//         }, 900)
//     })
// }
//
// function recreation(sleep){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(sleep) {
//                 resolve('Job is done can go to sleep')
//             }    else {
//                 reject('Need to finish some affairs from project, went later as always')
//             }
//         }, 100)
//     })
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// wakeUp(true)
//     .then(result => {
//     console.log(result)
//
//       return mealOne(true)
//     })
//     .then(result =>{
//     console.log(result)
//
//       return roadToWork('car')
//     })
//     .then(roadToWork => {
//     console.log('money:', money)
//
//       return work(true)
//     })
//     .then(result => {
//     console.log(result)
//     console.log('money:', money)
//
//       return mealTwo(true)
//     })
//     .then(result=>{
//      console.log(result)
//      console.log('kalories:', kalories)
//
//         return additionalExpenses(true)
//     })
//     .then(result =>{
//      console.log(result)
//
//         return workout (false)
//     })
//     .catch(result => {
//     console.log(result)
//
//         return mealThree('outside')
//     })
//     .then(result =>{
//      console.log(result)
//
//         return recreation(true)
//     })
//     .then(result =>{
//     console.log(result)
//
//     })
//     .finally(()=> {
//     console.log('money:', money);
//     console.log('kalories:', kalories);
//     })

// Question? Asynhronniy method?

// async function scheduleOfDay() {
//     try {
//
//
//         let wakeUpMorning = await wakeUp(true)
//         console.log(wakeUpMorning);
//
//         let breakfast = await mealOne(true);
//         console.log(breakfast);
//
//         let vehicle = await roadToWork('car');
//         console.log(money);
//
//         let workAtProject = await work(true);
//         console.log(workAtProject)
//
//         let breakfastTime = await mealTwo(true);
//         console.log(breakfastTime);
//
//         let exprenses = await additionalExpenses(true)
//         console.log(exprenses);
//
//         let dinner = await mealThree('outside')
//         console.log(dinner)
//
//         let sleep = await recreation(true);
//         console.log(sleep);
//
//         let workoutDay = await workout(false)
//         console.log(workoutDay);
//     } catch(e) {
//         console.log(e)
//     }
//
// }
// scheduleOfDay();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<Sergiy's Homework>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Вставити цей блок на сторінку

// let users = [{
//   name: 'vasya',
//   age: 31,
//   status: false,
//   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];

// for (const user of users) {
//     userDiv = document.createElement('div');
//     userDiv.style.color = '#465dcb';
//     userDiv.style.backgroundColor = '#cf96c4';
//     userDiv.style.margin = '35px';
//     userDiv.style.color = 'blue';
//     userDiv.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`
//     document.body.appendChild(userDiv)
// }

// -------------------------------------------------------------------

// 2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//   name: 'vasya',
//   age: 31,
//   status: false,
//   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];

// for (const user of users) {
//   userDiv = document.createElement('div');
//   userDiv.style.color = '#465dcb';
//   userDiv.style.backgroundColor = '#cf96c4';
//   userDiv.style.margin = '35px';
//   userDiv.innerText = `${user.name} ${user.age} ${user.status}`
//   document.body.appendChild(userDiv)

//   userDivCity = document.createElement('p1')
//   userDivCity.style.color = '#030615';
//   userDivCity.style.backgroundColor = '#15c19a';
//   userDivCity.style.margin = '35px';
//   userDivCity.innerText = `${user.address.city}`
//   document.body.appendChild(userDivCity)
//
//   userDivCountry = document.createElement('p2')
//   userDivCountry.style.color = '#030615';
//   userDivCountry.style.backgroundColor = '#15c19a';
//   userDivCountry.style.margin = '35px';
//   userDivCountry.innerText = `${user.address.country}`
//   document.body.appendChild(userDivCountry)
//
//
//   userDivStreet = document.createElement('p3')
//   userDivStreet.style.color = '#030615';
//   userDivStreet.style.backgroundColor = '#15c19a';
//   userDivStreet.style.margin = '35px';
//   userDivCity.innerText = `${user.address.street}`
//   document.body.appendChild(userDivStreet)
//
//
//   userDivHouNum = document.createElement('p4')
//   userDivHouNum.style.color = '#030615';
//   userDivHouNum.style.backgroundColor = '#15c19a';
//   userDivHouNum.style.margin = '35px';
//   userDivHouNum.innerText = `${user.address.houseNumber}`
//   document.body.appendChild(userDivHouNum)
// }

// --------------------------------------------------------------------


// 3 Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }];
//
// for (const rule of rules) {
//
//     let ruleTitle = document.createElement('h2');
//     ruleTitle.innerHTML = `${rule.title}`;
//     ruleTitle.style.backgroundColor = '#8d62a7';
//     ruleTitle.style.margin ='35px';
//     document.body.appendChild(ruleTitle);
//
//     let ruleBody = document.createElement('p');
//     ruleBody.innerText = `${rule.body}`;
//     ruleBody.style.backgroundColor = '#30e7e7';
//     ruleBody.style.margin ='35px';
//     document.body.appendChild(ruleBody);
// }

// let ruleOneDiv = document.createElement('div');
// ruleOneDiv.setAttribute('class', 'rules rule2')






























