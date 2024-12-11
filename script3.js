	// Arithmetic, Comparison, Logical, Assignment Operators.

    // practice no 02
    
    
    
    
    // if else 
// let id = false;
// if(id){
//     console.log("My id is True");
    

// }else{
    //     console.log("My id is Fasle");
    // }
    
    
    // for loop
// for(let i = 0; i =< 10; i++){
    //     console.log(i);
    
// }
// for(let i =1; i <= 10; i++){
//     console.log( i);

// }

// i want to print the table of 5
// for(let i =1 ; i<= 10; i++){
    //     let mul = i*5;
    //     let result = `5 * ${i} = ${mul}`

    //     console.log(result);
    
// }




//  Write a program to check if a number is even or odd.
// let num = 7;
// if(num%2===0){
    //     console.log("even");
    
// }else{
    //     console.log("Odd");
    
    // }
    

    // Qno = 2
    
    // ==
    // ===
    // !=
    // !==
    // <
    // >
    // >=
    // <=

    // &&
    // || 
    // !

    // if( 5 === "5"){
    //     console.log("true");
    
    // }
    // else{
    //     console.log("false");
    
    // }
    
    // Find the largest of three numbers using comparison operators.
    // let num1 = 500;
    // let num2 = 53;
    // let num3 = 405;

    // if(num1 >= num2 && num1 >= num3){
    //     console.log("Number 1 is greater", num1);
        
    // }else
    // if(num2 >= num1 && num2 >= num3){
    //      console.log("Number 2 is greater", num2);
         
         
    //     }else{
    //     console.log("Number 3 is greater", num3);

    // }


    // Array if else 
    // let num = [2,4,5,6,7]
    // console.log(num[2]);
     

    // array of object 
    // object ko dot notation sy excess krty hen
    // let data = [
    //     { id:1 ,name: "Ahmed"},
    //     { id:2 ,name: "Ali"},
    //     { id:3 ,name: "Asrar"}
    // ]
     
    // console.log(data[1].name);


    let data = [
        { id:1 ,name: "Ahmed", per: 55  },
        { id:2 ,name: "Ali", per: 87},
        { id:3 ,name: "Asrar", per: 40},
        { id:1 ,name: "Ahmed", per: 55  },
        { id:2 ,name: "Ali", per: 37},
        { id:3 ,name: "Asrar", per: 40},
        { id:1 ,name: "Ahmed", per: 45  },
        { id:2 ,name: "Ali", per: 87},
        { id:3 ,name: "Asrar", per: 40},
        { id:1 ,name: "Ahmed", per: 55  },
        { id:2 ,name: "Ali", per: 87},
        { id:3 ,name: "Asrar", per: 40},
        { id:1 ,name: "Ahmed", per: 65  },
        { id:2 ,name: "Ali", per: 87},
        { id:3 ,name: "Asrar", per: 40},
    ]


    for(let i = 0; i< data.length; i++){
        let dataStudent = data[i];
        if(dataStudent.per >= 80 ){
            console.log("A one Grade"); 
        }else 
        if(dataStudent.per >= 70 ){
            console.log("A Grade"); 
        }else
        if(dataStudent.per >= 60 ){
            console.log("B Grade"); 
        }else
            if(dataStudent.per >= 50 ){
                console.log("C Grade"); 
            
        }else{
            console.log("failed");
            
        }
        
        
    }
    
    
