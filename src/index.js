module.exports = function reverse (n) {
    let str = n+"";
    let sol = "";

  for (let i = str.length-1; i>=0; i--){
    if (str[i]==="-"){
      continue;
    } else if (str[i]==="0"&&sol.length==0){
      continue;
    } else {
      sol+=str[i];
    }
  }

  return parseInt(sol, 10);
}
