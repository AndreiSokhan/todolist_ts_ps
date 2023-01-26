import React from 'react';

type Data1PropsType = {
   title: string
   tasks: Array<TasksPropsType>
   // students: ['value']
}

type TasksPropsType = {
   taskId: number
   title: string
   isDone: boolean
}


export const Tasks = (props:Data1PropsType) => {
   return (
      <div>
         <h2>{props.title}</h2>
         <ul>
            {props.tasks.map((el, )=>{
               return(
                  <li key={el.taskId}>
                     <input type="checkbox" checked={el.isDone}/>
                     <span>{el.title}</span>
                  </li>
               )
            })}
            {/*<div>{props.students}</div>*/}
</ul>
      </div>
   );
};