// todo: get to work with tailwind: 'bg-cyan-500' (if becomes too hard, 06B6D4 is close enough - hex val)
export const getColor = (hovered: boolean | undefined, visited: boolean) => {
  if (hovered) {
    return '#06B6D4';
  }
  return visited ? '#037ffc' : '#D3D3D3';
};

export const getCodeUrl = (pathName: string) => {
  return `https://github.com/peachfuzz/next-peachfuzz-website/tree/main/src/app${pathName}/page.tsx`;
};
