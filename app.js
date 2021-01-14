const artista=document.getElementById('artista'),
      cancion=document.getElementById('cancion'),
      enviar=document.getElementById('enviar');
      const form =document.querySelector('.form-group');
      ;
      imprimir=document.querySelector('.imprimir')
      enviar.addEventListener('click',inicio)


function inicio(e){
    e.preventDefault();
imprimir.innerHTML="";
    if(artista.value=="" || cancion.value=="" ){
        MostrarError('Datos incorrectos')
        return;
    }

    else{canciones(artista.value, cancion.value);
    }


}
function MostrarError(mensaje){
const div=document.createElement('div');
div.classList.add('alert', 'alert-primary')
div.setAttribute('role','alert');
div.textContent=mensaje;
imprimir.classList.remove('bg-info')

form.insertBefore(div,document.querySelector('form'))    

setTimeout(resolve=>{div.remove()},3000)
}

function canciones(artis,canc){
artista.value="";
cancion.value="";
const url=`https://api.lyrics.ovh/v1/${artis}/${canc}`;

fetch(url).then(resolve=>resolve.json()).then(cancion=>{
    console.log(cancion)
    if(cancion.lyrics!==""){
        imprimir.classList.add('bg-info')
    imprimir.innerHTML=`<h3 class="text-center my-3">${artis}-${canc}</h3><p class="mt-3">${cancion.lyrics}</p>`
    }
    else{MostrarError('Cancion no encontrada')}
})}