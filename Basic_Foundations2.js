//Basic Foundations 2
//
//Biggie size
function bigsize(arr) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            arr[i] = "big"
        }
    }
    return arr
}
x = bigsize([-1,2,3,-4,5,0])
console.log(x)
//
//
//Print Low,Return High
function printlowreturnhigh(arr) {
    console.log(arr)
    var low = arr[0];
    var high = arr[0];
    for(var i = 0;i < arr.length;i++) {
    if(arr[i] < low) {
            low = arr[i];
        }
    if(arr[i] > high) {
            high = arr[i];
        }
    }
    console.log('found high', high)
    console.log('found low', low);
    return high;
}
var x = printlowreturnhigh([5,7,1,10,8,2]);
console.log(x);
//
//
//Print One, Return Another
function printonereturnanother(arr) {
    console.log(arr[arr.length-2])
    for( var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 1) {
            return arr[i]
        }
    }
}
x = printonereturnanother([8,2,3,4,5,6,7])
console.log(x)
//
//
//Double Vision
function doublevision(arr) {
    var newarr =[]
    for( i = 0; i < arr.length; i++) {
        newarr[i] = arr[i]*2;
    }
    console.log(newarr)
    return newarr
}
doublevision([2,4,6,8])
//
//
//Count Positives
function countpositives(arr) {
    var count = 0;
    for(i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
        arr[arr.length-1] = count;
    }
    console.log(arr)
}
countpositives([-1,1,1,1]);
//
//
//Evens and Odds
function evensandodds(arr) {
    var odds = 0;
    var evens = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !==0) {
            odds++;
        }
        else {
            evens++;
        }
        if (odds === 3) {
            console.log("That's odd!");
            odds=0;
        }
        else if(evens === 3) {
            console.log("Even more so!");
            evens=0;
        }
    }
}
evensandodds([1,3,2,4,6]);
evensandodds([1,3,5,2,4]);
//
//
//Increment the seconds
function increment(arr) {
    for(i = 0; i < arr.length; i++) {
        if(i % 2 !==0) {
            arr[i]=arr[i]+1;
        }
    }
    console.log(arr);
    return arr;
}
increment([1,2,3,4,5,6])
//
//
//Previous Lengths
function previous(arr) {
    for(i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr
}
x = previous(["hello", "java", "awesome"]);
console.log(x)
//
//
//Add Seven
function addseven(arr) {
    var newarr = [];
    for(var i=0; i<arr.length; i++) {
        newarr[i]= arr[i]+=7;
    }
    console.log(newarr);
    return newarr;
}
addseven([1,2,3])
//
//
//Reverse Array
function reversearray(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr.reverse();
    }
    console.log(arr);
    return arr;
}
reversearray([5,4,3,2,10])
//
//
//Outlook: Negative
function outlook(arr) {
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
            newarr[i] = - Math.abs(arr[i]);
    }
    console.log(newarr)
    return newarr
}
outlook([-1,1,-2,2,-3,3,-4,4])
//
//
//Always Hungry
function hungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] ==="food") {
            console.log("yummy")
        }
        else {
            console.log("I'm hungry")
        }
    }
    return arr
}
hungry(['brick',"food","salad","food"])
//
//
//Swap Toward the Center
function towardcenter(arr) {
    for(i = 0; i < arr.length; i++) {
        if(i === 0) {
            temp=arr[i];
            arr[i]= arr[arr.length -1];
            arr[arr.length -1]=temp
        }
        else if(i == 2) {
            temp=arr[i];
            arr[i]= arr[arr.length -3];
            arr[arr.length -3]=temp
        }
    }
    console.log(arr)
    return arr
}
towardcenter([1,2,3,4,5,6])
//
//
//Scale the Array
function scalethearray(arr,y) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*y;
    }
    console.log(arr)
    return arr
}
scalethearray([1,2,3,4],2)