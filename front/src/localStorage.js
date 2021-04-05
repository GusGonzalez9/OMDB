export const saveState = (state) => {
  try {
    localStorage.setItem(`setUser`, JSON.stringify(state));
  } catch {}
};

export const loadState = (state) => {
  try {
    const serializedState = localStorage.getItem(`setUser`);

    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);

    return state;
  } catch (err) {
    return undefined;
  }
};
