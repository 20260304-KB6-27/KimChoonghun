const score = [12,52,34,56,75,42,59];
console.log(score);

score.sort();
console.log("after", score);

const scoreReversed = score.sort(function(l,r) {return r-l})
console.log('score reversed', scoreReversed)

const scoreDouble = score.map(function(value) {return value*2})
console.log('score double', scoreDouble)

const scoreFiltered = score.filter(function(value) {return value>=50})
console.log('score filtered', scoreFiltered)