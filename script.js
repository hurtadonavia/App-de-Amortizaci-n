function calcular() {

    // Obtener los valores del formulario
    let P = parseFloat(document.getElementById("monto").value);
    let anual = parseFloat(document.getElementById("interes").value);
    let n = parseInt(document.getElementById("meses").value);

    // Validar que todos los campos estén completos
    if (isNaN(P) || isNaN(anual) || isNaN(n)) {
        alert("Por favor completa todos los campos.");
        return;
    }

    let r = anual / 100 / 12;

    let cuota = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

    let saldo = P;

    let tabla = `
    <tr>
        <th>Mes</th>
        <th>Cuota</th>
        <th>Interés</th>
        <th>Capital</th>
        <th>Saldo</th>
    </tr>
    `;

    let totalInteres = 0;

    for (let i = 1; i <= n; i++) {

        let interes = saldo * r;

        let capital = cuota - interes;

        saldo -= capital;

        if (saldo < 0) saldo = 0;

        totalInteres += interes;

        tabla += `
        <tr>
            <td>${i}</td>
            <td>$${cuota.toFixed(2)}</td>
            <td>$${interes.toFixed(2)}</td>
            <td>$${capital.toFixed(2)}</td>
            <td>$${saldo.toFixed(2)}</td>
        </tr>
        `;
    }

    document.getElementById("tabla").innerHTML = tabla;

    document.getElementById("resultado").innerHTML = `
        <h2>Resumen</h2>
        <p><strong>Cuota mensual:</strong> $${cuota.toFixed(2)}</p>
        <p><strong>Total pagado:</strong> $${(cuota * n).toFixed(2)}</p>
        <p><strong>Total de intereses:</strong> $${totalInteres.toFixed(2)}</p>
    `;
}