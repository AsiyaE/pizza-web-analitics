import {Link} from "react-router-dom";
import {getAppVersionAndTask} from "../localStorage/getAppVersion";
import { tasks } from "../result/Tasks";

const [version, task] = getAppVersionAndTask();
const Task = () => {

    const startTask = () => {
      console.log('start-task');
      const startTime = new Date().getTime();
      sessionStorage.setItem('start-time', startTime);
    }

    return (
        <div className="wrapper">
            <div className="content">
                <p className='greetings'>
                    Здравствуйте! Спасибо, что согласились принять участие в тестировании нашего сайта. Вам необходимо
                    выполнить следующее задание:
                </p>
                <p className='task'>
                    {task === 'task1' && <i>{tasks.task1.description}</i>}
                    {task === 'task2' && <i>{tasks.task2.description}</i>}
                    {task === 'task3' && <i>{tasks.task3.description}</i>}
                </p>
                <p className='task'>
                    Как только будете готовы начать, нажмите кнопку Приступить к заданию.
                </p>
                <Link to="/home" className='start-task-btn button' onClick={startTask}>Приступить к заданию</Link>
            </div>
        </div>
    )
}
export default Task;