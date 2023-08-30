// for (let i = 0 ; i<=10 ; i++ ) {
//     console.log(i);
// }

// let fruit = ['apple','kaila','banana','mango','waterMelon']
// for (let i = 0 ; i < fruit.length ; i++ ) {
//     console.log(fruit[i]);
// }
// const div = document.querySelector('div') 
// for( let i = 1; i <=100 ; i++ ){
//     // console.log(` `);
//     div.innerHTML += `<br/>`
//     for(let j = 1; j <=10; j++ ){
//         div.innerHTML += `${i} * ${j} = ${i*j} <br/>`;

//     }
// }


const div = document.querySelector('div')
for (let i = 1; i <= 15 ; i++) {
    div.innerHTML+=`<br/>`
    for (let j = 1; j <=15; j++) {
        div.innerHTML += `${i} * ${j} = ${i*j} <br/>`
        
    }
    
}


const num = +prompt("Enter your digit for table")
for (let i = 1; i <=15; i++) {
console.log( ` ${num} * ${i} = ${num*i} `);
    
}



