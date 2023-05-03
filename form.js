var box=document.createElement("div");
box.setAttribute("class","box");
box.style.margin="80px"


var container=document.createElement("div");
container.setAttribute("class","container");


var row1=document.createElement("div");
row1.setAttribute("class","row");

var col1=document.createElement("div");
col1.setAttribute("class","col-lg-4");
col1.style.margin="0px";

var row11=document.createElement("div");
row11.setAttribute("class","row");

var col11=document.createElement("div");
col11.setAttribute("class","col-sm-6");
col11.style.margin="0px";

var labNom=document.createElement("label");
labNom.setAttribute("for","name");

var pName=document.createElement("p");
pName.innerHTML="Name";

var col12=document.createElement("div");
col12.setAttribute("class","col-sm-6");

var inpName=document.createElement("input");
inpName.setAttribute("type","text");

var row21=document.createElement("div");
row21.setAttribute("class","row");

var col21=document.createElement("div");
col21.setAttribute("class","col-sm-6");
col21.style.margin="0px";

var labMail=document.createElement("label");
labMail.setAttribute("for","email");

var pEmail=document.createElement("p");
pEmail.innerHTML="Email";

var col22=document.createElement("div");
col22.setAttribute("class","col-sm-6");

var inpEmail=document.createElement("input");
inpEmail.setAttribute("type","email");



/************* */
var col2=document.createElement("div");
col2.setAttribute("class","col-lg-8");

col22.append(inpEmail);
labMail.append(pEmail);
col21.append(labMail);
row21.append(col21,col22);
col12.append(inpName);
labNom.append(pName);

col11.append(labNom);

row11.append(col11,col12);
col1.append(row11,row21);
row1.append(col1,col2);
container.append(row1);
box.append(container);
document.body.append(box);