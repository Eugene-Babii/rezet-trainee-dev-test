$(document).ready(function () {
  ////////
  //////// CASE #1
  ////////

  var inputs = new Array(); //массив для хранения исходных данных
  var resultsTask1 = new Array(); //массив для хранения результатов задачи 1
  $("#btnAnalyze1").attr("disabled", true); //кнопка анализировать не активна при пустом массиве

  //
  //наполняем массив пользовательскими данными
  //

  $("#btnAdd1").click(function () {
    //проверяем случаи, если пользователь ничего не ввел
    if ($("#inputNumber1").val() == "") {
      return;
    } else {
      //добавляем в массив данные пользователя
      inputs.push($("#inputNumber1").val());
      //преобразовать массив в строку и вывести
      $("#sourceArray1").html(inputs.join());
      //очистить поле ввода
      $("#inputNumber1").val("");
    }

    //если в массиве менее 3 элементов кнопка анализировать будет не активна
    if (inputs.length < 3) {
      $("#btnAnalyze1").attr("disabled", true);
    } else {
      $("#btnAnalyze1").attr("disabled", false);
    }
  });

  //
  //анализируем массив согласно условиям задачи
  //

  $("#btnAnalyze1").click(function () {
    //обнулить массив перед наполнением
    resultsTask1.length = 0;
    $("#result1").html(resultsTask1.join());
    //вичислить длину массива
    let total = inputs.length;
    //пройти циклом по всем елементам кроме последних двух
    for (let i = 0; i < total - 2; i++) {
      if (
        (inputs[i] > inputs[i + 1] && inputs[i + 1] < inputs[i + 2]) ||
        (inputs[i] < inputs[i + 1] && inputs[i + 1] > inputs[i + 2])
      ) {
        //если соответствует условиям задачи, добавить 1
        resultsTask1.push(1);
      } else {
        //если не соответствует условиям задачи, добавить 0
        resultsTask1.push(0);
      }
    }
    //вывести результаты
    $("#result1").html(resultsTask1.join());
  });

  //
  //очищаем массивы
  //

  $("#btnClear1").click(function () {
    inputs.length = 0;
    $("#sourceArray1").html(inputs.join());
    $("#inputNumber1").val("");
    $("#btnAnalyze1").attr("disabled", true);
    resultsTask1.length = 0;
    $("#result1").html(resultsTask1.join());
  });

  ////////
  //////// CASE #2
  ////////

  var column; //переменная для ввода пользователем размера матрицы
  var matrix = new Array(3); //матрица для наполнения
  var resultsTask2 = new Array(); //массив для хранения результатов задачи 2
  var templateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //массив для сравнения
  var tempArr = new Array(); //вспомогательный массив
  $("#btnAnalyze2").attr("disabled", true); //кнопка анализа не доступна когда матрица не создана

  //
  //создаем матрицу
  //

  $("#btnAdd2").click(function () {
    //предварительная очистка
    $("#matrix").html("");
    resultsTask2.length = 0;
    $("#result2").html(resultsTask2.join());

    //проверяем случаи, если пользователь ничего не ввел
    if ($("#inputNumber2").val() == "" || $("#inputNumber2").val() < 3) {
      alert("Вы ввели не верное значение N!");
      return;
    } else {
      //получаем данные от пользователя
      column = $("#inputNumber2").val();
      //создаем матрицу
      for (let i = 0; i < 3; i++) {
        matrix[i] = new Array(column);
        for (let j = 0; j < column; j++) {
          //заполняем матрицу случайными числами от 1 до 9
          matrix[i][j] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        }
      }
    }

    //матрица из условий задачи (для ручной проверки)
    // matrix = [
    //   [1, 2, 3, 2, 7],
    //   [4, 5, 6, 8, 1],
    //   [7, 8, 9, 4, 5],
    // ];
    // column = 5;

    //вывести матрицу на экран
    $("#matrix").append("<table>");
    for (let i = 0; i < 3; i++) {
      $("#matrix").append("<tr>\r\n");
      for (let j = 0; j < column; j++) {
        $("#matrix").append("<td>" + matrix[i][j] + "&nbsp" + "</td>");
      }
      $("#matrix").append("</tr>\r\n");
    }
    $("#matrix").append("</table>\r\n<br>\r\n");

    //активировать кнопку анализа
    $("#btnAnalyze2").attr("disabled", false);
  });

  //
  //анализируем матрицу согласно условиям задачи
  //

  $("#btnAnalyze2").click(function () {
    //обнулить массив с результатами перед наполнением
    resultsTask2.length = 0;
    $("#result2").html(resultsTask2.join());

    //пройти циклами по всем участкам 3*3
    let total = column - 2;
    let countFrom = 0;
    do {
      let countTo = countFrom + 3;

      //проход по одному участку 3*3
      for (let i = 0; i < 3; i++) {
        for (let j = countFrom; j < countTo; j++) {
          //поместить все элементы участка во временный массив
          tempArr.push(matrix[i][j]);
        }
      }

      //отсортировать временный массив
      tempArr.sort();

      //сравнить временный массив с шаблонным
      if (JSON.stringify(tempArr) == JSON.stringify(templateArr)) {
        //соответствует условиям
        resultsTask2.push(true);
      } else {
        //не соответствует условиям
        resultsTask2.push(false);
      }

      tempArr.length = 0;

      countFrom++;
    } while (countFrom < total);

    //вывести результаты
    $("#result2").html(resultsTask2.join());
  });

  //
  //очистить данные
  //

  $("#btnClear2").click(function () {
    $("#inputNumber2").val("");
    $("#btnAnalyze2").attr("disabled", true);
    $("#matrix").html("");
    resultsTask2.length = 0;
    $("#result2").html(resultsTask2.join());
  });

  //
  // CASE #3
  //

  var strings = new Array(); //массивы слов
  var formats = new Array(); //массив с условиями формативрования
  var limit; //лимит символов
  var countStrings = 0; //вспомогательная переменная
  var countFormats = 0;

  //
  //Добавляем строки в массив
  //

  $("#btnAddText3").click(function () {
    //проверяем случаи, если пользователь ничего не ввел
    if ($("#inputText3").val() == "") {
      return;
    } else {
      let string = $("#inputText3").val();
      let arr = string.split(", ");
      //   let arr = string.join();
      strings.push(arr);
      //   console.log(strings);
    }

    //вывести массив строк на экран
    $("#strings").html("");
    for (let i = 0; i < strings.length; i++) {
      $("#strings").append("<p>" + strings[i] + "</p>");
    }

    //очистить поле ввода
    $("#inputText3").val("");

    countStrings = strings.length;
    // console.log(countStrings);
  });

  //
  //Добавляем форматы в массив
  //

  $("#btnAddFormat3").click(function () {
    let format = $("#selectFormat3").val();
    if (!format) {
      return;
    } else {
      formats.push(format);

      //обрезать количество форматов согласно количеству строк
      // var formatsCount = formats.slice(0, countStrings);
      countFormats = formats.length;
    }

    //вывести массив форматов на экран
    $("#formats").html("");
    for (let i = 0; i < formats.length; i++) {
      $("#formats").append("<p>" + formats[i] + "</p>");
    }
  });

  //
  //Добавляем лимит
  //

  $("#btnAddLimit3").click(function () {
    if ($("#inputLimit3").val() == "" || $("#inputLimit3").val() < 15) {
      alert("Вы ввели не верное значение лимита!");
      return;
    } else {
      limit = $("#inputLimit3").val();
    }

    //вывести лимит на экран
    $("#limit").html("");
    $("#limit").append("<p>" + limit + "</p>");
  });

  //
  //Форматируем текст
  //

  $("#btnFormat3").click(function () {
    //создаем массив для форматированного вывода
    var formatedText = new Array();
    //переменная для подсчета длины элементов в строке
    var stringLength = 0;
    //переменная для временной форматированной строки
    var formatedString = new Array();

    if (countStrings != countFormats) {
      alert("Количество форматов не соответствует количесву строк!!!");
      return;
    }

    //перебираем строки
    for (let i = 0; i < strings.length; i++) {
      //перебираем слова в строках
      for (let j = 0; j < strings[i].length; j++) {
        //определяем какой будет размер строки после добавления нового слова
        stringLength += strings[i][j].length;
        //если лимит не будет достигнут или превышен
        if (stringLength < limit) {
          //добавляем слово в строку
          formatedString.push(strings[i][j]);

          //добавляем пробел после слова
          formatedString.push(" ");
          stringLength++;

          //если лимит будет достигнут
        } else if (stringLength == limit) {
          //добавляем слово в строку
          formatedString.push(strings[i][j]);

          //добавляем * в начало/конец строки
          formatedString.push("*");
          formatedString.unshift("*");

          //добавляем заполненную строку в массив выводы
          formatedText.push(formatedString);

          //обнуляем переменные для перехода на новую строку
          stringLength = 0;
          formatedString = [];

          //если лимит будет превышен
        } else {
          if (formats[i] == "LEFT") {
            //убрать пробел спереди
            let shifted = formatedString.shift();
            if (shifted != " ") {
              formatedString.unshift(shifted);
            }
          }
          if (formats[i] == "RIGHT") {
            //убрать пробел сзади
            let popped = formatedString.pop();
            if (popped != " ") {
              formatedString.push(popped);
            }
          }

          //определяем незаполненное пространство в строке
          let emptySpace = Number(limit) - formatedString.join("").length;
          //создаем массив пробелов для заполнения пустого пространства
          let tempArr = new Array(emptySpace);
          tempArr.fill("&nbsp;");
          let tempArr2 = tempArr.join("");

          //добавляем массив с пробелами в начало или в конец в зависимости от условий форматирования
          if (formats[i] == "LEFT") {
            formatedString.push(tempArr2);
          }
          if (formats[i] == "RIGHT") {
            formatedString.unshift(tempArr2);
          }

          //добавляем * в начало/конец строки
          formatedString.push("*");
          formatedString.unshift("*");

          //добавляем отформатированную строку в массив вывода
          formatedText.push(formatedString);

          //обнуляем переменные для перехода на новую строку и добавляем текущее слово
          formatedString = [];
          stringLength = 0;

          formatedString.push(strings[i][j]);
          formatedString.push(" ");
          stringLength = 0;
          stringLength += strings[i][j].length;
          stringLength++;
        }
      }

      //когда достигли конца строки

      if (formats[i] == "LEFT") {
        //убрать пробел спереди
        let shifted = formatedString.shift();
        if (shifted != " ") {
          formatedString.unshift(shifted);
        }
      }
      if (formats[i] == "RIGHT") {
        //убрать пробел сзади
        let popped = formatedString.pop();
        if (popped != " ") {
          formatedString.push(popped);
        }
      }

      //определяем незаполненное пространство в строке
      var emptySpace = Number(limit) - formatedString.join("").length;
      if (emptySpace != Number(limit) && emptySpace > 0) {
        //создаем массив пробелов для заполнения пустого пространства
        let tempArr = new Array(emptySpace);
        tempArr.fill("&nbsp;");
        let tempArr2 = tempArr.join("");

        //добавляем массив с пробелами в начало или в конец в зависимости от условий форматирования
        if (formats[i] == "LEFT") {
          formatedString.push(tempArr2);
        }
        if (formats[i] == "RIGHT") {
          formatedString.unshift(tempArr2);
        }
      }

      //добавляем * в начало/конец строки
      formatedString.push("*");
      formatedString.unshift("*");

      //добавляем отформатированную строку в массив вывода
      formatedText.push(formatedString);

      //обнуляем переменные для перехода на новую строку и добавляем текущее слово
      formatedString = [];
      stringLength = 0;
    }

    //добавляем отформатированную строку в массив вывода
    formatedText.push(formatedString);

    //массив * для вставки в начало и конец вывода
    let decorLength = Number(limit) + 2;
    let decorArr = new Array(decorLength);
    decorArr.fill("*");
    let decorArr2 = decorArr.join("");

    //
    //вывести форматированный текст на страницу
    //
    $("#result3").html("");
    $("#result3").append("<pre class='text-white'>" + decorArr2 + "</pre>");
    for (let i = 0; i < formatedText.length; i++) {
      $("#result3").append(
        "<pre class='text-white'>" + formatedText[i].join("") + "</pre>"
      );
    }
    $("#result3").append("<pre class='text-white'>" + decorArr2 + "</pre>");
  });

  //
  //очистка
  //
  $("#btnClear3").click(function () {
    formatedString = [];
    formatedText = [];
    formats = [];
    stringLength = 0;
    strings = [];
    limit = 0;
    $("#result3").html("");
    $("#limit").html("");
    $("#strings").html("");
    $("#inputText3").val("");
    $("#formats").html("");
    $("#inputLimit3").val("");
  });
});
