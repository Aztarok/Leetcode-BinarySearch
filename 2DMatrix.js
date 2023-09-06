let searchMatrix = function (matrix, target) {
	let m = matrix.length;
    
    for (let i = 0; i < m; i++) {
        n = matrix[i].length;
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;

};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let target = 60;

console.log(searchMatrix(matrix, target));
