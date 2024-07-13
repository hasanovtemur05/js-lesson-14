// 9 - masala



// 10 - masala
let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let targit = 3
let res = false
const searchMatrix = () => {
    matrix.forEach((item) =>{
        if (item.includes(targit)) {
            res = true
        }
    })
    console.log(res);
}
// searchMatrix()




// 11 - masala
let matrixx = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
function fn(n) {
    for (let i = 0; i < matrixx.length; i++) {
        for (let j = i; j < matrixx[i].length; j++) {
            [matrixx[i][j], matrixx[j][i]] = [matrixx[j][i], matrixx[i][j]];
        }
    }
    for(let i = 0; i < matrixx.length; i++){
        matrixx[i].reverse()
    }
    console.log(matrixx);
}
// fn()




// 12 - masala
let str = "salom dunyo ss"
const lastWord = () => {
    let res = str.split(" ")
    console.log(res[res.length - 1].length); 
}
// lastWord()




// 13 - masala
let obj = {a:2, b:5, c:7}
function strings() {
    let new_arr = []
    for(let key in obj){
        new_arr.push(key += obj[key])
    }
    console.log(new_arr);
}
// strings()




// 14 - masala
const findMedianSortedArrays = () => {
    let nums1 = [1, 2]
    let nums2 = [3, 4]
    let result = nums1.concat(nums2)
    console.log(result.reduce((a,b) => a + b, 0) / result.length);
} 
// findMedianSortedArrays()




// 15 - masala
const doublecate = () => {
    let arr = [1,2,3,4,5,4,3]
    let new_arr = []
    let arr2 = arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item))
    arr2.forEach(item => {
    if (!new_arr.includes(item)) {
        new_arr.push(item);
    }
    });

    console.log(new_arr); 
}
// doublecate()




// 16 - masala
let products = [
    {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
    {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
    {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
    {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
    ];
function ClearProducts() {
    products.filter((item) => {
        if (item.id !== 4) {
           console.log(item); 
        }
    })
}
// ClearProducts()





// 17 - masala
let arr = [
    {name: 'John', age: 13},
    {name: 'Mark', age: 56},
    {name: 'Rachel', age: 45},
    {name: 'Nate', age: 67},
    {name: 'Jeniffer', age: 65}
    ];
const otraArfmetik = () => {
    arr.sort((a, b) => a.age - b.age)
    let yosh = arr[0].age
    let qari = arr[arr.length - 1].age
    let result = qari - yosh
    console.log(result);
}
// otraArfmetik()






setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date ();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secound = date.getSeconds();
    time.textContent = hours + " : " + minutes + " : " + secound + " PM "
})