var db = firebase.apps[0].firestore();
const tabla = document.querySelector('#tabla');

db.collection("datosZodiaco").orderBy('posic', 'asc').get().then(function(query) {
    tabla.innerHTML = "";
    var salida = "";
    query.forEach(function(doc) {
        const data = doc.data();
        salida += `
            <div class="divAnuncio m-3">
                <div class="imgBlock"><img src="${data.url}" width="100%" /></div>
                <div><strong>${data.signo}</strong><br/>${data.rango}</div><br/>
                <button class="btn btn-primary btn-sm mt-2" onclick="editarSigno('${doc.id}')">Editar</button>
            </div>
        `;
    });
    tabla.innerHTML = salida;
});

function editarSigno(id) {
    window.location.href = `editar.html?id=${id}`;
}
