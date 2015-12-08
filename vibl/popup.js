(function popupAction() {
  var audit_results =  JSON.parse(localStorage.getItem('audit_results'));
  var payload = {"PASS":[], "FAIL":[], "NA": []};
  for (var key in audit_results) {
    var obj = audit_results[key]
    payload[obj.result].push(obj.rule.code);
  }
  var url = "http://server";
  var posting = $.post( url, { "payload": JSON.stringify(payload) } );

  // Put the results in a div
  posting.done(function( data ) {
    $( "#result" ).empty().append( data );
  });
}());
