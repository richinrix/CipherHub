//selectors
const encryptInput=document.querySelector('.encryptInput>input');
const decryptInput=document.querySelector('.decryptInput>input');
const button=document.querySelector('.btn>.bttn');
const clearBtn=document.querySelector('.btn>.clear');


//
const alphabets= 'abcdefghijklmnopqrstuvwxyz';
const substitute=[1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20, 21, 22, 23, 24,25, 26]


const enc=message=>{
    this.message=message
    message=message.replace(/ /g,'~');
    
    const messageArray=message.split('');
    
    let newMssg='';
    
    
    messageArray.forEach(char => {
        if(char==='~'){
            newMssg+=' '
        }
        else{
            let pos=alphabets.indexOf(char);
            newMssg+=pos+1;
            newMssg+='-'
            
        }
    });
    newMssg=newMssg.replace(/- /g,' ')
    newMssg=newMssg.slice(0,newMssg.length-1)

    //final message
    encryptInput.value=newMssg;
    
}
// enc('hello for example')


const dec=message=>{
    this.message=message
    message=message.replace(/ /g,'~');
    
    const wordArray=message.split('~');
    
    let newMssg='';
    wordArray.forEach(word=>{
        let letters=word.split('-');
        letters.forEach(letter=>{
            parseInt(letter)
            newMssg+=alphabets[letter-1];
        })
        newMssg+=' ';
    });

    //final message
    decryptInput.value=newMssg;
    
}
// dec('8-5-12-12-15 6-15-18 5-24-1-13-16-12-5')


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

