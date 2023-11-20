let nameInput = document.querySelector('[type="text"]');
let birthDate = document.querySelector('[type="date"]');
let checkNextBd = document.querySelector('[type="button"]');
let output = document.getElementById('nextBd');


function getUpcomingBirthday(){}

checkNextBd.addEventListener('click', function(){
    let name = nameInput.value
    let birthday = new Date(birthDate.value);
    let currentDate = new Date();
    let daysApart = 0;

    if( birthday.getTime() < currentDate ){
        birthday.setFullYear( currentDate.getFullYear()+1 );
        console.log(currentDate)
        daysApart = parseInt( ( birthday.getTime() - currentDate.getTime() ) / (1000 * 24 * 3600) );
    } else if ( birthday.getTime() > currentDate ){
        daysApart = parseInt( ( birthday.getTime() - currentDate.getTime() ) / (1000 * 24 * 3600) );
    }
    output.textContent = `${name} your next birthday is: ${birthday} which is ${daysApart} days from now!`;
})

// console.log('everything is fine')