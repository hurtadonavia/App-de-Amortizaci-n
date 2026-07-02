/* ===== ESTILOS GENERALES ===== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#121212;
    color:#ffffff;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    padding:20px;
}

/* ===== CONTENEDOR ===== */

.container{
    width:100%;
    max-width:800px;
    background:#1f1f1f;
    padding:30px;
    border-radius:15px;
    box-shadow:0 0 20px rgba(0,0,0,0.5);
}

/* ===== TÍTULO ===== */

h1{
    text-align:center;
    color:#4FC3F7;
    margin-bottom:10px;
}

.descripcion{
    text-align:center;
    color:#bdbdbd;
    margin-bottom:30px;
}

/* ===== FORMULARIO ===== */

.formulario{
    background:#2a2a2a;
    padding:20px;
    border-radius:10px;
}

label{
    display:block;
    margin-top:15px;
    margin-bottom:8px;
    font-weight:bold;
}

input{
    width:100%;
    padding:12px;
    border:none;
    border-radius:8px;
    background:#3a3a3a;
    color:white;
    font-size:16px;
}

input:focus{
    outline:2px solid #4FC3F7;
}

button{
    width:100%;
    margin-top:25px;
    padding:14px;
    border:none;
    border-radius:8px;
    background:#1976D2;
    color:white;
    font-size:17px;
    cursor:pointer;
    transition:0.3s;
}

button:hover{
    background:#2196F3;
}

/* ===== RESULTADO ===== */

#resultado{
    margin-top:30px;
}

/* ===== TABLA ===== */

table{
    width:100%;
    margin-top:20px;
    border-collapse:collapse;
}

th{
    background:#1976D2;
    color:white;
    padding:12px;
}

td{
    padding:10px;
    text-align:center;
    border-bottom:1px solid #444;
}

tr:nth-child(even){
    background:#2b2b2b;
}
