 
var MAC_array = [];
var android_array = [];
var iphone_array = [];
var date_array = [];
var GPS_array = [];
var master_array = []



for(i=0; i<=15000; i++){



//randomize the MAC, hour and mins
var MAC_id = Math.floor(Math.random() * (15000 - 1 + 1) ) + 1;
// set date
var date = new Date();
var hour = Math.floor(Math.random() * (20 - 7 + 1) ) + 7;
var min = Math.floor(Math.random() * (59 - 1 + 1) ) + 1;
date.setHours(hour, min);
//random the gps
var longitude = (Math.random() * (43.081848 - 43.074754) + 43.074754).toFixed(6);
var latitude = (Math.random() * (-87.885100 - -87.877794) + -87.877794).toFixed(6);
var GPS_coords = longitude + "," + latitude;

//1. array for gps
GPS_array.push(GPS_coords);

//2. array for id
MAC_array.push(MAC_id);

//3. set date and push to array
date_array.push(date);

// 4. set up the number of OS phones Android or Iphone
if(MAC_id < 8250){ android_array.push(MAC_id); } else { iphone_array.push(MAC_id);}

console.log(date);

//end for loop
}


master_array.push(MAC_array,GPS_array,android_array,iphone_array,date_array);

//UWM coords box
//NW - 43.081848, -87.885100
//SW - 43.074756, -87.886583

//NE - 43.081860, -87.877794
//SE - 43.074754, -87.878006

//console.log(GPS_coords);
//console.log(longitude, latitude);
//console.log("date",date_array);
//console.log("Mac", MAC_array, MAC_array.length);
//console.log("droid", android_array, android_array.length);
//console.log("Iphone", iphone_array, iphone_array.length);