// [5,2,4,1,6]
let array =  [5,2,7,1,3,6]

const getLeader= (arr)=> {
    let result =[]
    let isLeader = true
    let leaders = []
    for (let i = 0 ;  i < arr.length; i++){
        for(let j = i+1; j<arr.length;j++){
       if(arr[i]<arr[j]){
        // j++
         isLeader = false
        break
        // leaders.push( arr[i])
       }
       
    }
    if(isLeader){
    leaders.push(arr[i])
    }
    isLeader = true
    }
    console.log(leaders)

}

getLeader(array)