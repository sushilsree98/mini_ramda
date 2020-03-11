exports.assocPath =  function(arr,num,obj){
       obj[arr[arr.length-1]]=num;
       obj[arr[0]]=undefined;
       obj=JSON.parse(JSON.stringify(obj))
       ar=[...arr];
       ar=ar.reverse();
       ar=ar.slice(arr.length-2);
       ar.map((ele)=>{
           let x={};
           x[ele]=obj;
           obj=x;
       })
       return obj
   }

 exports.merge=function(obj1,obj2){
      return {...obj1,...obj2};
 }

 exports.append=function(str1,arr){
   str1=JSON.stringify(str1);
   arr.push(JSON.parse(str1));
   return arr;
 }

  exports.applyTo=function(val){
      let that=val;
      return function(fn){
       return fn(that);
     }

    }
  exports.identity=function(val){
       return val;
     }

  exports.add=function(val){
       return function(sum){
         return sum+val;
       }
     }

//returns true if there is a duplicate in an array
exports.dupe=function(...ar){
  let freqCount1={};
        for(let x of ar){
            freqCount1[x]= ++freqCount1[x] || 1;
        }
        for(let key in freqCount1){
            if(freqCount1[key]>1){
                return true;
            }
        }
        return false;
}
//returns true if given average is equal to any of the averages of the pair inside the array
exports.avgPair = function(arr,n){
  let left = 0;
        let right = arr.length-1;
        while (right>left) {
            avg = (arr[left] + arr[right]) / 2;
            console.log(arr[left], arr[right]);
            //console.log(avg);
            if (avg < n) {
                left++
            } else if (avg > n) {
                right--;

            } else {
                return true;
            }
        }
        return false;
}

//returns the max of total within a given window size.
exports.maxSubArray=function(arr,n){
        if(arr.length<n){
            return null
        }
        let max=0;
        let temp=0;
        for(let i=0;i<n;i++){
            max+=arr[i]
        }
        temp=max;
        for(let i=n;i<arr.length;i++){
            temp=temp-arr[i-n]+arr[i];
            max=Math.max(temp,max);
        }
        return max;
    }

exports.isSubseq=function(str1,str2){
               if(str1.length===0) return true;
               if(str2.length===0) return false;
               if(str1[0]==str2[0]) return(isSubsequence(str1.slice(1),str2.slice(1)));
               return isSubseq(str1,str2.slice(1));
             }

//returns the minimum window length required so that the given number is less than or equal to the sum of numbers in a window.
let win=1;
exports.minSubArrayLen=function(arr,n){
        let sum=0;
       for(let i=0;i<win;i++){
        sum+=arr[i];
       }
       for(let i=win;i<arr.length;i++){
        sum=sum-arr[i-win]+arr[i];
        if(sum>=n){
            console.log(win);
            return win;
        }
       }
      if(win<arr.length){
          win++;
          minSubArrayLen(arr,n);
      }else{
      return 0;
    }
  }
