var numnames=0;
var names=new Array();
function SortNames(){
    thename=document.theform.newname.value;
    names[numnames]=thename;
    numnames++;
    names.sort();
    document.theform.sorted.value=names.join("\n");
}