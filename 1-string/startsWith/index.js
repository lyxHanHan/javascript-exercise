export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const newCollection = collection.filter(n => n.startsWith('粤A'));
  return newCollection.length;
  // let num = 0;
  // for (let i = 0; i < collection.length; i += 1) {
  //   if (collection[i].startsWith('粤A')) {
  //     num += 1;
  //   }
  // }
  // return num;
}
