import ym from 'react-yandex-metrika';
export const getAppVersion = () => {
  const key = 'pizza';
  let version = localStorage.getItem(key);
  if ((version === undefined) | (version === null)) {
    version = Math.round(Math.random());
    localStorage.setItem(key, version);
  }
  // todo
  if (Number(version) === 0) {
    // ym(95153636,'reachGoal','versionA')
  } else {
    // ym(95153636,'reachGoal','versionB')
  }
  console.log('App version =', version, '(1-with categories filter (versionB), 0-without(versionA))');
  return version;
};
