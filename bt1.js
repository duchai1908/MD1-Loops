//bt1
// for( var i=1;i<10;i++){
//     for( var k =1;k<10;k++){
//         document.write("<p>"+i +" * " +k +" = " +i*k +"</p>");
//     }
//     document.write("------------------------");
// }
//bt2
// var sum =0;
// for(var i = 2;sum<20;i++){
//     var flag = 0;
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             flag = 1;
//         }
//     }
//     if(flag==0){
//         document.write("<p>" +i +"</p>");
//         sum++;
//     }
// }
//loops
//bt1
// var b=0;
// do{
//     var flag =0;
//     var a = +prompt("Nhap so nguyen");
//     if(a<2 || a >100){
//         flag=1;
//         alert("Nhap lai");
//     }
// }while(flag==1)
// if(flag==0){
//     for(var i=2;i<a;i++){
//         b = Math.pow(i,2);
//         if( b%2 ==0){
//             console.log(i)
//         }
//     }
// }
//bt2
// var b=0;
// do{
//     var flag =0;
//     var a = +prompt("Nhap so nguyen");
//     if(a<2 || a >100){
//         flag=1;
//         alert("Nhap lai");
//     }
// }while(flag==1)
// if(flag==0){
//     for(var i=2;i<a;i++){
       
//         if( b%2 ==0){
//             b = Math.pow(i,2);
//             console.log(b);
//         }
//     }
// }
//bt3
// let listColor = ['red', 'orange', 'yellow', 'blue', 'green', 'cyan', 'violet'];
// var color =listColor[Math.floor((Math.random() * 7) +1 )];
// console.log("%cMau sac da duoc thay doi","color: "+ color);
//bt4
// for(var i =1; i<=100;i++){
//     if(i%3==0 && i%5==0){
//         alert("FizzBuzz");
//     }
//     else if(i%3==0){
//         alert("Fizz");
//     }
//     else if(i%5==0){
//         alert("Buzz");
//     }
// }
//bt 5
// var a = +prompt("Nhap so N");
// var b = 0;
// for(i=2;i<a;i++){
//     if(a % i ==0){
//         b=1;
//         alert(a +" khong phai la so nguyen to");
//         break;
//     }
// }
// if(b==0){
//     alert(a +" la so nguyen to");
// }
//bt6
// var a = +prompt("Nhap so N");
// var sum =0;
// for(var i =1;i<a;i++){
//     if(a%i==0){
//         sum+=i;
//     }
// }
// if(sum == a){
//     alert(a + " la so hoan hao");
// }
// else{
//     alert(a + " k phai la so hoan hao");
// }
//bt7
// var a = +prompt("Nhap so N"); 
// sum = 1;
// for(var i =1;i<=a;i++){
//     sum*=i;
// }
// alert("giai thua cua "+ a +" la: "+ sum);
//bt8
// var a = 1;
// var b = 1;
// var c = 1;
// var sum =0;
// console.log('1\n1\n');
// while(sum<18){
//     a = b;
//     b = c; 
//     c = a + b;
//     console.log(c);
//     sum++;
// }
// bt9
// for(var i = 10;i>0;i--){
//     for(var j =1; j<=i;j++){
//         document.write("*");  
//     }
//     document.write("<p></p>");
// }
// for(var i = 1;i<=10;i++){
//     for(var j =1; j<=i;j++){
//         document.write("*");  
//     }
//     document.write("<p></p>");
// }
// for(var i =10;i>0;i--){
//     for(var k = 1;k<i;k++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(var k = 10;k>=i;k--){
//         document.write("*");
//     }
//     document.write("<p></p>");
// }
// for(var i = 1;i<=10;i++){
//     for(var j =1; j<=i;j++){
//         document.write("&nbsp;&nbsp;");  
//     }
//     for(var j =i;j<=10;j++){
//         document.write("*");
//     }
//     document.write("<p></p>");
// }
//bt10
// var flag = 0;
// var sum = 3;
// var rd = Math.floor(Math.random() * 10);
// do{
//     var a = +prompt("Nhap so tu 1-10");  
//     if(a == rd){
//         alert("Doan dung r");
//         break;
//     }else if(a < rd){
//         sum--;
//         alert("be hon, con "+sum+" lan nhap");
//         flag = 1;
//     }
//     else{
//         sum--;
//         alert("lon hon, con "+sum+" lan nhap");
//         flag = 1;
//     }
// }while(flag==1 && sum<=3)

