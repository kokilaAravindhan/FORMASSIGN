
 var box=document.createElement("div");
box.setAttribute("class","box");
box.style.margin="80px"

var container=document.createElement("div");
container.setAttribute("class","container-fluid");

var heading=document.createElement("h1");
heading.id="title";
heading.innerHTML="Form Submission";
heading.style.textAlign="center"

var pdesc=document.createElement("p");
pdesc.id="description";
pdesc.innerHTML="form submission created by DOM";
pdesc.style.textAllign="center";
pdesc.style.visibility="hidden";

var row1=document.createElement("div");
row1.setAttribute("class","row");

var col1=document.createElement("div");
col1.setAttribute("class","col-lg-4");
col1.style.margin="0px";

var row11=document.createElement("div");
row11.setAttribute("class","row");

var col11=document.createElement("div");
col11.setAttribute("class","col-6");
col11.style.margin="0px";

var labNom=document.createElement("label");
labNom.setAttribute("for","name");

var pName=document.createElement("p");
pName.innerHTML="Name";

var col12=document.createElement("div");
col12.setAttribute("class","col-6");

var inpName=document.createElement("input");
inpName.setAttribute("type","text");
inpName.id="name";

var row21=document.createElement("div");
row21.setAttribute("class","row");

var col21=document.createElement("div");
col21.setAttribute("class","col-6");
col21.style.margin="0px";

var labLastom=document.createElement("label");
labLastom.setAttribute("for","lastName");

var pLastNom=document.createElement("p");
pLastNom.innerHTML="Last Name";

var col22=document.createElement("div");
col22.setAttribute("class","col-6");

var inpLastName=document.createElement("input");
inpLastName.setAttribute("type","text");
inpLastName.id="lastname";


var row31=document.createElement("div");
row31.setAttribute("class","row");

var col31=document.createElement("div");
col31.setAttribute("class","col-6");
col31.style.margin="0px";

var labAddr=document.createElement("label");
labAddr.setAttribute("for","addr");

var pAddr=document.createElement("p");
pAddr.innerHTML="Address";

var col32=document.createElement("div");
col32.setAttribute("class","col-6");

var inpAddress=document.createElement("input");
inpAddress.setAttribute("type","text");
inpAddress.id="address";

var row41=document.createElement("div");
row41.setAttribute("class","row");

var col41=document.createElement("div");
col41.setAttribute("class","col-6");
col41.style.margin="0px";

var labPincode=document.createElement("label");
labPincode.setAttribute("for","Pincode");

var pPin=document.createElement("p");
pPin.innerHTML="Pincode";

var col42=document.createElement("div");
col42.setAttribute("class","col-6");

var inpPin=document.createElement("input");
inpPin.setAttribute("type","number");
inpPin.size="6";
inpPin.id="pincode";

var row51=document.createElement("div");
row51.setAttribute("class","row");

var col51=document.createElement("div");
col51.setAttribute("class","col-6");
col51.style.margin="0px";

var labGender=document.createElement("label");
labGender.setAttribute("for","gender");

var pGender=document.createElement("p");
pGender.innerHTML="Gender";

var col52=document.createElement("div");
col52.setAttribute("class","col-6");

var labMale=document.createElement("label");
labMale.setAttribute("for","Male");
labMale.innerHTML="Male";
labMale.style.marginRight="20px";

var optionGenMale=document.createElement("input");
optionGenMale.setAttribute("type","radio");
optionGenMale.name="gender"
optionGenMale.value="Male";


var labFemale=document.createElement("label");
labFemale.setAttribute("for","female");
labFemale.innerHTML="Female";

var optionGenFemale=document.createElement("input");
optionGenFemale.setAttribute("type","radio");
optionGenFemale.name="gender"
optionGenFemale.value="Female";


/*var labtransgender=document.createElement("label");
labtransgender.setAttribute("for","transgender");
labtransgender.innerHTML="Transgender";

var optionGenTrans=document.createElement("input");
optionGenTrans.setAttribute("type","radio");
optionGenTrans.id="gender"
optionGenTrans.value="TransGender";
optionGenTrans.innerHTML="TransGender";*/

var row61=document.createElement("div");
row61.setAttribute("class","row");

var col61=document.createElement("div");
col61.setAttribute("class","col-6");
col61.style.margin="0px";

var subBtn=document.createElement("button");
subBtn.setAttribute("class"," btn btn-primary");
subBtn.innerHTML="Submit";
subBtn.onclick=function(){

  document.getElementById("colnameinp").innerHTML=document.getElementById("name").value;
  document.getElementById("collasnameinp").innerHTML=document.getElementById("lastname").value;
  document.getElementById("colpininp").innerHTML=document.getElementById("pincode").value;
  document.getElementById("coladdinp").innerHTML=document.getElementById("address").value;
  document.getElementById("colgeninp").innerHTML=document.querySelector('input[name="gender"]:checked').value ;
  }

var col2=document.createElement("div");
col2.setAttribute("class","col-lg-8");
    
var row2=document.createElement("div");
row2.setAttribute("class","row");
row2.style.marginLeft="50px"
row2.style.backgroundColor="grey";

var colname=document.createElement("div");
colname.setAttribute("class","col-sm-2");
colname.innerHTML="NAME";


var collasname=document.createElement("div");
collasname.setAttribute("class","col-sm-3");
collasname.innerHTML="LAST NAME";

var coladd=document.createElement("div");
coladd.setAttribute("class","col-sm-3")
coladd.innerHTML="ADDRESS";

var colpin=document.createElement("div");
colpin.setAttribute("class","col-sm-2")
colpin.innerHTML="PINCODE";

var colgen=document.createElement("div");
colgen.setAttribute("class","col-sm-2")
colgen.innerHTML="GENDER";


var row3=document.createElement("div");
row3.setAttribute("class","row");
row3.style.marginLeft="50px"

var colnameinp=document.createElement("div");
colnameinp.setAttribute("class","col-sm-2");
colnameinp.id="colnameinp";


var collasnameinp=document.createElement("div");
collasnameinp.setAttribute("class","col-sm-3");
collasnameinp.id="collasnameinp";

var coladdinp=document.createElement("div");
coladdinp.setAttribute("class","col-sm-3")
coladdinp.id="coladdinp";

var colpininp=document.createElement("div");
colpininp.setAttribute("class","col-sm-2")
colpininp.id="colpininp";

var colgeninp=document.createElement("div");
colgeninp.setAttribute("class","col-sm-2")
colgeninp.id="colgeninp";


 








/************* */

row3.append(colnameinp,collasnameinp,coladdinp,colpininp,colgeninp);
row2.append(colname,collasname,coladd,colpin,colgen);
col2.append(row2,row3);

col61.append(subBtn);
row61.append(col61);


labFemale.append(optionGenFemale);
labMale.append(optionGenMale);
col52.append(labMale,labFemale)
labGender.append(pGender);
col51.append(labGender);
row51.append(col51,col52);

col42.append(inpPin);
labPincode.append(pPin);
col41.append(labPincode);
row41.append(col41,col42);

col32.append(inpAddress);
labAddr.append(pAddr);
col31.append(labAddr);
row31.append(col31,col32);

col22.append(inpLastName);
labLastom.append(pLastNom);
col21.append(labLastom);
row21.append(col21,col22);

col12.append(inpName);
labNom.append(pName);
col11.append(labNom);
row11.append(col11,col12);
col1.append(row11,row21,row31,row41,row51,row61);

row1.append(col1,col2);
container.append(heading,pdesc,row1);
box.append(container);
document.body.append(box);
