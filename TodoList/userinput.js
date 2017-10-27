
//INTERACTING WITH VIEW(DOM Manipulations)
//user input and dom functions
console.log("hello from frontend js!!");
var globalobj=new TodoListClass();

//functionality -2(update)
function updatetodo(id)
{
    var newtitle=document.getElementById("newip"+id).value;
       if(globalobj.TodoObject[id].status=="active") {
           globalobj.update(id, newtitle);

           var textnode = document.getElementById("txt" + id);
           textnode.innerHTML = newtitle;
       }

}

function putTodoOnPage(title,id)
{
    var newdivelement=document.createElement("div");
    newdivelement.setAttribute("id","div"+id);
    newdivelement.setAttribute("class","container well");

    var textnode=document.createElement("h4");
    textnode.innerHTML=title;
    textnode.setAttribute("id","txt"+id);
    textnode.setAttribute("class","well");

    var deletebttn=document.createElement("button");
    deletebttn.innerHTML="DELETE";
    deletebttn.setAttribute("onclick","deletetodo("+id+")");
    deletebttn.setAttribute("style","margin-left:10px");

    var markasdonebttn=document.createElement("button");
    markasdonebttn.innerHTML="MARK AD DONE";
    markasdonebttn.setAttribute("onclick","markasdone("+id+")");
    markasdonebttn.setAttribute("style","margin-left:10px");

    var updatebttn=document.createElement("button");
    updatebttn.innerHTML="UPDATE";
    updatebttn.setAttribute("onclick","updatetodo("+id+")");
    updatebttn.setAttribute("style","margin-left:10px");

    var updateinpt=document.createElement("input");
    updateinpt.setAttribute("type","text");
    updateinpt.setAttribute("placeholder","Enter updated title here");
    updateinpt.setAttribute("id","newip"+id);
    updateinpt.setAttribute("style","margin-left:10px");


    newdivelement.appendChild(textnode);
    newdivelement.appendChild(deletebttn);
    newdivelement.appendChild(markasdonebttn);
    newdivelement.appendChild(updateinpt);
    newdivelement.appendChild(updatebttn);

    document.body.appendChild(newdivelement);
}

//functionality-3(mark as completed)
function markasdone(id)
{
    if(globalobj.TodoObject[id].status=="active") {
        globalobj.markcompleted(id);

        var textnode = document.getElementById("txt" + id);
        textnode.setAttribute("style", "text-decoration:line-through");
    }
}

//functionality-4(delete)
function deletetodo(id)
{
    globalobj.delete(id);

    var divelement=document.getElementById("div"+id);
    document.body.removeChild(divelement);
}


window.onload=function ()
{

    //Already stored todos
    Object.keys(globalobj.TodoObject).forEach(function (key)
    {
        putTodoOnPage(globalobj.TodoObject[key].title,globalobj.counter);
    });

    //functionality-1(add)
    var inptbttn=document.getElementById("ip1");
    var addbtn=document.getElementById("btn1");

    addbtn.onclick=function ()
    {
        var inputtitle=inptbttn.value;
        //by default status=active
        var inputstatus="active";
        var tempitem={Todotitle:inputtitle,Todostatus:inputstatus};

        if(inputtitle!=""||inputtitle!=trim("")) {
            globalobj.add(tempitem);
            putTodoOnPage(inputtitle, globalobj.counter);
        }
    }

}