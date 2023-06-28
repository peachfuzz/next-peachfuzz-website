export const getColor = (hovered: boolean | undefined, visited: boolean, isText = false) => {
  if (hovered) {
    return 'amber-500';
  }
  if (visited) {
    return 'blue-500';
  }
  return isText ? 'black' : 'white';
};
