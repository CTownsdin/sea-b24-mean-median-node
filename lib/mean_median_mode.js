var MeanMedianMode = function() {
  // ----------------------
  // solution - Christian Townsdin
    'use strict';
    // mathjs module - No longer using in this program.
    // var computed_mean = mathjs.mean(numbers);
    // var computed_median = mathjs.median(numbers);

    this.mean = function(arr) {
        var sum = 0;
        for(var i=0, len=arr.length; i<len; i++) {
            sum += arr[i];
        }
        return (sum / arr.length);
    };

    // thanks Mark Harrell for assistance !
    this.mode = function(array) {
      var count = {},
        highest = 0,
        winnerArr = [];
      //count each number in the array
      for (var i=0, len=array.length; i<len; i++){
        var num = array[i];
        count[num] = (count[num] || 0) + 1;
      }
      //check against highest, replace if its higher
      // TODO - Eliminate these for in loops!
      for(var prop in count){
        if(count[prop] >= highest){
          highest = count[prop];
        }
      }
      //go through property counts pushes to array
      // TODO - Eliminate these for in loops!
      for(var property in count){
        if(count[property] === highest){
          winnerArr.push(property);
        }
      }
      // just returning 1 MODE,
      // NOTE - we have the whole array for MultiModal sets if needed right here!
      return +winnerArr[0];
    };

    this.median = function(arr) {
        var theMedian = 0,
            sortedArr = arr.sort(function(a,b) { return a - b; }),
            // myNum: index of middle/rtMiddle number in arr
            myNum = Math.floor(arr.length / 2);

        // if odd length, choose the middle number
        if(arr.length % 2 === 1) {  // odd length
            // find the middleNum, 5=3 7=4, 9=5
            return arr[myNum];
        }
        // else (it's even){ choose the middle two and mean }
        else {
            return (arr[myNum - 1] + arr[myNum]) / 2 ;
        }
    };

    // console.log(
    //     "Input was: " + args +"\n"+
    //     "Mean: " + doMean(numbers) +"\n"+
    //     "Median: " + doMedian(numbers) +"\n"+
    //     "Mode: " + doMode(numbers) +"\n"
    // );

  // ----------------------
};

var mmm = new MeanMedianMode();
module.exports = mmm;

// mmm.mean([2, 4, 6]);    // 4
// mmm.median([5,7,9,11]); // 8
// mmm.mode([6,8,8,8,77,100,-1,-1]);   // 8
