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
    <div class="accordion">
                  <div class="title">
                    <i class="fas fa-car">&nbsp;</i>
                    <span>${Info.name}</span><i class="dropdown icon"></i>
                  </div>
                  <div class="content">
                    <ol>
                      <li>Bus No. :&nbsp;<span>${Info.busno}</span></li>
                      <li>GPS Type :&nbsp;<span>${Info.gpstype}</span></li>
                      <li>ID :&nbsp;<span>${Info.id}</span></li>
                      <li>Route :&nbsp;<span>${Info.route}</span></li>
                      <li>Type :&nbsp;<span>${Info.type}</span></li>
                    </ol>
                  </div>
                </div>  
        `;
    strBusesDetails += strHTMLinfo;
  }

  $("div#buses").html(strBusesDetails);
  $("span#admin").text(information.admin);
}
