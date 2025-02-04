function howMuchWater(water, load, clothes){
  const extra = clothes - load;
  return  extra   >   load ? 'Too much clothes' : 
          clothes <   load ? 'Not enough clothes' : 
          clothes === load ? water : 
                                      +((water * (1.1 ** extra)).toFixed(2))
}