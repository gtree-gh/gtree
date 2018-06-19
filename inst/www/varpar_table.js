varParTableHTML = function(varpar, prefix) {
  var data = varpar;
  data[0][0] = "parameter↓ variants→";

  var npar = data[0].length-1;
  var nvar = data.length-1;

  head = "<td></td><td>parameter↓ variants→</td>";
  for (i=1; i<=nvar;i++) {
    head = head+"<td><input style='width: 12em;' class='varpar_variant' value='"+data[i][0]+"'/> </td>";
  }
  head = head+"<td></td>";
  head = "<tr>"+head+"</tr>";

  btn_style = "min-width: 2em; padding: 7px 2px 6px 2px !important; margin: 0px 1px 0px 1px !important;"

  var_btn = "<td></td><td></td>";
  for (var i=1; i<=nvar;i++) {
    var id_del = prefix+"_vardel_"+i;
    var id_add = prefix+"_varadd_"+i;

    var_btn = var_btn+"<td><button id='"+id_del+"' style='"+btn_style+"' type='button' class='btn btn-xs removeVariantBtn'><i class='fa fa-trash-o'></i></button>"+
    "<button id='"+id_add+"' style='"+btn_style+"' type='button' class='btn btn-xs addVariantBtn'><i class='fa fa-plus'></i></button></td>";
  }
  var_btn = "<tr>"+var_btn+"</tr>";

  code = "<tr>";
  // All rows (parameters)
  for (i=1; i<=npar; i++) {
    var id_del = prefix+"_pardel_"+i;
    var id_add = prefix+"_paradd_"+i;

    if (i>1) {
      code = code+"<td nowrap><button id='"+id_del+"' style='"+btn_style+"' type='button' class='btn btn-xs removeParBtn'><i class='fa fa-trash-o'></i></button>"+
    "<button id='"+id_add+"' style='"+btn_style+"' type='button' class='btn btn-xs addParBtn'><i class='fa fa-plus'></i></button></td>";

    } else {
      code = code+"<td nowrap><button id='"+id_add+"' style='"+btn_style+"' type='button' class='btn btn-xs addParBtn'><i class='fa fa-plus'></i></button></td>";
    }

    code = code + "<td><input style='width: 12em;' type='text' class='varpar_par' value='"+data[0][i]+"'/></td>";
    for (var j=1; j <= nvar; j++) {
      code = code + "<td><input style='width: 12em;' type='text' class='varpar_val' value='"+data[j][i]+"'/></td>";
    }
    code = code + "<td></td>" + "</tr>";
  }

  html = "<table><tbody>"+var_btn + head + code + "</tbody></table>";

  return html;
}
