function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const newcollection = collection.filter(ele => ele % 3 === 0);
  console.log(newcollection);
  return newcollection;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  // const newCollection = collection.filter((collection,index) =>{
  //   return collection.indexOf(collection) === index;
  //   console.log(newCollection);
  // })
  const newcollection = [...new Set(collection)];
  console.log(newcollection);
  return newcollection;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
