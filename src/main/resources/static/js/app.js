//author JohanGarcia
var app = (function(api){
    //list of objects that contains, blueprint name, number of points of blueprint
    var bpname;
    var author;
    //public function that allows to change the name of the selected author
    function changeAuthor(){
        $("#author").text(author + "'s Blueprints");
    }

    function getBlueprintsAuthor(){
        author = $("#author-input").val();
        
        api.getBlueprintsByAuthor(author,blueprints);

    }

    var blueprints = function(data){
        $("#table tbody").empty();
        if (data == undefined){
            alert("Author does not exist");
            $("#author").empty();
            $("#totalPoints").text("Total points");
        }else{
            changeAuthor();
            const newdata = data.map((elemento) => {
                return{
                    name : elemento.name,
                    points: elemento.points.length
                }
            });
            newdata.map((elements) => {
                $("#table > tbody:last").append($("<tr><td>" + elements.name + "</td><td>" + elements.points.toString()+ "</td><td>" + "<button id=" + elements.name + " onclick=app.getBlueprintsByNameAndAuthor('"+ author + "','" + elements.name + "')>open</button></td></tr>"));
            });
            const total = newdata.reduce((suma,{points}) => suma + points , 0);

            $("#totalPoints").text("total user points: " + total);
        }  
    }

    function getBlueprintsByNameAndAuthor(author,bpname){
        api.getBlueprintsByNameAndAuthor(author,bpname,canvas);

    }

    var canvas = function(data){
        $(document).ready(function(){   
            var canvas = document.getElementById("myCanvas");
            var contexto = canvas.getContext("2d");
            canvas.width = canvas.width;
            
            contexto.lineWidth=3;
            contexto.strokeStyle="black";
            contexto.beginPath();
            contexto.moveTo(0,0);
            data.points.map((element) => {
                contexto.lineTo(element.x,element.y);
            });
            contexto.fillStyle ="orange";
            contexto.fill();
            contexto.stroke();
        });
    }
    return{
        changeAuthor:changeAuthor,
        getBlueprintsAuthor:getBlueprintsAuthor,
        getBlueprintsByNameAndAuthor:getBlueprintsByNameAndAuthor
    }
})(apiclient);