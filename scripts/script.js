

function klok(){

    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    //achtergronden klok veranderen per dag deel
    //middag
     if(h >= 12){
        var dag = document.getElementById('dag');
        dag.classList.add('middag');

     } 
   
    //avond
     if(h >= 20){
        var dag = document.getElementById('dag');
        dag.classList.add('avond');

        var ster = document.getElementById('ster');
        ster.classList.add('vallendeSter');
     }

     //nacht
     if(h >= 0 && h < 6){
        var dag = document.getElementById('dag');
        dag.classList.add('nacht');

        var ster = document.getElementById('ster');
        ster.classList.add('vallendeSter');
     }
    
    

    //0 toevoegen
    if (h < 10){
        h = '0' + h;
    }

    if (m < 10){
        m = '0' + m;
    }

    if (s < 10){
        s = '0' + s;
    }

    // : toevoegen
    var time = h + ":" + m + ":" + s;

    document.getElementById("klok").innerText = time;

    // : maanden toevoegen
    var maanden = new Array('januari', 'Februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'october', 'november', 'december');
    document.getElementById('datum').innerHTML = date.getDate() + ' ' + maanden[date.getMonth()];

// animaties verbergen na bepaalde tijd.

        var removeSter = document.getElementById("ster");

        if (h >= 6 && h < 20) {
            removeSter.style.display = "none";
        } else {
            removeSter.style.display = "block";
        }

        var removeCloud = document.getElementById("wolk");

        if (h >= 20) {
            removeCloud.style.display = "none";
        } else {
            removeCloud.style.display = "block";
        }


    
}

klok();
setInterval(klok, 1000);





 

