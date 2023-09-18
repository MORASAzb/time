// import './style.css'


// const input = prompt('enter your time :');
// const inputSecond = +input;

// function timeFormat(second) {

//   if (second === 0) {
//     return "NOW"
//   }

//   const timeUnits = {
//     years: 365 * 12 * 30 * 24 * 60 * 60,
//     month: 30 * 24 * 60 * 60,
//     day: 24 * 60 * 60,
//     hour: 60 * 60,
//     minute: 60,
//     seconds: 1,
//   }


//   const formattedDuration = [];

//   for (const [unit, unitSeconds] of Object.entries(timeUnits)) {


//     if (second >= unitSeconds) {
//       const unitCount = Math.floor(second / unitSeconds);
//       second %= unitSeconds;
//       if (unitCount > 0) {
//         formattedDuration.push(`${unitCount} ${unit}${unitCount > 1 ? 's' : ''}`);
//       }

//     }
//   }

//   if (formattedDuration.length > 1) {
//     const lastItem = formattedDuration.pop();
//     formattedDuration.push(`and ${lastItem}`);
//   }


//   return formattedDuration.join(',');
// }


// console.log(timeFormat(inputSecond));





 const input = prompt('enter your time :');
 const inputSecond = +input;

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const timeUnits = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  const formattedDuration = [];

  for (const [unit, unitSeconds] of Object.entries(timeUnits)) {
    if (seconds >= unitSeconds) {
      const unitCount = Math.floor(seconds / unitSeconds);
      seconds %= unitSeconds;
      if (unitCount > 0) {
        formattedDuration.push(`${unitCount} ${unit}${unitCount > 1 ? 's' : ''}`);
      }
    }
  }



  if(formattedDuration.length==2){
    return `${formattedDuration[0]} and ${formattedDuration[1]}`;
  }
  if(formattedDuration.length>2){
    const lastTwoNames = formattedDuration.slice(-2).join(' and ');
    const remainingNames = formattedDuration.slice(0, -2).join(', ');
    return remainingNames + ', ' + lastTwoNames ;
  }


  return formattedDuration.toString();
}


console.log(formatDuration(inputSecond));