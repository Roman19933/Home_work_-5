
function printPyramid(n) {  
for (let i = 1; i <= n; i++) {
    let pyramid_row = "";
    for (let j = 1; j <= (2 * n - 1); j++) {   
       if (j >= n + 1 - i && j <= n - 1 + i) {
       pyramid_row += "*"
       } else{
       pyramid_row += " ";
       }  
    }
   return pyramid_row;
}
}
printPyramid(5)  
