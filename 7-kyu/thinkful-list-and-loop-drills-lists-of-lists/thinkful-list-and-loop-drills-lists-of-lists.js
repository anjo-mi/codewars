 
const processData = (data) => data.reduce((a,[arr1,arr2]) => a * (arr1 - arr2), 1);