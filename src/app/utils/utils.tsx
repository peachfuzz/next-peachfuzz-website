export const getColor = (hovered: boolean | undefined, visited: boolean) => {
  if (hovered) {
    return 'amber-500';
  }
  return visited ? 'blue-500' : 'white';
};
