
// java entar

// Select Your Seat
let totarmone = 0
let total1=0
let seat1=1
const Select  = document.querySelectorAll('.kbd')


for (let index = 0; index < Select.length; index++) {
    const element = Select[index];
   

    Select[index].addEventListener("click", function() {
        let selectedHeadings = document.querySelectorAll('.kbd');
        
        
        if (selectedHeadings.length >= 4 && !this.classList.contains("selected")) {
            alert("|| ৪ সিট এর বেশি নয়  ২ টি হলে ভালো হয় ||");
            return;
        }
    })




    


    element.addEventListener('focus',function(e){

        e.target.style. backgroundColor= 'Lime'

        


    })

    element.addEventListener('click',function(e){

       const w = e.target.innerText
       
        const target = document.getElementById('p');

        const velu =document.createElement('p')
         velu.innerText=w
        

            target.appendChild(velu)




    })
let f = 550

    element.addEventListener('click',function(e){
        const w = e.target.innerText
       
        const target = document.getElementById('prich');
        const y = parseFloat(target.innerText)
        const asd =document.createElement('h6')
         asd.innerText=f

             
        
         target.appendChild(asd).innerText




     

    })

                            // totalprich

    element.addEventListener('click' , function (){

const taka = parseFloat(document.getElementById('prich').innerText)

totarmone+=taka


document.getElementById('totalprich').innerText=totarmone



    })




    element.addEventListener('click', function(){


const bad = document.getElementById('biog').innerText
            
         const d= bad-n
    
const ba = document.getElementById('biog')
 ba.innerText=d

    } )




    element.addEventListener('click',function(e){
     const w = e.target.innerText
    const ne = document.getElementById('Economoy')
    const n = document.createElement('p')
    const nq = ne.appendChild(n)
    const newContent = document.createTextNode('Economoy')
    const bn = n.appendChild(newContent)
    const nn= n.innerText
    nq.innerText=nn
    
    })

    // grand

    element.addEventListener('click' , function (){

        const taka = parseFloat(document.getElementById('prich').innerText)
        
        total1+=taka
        
        
        document.getElementById('grand').innerText=total1
        
    
        
        
        })

        element.addEventListener('click',function(){
            const seat = parseInt(document.getElementById('seat').innerText)
            
         const ss= seat1+seat
         
            const sea =document.getElementById('seat')
          const d=  sea.innerText=ss
          
           
     })
    
}
                

               
let n=1








            // cupun


const button = document.getElementById('button');

button.addEventListener('click' , function(){


const input = document.getElementById('scer').value

const buton = document.getElementById('button');


if(input==='NEW15'){
    const toto = document.getElementById('totalprich').innerText
    // console.log(toto.innerText,'dd');
    if(toto >=550){
      
        let r =toto*0.15
        const v = toto-r
        const grand = document.getElementById('grand').innerText=v
        const input = document.getElementById('scer')
        input.classList.add('hidden')
        const buton = document.getElementById('button')
        buton.classList.add('hidden')
    }

}
   else if(input==='Couple 20'){
    const toto = document.getElementById('totalprich').innerText
    // console.log(toto.innerText,'dd');
    if(toto >=550){
      
        let r =toto*0.2
        const v = toto-r
        const grand = document.getElementById('grand').innerText=v
        const input = document.getElementById('scer')
        input.classList.add('hidden')
        const buton = document.getElementById('button')
        buton.classList.add('hidden')
    }

}
else{
    alert('plz use Coupon Code')
}


})


const button2=document.getElementById('button2');

button2.addEventListener('click',function(){

const body = document.querySelector('main');
body.classList.add('hidden')
const header = document.querySelector('header');
header.classList.add('hidden')

const nextpart = document.getElementById('nextpart');
nextpart.classList.remove('hidden')

})






document.addEventListener('click', function tigit(){
   
    const ss = document.getElementById('scorl');

    ss.scrollIntoView({
        behavior:'smooth'
    })
    
    
    })












