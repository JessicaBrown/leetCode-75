
var mergeAlternately = function(word1, word2) {
    let merged = '';
    let length = word1.length > word2.length ? word1.length : word2.length;

    for(let i=0; i < length; i++){
        if(word1[i])
        merged += word1[i];
        if(word2[i])
        merged += word2[i];
    }
    return merged;
};
console.log('consoleLog1', mergeAlternately('fdsfdsafdsaf','3242343443'))
const jdls = () =>{}
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return '';
    
      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      const len = gcd(str1.length, str2.length);

  return str1.substring(0, len);
};
// second gcdOfString will not show anything bc it is returning an empty string per if statement
console.log('consoleLog2', gcdOfStrings( 'AB', 'ABABABABAB'), gcdOfStrings( 'AB', 'ABABZZZ'))

const kidsWithCandies = (candies, extraCandies) => {
    let greatest = [];
    //let largest = Math.max.apply(0, candies)
   let largest = Math.max(...candies);
    for(let i = 0; i < candies.length; i++){
       candies[i] + extraCandies  >= largest ? greatest.push(true)  : greatest.push(false) ;
    }
    return greatest;
};
console.log("consoleLog3", kidsWithCandies([2,3,5,1,3],3))

const canPlaceFlowers = (flowerbed, n) =>{
        let canPlant = 0;

    for (let i=0; i<flowerbed.length; i++) {
        let prev = flowerbed[i - 1] || 0;
        let curr = flowerbed[i];
        let next = flowerbed[i + 1] || 0;

        if (prev === 0 && curr !== 1 && next === 0) {
            canPlant++;
            flowerbed[i] = 1;
        } 
    }

    return canPlant >= n;
};

console.log("consoleLog4", canPlaceFlowers([1,0,0,0,1,0,0], 2))

const reverseVowels = (s) => {
      const vow = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/gi, el=> vow.pop());
};
console.log("consoleLog5", reverseVowels("Hello"))