/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair {
  key;
  value;
}

function KeyValuePair<T, U>(key: T, value: U) {
  return {
    key,
    value,
  };
}

let pairOne = KeyValuePair(1, 'one');
let pairTwo = KeyValuePair('two', 2);

export {};
