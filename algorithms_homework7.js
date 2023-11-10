/*
Завершить реализацию Динамического массива (если не завершили в классе). добавьте метод поиска позиции элемента и удаления элемента по индексу
исходник https://github.com/iksergey/algorithms-start/blob/main/part.206/ex01/Main.js
№2
Постройте частотный словарь букв русского (или английского) алфавита. Текст может взять любой или этот https://github.com/iksergey/algorithms-start/blob/main/part.206/readme.md


для решения можно использовать Array или Map ( на ваше усмотрение)..


https://learn.javascript.ru/map-set

const dict = Array(5).fill(({ key: '', value: '' }));

for (const item of dict) {
  console.log(item);
}
*/

//Реализация динамического массива:

class DynamicArray {
    constructor() {
      this.data = [];
    }
  
    // Добавление элемента в конец массива
    push(element) {
      this.data.push(element);
    }
  
    // Получение элемента по индексу
    get(index) {
      if (index < 0 || index >= this.data.length) {
        return undefined;
      }
      return this.data[index];
    }
  
    // Поиск позиции элемента в массиве
    indexOf(element) {
      return this.data.indexOf(element);
    }
  
    // Удаление элемента по индексу
    removeAtIndex(index) {
      if (index < 0 || index >= this.data.length) {
        return undefined;
      }
      return this.data.splice(index, 1)[0];
    }
  }
  
  // Пример использования
  const dynamicArray = new DynamicArray();
  dynamicArray.push(1);
  dynamicArray.push(2);
  dynamicArray.push(3);
  
  console.log("Array:", dynamicArray.data);
  console.log("Index of 2:", dynamicArray.indexOf(2));
  console.log("Element at index 1:", dynamicArray.get(1));
  console.log("Removed element at index 0:", dynamicArray.removeAtIndex(0));
  console.log("Updated Array:", dynamicArray.data);
  
//  Построение частотного словаря букв:

const text = `I am 20 years old`; 

const charFrequencyMap = new Map();

for (const char of text) {
  if (charFrequencyMap.has(char)) {
    charFrequencyMap.set(char, charFrequencyMap.get(char) + 1);
  } else {
    charFrequencyMap.set(char, 1);
  }
}

// Вывод частотного словаря
charFrequencyMap.forEach((value, key) => {
  console.log(`Символ: ${key}, Частота: ${value}`);
});



















