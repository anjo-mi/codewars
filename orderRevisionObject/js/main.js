function getOrder(input) {
    let menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
    let revisedOrder = ''
    let orderObj = {}
    
    for ( let i = 0 ; i < menu.length ; i++ ){
      input = input.replaceAll(menu[i], `${menu[i]} `)
    }
    input = input.trim().split(' ')
    
    input.forEach(el => {
      if (!orderObj[el]){
        orderObj[el] = 0
      }
      orderObj[el] += 1
    })
    
    menu.forEach(el => {
      if (orderObj.hasOwnProperty(el)){
        revisedOrder += (`${el[0].toUpperCase() + el.slice(1)} `).repeat(orderObj[el])
      }
    })
    return revisedOrder.trim()
    
    
  }