 
function conferencePicker(vis, off) {
  for (const city of off){
    if (!vis.includes(city)) return city;
  }
  return 'No worthwhile conferences this year!';
}