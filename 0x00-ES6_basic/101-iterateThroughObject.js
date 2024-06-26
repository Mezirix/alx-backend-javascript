export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.reduce((accumulator, current) => `${accumulator} | ${current}`);
}
