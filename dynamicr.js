var root=document.getElementById('main');
 
var div1=document.createElement('div');
 div1.classList.add("card");
 root.appendChild(div1);

 var image=document.createElement('img');
 image.src="image/download.png";
 image.alt="image";
 image.classList.add('img');
 div1.appendChild(image);
 var head = document.createElement('hr');
 div1.appendChild(head);
 var heading = document.createElement('h2');
 heading.textContent="devi";
 div1.appendChild(heading);
 
 var para=document.createElement('p');
 para.textContent="devi123@gmail.com";
 div1.classList.add("p");
 div1.appendChild(para);

 var para1=document.createElement('p');
 para1.textContent="student";
 div1.classList.add("p");
 div1.appendChild(para1);

 var para2=document.createElement('p');
 para2.textContent="1234567890";
 div1.classList.add("p");
 div1.appendChild(para2);
 
 var anc=document.createElement('a');
 anc.href="resume.html";
 anc.textContent="view profile";
 div1.classList.add("a");
 div1.appendChild(anc);
 //resume
 var div2=document.createElement('div');
 div2.classList.add("resume");
 root.appendChild(div2);

 var heading = document.createElement('h2');
 heading.textContent="CARRIER OBJECTIVE";
 div2.appendChild(heading);
 
 var para=document.createElement('p');
 para.textContent="To become associated with a company where I can utilize my skills and gain further experience while enhancing the company’s productivity.";
 div2.classList.add("p");
 div2.appendChild(para);

 var head1=document.createElement('h1');
 head1.textContent="EDUCATION DETAILS";
 div2.classList.add("h1");
 div2.appendChild(head1);

 
 var tbl=document.createElement('TABLE');
 tbl.id="tableId";
 tbl.classList.add("table");
 div2.appendChild(tbl);
 var tr= document.createElement("tr");
 tr.id="mytr";
  var td1=document.createElement("td");
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var cell1= document.createTextNode("S.NO");
  var cell2= document.createTextNode("INSTITUTE");
  var cell3= document.createTextNode("PERCENTAGE");
  td1.appendChild(cell1);
  td2.appendChild(cell2)
  td3.appendChild(cell3)
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  //
  var tr1= document.createElement("tr");
   var td4=document.createElement("td");
   var td5=document.createElement("td");
   var td6=document.createElement("td");
   var cell4= document.createTextNode("1");
   var cell5= document.createTextNode("GIER");
   var cell6= document.createTextNode("80");
   td4.appendChild(cell4);
   td5.appendChild(cell5)
   td6.appendChild(cell6)
   tr1.appendChild(td4);
   tr1.appendChild(td5);
   tr1.appendChild(td6);
   var tr2= document.createElement("tr");
   var td7=document.createElement("td");
   var td8=document.createElement("td");
   var td9=document.createElement("td");
   var cell7= document.createTextNode("2");
   var cell8= document.createTextNode("Chaitanya");
   var cell9= document.createTextNode("90");
   td7.appendChild(cell7);
   td8.appendChild(cell8)
   td9.appendChild(cell9)
   tr2.appendChild(td7);
   tr2.appendChild(td8);
   tr2.appendChild(td9);
  div2.appendChild(tr);
  div2.appendChild(tr1);
  div2.appendChild(tr2);


  //
  var head2=document.createElement('h1');
  head2.textContent="SKILLS";
  div2.classList.add("h1");
  div2.appendChild(head2);
  var para1=document.createElement('p');
  para1.textContent="Oracle,C,C++";
  div2.classList.add("p");
  div2.appendChild(para1);

  var head3=document.createElement('h1');
  head3.textContent="HOBBIES";
  div2.classList.add("h1");
  div2.appendChild(head3);
  var para2=document.createElement('p');
  para2.textContent="playing Carroms";
  div2.classList.add("p");
  div2.appendChild(para2);
  var para3=document.createElement('p');
  para3.textContent="doing  paper crafts";
  div2.classList.add("p");
  div2.appendChild(para3);