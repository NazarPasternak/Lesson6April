// ...................Assunhonnist....

// SetTimeout(( ) =>{
//
// }, some timeout)



// setTimeout(() => {
//   console.log(1);
// }, 3000)
//
// console.log(2)
//
// setTimeout(() => {
//   console.log(3);
// }, 1000)
//
//
// let elementById = document.getElementById('btn');
//
// elementById.onclick = () => {
//   console.log('CLC');
// }
//
// let i = 0;
// while (i < 999999999) {
//   i++
// }
//


// ..................Call Back......

// function withCB(a, cb) {
//   console.log(a);
//   cb();
// }
//
// withCB(10, () => {
//   console.log('HELLO')
// })


// This function (gotWork) is asinhronna fucntion
// Promise  - it an object that works for processasunhronnosti;
// Promise has three conditions:
// - resolve (fulfill)
// - reject
// - pending


let money = 100;
function gotWork(isJobDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isJobDone) {
        money += 500
        resolve('Зробив роботу добре!');
      } else {
        reject('Перше зроби роботу, лінива ти дупа')
      }
    }, 2000)
  })
}


// function gotWork(isJobDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             if(isJobDone) {
//               money += 500
//               console.log('Job is done')
//             } else {
//               console.log('No way')
//             }
//         }, 2000)
//     })
// }


function buyStaff(moneyForStaff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (moneyForStaff > 200) {
        console.log('купив кеди в ашані');
        moneyForStaff = moneyForStaff - 150;
        resolve(moneyForStaff);
      } else {
        reject('No money no honey')
      }
    }, 1500)
  })
}


function goEat(moneyForEat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (moneyForEat < 200) {
        reject('Сьогодні без їжі')
      } else {
        console.log('Смакота')
        resolve(moneyForEat - 200);
      }
    }, 3000)
  })
}


// gotWork(true)
//   .then(result => {
//     console.log(result);
//
//     return buyStaff(money)
//   })
//   .then(moneyAfterStaff => {
//     console.log(moneyAfterStaff, 'решта пісял кедів');
//
//     return goEat(moneyAfterStaff);
//   })
//   .then(moneyAfterEat => {
//     console.log(moneyAfterEat, 'решат з їжі');
//   })
//   .catch(reason => {
//     console.log('***********************');
//     console.log(reason);
//     console.log('***********************');
//   })
//   .finally(() => {
//     console.log('FINAL')
//   })




async function goToFactory() {
  try {

  let resultAfterWork = await gotWork(true);

  console.log(resultAfterWork, 'resultAfterWork');

  let moneyAfterStaff = await buyStaff(money);

  console.log(moneyAfterStaff, 'moneyAfterStaff');

  let moneyAfterEat = await goEat(moneyAfterStaff);

  console.log(moneyAfterEat, 'moneyAfterEat');
  } catch (e) {
    console.log('*************************');
    console.log(e);
    console.log('*************************');
  }
}

goToFactory();


// >>>>>>>>>>>>>>>>>Homework Sergiy's>>>>>>>>>>>>>>>>>>>>>>



// let students = [
//   {name: 'Dimas', age: 24},
//    {name: 'Karina', age: 15},
//   {name:  'Olenka', age: 20},
//   {name: 'Oleg', age: 29},
//   {name: 'Ellen', age: 19},
// ];
// for (const student of students) {

//   const studentDiv =  document.createElement('div');
//   studentDiv.style.backgroundColor = '#a07f9a';
//   studentDiv.style.margin = '35px';
//   studentDiv.style.color = 'blue'
//
//   studentDiv.innerHTML = `Hello my name is ${student.name} <br> I am
//   ${student.age} years old`
//   studentDiv.setAttribute('attribute', 'I-am-your-father');
//   // studentDiv.setAttribute('id', `${student.name}_${student.age}`);
//   // studentDiv.removeAttribute('test')
//   document.body.appendChild(studentDiv)
// }
