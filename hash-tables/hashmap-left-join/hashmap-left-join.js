const HashTable = require('../hash-table/hash-table');

function checkForAntonym(word, table) {
  console.log("checkForAntonym word is " + word);
  if (table.has(word)) {
    return table.get(word);
  } else {
    return null;
  }
}

function leftJoin(left, right) {
  let output = [];
  for (let idx in left.buckets) {
    if (left.buckets[idx]) {
      let current = left.buckets[idx].head;
      while (current) {
        let word = Object.keys(current.value)[0];
        let synonym = Object.values(current.value)[0];
        console.log(word);
        console.log(synonym);
        let antonymResult = checkForAntonym(word, right);
        console.log(antonymResult);
        output.push([word, synonym, antonymResult]);
        current = current.next;
      }
    }
  }
  return output;
}


module.exports = {
  checkForAntonym,
  leftJoin
};
