export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const newResult = Object.assign(
    { serialNumber: '12345' },
    { properties: { status: 'processed' } },
    source
  );
  return newResult;
}
