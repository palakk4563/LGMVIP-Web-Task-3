var Sname = document.getElementById("name");
var Semail = document.getElementById("email");
const Sphone = document.getElementById("phone");
const Sprofile_link = document.getElementById("pro_link");
const Sreg =  document.querySelector(".registered_stu");
const btnAllClear = document.querySelector(".btnAllClear");
const btnDelete = document.querySelector(".delete");
// const Sform = document.getElementById("stu_form")
let Simg = document.getElementById("input_file");


 function getRadioValue() {
            var ele = document.getElementsByName('gender');
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    return ele[i].value
            }
            return ("Prefer Not to say")
            
        }

function getCheckValue() {
            var ele = document.getElementsByName('skill');
            let values = 'Other skills';
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    values = ele[i].value + ', '+ values
            }
            return values
            
        }

function display(){
    if(Sname.value !== ''  && Semail.value !== '' && Sphone.value !== '' && Sprofile_link.value !=='' ){

    let Pnode = document.createElement("div");
    Pnode.classList.add("stu_details");

    let node = document.createElement("div");
    node.classList.add("data");
    Pnode.appendChild(node);
    Sreg.appendChild(Pnode);
    let radioValue = getRadioValue()
    node.innerHTML = "<h4>"+ Sname.value +"</h4>" + "<br />" + radioValue + "<br />" + Semail.value + "<br />" + Sphone.value + "<br />"+ Sprofile_link.value + "<br />" + getCheckValue();

    let imgnode = document.createElement('div');
    imgnode.classList.add('img_card');
    let img = document.createElement('img')
    
    if (Simg.value!== '')
    {img.src = URL.createObjectURL(Simg.files[0])}
    else
    {img.src = "images/profile.png"}
    img.id = "profile_pic"
    imgnode.appendChild(img);
    Pnode.appendChild(imgnode);
}
    saveData();
}
    


function saveData(){
    window.localStorage.setItem("data",Sreg.innerHTML);
}

function showData(){
   let stuData = window.localStorage.getItem("data");
   if( typeof stuData !== "undefined"){
        Sreg.innerHTML = stuData;
   }  
}

btnAllClear.addEventListener('click',function(){
    while( Sreg.firstChild ){
  Sreg.removeChild( Sreg.firstChild );
  saveData();
}
})

btnDelete.addEventListener('click',function(){
  Sreg.removeChild( Sreg.lastChild );
  saveData();
})


showData();



