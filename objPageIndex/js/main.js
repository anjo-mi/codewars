class PaginationHelper {
	constructor(coll, itemsPerPage) {
	this.coll = coll
  this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	  return this.coll.length
	}
	pageCount() {
	  return Math.ceil(this.coll.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	  if (pageIndex < 0){
      return -1
    }
    let x = this.coll.length - (this.itemsPerPage * (pageIndex + 1))
    if (x >= 0){
      return this.itemsPerPage
    }else if (x < 0 && x > -this.itemsPerPage){
      return this.coll.length % this.itemsPerPage
    }else{
      return -1
    }
	}
	pageIndex(itemIndex) {
    if (itemIndex + 1 > this.coll.length || itemIndex < 0){
      return -1
    }
	  let page = 0
    while (itemIndex >= this.itemsPerPage){
      itemIndex -= this.itemsPerPage
      page++
    }
    return page
	}
}