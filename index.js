export default function spliceClone(array, ...spliceArgs) {
  const clone = [...array];
  clone.splice(...spliceArgs);
  return clone;
}
