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
const userProfile = {
    name:"Alex",
    commentQty:23
}

const myFn = ({name,commentQty})=> {
    if(!commentQty){
        return `Hello i am ${name} and i havent any comments`
    }
    else{
        return `Hello i am ${name} and i have ${commentQty} comments`
    }
}
myFn(userProfile)