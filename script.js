/**
 * 1. Створити візуальну частину (
 *   --створити форму авто
 *   --створити поле для відображення парковки
 *   --створити авто
 *   --додати декілька авто на парковку
 * 2. Зробити створення та додання авто на парковку
 *     -обробка форми
 *     -створити авто
 *          <div class="car color-blue type-1" style="top: 5px; left: 10px">
 *                 <div class = "top"></div>
 *                 <div class = "middle"></div>
 *                 <div class = "bottom"></div>
 *             </div>
 *     -додати авто на сторінку в потрібні координати
 *
 *
 *
 *
 * 3. Зробити рівні парковки
 *
 *
 *
 * 4.Зробити видалення авто
 *
 *
 *
 *
 * Home work
 *   1 вивести номери на авто в div middle
 *   2 зробити рівні
 *      -вибрати всі кнопки рівнів
 *      -додати подію onclick на кожну кнопку
 *      -при кліку на рівень змінювати класи кнопок на активні і неактивні
 *      -змінювати поле парковки (картинку)
 *      приховати дів з неактивним блоком
 *   3 додавати автомобілі на активний блок
 *   4 прописати координати для кожного місця на блоці кожного рівня
 *
 *
 *
 *
 */
// Обираємо поля форми

let numbers = document.querySelector('input[name=numbers]');
let color = document.querySelector('select[name="color"]');
let type = document.querySelector('select[name="type"]');
let place = document.querySelector('select[name="place"]');

let btnAdd = document.querySelector("#btn-add");

let carsBlock = document.querySelector("#cars-1");

let btnLevel = [document.querySelector("#lvl-1"),
                        document.querySelector("#lvl-2"),
                        document.querySelector("#lvl-3")];
console.dir(btnLevel)

let pos =[
    {top: '-37px',
    left: '117px',
    direction: 'horizontally'
    },
    {
    top: '67px',
    left: '117px',
    direction: 'horizontally'
    },
    {
    top: '167px',
    left: '117px',
    direction: 'horizontally'
    },
    {
    top: '273px',
    left: '117px',
    direction: 'horizontally'
    },
     {
    top: '377px',
    left: '117px',
    direction: 'horizontally'
    },
    {
    top: '-37px',
    left: '353px',
    direction: 'horizontally'
    },
    {
    top: '67px',
    left: '353px',
    direction: 'horizontally'
    },
    {
    top: '167px',
    left: '353px',
    direction: 'horizontally'
    },
    {
    top: '273px',
    left: '353px',
    direction: 'horizontally'
    },
    {
    top: '377px',
    left: '353px',
    direction: 'horizontally'
    }
];
btnAdd.onclick = function (){
    //let info = numbers.value + ", колір " + color.value + ",тип " + type.value + ", місце " + place.value;
    createCar(numbers.value, color.value, type.value, pos[place.value]);

    //console.dir(info);
}

function createCar(numbers, color, type, place) {
    let html = '<div class="car color-' + color + ' type-' + type + ' ' + place.direction + '" style="top: ' + place.top + '; left: ' + place.left + '">'
                    +'<div class = "top"></div>'
                    +'<div class = "middle"></div>'
                    +'<div class = "bottom"></div>'
                +'</div>';
    carsBlock.innerHTML = carsBlock.innerHTML + html
}

carsBlock.onclick = function (event){
    //console.dir(event);
    let element = event.target;
    let parentElement = element.parentElement;
    if(parentElement.classList.contains('car')) {
        let approve = confirm("Ти дійсно хочеш видалити авто?");
        if (approve) {
            parentElement.remove();
        }
    }
}

