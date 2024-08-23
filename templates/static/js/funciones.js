

function asd(){
    // Llama a la función de Python
    alert('impreso');
    
};
function funcion(){
    let datos={
        apellido:document.getElementById("apellido").value,
        nombre:document.getElementById("nombre").value
    }
    // let url = "http://localhost:5000/funcion1"
    
    fetch('/funcion1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Manejar la respuesta del servidor si es necesario
    })
        .catch(err => {
            //this.errored = true
            alert("Error al imprimir" );
            console.error(err);
        })
}
//para que no se cierre el checklist
document.getElementById("checklist").addEventListener('click', function(e) {
    e.stopPropagation();
  });

// Función para manejar el cambio en los checkboxes del checklist
function handleCheckboxChange() {
    var checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var checkboxId = checkbox.name;
            var columnIndex = parseInt(checkboxId) ; 

            var table = document.getElementById('tablaDatos');

            if (checkbox.checked) {
                // Mostrar la columna correspondiente
                table.querySelectorAll('tr th:nth-child(' + columnIndex + '), tr td:nth-child(' + columnIndex + ')').forEach(function(cell) {
                    cell.style.display = 'table-cell';
                });
            } else {
                // Ocultar la columna correspondiente
                table.querySelectorAll('tr th:nth-child(' + columnIndex + '), tr td:nth-child(' + columnIndex + ')').forEach(function(cell) {
                    cell.style.display = 'none';
                });
            }
        });
    });
}



// Recuperar el estado de las casillas de verificación desde el almacenamiento local
//y ocultar las columnas que no están tildadas
document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    var table = document.getElementById('tablaDatos');
    checkboxes.forEach(function(checkbox) {
        var isChecked = localStorage.getItem(checkbox.name) === 'true';
        checkbox.checked = isChecked;
        if (!checkbox.checked) {
            // Ocultar la columna correspondiente
            var columnIndex = parseInt(checkbox.name); // Calcular el índice de la columna
            table.querySelectorAll('tr th:nth-child(' + columnIndex + '), tr td:nth-child(' + columnIndex + ')').forEach(function(cell) {
                cell.style.display = 'none';
            });
        }
    });
    
});

// Guardar el estado de las casillas de verificación en el almacenamiento local
document.getElementById('checklist').addEventListener('change', function(event) {
    var checkbox = event.target;
    localStorage.setItem(checkbox.name, checkbox.checked);
});

// Función para cambiar de pestaña en detalles
function openTab(tabName) {
    // Obtener todas las pestañas y ocultarlas
    var tabs = document.getElementsByClassName("tabDetalles");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        
    }
    tabs=document.getElementsByClassName("tabLinks");
    
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.color = "black";
        
    }
    // Mostrar la pestaña seleccionada
    var id="boton"+tabName;
    document.getElementById(tabName).style.display = "block";
    document.getElementById(id).style.color ="blue";
}

// Llamar a la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    handleCheckboxChange();
    openTab('datosPersonalesTab');
});

function cargarTabla(){
    alert('cargado');
}
//Función para abrir archivo
// document.getElementById('fileInput').addEventListener('change', function() {
//     var fileName = document.getElementById('fileInput').files[0].name;
//     document.getElementById('fileName').textContent = 'Archivo seleccionado: ' + fileName;
//     document.querySelector('input[type="submit"]').style.display = 'inline-block';
//     var fileNameElement = document.getElementById('fileName');
//     if (fileNameElement) {
//         var fileNameInput = document.getElementById('fileInput');
//         fileNameInput.addEventListener('change', function() {
//             var fileName = fileNameInput.files[0].name;
//             fileNameElement.textContent = 'Archivo seleccionado: ' + fileName;
//             var submitButton = document.querySelector('input[type="submit"]');
//             if (submitButton) {
//                 submitButton.style.display = 'inline-block';
//             }
//         });
//         alert('cargado');
//     } else {
//         alert('Error al cargar los datos del archivo.aaaaaaaa');
//     }
// });
// Obtener los datos del servidor y agregarlos a la tabla
// $(document).ready(function() {
//     // Manejar clic en el botón de carga
//     $('#uploadButton').click(function() {
//         var formData = new FormData($('#fileForm')[0]);
//         $.ajax({
//             url: '/upload',
//             type: 'POST',
//             data: formData,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 // Construir la tabla con los datos recibidos
//                 $('#tablaDatos').DataTable({
//                     data: data,
//                     columns: [
//                         { data: 'ID' },
//                         { data: 'Apellido' },
//                         { data: 'Nombre' },
//                         // Agrega más columnas según tus datos
//                     ]
//                 });
//             },
//             error: function() {
//                 alert('Error al cargar los datos del archivo.');
//             }
//         });
//     });
// });
// document.addEventListener('DOMContentLoaded', function() {
//     var fileNameElement = document.getElementById('fileName');
//     if (fileNameElement) {
//         var fileNameInput = document.getElementById('fileInput');
//         fileNameInput.addEventListener('change', function() {
//             var fileName = fileNameInput.files[0].name;
//             fileNameElement.textContent = 'Archivo seleccionado: ' + fileName;
//             var submitButton = document.querySelector('input[type="submit"]');
//             if (submitButton) {
//                 submitButton.style.display = 'inline-block';
//             }
//         });
//     } else {
//         alert('Error al cargar los datos del archivo.aaaaaaaa');
//     }
// });

// $(document).ready(function() {
//     // Llamada a la ruta '/upload' para obtener los datos del archivo Excel
//     $.ajax({
//         url: '/upload',
//         type: 'POST',
//         data: new FormData($('#fileForm')[0]),
//         processData: false,
//         contentType: false,
//         success: function(data) {
//             // Construir la tabla con los datos recibidos
//             $('#tablaDatos').DataTable({
//                 data: data,
//                 columns: [
//                     { data: 'ID' },
//                     { data: 'Apellido' },
//                     { data: 'Nombre' },
//                     // Agrega más columnas aquí según tus datos
//                 ]
//             });
//         },
//         error: function() {
//             alert('Error al cargar los datos del archivo.');
//         }
//     });
// });
// window.onload = function() {
//     fetch('/upload')
//     .then(response => response.json())
//     .then(data => {
//         var tableBody = document.querySelector('#tablaDatos tbody');
//         data.forEach(function(row, index) {
//             var newRow = document.createElement('tr');
//             newRow.innerHTML = '<td>' + (index + 1) + '</td>' +
//                                 '<td>' + row['ID'] + '</td>' +
//                                 '<td>' + row['Apellido'] + '</td>';
//             // Agregar más celdas aquí para cada columna que quieras mostrar
//             tableBody.appendChild(newRow);
//         });
//     });
// };
// $(document).ready(function() {
//     // Carga los datos de tu archivo Excel en formato JSON
//     let my_data = JSON.parse('{{ my_data | tojson }}');
//     let my_cols = JSON.parse('{{ my_cols | tojson }}');
//     alert('impreso');
//     // Inicializa DataTables con los datos y columnas proporcionados
//     $('#myTable').DataTable({
//         "data": my_data,
//         "columns": my_cols
//     });
//     var row = document.createElement('tr');

//     // Agregar la celda para el número de fila
//     var cellNumber = document.createElement('td');
//     cellNumber.textContent = i + 1; // El número de fila comienza en 1
//     row.appendChild(cellNumber);

//     // Agregar celdas adicionales
//     for (var j = 0; j < 20; j++) {
//         var cell = document.createElement('td');
//         cell.textContent = 'Dato ' + (j + 1);
//         row.appendChild(cell);
//     }

//     // Agregar la fila al cuerpo de la tabla
//     tbody.appendChild(row);
// });
//-----Pestañas de detalles-------------


// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
    
//     // Ocultar todos los contenidos de las pestañas
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
    
//     // Desactivar todos los botones de las pestañas
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].classList.remove("active");
//     }
    
//     // Mostrar el contenido de la pestaña seleccionada y activar su botón correspondiente
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.classList.add("active");
// }

// // Establecer la pestaña por defecto al cargar la página
// document.getElementById("datosPersonalesTab").style.display = "block";
// document.getElementsByClassName("tablinks")[0].classList.add("active");
// handleCheckboxInicio();
// Obtener la tabla y el cuerpo de la tabla
// var table = document.querySelector('.tabla-con-scroll table');
// var tbody = table.querySelector('tbody');

// // Crear 50 filas de ejemplo
// for (var i = 0; i < 50; i++) {
//     // Crear una nueva fila
//     var row = document.createElement('tr');

//     // Agregar la celda para el número de fila
//     var cellNumber = document.createElement('td');
//     cellNumber.textContent = i + 1; // El número de fila comienza en 1
//     row.appendChild(cellNumber);

//     // Agregar celdas adicionales
//     for (var j = 0; j < 20; j++) {
//         var cell = document.createElement('td');
//         cell.textContent = 'Dato ' + (j + 1);
//         row.appendChild(cell);
//     }

//     // Agregar la fila al cuerpo de la tabla
//     tbody.appendChild(row);
// }