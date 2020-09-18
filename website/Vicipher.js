//selectors
const clearBtn=document.querySelector('.bttn>.clear');
const Button=document.getElementById('btn');
const encInput=document.querySelector('.textboxes>.encryptInput>input');
const decInput=document.querySelector('.textboxes>.decryptInput>input');
const keyInput=document.querySelector('.textboxes>.keyInput>input');



// const alphabets=[
//     'a', 'b', 'c', 'd', 'e', 'f',
//     'g', 'h', 'i', 'j', 'k', 'l',
//     'm', 'n', 'o', 'p', 'q', 'r',
//     's', 't', 'u', 'v', 'w', 'x',
//     'y', 'z'
//   ];
const alphabets='abcdefghijklmnopqrstuvwxyz';
//substitute array to perform shifting
let substitute=alphabets;
let subArray=substitute.split('')
//shifting the alphabets every time to apply it in the array
  const shifting=()=>{
    let temp=substitute[0];
    substitute=substitute.slice(1,26)+temp;
    subArray=substitute.split('');
    
}
//making of 25x25 array
let matrix=new Array(25);
for(i=0;i<=25;i++)
  matrix[i]=new Array(25)
for(let i=0;i<=25;i++){
    
    for(let j=0;j<=25;j++){
        matrix[i][j]=subArray[j];
        
    }
    shifting();
}


//using const so it doesn get changed in future
const Matrix=matrix;

//encryption method
function enc(message,key){
    this.message=message;
    message=message.replace(/ /g,'~');
    this.key=key;
    key=key.repeat(25);
    const keystream=key.slice(0,25);
    let messageArray=message.split('');
    
    let newMssg='';
    let mssgIndex=0;
    messageArray.forEach(char => {
        if(char==='~'){
            newMssg+=' '
        }
        else{
            
            let row=alphabets.indexOf(keystream[mssgIndex])
            let col=alphabets.indexOf(char);
            mssgIndex++;
            newMssg+=Matrix[row][col];
        }
    });
    encInput.value=newMssg;

    
}


function dec(message,key){
    this.message=message;
    message=message.replace(/ /g,'~');
    this.key=key;
    key=key.repeat(50);
    const keystream=key.slice(0,25);
    let messageArray=message.split('');
    
    let newMssg='';
    let mssgIndex=0;
    messageArray.forEach(char=>{
        if(char==='~'){
            newMssg+=' '
        }
        else{
            let charValue=alphabets.indexOf(char);
            let keyValue=alphabets.indexOf(keystream[mssgIndex]);
            let difference=charValue-keyValue;
            
            if(difference>0)
                newMssg+=alphabets[difference];
            else 
                newMssg+=alphabets[(difference+26)%26];
                mssgIndex++;
        }
        
        
    });
    decInput.value=newMssg;

}


clearBtn.addEventListener('click',()=>{
    $('body').find("input[type='text'],textarea").val("");
    
})

Button.addEventListener('click',()=>{
    enc(encInput.value,keyInput.value);
    dec(decInput.value,keyInput.value);
})
