var myArray =[
    {
    "rank" : "",
    "username": "@John",
    "share": "" ,
    "point": "20" 
    },
    {
    "rank" : "",
    "username": "@Sansa",
    "share":   ""  ,
    "point": "19"
    },
    {
    "rank" : "",
    "username": "@Cersi",
    "share": "" ,
    "point": "18"
    },
    {
    "rank" : "",
    "username": "Ned",
    "share":   ""  ,
    "point":"17"
    },
    {
    "rank" : "",
    "username": "Robert",
    "share":   ""  ,
    "point":"16"
    },
    {"rank" : "",
    "username": "Brandon",
    "share":   ""  ,
    "point":"15"
    },
    {
    "rank" : "",
    "username": "Arya",
    "share":   ""  ,
    "point":"14"
    },
    {
    "rank" : "",
    "username": "Stanis",
    "share":   ""  ,
    "point":"13"
    },
    {
    "rank" : "",
    "username": "Jaime",
    "share":   ""  ,
    "point":"12"
    },
    {
     "rank" : "",
    "username": "Tyrion",
    "share":   ""  ,
    "point":  "11"
    }
]

 buildTable(myArray)

 function buildTable(){
     var table = document.getElementById('myTable')
     for (var i = 0; i < DataCue.length; i++ ){
         var row = ` <tr>
                       <td> ${data [i].rank} </td>
                       <td> ${data [i].username}</td>
                       <td>${data [i].share}</td>
                       <td>${data [i].point}</td>
         </tr>`
         table.innerHTML += row
     }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /* 

$(document).ready(function() {
    $.getJSON("index.json",function(data){
         var leaderboard_data = '';
         $.each(data, function(key,value){
            leaderboard_data += '<tr>';
            leaderboard_data += '<td>'+value.rank+' </td>';
            leaderboard_data += '<td>'+value.username+'</td>';
            leaderboard_data += '<td>'+value.share+'</td>'
            leaderboard_data += '<td>'+value.point+'</td>'
            leaderboard_data += '</tr>'
         });
         $('#leaderboard').append(leaderboard_data);
    });
  });  */