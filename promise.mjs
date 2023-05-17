const getData = url =>
    new Promise((resolve,reject)=>
    fetch(url)
    .then(responce => responce.json))
    .then(json=> resolve(json))
    .catch(error=>reject(error))
export default getData

// Решение через async

// const getDate = async url =>{
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }
// try{
//     const date = await getDate()
//     console.log(date)
// }
// catch(error){
//     console.log(error.message)
// }