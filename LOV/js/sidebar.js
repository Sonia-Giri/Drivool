$.ajax({
  url: "https://drivooltemplates-default-rtdb.firebaseio.com/DocTemplates/ListOfvehicles.json",
  dataType: "json",
  type: "GET",
  //jo stands for json object
  success: function (jo) {
    var k = JSON.stringify(jo);
    busesInfo(jo);
    console.log(k);
  },
  error: function (error) {
    console.log(`Error ${error}`);
  },
});

function busesInfo(information) {
  var strBusesDetails = "";
  var itemONlist = information.buses;
  for (var i = 0; i < itemONlist.length; i++) {
    var Info = itemONlist[i];
    var strHTMLinfo = `
    <i class="fas fa-car">&nbsp;</i>
    <span>${Info.name}</span><br/>
        `;
    strBusesDetails += strHTMLinfo;
  }

  $("div#buses").html(strBusesDetails);
  $("span#admin").text(information.admin);
}
