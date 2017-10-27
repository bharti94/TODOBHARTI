var TodoListClass = /** @class */ (function () {
    function TodoListClass() {
        this.counter = 1;
        var tempobj = (_a = {}, _a[this.counter] = { title: "Study angular", status: "active" }, _a);
        this.TodoObject = tempobj;
        var _a;
    }
    TodoListClass.prototype.add = function (item) {
        this.counter++;
        var tempobj = { title: item.Todotitle, status: item.Todostatus };
        this.TodoObject[this.counter] = tempobj;
    };
    TodoListClass.prototype.update = function (id, newtitle) {
        //console.log(this.TodoObject[id]);
        this.TodoObject[id].title = newtitle;
    };
    TodoListClass.prototype.markcompleted = function (id) {
        this.TodoObject[id].status = "completed";
    };
    TodoListClass.prototype["delete"] = function (id) {
        this.TodoObject[id].status = "deleted";
    };
    return TodoListClass;
}());
