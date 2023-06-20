var n = 0;
var color = ['red','yellow','blue']
var i = 0;
var testimonials = [
    {name:'jane doe',opinion:'I love it,highly recomended'},
    {name:'jame smith',opinion:' A must-have for everyone.'},
    {name:'john Doe',opinion: 'this is the best service ever!'},
]

function changeTestimony(){
    document.getElementById('text').innerHTML = testimonials[n].opinion;
    document.getElementById('name').innerHTML = testimonials[n].name;
    document.getElementById('text').style.color = color[i];
    document.getElementById('name').style.color = color[i];

if(n <= testimonials.length - 1){
    n++;
    }else{
        n = 0;
    }

    if(i < color.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout('changeTestimony()',3000)
}
changeTestimony()