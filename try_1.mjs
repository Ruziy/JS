// const danik = { 
//     name:"danik",
//     age:12
// }

// function updateToPomoz(test_danik){
//     const pomoz = Object.assign({},test_danik)
//     pomoz.age+=1
//     return pomoz
// }
// const danikPomoz = updateToPomoz(danik)
// console.log(danik.age)
// console.log(danikPomoz.age)
//////////////////////////Колбэк функции
// function printf(){
//     console.log("Sasha")
// }
// console.log("start")
// setTimeout(printf,1000)
///////////////////////Область функции
// let a 
// let b 
// function myFn(){
//     let b
//     a=true
//     b=10
//     console.log("Local b "+b)
// }
// myFn()
// console.log(a)
// console.log("Global b "+b)
/////////////////Цепочка областей видимости 
// const a = 10 
// function myFn(){
//     function yourFn(){
//         console.log(a)
//     }
//     yourFn()
// }
// myFn()
///////////////Необъявленная переменная
// function ggwp(){
//     a=true;
// }
// ggwp()
// console.log(a);
////////////////!!
// const abc = {

// }
// console.log(!! abc)
/////////////Оператор ...
// const button ={
//     width:200,
//     text:"Buy"
// }
// const redButton = {
//     ...button,
//     color:'red'
// }
// console.table(redButton)
////////////////Шаблонные строки
// const hello = 'hello'
// const wrld = 'wrld'
// console.log(`${hello} ${wrld}`)

// const nameMy = 'sasha'
// const city = 'samara'
// console.log(`Привет меня зовут ${nameMy} и я из города ${city}`)

/////////Стрелочные функци
// const abc = (value, multiplier = 1)=>{
//     return value*multiplier
// }
// console.log(abc(1,2))

//////Возврат Объекта через функцию без МУТАЦИИ
// const newPost = (post,addedAt = Date()) =>({
//     ...post,
//     addedAt
// })
// const firstPost = {
//     id:1,
//     author:'Alex'
// }
// console.log(newPost(firstPost))
///////Генерация собственной ошибки
// const myFuncWithError = () =>{
//     throw new Error('Come error..')
// } 
// try{
//     myFuncWithError()
// }catch(error){
//     console.error(error)
//     console.log(error.message)    
// }
// console.log('Continue...')
//////Инструкция
/////Массивы
// const myArray = [1,2,3]
// console.log(myArray)
// const myArrayTwo = new Array(1,2,3)
// console.log(myArrayTwo)
// const array = [1,2,3]
// array.forEach((el)=> console.log(el*2))
// const array = [1,2,3]
// const myArray = array.map(el => el*2)
// console.log(myArray)
///////Деструктуризация
// const userProfile = {
//     name:'Bogdan',
//     age:12,
//     hasSigned:false
// }
// const {name,age,hasSigned} = userProfile
// console.log(name,age,hasSigned)
// const fruits = ['banana','apple']
// const [firstFruit,secondFtruit] = fruits
// console.log(firstFruit,secondFtruit)
// const userProfile = {
//     name:"Alex",
//     commentQty:23
// }

// const myFn = ({name,commentQty})=> {
//     if(!commentQty){
//         return `Hello i am ${name} and i havent any comments`
//     }
//     else{
//         return `Hello i am ${name} and i have ${commentQty} comments`
//     }
// }
// myFn(userProfile)
///////////////Условные операторы
// const sumPositiveNumb = (a,b)=>{
//     if(typeof (a) !=='number'|| typeof (b) !== 'number'){
//         return 'One of the paramets is not a number'
//     }
//     if (a<0 || b <0){
//         return 'One of the number is not a positive'
//     }
//     return a+b
// }
// let a = 10 
// let b = 10
// console.log(sumPositiveNumb(a,b)) 
////////Switch
    // const month = 2 
    // switch(month){
    //     case 12:{
    //         console.log("Декабрь")
    //         break
    //     }
    //     case 1:{
    //         console.log("Январь")
    //         break
    //     }
    //     case 2:{
    //         console.log("Февраль")
    //         break
    //     }
    //     default:{
    //         console.log("Не зимний месяц")
    //     }
    // }
/////Тернарные операторы 
// const value = 10 
// console.log(value >= 0 ? "high": "low")
/////
// const myArray = [1,2,3,4,5,"banana"]
// myArray.map((el,index)=>{
//     console.log(el,index)
// })
// let zxc = 0
//  while(zxc < 5 ){
//     let count
//     count++;
//     console.log(zxc)
//     if (count>10){
//         break
//     }
//  }
// let zxc = 1000
// do{
//     console.log(zxc)
//     zxc=zxc-7
// }while(zxc>0)
// const myObject = {
//     z:10,
//     x:"Sasha",
//     c:"Razuv"
// }
// for(const keys in myObject){
//     console.log(keys,myObject[keys])
// }
// const myObject = {
//     z:1,
//     x:"Sasha",
//     c:"Razuv"
// }
// console.log(Object.keys(myObject).forEach((el)=>{
//     console.log(el)
// }),Object.values(myObject).forEach((el)=>{
//     console.log(el)
// }))
// const myString = "Sasha" 
// for ( const cymbol of myString){
//     console.log(cymbol)
// }
// ===================Классы
// class Comment {
//     constructor(text){
//         this.text = text
//         this.votesQty = 0
//     }
//     upvote(){
//         this.votesQty += 1
//     }
//     static concat(first,second){
//         return `${first},${second}`
//     }
// }
// const tryClass = new Comment('hai')
// // console.log(tryClass.text)
// // console.log(tryClass instanceof Comment)
// const firstTry = new Comment('I am first ekzeml')
// const SecondTry = new Comment('I am second ekzeml')
// const Thirdry = new Comment('I am third ekzeml')
// console.log(firstTry.votesQty)
// firstTry.upvote()
// console.log(firstTry.votesQty)
// firstTry.upvote()
// console.log(firstTry.votesQty)
// console.log(firstTry.text+" "+firstTry.votesQty+SecondTry.text+" "+SecondTry.votesQty)
// console.log(Comment.concat("Hay","I am Alex"))
//--------------Расширение классов
// class NumbersArray extends Array{
//     sum(){
//         return this.reduce((el,acc)=> acc+=el,0)
//     }
// }
// const test = new NumbersArray(1,2,3)
// console.log(test.sum())
// console.log(test.__proto__,test.prototype)
// class Danik {
//     constructor(name,secondName){
//         this.name=name
//         this.secondName=secondName
//     }
//     rename(newName){
//         this.name=newName
//     }
// }

// const TestClass = new Danik('Danik','Fill')
// console.log(TestClass.name,TestClass.secondName)
// TestClass.rename('Lera')
// console.log(TestClass.name,TestClass.secondName)
//================Промисы
// const myPromise = new Promise ((resolve,reject)=>{

// })
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(responce=>{
//     console.log(responce)
//     return responce.json()
// })
// .then(json => console.log(json))
// .catch(error => console.error(error))
// import like_promise from './promise.mjs'
// like_promise('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message))
// const func = async()=>{
//     throw new Error('Hello i am your error')
// }
// func()
// .then(value=>console.log(value))
// .catch(error=>console.log(error))

// const asyncFn = async()=>{
//     await 
// }

const timerPromise = () =>
new Promise((resolve, reject) =>
setTimeout(() => resolve(), 2000))
const asyncFn = async () => {
console.log('Timer starts')
const startTime = performance.now()
await timerPromise()
const endTime = performance.now()
console.log('Timer ended', endTime - startTime)
}
asyncFn()