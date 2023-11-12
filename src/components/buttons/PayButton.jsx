import React, {useState}  from 'react'
import { useSelector }  from 'react-redux'
import { selectCart } from '../../redux/slices/cartSlice'

import { tasks } from '../../result/Tasks';


const PayButton = ({version, taskNumber}) => {

  const [isTaskFinished, setIsTaskFinished] = useState(false);
  const [result, setResult] = useState(null);
  const {items} = useSelector(selectCart);

  const finishTask = () => {
    if (!checkResultCorrectness()) {
      setResult('1 или 2 пиццы не соответствуют заданию. Прочитайте задание еще раз :)');
      return;
    }

    const startTime = sessionStorage.getItem('start-time');
    const timeDiff = new Date().getTime() - startTime;
    console.log('time', timeDiff);
    setIsTaskFinished(true);
    window.ym(95153636, 'reachGoal', 'finish-task', {"version": version, "task": taskNumber, "time": timeDiff})
    setResult('Задание выполнено! Спасибо!');
  }

  const checkResultCorrectness = () =>{
    const result = items.map(elem=>(Number(elem.id)));

    if (result.length!==2) return false;

    const isOk=Boolean(
      (tasks[taskNumber].answers1Id.find((id)=>id===result[0]))&&(tasks[taskNumber].answers2Id.find((id)=>id===result[1]))
      || (tasks[taskNumber].answers1Id.find((id)=>id===result[1]))&&(tasks[taskNumber].answers2Id.find((id)=>id===result[0]))
      );

    return isOk;
  }

  return (
    <div className='finish-task'>
      {!isTaskFinished &&
        <div className="button pay-btn" onClick={finishTask}>
            <span>Оплатить сейчас</span>
        </div>
      }

      <span className='result-description'>{result}</span>
    </div>
  )
}

export default PayButton;
