 
function parseHTMLColor(color) {
  if (color.startsWith('#')){
    color = color.slice(1);
  
    if (color.length === 3){
      color = color.split('').map(char => char + char).join('');
    }
    return {
      r: parseInt(color.slice(0,2),16),
      g: parseInt(color.slice(2,4),16),
      b: parseInt(color.slice(4,6),16)
    };
  }
  
  color = color.toLowerCase();
  const hex = PRESET_COLORS[color].slice(1);
  return {
      r: parseInt(hex.slice(0,2),16),
      g: parseInt(hex.slice(2,4),16),
      b: parseInt(hex.slice(4,6),16)
    };
}