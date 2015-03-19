request = new XMLHttpRequest();
var url="www.thebluealliance.com";
var path="/api/v2/event/2015orphi";
var param="?X-TBA-App-Id=frc2374:scouting:0.01";
request.open("GET", url+path+param , false);
console.log(request.responseXML);
