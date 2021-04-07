export const saveState = (state) => {
  try {
    localStorage.setItem(`user`, JSON.stringify(state));
  } catch {}
};

export const loadState = (state) => {
  try {
    const serializedState = localStorage.getItem(`user`);

    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);

    return state;
  } catch (err) {
    return undefined;
  }
};
export const RemoveItem = ()=>{
  try {
    localStorage.removeItem('user')
  }
  catch (err) {
    return undefined;
  }
}
