let username=document.getElementById('username')
let userin=document.getElementById('userin')
let mail =document.getElementById('mail')
let passw=document.getElementById('passw')
let passin=document.getElementById('passin')
let conf_pass=document.getElementById('conf_pass')
let gen=document.querySelectorAll('input[name="gender"]')
let male=document.getElementById('male')
let female=document.getElementById('female')
let terms=document.getElementById('terms')
let conditions=document.getElementById('conditions')
let submit=document.getElementById('submit')
let submitin=document.getElementById('submitin')
let passbtn=document.getElementById('passbtn')
let conbtn=document.getElementById('conbtn')
let login=document.getElementById('login')
let signform=document.getElementById('signform')
let btnin=document.getElementById('btnin')
let btnup=document.getElementById('btnup')
let welcome=document.querySelector('.welcome')
let gender='male'
let passcheck=true
let users;
let usererror=document.getElementById('usererror')
let usererror2=document.getElementById('usererror2')

if(localStorage.getItem('user') != null){
    users=JSON.parse(localStorage.getItem('user')) 
}
else{
     users=[]
}
 if(female.checked){
    gender='female'
 }
function checkpassword(){
    if(passw.value!=conf_pass.value){
       alert('كلمه السر غير مطابقه')
       passcheck=false
    }
}
function submit1(){
    if (username.value !='' 
    && mail.value!=''
    && mail.value.includes('@')
    && passw.value!=''
    && conf_pass.value!=''
    && passw.value==conf_pass.value)
    {
 let new_user={
    username:username.value,
    mail:mail.value,
    passw:passw.value,
    gend:gender
 }
 let exists = false;
 for(let i=0;i<users.length;i++){
    if (users[i].username ===new_user.username )
        {
            alert('This username is already exist choose new username or click on forget password button to get your password ')
            exists =true
            break;
        }
    else if (users[i].mail ===new_user.mail) {
        alert('This email is already exist enter other email or click on forget password button to get your password ')
        exists =true
            break;
    }}
    if (!exists) {
         users.push(new_user)
         localStorage.setItem('user',JSON.stringify(users))
    }
 
 clearsignup()
 signform.style.display='none'
 login.style.display='block'
}
else{
    
    usererror.style.display='block'
}
}
passbtn.onclick=function(){
   
    if (passw.type=='password'){
        passw.setAttribute("type",'text')
    }
    else{
        passw.setAttribute("type",'password')
    }
 }
 conbtn.onclick=function(){
   
    if (conf_pass.type=='password'){
        conf_pass.setAttribute("type",'text')
    }
    else{
        conf_pass.setAttribute("type",'password')
    }
 }
 function clearsignup(){
    username.value ='' 
    mail.value=''
    passw.value=''
    conf_pass.value=''
 }
 function clearsignin(){
    userin.value ='' 
    passin.value=''
    
 }
btnin.onclick=function(){
    login.style.display='block'
    welcome.style.display='none'
     
 }
btnup.onclick=function(){
    signform.style.display='block'
    welcome.style.display='none'
}
function backpage(){
    login.style.display='none' 
    signform.style.display='none'
    welcome.style.display='block'
    welcome.style.display = 'flex'
}
function hidfill(){
    usererror.style.display='none'
    usererror2.style.display='none'
}
function submitin1(){
    if (userin.value !='' && passin.value !=''){
        let found=false;
        let new_user={
            username:userin.value,
            passw:passin.value
        }
        for(let i=0;i<users.length;i++){
            if(users[i].username===new_user.username && 
                users[i].passw===new_user.passw )
                {usererror2.style.display='block'  
                usererror2.innerHTML='welcome back'
                console.log('welcome back')
                found=true;
                break;
            }}
            if(!found){
                usererror2.style.display='block'  
                usererror2.innerHTML='you are not register '
            }
            else{
                usererror.style.display='block';  
            }   
        }
        clearsignin()
   
    
}