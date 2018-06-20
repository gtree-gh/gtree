varParTableHTML = function(varpar, prefix) {
  var data = varpar;
  data[0][0] = "parameter↓ variants→";

  var npar = data[0].length-1;
  var nvar = data.length-1;

  head = "<td></td><td>parameters↓ variants→</td>";
  for (i=1; i<=nvar;i++) {
    head = head+"<td><input style='width: 12em;' class='varpar_variant' value='"+data[i][0]+"'/> </td>";
  }
  head = "<tr>"+head+"</tr>";

  btn_style = "min-width: 2em; padding: 7px 2px 6px 2px !important; margin: 0px 1px 0px 1px !important;";

  var_btn = "<td></td><td></td>";
  for (var i=1; i<=nvar;i++) {
    var_btn = var_btn+"<td><button style='"+btn_style+"' type='button' class='btn btn-xs removeVariantBtn'><i class='fa fa-trash-o'></i></button>"+
    "<button style='"+btn_style+"' type='button' class='btn btn-xs addVariantBtn'><i class='fa fa-plus'></i></button></td>";
  }
  var_btn = "<tr>"+var_btn+"</tr>";

  code = "<tr>";
  // All rows (parameters)
  for (i=1; i<=npar; i++) {
    var readonly = ""
    if (i>1) {
      code = code+"<td nowrap><button style='"+btn_style+"' type='button' class='btn btn-xs removeParBtn'><i class='fa fa-trash-o'></i></button>"+
    "<button style='"+btn_style+"' type='button' class='btn btn-xs addParBtn'><i class='fa fa-plus'></i></button></td>";

    } else {
      readonly = " readonly";
      code = code+"<td nowrap><button style='"+btn_style+"' type='button' class='btn btn-xs addParBtn'><i class='fa fa-plus'></i></button></td>";
    }

    code = code + "<td><input style='width: 12em;' type='text' class='varpar_par' value='"+data[0][i]+"'"+readonly+"/></td>";
    for (var j=1; j <= nvar; j++) {
      code = code + "<td><input style='width: 12em;' type='text' class='varpar_val' value='"+data[j][i]+"'/></td>";
    }
    code = code + "</tr>";
  }

  html = "<table><tbody>"+var_btn + head + code + "</tbody></table>";

  return html;
};

// Remove a variant
$(document).on("click",".removeVariantBtn",function() {
    //alert("click");
    var col = $(this).closest("td").prevAll("td").length+1;
    var nvar = $(this).closest("tr").children("td").length-2;
    if (nvar <= 1) {
      alert("You cannot delete all variants. At least one variant must remain.");
      return;
    }
    $(this).closest('table').find('tr td:nth-child('+col+')').remove();
});
// Remove a parameter
$(document).on("click",".removeParBtn",function() {
    $(this).closest("tr").remove();
});

// Add a parameter
$(document).on("click",".addParBtn",function() {
  var tr = $(this).closest("tr");
  nvar = tr.children("td").length-2;

  btn_style = "min-width: 2em; padding: 7px 2px 6px 2px !important; margin: 0px 1px 0px 1px !important;";
  code = "<tr><td nowrap><button style='"+btn_style+"' type='button' class='btn btn-xs removeParBtn'><i class='fa fa-trash-o'></i></button>"+
    "<button style='"+btn_style+"' type='button' class='btn btn-xs addParBtn'><i class='fa fa-plus'></i></button></td>";
  code = code + "<td><input style='width: 12em;' type='text' class='varpar_par' value=''/></td>";
  for (var j=0; j < nvar; j++) {
    code = code + "<td><input style='width: 12em;' type='text' class='varpar_val' value=''/></td>";
  }
  code = code + "</tr>";
  tr.after(code);
});


// Add a variant
$(document).on("click",".addVariantBtn",function() {
  alert("add variant");

  var col = $(this).closest("td").prevAll("td").length+1;
  var trs = $(this).closest("tbody").children("tr");

  // Add buttons
  btn_style = "min-width: 2em; padding: 7px 2px 6px 2px !important; margin: 0px 1px 0px 1px !important;";
  code = "<td nowrap><button style='"+btn_style+"' type='button' class='btn btn-xs removeVariantBtn'><i class='fa fa-trash-o'></i></button>"+
    "<button style='"+btn_style+"' type='button' class='btn btn-xs addVariantBtn'><i class='fa fa-plus'></i></button></td>";

  $(trs[0]).find('td:nth-child('+col+')').after(code);

  // Add variant name input
  code = "<td><input style='width: 12em;' type='text' class='varpar_par' value=''/></td>";
  $(trs[1]).find('td:nth-child('+col+')').after(code);


  for (var j=2; j < trs.length; j++) {
    code = "<td><input style='width: 12em;' type='text' class='varpar_val' value=''/></td>";
    $(trs[j]).find('td:nth-child('+col+')').after(code);
  }
});
