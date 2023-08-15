/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var CostPerDay = 35;
var selectedDays= 0;
var days = [document.getElementById('monday'),document.getElementById('tuesday'),document.getElementById('wednesday'), document.getElementById('thursday'), document.getElementById('friday')];
var fullDays = document.getElementById("full");
var halfDays = document.getElementById("half");
var clearButton = document.getElementById("clear-button");




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function selectDay(day){
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked");
            selectedDays +=1;
            totalPrice();
        }
    }

    days[0].addEventListener('click', function(){selectDay(days[0]);});
    days[1].addEventListener('click', function(){selectDay(days[1]);});
    days[2].addEventListener('click', function(){selectDay(days[2]);});
    days[3].addEventListener('click', function(){selectDay(days[3]);});
    days[4].addEventListener('click', function(){selectDay(days[4]);});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function reset(){
    for(var i = 0; i<days.length; i++) {
        days[i].classList.remove("clicked");
        selectedDays = 0;
        totalPrice();
    }
}
clearButton.addEventListener('click', reset);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfdayCost(){
    CostPerDay=20;
    totalPrice();
    halfDays.classList.add("clicked");
    fullDays.classList.remove("clicked");
}

halfDays.addEventListener('click', halfdayCost);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fulldayCost(){
    CostPerDay=35;
    totalPrice();
    halfDays.classList.remove("clicked");
    fullDays.classList.add("clicked");
}

fullDays.addEventListener('click', fulldayCost);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function totalPrice() {
    let cost = document.getElementById("calculatedd-cost");
    cost.innerHTML = CostPerDay*selectedDays;
}

