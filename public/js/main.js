const app = document.getElementById('root')

function navidad() {
   const fecha = new Date();
   const dia = fecha.getDay();
   const mes = fecha.getMonth() + 1;

   if (mes == 12 && dia == 25) {
      return '¡¡¡ES NAVIDAD!!!\n :D'

   } else {
      return 'No es navidad :('
   }

}

app.innerHTML= `${navidad()}`