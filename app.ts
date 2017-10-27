
//CONTROLLER
//all js classes and functions
interface TodoItem
{
    Todotitle:string,
    Todostatus:string
}

class TodoListClass
{
    public counter:number;
    public TodoObject;
    constructor()
    {
        this.counter=1;
        var tempobj={[this.counter] :{title:"Study angular",status:"active"}};
        this.TodoObject=tempobj;
    }
    add(item:TodoItem)
    {
        this.counter++;
        var tempobj={title:item.Todotitle,status:item.Todostatus};
        this.TodoObject[this.counter]=tempobj;
    }

    update(id:number,newtitle:string)
    {
        //console.log(this.TodoObject[id]);

        this.TodoObject[id].title=newtitle;
    }
    markcompleted(id:number)
    {
        this.TodoObject[id].status="completed";
    }

    delete(id:number)
    {
        this.TodoObject[id].status="deleted";
    }


}
