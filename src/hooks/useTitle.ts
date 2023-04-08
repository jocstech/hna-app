export const useTitle = () => {
  let oldValue = '海南航空';
  let newValue = 'Hainan Airline';
  const title = ref(oldValue);
  function changeTitle() {
    oldValue = title.value;
    title.value = newValue;
    newValue = oldValue;
  }
  return {
    title,
    changeTitle
  };
};
