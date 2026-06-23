 
export function filter_list(l:(number | string)[]):any[] {
//   return l.filter(el => typeof el === 'number');
  return l.filter(el => el === +el);
}