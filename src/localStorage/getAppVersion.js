export const getAppVersionAndTask = () => {
  let version = sessionStorage.getItem('app-version');
  if ((version === undefined) || (version === null)) {
    const currentVersion = Math.round(Math.random() * 6);
    initYandexValues(currentVersion);
  }
  version = sessionStorage.getItem('app-version');
  const task = sessionStorage.getItem('task');
  return [version, task]
};

export const initYandexValues = (version) => {
  switch (version) {
    case 0:
      setVersionAndTask(1,1);
      console.log('App version = 1: Без фильтров по категориям, состав пиццы отображается в корзине, поиск только по названию пицц');
      break;
    case 1:
      setVersionAndTask(1,2);
      console.log('App version = 1: Без фильтров по категориям, состав пиццы отображается в корзине, поиск только по названию пицц');
      break;
    case 2:
      setVersionAndTask(1,3);
      console.log('App version = 1: Без фильтров по категориям, состав пиццы отображается в корзине, поиск только по названию пицц');
      break;
    case 3:
      setVersionAndTask(2,1);
      console.log('App version = 2: Есть фильтры по категориям');
      break;
    case 4:
      setVersionAndTask(3, 2);
      console.log('App version = 3: Состав пиццы отображается при наведении');
      break;
    case 5:
      setVersionAndTask(4,3);
      console.log('App version = 4: Есть поиск по ингредиентам');
      break;
    default:
      return;
  }
}

export const setVersionAndTask = (version, task) => {
  sessionStorage.setItem('app-version', `version${version}`);
  sessionStorage.setItem('task', `task${task}`);
}