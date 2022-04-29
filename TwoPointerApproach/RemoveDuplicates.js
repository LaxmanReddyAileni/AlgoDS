const RemoveDuplicates=(array)=>{
    let first=0;
    let second=1;
    let arr=[]
    for(let i=0;i<array.length-1;i++){
if(array[first]!=array[second]){
    arr.push(array[first],array[second])
first++;
second++;
}else{
    second++;
}
    }
}

console.log(RemoveDuplicates([2, 3, 3, 3, 6, 9, 9]))