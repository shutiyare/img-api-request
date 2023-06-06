import React from 'react'

function hello({name,age}) {
    const date=new Date().toString()
    
    const waqtiga=() =>{
        var saacadda=new Date().getHours()
    var daqiiqadaha=new Date().getMinutes()
    var ilbiriqsiyada =new Date().getSeconds()
    setTimeout(() => {
      console.log('aniga waaye')
    }, 1000); 
    var result = `${saacadda} : ${daqiiqadaha} : ${ilbiriqsiyada}`
    return result;
    }
    function timer(){
      let timer=0;
      setInterval(() => {
        timer++
      }, 1000);
    }
    
    console.log(name,age)
    const t=[1,2,3,4,5,6]
    const [first,second, ...rest]=t
    console.log(first,second,rest)
    const friends = [
        { name: 'Peter', age: 4 },
        { name: 'Maya', age: 10 },
      ]
      const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
       
      }
  return (
    <div>
      <p>Hello my name is  {name} and i'm {age} years old </p>
      <p>{friends.map(value => (
        <ul><li>my name is {value.name } and my age is {value.age} </li></ul>
      ))} </p>
      <p>here are some object destructure {course.parts.map(val => (
        <p id={val.exercises}>{val.name}</p>
      ))}</p>
      <p>{  timer() }
      </p>
    </div>
  )
}

export default hello
