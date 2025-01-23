function borrow(s){
    return s.replaceAll('.','')
            .replaceAll('!','')
            .replaceAll('?','')
            .replaceAll(' ','')
            .replaceAll(':','')
            .replaceAll(';','')
            .replaceAll(',','')
            .toLowerCase()
  }