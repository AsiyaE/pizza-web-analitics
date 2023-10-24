import {Link} from "react-router-dom";
import ym from 'react-yandex-metrika';

const Task = () => {
    const startTask = () => {
      console.log('start-task');
      ym(95153636,'reachGoal','start-task');
    }

    return (
        <div className="wrapper">
            <div className="content">
                <p className='greetings'>
                    Здравствуйте! Спасибо, что согласились принять участие в тестировании нашего сайта. Вам необходимо
                    выполнить следующее задание:
                </p>
                <p className='task'>
                    <i>Оформить заказ, состоящий из двух пицц: одна из них должна быть с кисло-сладким соусом, другая с
                        ветчиной. Их необходимо добавить в корзину и оформить заказ, нажав кнопку оплатить.</i>
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