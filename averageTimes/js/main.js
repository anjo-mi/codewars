// function stat(str) {
//     let obj = {
//       h,
//       m,
//       s
//     }
//     str = str.split(', ')
//     for (let i = 0 ; i < str.length ; i++){
//       str[i] = str[i].split('|')
//       obj['h'] += str[i][0]
//       obj['m'] += str[i][1]
//       obj['s'] += str[i][2]
//     }
//     let addedMins = Math.floor(obj['s'] / 60)
//     obj['m'] += addedMins
//     obj['s'] %= 60
//     let addedHours = Math.floor(obj['m'] / 60)
//     obj['h'] += addedHours
//     obj['m'] %= 60
//     let avgHours = obj['h'] / str.length
//     let avgMins = obj['m'] / str.length
//     let avgSecs = obj['s'] / str.length
//     let reAddSecs = avgMins - Math.floor(avgMins)
//     avgMins = Math.floor(avgMins)
//     avgSecs = Math.trunc(reAddSecs * 60 + avgSecs)
//     let reAddMins = avgHours - Math.floor(avgHours)
//     avgHours = Math.floor(avgHours)
//     avgMins = Math.trunc(reAddMins * 60 + avgMins)
//     console.log(avgHours, avgMins, avgSecs)
//   }

function stat(strg) {
    if (strg === '') {
      return strg;
    }
    const teamStats = new teamStatistics(strg);
    return 'Range: ' +  teamStats.getRange() + ' Average: ' + teamStats.getAverage() + ' Median: ' + teamStats.getMedian();
}

class teamStatistics {
  constructor(teamScores) {
    this.teamScoresInArray = teamScores.split(', ');
    this.teamTimesInSeconds = [];
    
    for(let singlePerson of this.teamScoresInArray) {
      const hoursToSeconds = Number(singlePerson.split('|')[0] * 60 * 60);
      const minutesToSeconds = Number(singlePerson.split('|')[1] * 60);
      const seconds = Number(singlePerson.split('|')[2]);
      this.teamTimesInSeconds.push(hoursToSeconds + minutesToSeconds + seconds);
    }
  }
  
  getFormatedTime(timeInSeconds) {
    const date = new Date(null);
    date.setSeconds(timeInSeconds);
    
    return date.toISOString().substr(11, 8).replace(/:\s*/g, '|');
  }
  
  getAverage() {
    let arraySum = 0;
    let average = 0;
    const arrayLength = this.teamTimesInSeconds.length;

    
    for (let number of this.teamTimesInSeconds) {
      arraySum += number;
    }
    
    return this.getFormatedTime(arraySum / arrayLength);
  }
    
  getMedian() {
    this.teamTimesInSeconds.sort( function(a,b) {return a - b;} );

    var half = Math.floor(this.teamTimesInSeconds.length/2);

    if(this.teamTimesInSeconds.length % 2) {
      return this.getFormatedTime(this.teamTimesInSeconds[half]);
    } else {
      return this.getFormatedTime((this.teamTimesInSeconds[half-1] + this.teamTimesInSeconds[half]) / 2.0);
    }
  }
  
  getRange() {
    const biggest = Math.max.apply(Math, this.teamTimesInSeconds);
    const smallest = Math.min.apply(Math, this.teamTimesInSeconds);
    return this.getFormatedTime(biggest-smallest);
  }

}


console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
    // "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))
    // "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")