function ClearList() {
    $("#ulist").empty();
    i = 0;
}
function RefreshList() {
    $("#ulist").append("<li>Hello.&nbsp;" + items[i].Name + ":&nbsp;" + items[i].Value + ".&nbsp;Time:&nbsp;" + Date().toString() + "</li>");
    i++;
    if (i >= items.length) {
        i = 0;
    }
}
   