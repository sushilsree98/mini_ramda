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
