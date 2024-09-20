
        function Generar() {
            // Borra todas las columnas y renglones de la tabla.
            document.getElementById("cuadrado").innerHTML = "";
            document.getElementById("resultadoDiagonales").innerHTML = ""; // Limpiamos el contenido de las diagonales.
 
            // Agregamos renglones y columnas.
            var tabla = document.getElementById("cuadrado");
            var lado = parseInt(document.getElementById("lados").value);
            var celda = "", nuevaFila = "", r = 0, c = 0;
            for (r = 0; r < lado; r++) {
                nuevaFila = tabla.insertRow(-1);
                celda = nuevaFila.insertCell(0);
                celda.innerHTML = "";
                celda.style.border = "none";
                for (c = 0; c < lado; c++) {
                    celda = nuevaFila.insertCell(-1);
                    var entrada = document.createElement("input");
                    entrada.setAttribute("type", "number");
                    entrada.setAttribute("value", Aleatorio());
                    entrada.setAttribute("required", "required");
                    // Asignamos los estilos al input.
                    entrada.setAttribute("style", "width:50px; color:blue; font-weight: bold;");
                    celda.appendChild(entrada);
                }
                nuevaFila.insertCell(-1).innerHTML = "suma"; // Añade celda de suma de fila
            }
            nuevaFila = tabla.insertRow(-1);
            for (c = 0; c <= lado; c++) {
                nuevaFila.insertCell(-1).innerHTML = "suma"; // Añade celdas de suma de columnas
            }
        }
 
        function Aleatorio() {
            return Math.floor(Math.random() * 100);
        }
 
        function EjemploLoMagico() {
            var tabla = document.getElementById("cuadrado");
            for (r = 0; r < document.getElementById("lados").value; r++) {
                for (let c = 1; c <= document.getElementById("lados").value; c++) {
                    tabla.rows[r].cells[c].querySelector('input').value = document.getElementById("lados").value;
                }
            }
            document.getElementById("verificar").innerHTML = "Si es cuadrado magico";
            document.getElementById("verificar").style = "color: blue;";
        }
 
        function EjemploCuadrado() {
            var tabla = document.getElementById("cuadrado");
            var r = 0, c = 0;
            for (r = 0; r < document.getElementById("lados").value; r++) {
                for (c = 1; c <= document.getElementById("lados").value; c++) {
                    tabla.rows[r].cells[c].querySelector('input').value = Aleatorio();
                }
            }
            tabla.rows[r-1].cells[c-1].querySelector('input').value = -1;
            document.getElementById("verificar").innerHTML = "No es cuadrado magico";
            document.getElementById("verificar").style = "color: crimson;";
        }
 
        function Calcular() {
            var tabla = document.getElementById("cuadrado");
            var lado = parseInt(document.getElementById("lados").value);
            var sumaFila = 0, sumaColumna = 0, sumaDiagonal1 = 0, sumaDiagonal2 = 0;
            
            // Sumar filas
            for (var r = 0; r < lado; r++) {
                sumaFila = 0;
                for (var c = 1; c <= lado; c++) {
                    sumaFila += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
                }
                tabla.rows[r].cells[lado + 1].innerHTML = sumaFila; // Resultado en la última celda de la fila
            }
            
            // Sumar columnas
            for (var c = 1; c <= lado; c++) {
                sumaColumna = 0;
                for (var r = 0; r < lado; r++) {
                    sumaColumna += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
                }
                tabla.rows[lado].cells[c].innerHTML = sumaColumna; // Resultado en la última fila de la columna
            }
            
            // Sumar diagonal principal (diagonal1)
            for (var i = 0; i < lado; i++) {
                sumaDiagonal1 += parseInt(tabla.rows[i].cells[i + 1].querySelector('input').value);
            }

            // Sumar diagonal secundaria (diagonal2)
            for (var i = 0; i < lado; i++) {
                sumaDiagonal2 += parseInt(tabla.rows[i].cells[lado - i].querySelector('input').value);
            }

            // Mostrar resultados de las diagonales debajo de la tabla
            document.getElementById("resultadoDiagonales").innerHTML = `
                Suma de Diagonal 1: ${sumaDiagonal1}<br>
                Suma de Diagonal 2: ${sumaDiagonal2}`;
        }
