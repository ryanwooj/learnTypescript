import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

// const numbersColection = new NumbersCollection([10, 32, -5, 0, 3.1, 2, 5]);
// const sorter = new Sorter(numbersColection);
// sorter.sort();
// console.log(numbersColection.data);

// const charactersCollection = new CharCollection('xaasdkjg');
// const sortChar = new Sorter(charactersCollection);
// sortChar.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-2);
linkedList.add(4);
const sorter = new Sorter(linkedList);
sorter.sort();
console.log(linkedList.print());
