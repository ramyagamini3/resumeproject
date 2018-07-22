// function Loadjson(file,callback)
// {
//   var xml=new XMLHttpRequest();
//   xml.overrideMimeType("application/json");
//   xml.open("Get",file,true);
//   xml.onreadystatechange=function()
//   {
//     if(xml.readyState===4 && xml.status == "200")
//     {
//       callback(xml.responseText);
//     }
//   };
//   xml.send(null);
// }
// Loadjson("data.json",function(text){
//   var data =JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   career(data.career);
//   edu(data.education);
//   ms(data.keyskills);
//   ac(data.achievements);
//
// })
function openpage()
{
  window.open("resume.html", "_self",true);
}
function loadjson(file)
{
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok)
    {
      resolve(response.json());
    }
  else {
    reject(new Error('error'));
  }
})
  })
}
var file=loadjson("data.json");
file.then(data=>
{
  console.log(data);
  basics(data.details);
   career(data.career);
   edu(data.education);
     ms(data.keyskills);
   ac(data.achievements);
})


var child1= document.querySelector(".child1");
var child2= document.querySelector(".child2");

function basics(det)
{
    var image=document.createElement("img");
    image.src= det.image;
    child1.appendChild(image);

    var name=document.createElement("h1");
    name.textContent= det.name;
    child1.appendChild(name);

    var phoneno=document.createElement("h3");
    phoneno.textContent= det.phoneno;
    child1.appendChild(phoneno);

    var email=document.createElement("a");
    email.href= "mailto:ramyagamini3@gmail.com";
    email.textContent=det.email;
    child1.appendChild(email);

    var add=document.createElement("h3");
    add.textContent="address:"
      child1.appendChild(add);

      var hr=document.createElement("hr");
        child1.appendChild(hr);

      var addr=document.createElement("h3");
    addr.textContent=det.address;
      child1.appendChild(addr);
    }
    function career(info)
    {
      var i2=document.createElement("h1");
      i2.textContent= "Career objective:";
      child2.appendChild(i2);
      var hr=document.createElement("hr");
        child2.appendChild(hr);


      var i=document.createElement("h3");
      i.textContent= info.info;
      child2.appendChild(i);
    }
function edu(education)
{
  var e=document.createElement("h2");
  e.textContent= "Education Details";
  child2.appendChild(e);
  var hr=document.createElement("hr");
    child2.appendChild(hr);
    for(i=0;i<education.length;i++)
    {
      var deg=document.createElement("h3");
      deg.textContent=education[i].degree;
      child2.appendChild(deg);
      var ul=document.createElement("ul");
      var li=document.createElement("li");
      var ul1=document.createElement("ul");
      var li1=document.createElement("li");

      li.textContent=education[i].institute;
      li1.textContent=education[i].date[1];
      ul.appendChild(li);
    ul1.appendChild(li1);

      child2.appendChild(ul);
      child2.appendChild(ul1);
}
   }
    function ms(key)
    {
      var s=document.createElement("h3");
      s.textContent="keyskills";
      child2.appendChild(s);

      var hr=document.createElement("hr");
        child2.appendChild(hr);
        var skilldata=document.createElement("table");
        skilldata.border="3";
        child2.appendChild(skilldata);
        tabledata="";
        for(i=0;i<key.length;i++)
        {
          tabledata+="<tr><td>"+key[i].title+"</td><td>" +key[i].info;

        }
        skilldata.innerHTML=tabledata;
    }
    function ac(t)
    {
      var a=document.createElement("h3");
      a.textContent="Achivements";
      child2.appendChild(a);
      var hr=document.createElement("hr");
        child2.appendChild(hr);
        var b=document.createElement("h3");
         b.textContent=t.points;
        child2.appendChild(b);

    }


  //  var clg=document.createElement("h3");
  //  clg.textContent= education[0].degree;
  //  child2.appendChild(clg);
