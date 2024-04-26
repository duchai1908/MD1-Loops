//b1
// var a = +prompt("Nhap vao so nguyen: ");
// for(var i =2;i<a;i++){
//     var flag = 0;
//     for(var j =2; j<i; j++){
//         if(i%j==0){
//             flag =1;
//             break;
//         }
//     }
//     if(flag==0){
//         console.log(i);
//     }
// }
//b2
// var a = +prompt("Nhap vao so nguyen: ");
// var count = 0;
// for(var i =2;count<a;i++){
//     var flag = 0;
//     for(var j =2; j<i; j++){
//         if(i%j==0){
//             flag =1;
//             break;
//         }
//     }
//     if(flag==0){
//         count++;
//         console.log(i);
//     }
// }
//b3
// var flag = 0;
// do{
//     var a = +prompt("Nhap vao so nguyen: ");
//     if(a > 0){
//         flag = 1;
//     }
// }while(flag==1)
//bai 4
// let total = 0;
// for(i=0;i<30;i+=5){
//     total += i;
// }
// console.log(total);
//bai 8
// let N = +prompt("nhap n >=2: ");
// for(let i =1 ; i<= N;i++){
//     let star = "";
//     for(let j = N-i;j>=1;j--){
//         star += " ";
//     }

//     for(let z =1; z<=2*i-1; z++){
//         star += "*";
//     }
//     console.log(star);
// }
//bai 10
// let str1 = "xin chao";
// let str2 = "";
// for(let i = str1.length-1;i>=0;i--){
//     str2 += str1.charAt(i);
// }
// console.log(str2);
//bai 14
// let a = +prompt("Nhap so ");
// for(let i = 1;i<=a;i++){
//     var count = 0;
//     for(let j=i;count<a;j++){
//         document.write(j);
//         count++;
//     }
//     document.write("<Br>");
// }