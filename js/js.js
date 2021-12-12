$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится текущий этаж
  var FloorPath = $(".home-image path");//каждый отдельный этаж в svg
  var counterUp = $(".counter-up"); /*кнопка увеличения этажа*/
  var counterDown = $(".counter-down");/*кнопка уменьшения этажа*/
  
  //функция при наведении мыши на этаж
  FloorPath.on('mouseover', function(){
    FloorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor=$(this).attr('data-floor'); //получаем значение текущего этажа
    $(".counter").text(currentFloor);//записываем значение этажа в счетчик справа
  });
  counterUp.on('click', function(){ //отслежиаем клик по кнопке вверх
 if (currentFloor < 18){ //проверяем значение этажа, не должно >18
  currentFloor++; //прибаляем 1 этаж
  uscurrentFloor = currentFloor.toLocaleString('en-Us',{minimumIntegerDigits:2, useGrouping:false}); //форматируем переменную с этажем, чтобы было 01, а не 1
  $(".counter").text(uscurrentFloor);//записываем значение этажа в счетчик справа
  FloorPath.removeClass("current-floor");//удаляем активный класс у этажей
  $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текуий этаж
 }
  });
  counterDown.on('click', function(){
    if (currentFloor > 2){
      currentFloor--; 
      uscurrentFloor = currentFloor.toLocaleString('en-Us',{minimumIntegerDigits:2, useGrouping:false});
      $(".counter").text(uscurrentFloor);
      FloorPath.removeClass("current-floor");
      $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor");
    }
  })
});