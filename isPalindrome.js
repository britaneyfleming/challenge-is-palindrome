// Write your code below

function isPalindrome(word){
    let b = word.length - 1
    for(let i = 0; i < word.length; i++){
        if(word[i] != word[b--]){
            return false
        }
    }
    return true
}
console.log(isPalindrome('dad'))
