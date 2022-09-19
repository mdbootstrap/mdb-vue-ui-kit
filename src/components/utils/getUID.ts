const MAX_UID = 1000000;

export const getUID = (prefix: string) => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};
