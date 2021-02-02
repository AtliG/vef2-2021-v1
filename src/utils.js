export function getTime(time, form) {
  var timePassed = Date.now() - time;	

  timePassed = Math.round(timePassed/(1000*60*60));

  switch(form) {
    case 'years':
      timePassed = Math.round(timePassed/(24*365));
      break;
    case 'months':
      timePassed = Math.round(timePassed/(24*30));
      break;
    case 'weeks':
      timePassed = Math.round(timePassed/(24*7));
      break;
    case 'days':
      timePassed = Math.round(timePassed/24);
      break;
    default:
      break;
  }

  return timePassed;
}


export function getTimePassed(time) {
  var timePassed = Date.now() - time;

  timePassed = Math.round(timePassed/(1000*60*60));

  if(timePassed < 24) {
    if(timePassed != 11 && timePassed%10 == 1) {
      return timePassed + ' klukkustund';
    } else {
      return timePassed + ' klukkustundum';
    }
  } else if(timePassed < 24*7) {
    timePassed = Math.round(timePassed/24);
    if(timePassed != 11 && timePassed%10 == 1) {
      return timePassed + ' degi';
    } else {
      return timePassed + ' dögum';
    }
  } else if(timePassed < 24*30) {
    timePassed = Math.round(timePassed/(24*7));
    if(timePassed != 11 && timePassed%10 == 1) {
      return timePassed + ' viku';
    } else {
      return timePassed + ' vikum';
    }
  } else if(timePassed < 24*365) {
    timePassed = Math.round(timePassed/(24*30));
    if(timePassed != 11 && timePassed%10 == 1) {
      return timePassed + ' mánuði';
    } else {
      return timePassed + ' mánuðum';
    } 
  } else {
    timePassed = Math.round(timePassed/(24*365));
    if(timePassed != 11 && timePassed%10 == 1) {
      return timePassed + ' ári';
    } else {
      return timePassed + ' árum';
    }
  }
}
    






