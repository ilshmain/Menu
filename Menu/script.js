let All = document.querySelector('#All')
let Breakfast = document.querySelector('#Breakfast')
let Lunch = document.querySelector('#Lunch')
let Shakes = document.querySelector('#Shakes')
let Dinner = document.querySelector('#Dinner')

let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let ten = document.querySelector('#ten')

let mas = [one, two, three, four, five, six, seven, eight, nine, ten]

function showAll() {
mas.forEach (function (value) {
    show(value)
})
}

function show($el) {
    $el.classList.remove('hide')
}
function hide($el) {
    $el.classList.add('hide')
}


All.addEventListener('click', function() 
{
    showAll()
})

Breakfast.addEventListener('click', function() 
{
    showAll()
    mas.forEach (function (value) {
 
        if ((value == one) || (value == four) || (value == seven))
        {
            show(value)
        }
        else
        hide(value)
})
})

Lunch.addEventListener('click', function() 
{
    showAll()
    mas.forEach (function (value) {
 
        if ((value == two) || (value == five) || (value == eight))
        {
            show(value)
        }
        else
        hide(value)
})
})

Shakes.addEventListener('click', function() 
{
    showAll()
    mas.forEach (function (value) {
 
        if ((value == three) || (value == six) || (value == nine))
        {
            show(value)
        }
        else
        hide(value)
})
})

Dinner.addEventListener('click', function() 
{
    showAll()
    mas.forEach (function (value) {
 
        if (value == ten)
        {
            show(value)
        }
        else
        hide(value)
})
})
