function babySharkLyrics(){
    const type={0:'Baby',1:'Mommy',2:'Daddy',3:'Grandma',4:'Grandpa',5:`Let's go hunt`}
    const lyrics=[]
    for(const key in type){
      for(let i=0;i<4;i++){
        if(i !== 3)lyrics.push(`${type[key]}${type[key].split(' ').length>1?',':' shark,'}` + ' doo'.repeat(6))
        else{lyrics.push(`${type[key]}${type[key].split(' ').length>1?'!':' shark!'}`)}
      }
    }
    lyrics.push('Run away,…')
    return lyrics.join('\n')
  }