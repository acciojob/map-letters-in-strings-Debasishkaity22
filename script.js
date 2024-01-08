//your JS code here. If required.
function mapLetters(str){
	let ans={};
for(let i=0;i<str.length;i++){
    let char=str[i];
    if(!ans[char]){
      ans[char]=[i];
    }
    else{
      ans[char].push(i);
    }
     
}
	return ans;
}
let input=prompt("Enter Word :");
console.log(mapLetters(input));