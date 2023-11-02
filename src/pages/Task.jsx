import {Link} from "react-router-dom";
import {getAppVersionAndTask} from "../localStorage/getAppVersion";

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
                    {task === 'task1' && <i>Оформить заказ, состоящий из двух пицц: одна из них должна быть без мяса, другая с
                        халапеньо. Их необходимо добавить в корзину и оформить заказ, нажав кнопку оплатить.</i>}
                    {task === 'task2' && <i>Оформить заказ, состоящий из двух пицц: одна из них должна быть без красного лука, другая с
                        томатным соусом. Их необходимо добавить в корзину и оформить заказ, нажав кнопку оплатить.</i>}
                    {task === 'task3' && <i>Оформить заказ, состоящий из двух пицц: одна из них должна быть с кисло-сладким соусом, другая с
                        ветчиной. Их необходимо добавить в корзину и оформить заказ, нажав кнопку оплатить.</i>}
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