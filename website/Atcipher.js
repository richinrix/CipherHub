//selectors
const encryptInput=document.querySelector('.encryptInput>input');
const decryptInput=document.querySelector('.decryptInput>input');
const button=document.querySelector('.btn>.bttn');
const clearBtn=document.querySelector('.btn>.clear');


//
const alphabets= 'abcdefghijklmnopqrstuvwxyz';
const substitute='ZYXWVUTSRQPONMLKJIHGFEDCBA'.toLowerCase();

const enc=message=>{
    this.message=message
    message=message.replace(/ /g,'~');
    console.log('message',message)
    const messageArray=message.split('');
    
    let newMssg='';
    
    console.log(newMssg)
    messageArray.forEach(char => {
        if(char==='~'){
            newMssg+=' '
        }
        else{
            let pos=alphabets.indexOf(char);
            newMssg+=substitute[pos];
        }
    });
    
    encryptInput.value=newMssg;
}


const dec=message=>{
    this.message=message
    message=message.replace(/ /g,'~');
    console.log('message',message)
    const messageArray=message.split('');
    
    let newMssg='';
    
    console.log(newMssg)
    messageArray.forEach(char => {
        if(char==='~'){
            newMssg+=' '
        }
        else{
            let pos=substitute.indexOf(char);
            newMssg+=alphabets[pos];
        }
    });
    
    decryptInput.value=newMssg;
}




button.addEventListener('click',()=>{
    // snd.play();
    // snd.currentTime=0;
    if(encryptInput.value!=''){
        enc(encryptInput.value);
    }
    if(decryptInput.value!=''){
        dec(decryptInput.value)
    }
    
    
})
clearBtn.addEventListener('click',()=>{
    // snd.play();
    // snd.currentTime=0;
    encryptInput.value='';
    decryptInput.value='';
    
})