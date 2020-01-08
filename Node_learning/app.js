// const tutorial = require('./tutorial')

// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);


// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();



// eventEmitter.on('tutorial',(num1 ,num2)=>{
//     console.log(num1 + num2);
// });

// eventEmitter.emit('tutorial',1,2);


// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin,
//                           output : process.stdout});
// let num1 = Math.floor((Math.random() * 10 ) + 1);
// let num2 = Math.floor((Math.random() * 10 ) + 1);
// let answer = num1 + num2;

// rl.question(`What is ${ num1 } + ${ num2 } ? \n` ,
// (userInput)=>{
//     if(userInput.trim() == answer){
//         rl.close();
//     }
//     else{
//         rl.setPrompt('Incorrect response please try again \n');
//         rl.prompt();
//         rl.on('line',(userInput)=>{
//             if(userInput.trim() == answer)
//             rl.close();
//             else{
//                 rl.setPrompt(` Your answer of ${userInput} is incorrect try again`);
//                 rl.prompt();
//             }
//         })
//     }
// });

// rl.on('close',()=>{
//     console.log('correct sir');
// });


// const fs = require('fs');
// //create a file
// fs.writeFile('example.txt',"This is  an example",(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('File successsfully created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);        
//         })
//     }
       
// });

// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully renamed file');    

// })

// fs.appendFile('example2.txt','Some data being appended',(err)=>{
//     if(err)
//         console.log(err);
//     else 
//         console.log('successfully appended data to file');    
// })

// fs.unlink('example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//          console.log('successfully deleted file');   
// })


// const  fs = require('fs');
// fs.mkdir('tutoriral',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('folder successfully created');
//     }    
// })





// fs.mkdir('tutoriral',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.rmdir('tutorial',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('successfuly deleted folder');
//             }    
//         });
//     }    
// })



// creating http server
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello world from node');
        res.end();
        
    }
    else {
        res.write('using some other domain');
        res.end();
    
    }     
});

server.listen('5000');
