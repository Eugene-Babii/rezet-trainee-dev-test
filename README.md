# rezet-trainee-dev-test

Ниже изложены 3 задачи, Ваша цель решить сколько сможете, на одном из
языков программирования: js или php. Решением задачи должна быть
функция, принимающая входные данные в виде аргументов и возвращает
результат выполнения.

1. В массиве, содержащем 3 или более чисел, определить подходит ли
каждая группа из трех чисел условию a > b < c или a < b > c. Оформить
решение в виде функции которая принимает исходный массив и возвращает
массив с результатом проверки каждой группы, где 1 удовлетворяет
условию и 0 - нет.
Например:
Исходный массив:
Рассмотрим каждую группу:
1, 3, 5 => 1 < 3 < 5 - нет
3, 5, 4 => 3 < 5 > 4 - да
5, 4, 5 => 5 > 4 < 5 - да
4, 5, 7 => 4 < 5 < 7 - нет
Результат:

2. Дана матрица из целых чисел от 1 до 9, размером 3 * N, где N может быть
больше либо равна 3. Необходимо определить содержит ли каждый участок
матрицы 3 * 3 все числа от 1 до 9.
Например:
Входные данные:1 участок:
1 2 3
4 5 6
7 8 9
содержит все цифры от 1 до 9
2 участок:
2 3 2
5 6 8
8 9 4
не содержит все цифры от 1 до 9
3 участок:
3 2 7
6 8 1
9 4 5
содержит все цифры от 1 до 9
Результат:

3. Есть набор строк (строка это массив из слов), условия форматирования
каждой этой строки и лимит символов в строке. Необходимо подготовить
текст к публикации, так чтобы он удовлетворял условиям форматирования и
не превышал количество символов в строке. Текст должен быть заключен
символ * со всех сторон.
Например:
Набор строк, представлен в виде массива:
Отдельным массивом задаются условия форматирования, где LEFT
указывает что текст нужно выровнять по левой стороне, а RIGHT по правой:Лимит символов в строке, целое положительное число:
1я исходная строка удовлетворяет условию лимита строки "Hello world" (11
chars < 16). Учитывая правило форматирования для 1й строки LEFT,
результат будет:
2я исходная строка не влазит в лимит "Brad came to dinner with us" (27 chars
> 16), значит разбиваем на строки и применяем правило форматирования
RIGHT для всех этих строк. Итого получаем строки:
3я строка получается, по аналогии с 1й получается:
Итого на выходе должен быть такой результат:
