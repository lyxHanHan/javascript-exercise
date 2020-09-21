export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const newcollection = collection.map(item => {
    return collection.fromCharCode(32 + parseInt(item));
  });
  return newcollection;
}
