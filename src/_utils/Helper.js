export function reverseString(params){
    let reverseWordArr =  params.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}
