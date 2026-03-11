const score2 = [12,52,34,56,75,42,59];
console.log(score2);

score2.sort(function (l,r) {
    return r-l;
});
console.log("after", score2);