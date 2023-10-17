export const getAppVersion = () => {
  const key = 'pizza';
  let version = localStorage.getItem(key);
  if ((version === undefined) | (version === null)) {
    version = Math.round(Math.random());
    localStorage.setItem(key, version);
  }
  console.log('App version =', version, '(1-with ingredients search, 0-without)');
  return version;
};
