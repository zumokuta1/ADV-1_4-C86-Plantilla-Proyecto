var grades = [];

var update_scores = function () {
    var val = get_item_list(grades);
    document.getElementById("puntajes").value = val; // Cambio a "puntajes" en lugar de "nombre_alumno"
    document.getElementById("puntaje").value = "";
    document.getElementById("nombre_alumno").value = ""; // Limpiar el campo del nombre
    document.getElementById("puntaje").focus();
}

var student_grade_add_click = function () {
    var last = document.getElementById("nombre_alumno").value;
    var score = parseFloat(document.getElementById('puntaje').value);
    grades.push([last, score]);
    update_scores();
    document.getElementById("promedio_puntaje").value = getAverageScore(grades);
}

var get_item_list = function (item_list) {
    if (item_list.length === 0) {
        return "";
    }
    var list = "";
    for (var i = 0; i < item_list.length; i++) {
        list += item_list[i][0] + ", " + item_list[i][1] + "\n";
    }
    return list;
}

function getAverageScore(grades) {
    var numberOfStudents = grades.length;
    var sum = 0;
    if (numberOfStudents > 0) {
        for (var i = 0; i < numberOfStudents; i++) {
            sum += grades[i][1];
        }
        return sum / numberOfStudents;
    }
    return 0;
}

function clear_click() {
    document.getElementById("forma").reset();
    document.getElementById("promedio_puntaje").value = "";
    grades.length = 0; // Modificado para limpiar el arreglo correctamente
}

var sort_click = function () {
    grades.sort(function (a, b) {
        return a[0].localeCompare(b[0]); // Ordenar alfabéticamente por nombre
    });
    update_scores();
}

window.addEventListener("load", function () {
    document.getElementById("botón_agregar").addEventListener("click", student_grade_add_click);
    document.getElementById("botón_ordenar").addEventListener("click", sort_click);
    document.getElementById("nombre_alumno").focus();
});
