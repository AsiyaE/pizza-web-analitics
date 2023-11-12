export const getAppVersionAndTask = () => {
  let version = sessionStorage.getItem('app-version');
  if ((version === undefined) || (version === null)) {
    const currentVersion = Math.round(Math.random() * 6);
    initYandexValues(currentVersion);
  }
  version = sessionStorage.getItem('app-version');
  const task = sessionStorage.getItem('task');
  return [version, task];
};

export const initYandexValues = (version) => {
  switch (version) {
    case 0:
      setVersionAndTask(1,1);
      window.ym(95153636,'reachGoal','version1')
      window.ym(95153636,'reachGoal','task1')
      console.log('App version = 1: Нет поиска по ингредиентам, Нет фильтрации по категориям, Состав пиццы НЕ отображается при нажатии на тултип, состав пиццы не отображается в корзине');
      break;
    case 1:
      setVersionAndTask(1,2);
      window.ym(95153636,'reachGoal','version1')
      window.ym(95153636,'reachGoal','task2')
      console.log('App version = 1: Нет поиска по ингредиентам, Нет фильтрации по категориям, Состав пиццы НЕ отображается при нажатии на тултип, состав пиццы не отображается в корзине');
      break;
    case 2:
      setVersionAndTask(1,3);
      window.ym(95153636,'reachGoal','version1')
      window.ym(95153636,'reachGoal','task3')
      console.log('App version = 1: Нет поиска по ингредиентам, Нет фильтрации по категориям, Состав пиццы НЕ отображается при нажатии на тултип, состав пиццы не отображается в корзине');
      break;
    case 3:
      setVersionAndTask(2,1);
      window.ym(95153636,'reachGoal','version2')
      window.ym(95153636,'reachGoal','task1')
      console.log('App version = 2: Есть фильтры по категориям, поиск по названию пицц и ингредиентам');
      break;
    case 4:
      setVersionAndTask(3, 2);
      window.ym(95153636,'reachGoal','version3')
      window.ym(95153636,'reachGoal','task2')
      console.log('App version = 3: Состав пиццы отображается при нажатии на тултип, поиск по названию пицц и ингредиентам');
      break;
    case 5:
      setVersionAndTask(4,3);
      window.ym(95153636,'reachGoal','version4')
      window.ym(95153636,'reachGoal','task3')
      console.log('App version = 4: Без фильтров по категориям, состав пиццы отображается в корзине, поиск по названию пицц и ингредиентам');
      break;
    default:
      return;
  }
}

export const setVersionAndTask = (version, task) => {
  sessionStorage.setItem('app-version', `version${version}`);
  sessionStorage.setItem('task', `task${task}`);
}