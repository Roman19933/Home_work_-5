
function printPyramid(n) {  //Input or number of rows
for (var i = 1; i <= n; i++) {
    var pyramid_row = "";
    for (var j = 1; j <= (2 * n - 1); j++) {   ////For every each counter there exist 2*n-1 value
       if (j >= n + 1 - i && j <= n - 1 + i) {
       pyramid_row += "*"
       } else{
       pyramid_row += " ";
       }   //Check the work book image
    }
    console.log(pyramid_row);
}
}
printPyramid(5)   //Input or number of rows
