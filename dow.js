
var date = new Date(); // get day of the week from the device
var dayOfWeekNumber = date.getDay(); // get date from the device
var Dayofweek;
var gist;
window.onload = function(){
switch(dayOfWeekNumber){ // cases switch to the  day of the week
    case 0: 
        Dayofweek = 'Sunday';
        gist = 'The most courageuos act is still to think for yourself. Happy Sunday!🙏🙏🙏🙏';
        break;
    case 1:
        Dayofweek = 'Monday';
        gist = 'A goal is a dream with a deadline, so go out  and actualize those goals. Dont forget  to make that male pal of yours your MCM😎😎😎';
        break;
    case 2:
        Dayofweek = 'Tuesday';
        gist = 'An entreprenuer is someone who jumps off a cliff and builds a plane on the way down. Its Twosday post a picture of you and your bestfriend👫👫💞';
        break;
    case 3:
        Dayofweek = 'Wednesday';
        gist = 'I dont look to jump over seven-foot bars. I look for one-foot bars that i can step over. It is Wednesday time for WCW👧👧';
        break;
    case 4:
        Dayofweek = 'Thursday';
        gist = 'You cant have a million dollar dream with a minimum wage work ethic. It is throwback thursday (TBT) let us see your old pictures🤣🤣';
        break;
    case 5:
        Dayofweek = 'Friday';
        gist = 'It is is Friday.......................  The weekend has just began..... Dont forget to turn up🤩🤩';
        break;
    case 6:
        Dayofweek = 'Saturday';
        gist = 'Saturdays are for owanbes (parties)..... let us turn up....💃 🕺💃 🕺💃 🕺';
        break;

}
//displays the day of the week, from the id of day in my html
let weekdayDiv = document.getElementById('day');
weekdayDiv.innerHTML = `${Dayofweek}`;

//displays the day of the week, from the id of gist in my html
let gistDiv = document.getElementById('gist'); 
gistDiv.innerHTML = `${gist}`
}

