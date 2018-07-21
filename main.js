function Loadjson(file,callback)
{
  var xml=new XMLHttpRequest();
  xml.overrideMimeType("application/json");
  xml.open("Get",file,true);
  xml.onreadystatechange=function()
  {
    if(xml.readyState===4 && xml.status == "200")
    {
      callback(xml.responseText);
    }
  };
  xml.send(null);
}
Loadjson("data.json",function(text){
  var data =JSON.parse(text);
  console.log(data);

})
