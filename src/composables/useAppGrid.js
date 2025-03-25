import { useGrid } from 'vue-screen';

export default function() {
  const grid = useGrid({
    xxl: 1280.1,
    xl: 1120.1,
    lg: 920.1,
    md: 720.1,
    sm: 520.1,
    xs: 0,
  });

  return grid;
}
