const whosOnline = (friends) => {
    return friends.reduce((a,el) => {
      if (el.status === 'online' && el.lastActivity <= 10){
        if (!a.online){
          a.online = []
        }
        a.online.push(el.username)
      }else if (el.status === 'online' && el.lastActivity > 10){
        if (!a.away){
          a.away = []
        }
        a.away.push(el.username)
      }else if (el.status === 'offline'){
        if (!a.offline){
          a.offline = []
        }
        a.offline.push(el.username)
      }
      return a
    }, {})
  }


      let friends = [{
        username: 'David',
        status: 'online',
        lastActivity: 10
      }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
      }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
      }]

      console.log(whosOnline(friends), {
        online: ['David'],
        offline: ['Lucy'],
        away: ['Bob']
      }, 'Wrong result for example one of each')
    
      friends = [{
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
      }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
      }]
  
      console.log(whosOnline(friends), {
        offline: ['Lucy'],
        away: ['Bob']
      }, 'Wrong result for example no one online')