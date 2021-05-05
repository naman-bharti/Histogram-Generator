people = [];

function init(){
    document.getElementById('csvfile').addEventListener('change', handleFileSelect, false);
    document.getElementById("Maxread").addEventListener('change', updateHistogram, false);
    document.getElementById("A+read").addEventListener('change', updateHistogram, false);
    document.getElementById("Aread").addEventListener('change', updateHistogram, false);
    document.getElementById("A-read").addEventListener('change', updateHistogram, false);
    document.getElementById("B+read").addEventListener('change', updateHistogram, false);
    document.getElementById("Bread").addEventListener('change', updateHistogram, false);
    document.getElementById("B-read").addEventListener('change', updateHistogram, false);
    document.getElementById("C+read").addEventListener('change', updateHistogram, false);
    document.getElementById("Cread").addEventListener('change', updateHistogram, false);
    document.getElementById("C-read").addEventListener('change', updateHistogram, false);
    document.getElementById("Dread").addEventListener('change', updateHistogram, false);
    document.getElementById("Fread").addEventListener('change', updateHistogram, false);
}

function handleFileSelect(event){
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
}

class Person {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    getScore() {return this.score;}
    getName() {return this.name;}
}

function handleFileLoad(event){
    var result = event.target.result;
    persons = result.split("\n");
    persons.splice(0,1);

    function extractScore (onePerson) {
        var temp1 = onePerson.split(",");
        return parseFloat(temp1[1]);
    }

    function extractName (onePerson) {
        var temp2 = onePerson.split(",");
        return temp2[0];
    }

    var i = 0;
    while(i < persons.length) {
        var newPerson = new Person(extractName(persons[i]), extractScore(persons[i]));
        people.push(newPerson);
        i++;
    }

    function sortHelper (person1, person2) {
        return person2.getScore() - person1.getScore();
    }
    people.sort(sortHelper);

    document.getElementById("top").textContent = people[0].getName();
    document.getElementById("bottom").textContent = people[people.length - 1].getName();

    var temp3 = 0.0;
    var j = 0;
    while (j < people.length) {
        temp3 = temp3 + parseFloat(people[j].getScore());
        j++;
    }
    var average = temp3 / people.length;
    document.getElementById("mean").textContent = average.toFixed(2);

    var index1 = people.length/2;
    var index2 = people.length/2 - 1;
    if(people.length % 2 != 0) {
        document.getElementById("median").textContent = parseFloat(people[Math.floor(index1)].getScore()).toFixed(2);
    }
    else if(people.length % 2 == 0) {
        document.getElementById("median").textContent = (parseFloat(people[index1].getScore()).toFixed(2) + parseFloat(people[index2].getScore()).toFixed(2)) / 2;
    }

    updateHistogram();
}

function updateHistogram() {
    if (check() == false) {
        var text = "The Lower Bound Values Are Wrong. Please correct them.";
        window.alert(text);
    }
    else {
        var max = document.getElementById("Maxread").value;
        var aplus = document.getElementById("A+read").value;
        var l = 0;
        var numOfAPlus = "";
        while (l < people.length) {
            if (people[l].getScore() <= max && people[l].getScore() >= aplus) {
                numOfAPlus = numOfAPlus + "O";
            }
            l++;
        }
        document.getElementById("A+write").textContent = numOfAPlus;
        
        var a = document.getElementById("Aread").value;
        var m = 0;
        var numOfA = "";
        while(m < people.length) {
            if (people[m].getScore() < aplus && people[m].getScore() >= a) {
                numOfA = numOfA + "O";
            }
            m++;
        }
        document.getElementById("Awrite").textContent = numOfA;

        var aminus = document.getElementById("A-read").value;
        var n = 0;
        var numOfAminus = "";
        while(n < people.length) {
            if (people[n].getScore() < a && people[n].getScore() >= aminus) {
                numOfAminus = numOfAminus + "O";
            }
            n++;
        }
        document.getElementById("A-write").textContent = numOfAminus;

        var bplus = document.getElementById("B+read").value;
        var o = 0;
        var numOfBplus = "";
        while(o < people.length) {
            if (people[o].getScore() < aminus && people[o].getScore() >= bplus) {
                numOfBplus = numOfBplus + "O";
            }
            o++;
        }
        document.getElementById("B+write").textContent = numOfBplus;

        var b = document.getElementById("Bread").value;
        var p = 0;
        var numOfB = "";
        while(p < people.length) {
            if (people[p].getScore() < bplus && people[p].getScore() >= b) {
                numOfB = numOfB + "O";
            }
            p++;
        }
        document.getElementById("Bwrite").textContent = numOfB;

        var bminus = document.getElementById("B-read").value;
        var q = 0;
        var numOfBminus = "";
        while(q < people.length) {
            if (people[q].getScore() < b && people[q].getScore() >= bminus) {
                numOfBminus = numOfBminus + "O";
            }
            q++;
        }
        document.getElementById("B-write").textContent = numOfBminus;

        var cplus = document.getElementById("C+read").value;
        var r = 0;
        var numOfCplus = "";
        while(r < people.length) {
            if (people[r].getScore() < bminus && people[r].getScore() >= cplus) {
                numOfCplus = numOfCplus + "O";
            }
            r++;
        }
        document.getElementById("C+write").textContent = numOfCplus;

        var c = document.getElementById("Cread").value;
        var s = 0;
        var numOfC = "";
        while(s < people.length) {
            if (people[s].getScore() < cplus && people[s].getScore() >= c) {
                numOfC = numOfC + "O";
            }
            s++;
        }
        document.getElementById("Cwrite").textContent = numOfC;

        var cminus = document.getElementById("C-read").value;
        var t = 0;
        var numOfCminus = "";
        while(t < people.length) {
            if (people[t].getScore() < c && people[t].getScore() >= cminus) {
                numOfCminus = numOfCminus + "O";
            }
            t++;
        }
        document.getElementById("C-write").textContent = numOfCminus;

        var d = document.getElementById("Dread").value;
        var u = 0;
        var numOfD = "";
        while(u < people.length) {
            if (people[u].getScore() < cminus && people[u].getScore() >= d) {
                numOfD = numOfD + "O";
            }
            u++;
        }
        document.getElementById("Dwrite").textContent = numOfD;

        var f = document.getElementById("Fread").value;
        var v = 0;
        var numOfF = "";
        while(v < people.length) {
            if (people[v].getScore() < d && people[v].getScore() >= f) {
                numOfF = numOfF + "O";
            }
            v++;
        }
        document.getElementById("Fwrite").textContent = numOfF;
    }
}

function check() {
    if (parseFloat(document.getElementById("Maxread").value) <= parseFloat(document.getElementById("A+read").value)) {
        return false;
    }
    else if (document.getElementById("A+read").value <= document.getElementById("Aread").value) {
        return false;
    }
    else if (document.getElementById("Aread").value <= document.getElementById("A-read").value) {
        return false;  
    }
    else if (document.getElementById("A-read").value <= document.getElementById("B+read").value) {
        return false;
    }
    else if (document.getElementById("B+read").value <= document.getElementById("Bread").value) {
        return false;
    }
    else if (document.getElementById("Bread").value <= document.getElementById("B-read").value) {
        return false;
    }
    else if (document.getElementById("B-read").value <= document.getElementById("C+read").value) {
        return false;
    }
    else if (document.getElementById("C+read").value <= document.getElementById("Cread").value) {
        return false;
    }
    else if (document.getElementById("Cread").value <= document.getElementById("C-read").value) {
        return false;
    }
    else if (document.getElementById("C-read").value <= document.getElementById("Dread").value) {
        return false;
    }
    else if (document.getElementById("Dread").value <= document.getElementById("Fread").value) {
        return false;
    }
    else {
        return true;
    }  
}