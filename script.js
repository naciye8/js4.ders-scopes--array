// //Write a function findMax that takes three arguments and returns their maximum.
// /*
// let var1 = prompt("birinci sayıyı giriniz")
// let var2 = prompt("ikinci sayıyı giriniz")
// let var3 = prompt("üçüncü sayıyı giriniz")

// function findMax(param1, param2, param3) {
//     console.log(param1, param2, param3)
//     if ((param1 > param2) && (param1 > param3)){
//         return param1;
//     } else if ((param1 > param2) && (param1 < param3)){
//         return param3;
//     } else if ((param1 < param2) && (param2 > param3)){
//         return param2;
//     }
// }

// console.log(findMax(var1, var2, var3)); */

// let arguman = "Merhaba Function"

// function regularFunc(params) {
//     return params;
// }
// regularFunc(arguman);

// const expressFunc = function(params) {
//     return params;
// }
// expressFunc(arguman);


// const arrowFunc = (params) => {
//     return params
// }
// // const arrowFunc = (param1, param2) => {
// //     return (param1 + param2);
// // }
// arrowFunc(arguman);

// const arrowFunc1 = params => {
//     return params
// }
// arrowFunc1(arguman)


// arguman = 15;

// const arrowFunc2 = params => params * 2;   //tek satırlık return yapar

// console.log(arrowFunc2(arguman))


// //function kelimesi kullanmadik cunku arrow kullandik
// const arrowExample = (param1, param2) => {
//          let result1 = param1 + param2;
//          let result2 = param1 - param2;
//          return ([result1, result2])
//      }

//      console.log(arrowExample(6, 3))

     //scoplar global scop susluparantez disindaki scoplar suslu parantes ici local scop,disaridan ulasilamaz ama global scop her yerden ulasilabilir.
     /*
     local scope
     {
        let x = 2;
      }
      global scope
      // x can NOT be used here*/
      /*
      {
        var x = 2;
      }
      // x CAN be used here*/

/*let name="mark";
      const logUserName=()=>{
          let isLoggedIn=true
          let name='guest User'
          if (isLoggedIn){
              let name='john wayne';
              console.log(name);//john wyane
          }
          
          console.log(name);//guest user
      };

      logUserName()

      console.log(name);//mark*/

      /*let mayArr=["merhaba",5, true]
      console.log(mayArr)
      console.log(mayArr[0])//merhaba
      console.log(mayArr[1])//5
      console.log(mayArr[2])//true

      //arr nasil olusturulur

      let myArr=[7];//birinci yontem
      console.log(myArr)
//2. yontem
      let newArr= new Array(3);
      console.log(newArr.length)//3
      console.log(newArr[1])//undefined


//1. yontem(en basit kullanim )!tavsiye
      let newArray= new Array("merhaba","dunya",5);
      console.log(newArray)
      console.log(newArray[1])
//icerik degistirme
      newArray[2]="jupiter";
      newArray[6]="jupiter"


      console.log(newArray)

      //degisik icerikler
      let var1 ="isim";
      let var2;
      let degArr=[null,var1,var2,undefined,NaN,5,"string",]
      console.log(degArr)

      //3.method (stringten variable uretme)
      let lastName="demir turk";

      let newestArr=lastName.split();
      console.log(newestArr)

      let newestArr1=lastName.split("");
      console.log(newestArr1)

      let newestArr2=lastName.split("m");
      console.log(newestArr2)

      let letArr=["mer","ha",5]
      const constArr=["mermer","halhal",55]
      letArr[1]="harhar";
      constArr[1]="hayhay";
      constArr[3]=44
      constArr[6]="burasi 6"

      letArr="yepyeni bir icerikle degistirebilirim"
      letArr[1,3]=[2,"harhar"];

      console.log("letArr==>", letArr)
      console.log("constArr==>",constArr)
      //let de olsa constta olsa array icerigini degistirip manipule edebilir ekleme cikarma yapabilir ama arrayin kendisini degistiremeyiz.*/


      let newArr=new Array(1).fill(3)
      //let newArr=new Array(4).fill(3)//yanyana 4 tane 3 yazdirir
      console.log(newArr)

      let newArray=new Array(2)
      newArray[0]=3
      newArray[1]=5

      console.log(newArray)





