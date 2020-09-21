export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const newcollect = collection.find(item => item.age > 10 && item.age < 20);
  // console.log(newcollect);
  return newcollect.name;
}
