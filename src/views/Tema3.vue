<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modificación y arreglos en las prendas de vestir
    p.mb-4 En la confección de prendas de vestir suelen repetirse varios de los procesos cuya finalidad es buscar que la prenda quede acorde con los criterios técnicos que permitan su uso y comodidad por parte del cliente o consumidor. Es por ello que en este proceso, independientemente de si ya se tiene el producto terminado, aparecerán factores en los que las prendas ya no puedan ser usadas por el consumidor, entre estos factores pueden estar el aumento o disminución de peso, transformar una prenda de formal a casual, reutilizar prendas cuyo objetivo es que el ciclo de vida del producto pueda extenderse, entre otros. Por lo anterior cuando se habla de modificación de prenda, esta debe entenderse que fue realizada a partir de patrones y que siendo un molde puede llegar a transformarse y darle el uso esperado. En este apartado se iniciará desde el descosido y la transformación de moldes entendiéndose estos como las partes de una prenda.
    p.mb-5 Así, existen varias técnicas de descosido o desmontado. Para iniciar el arreglo de una prenda se hace necesario evaluar cómo fue confeccionada, para ello es indispensable analizar la técnica que fue empleada, si está forrada, sí solo está a máquina plana o combinada con plana y fileteadora, adicionalmente se pueden llegar a encontrar prendas con puntadas como collarín, etc. 
    
    
    .row.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.col-md-9.col-9.mb-3
                img.img-a.img-t(src='@/assets/curso/tema3/img01.svg', alt='tema3')
              h4.text-center Cortahilos o despeluzador

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.col-md-9.col-9.mb-3
                img.img-a.img-t(src='@/assets/curso/tema3/img02.svg', alt='tema3') 
              h2.text-center Desbaratador
      
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.col-md-9.col-9.mb-3
                img.img-a.img-t(src='@/assets/curso/tema3/img03.svg' alt='tema3')
              h2.text-center Metro
      
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.col-md-9.col-9.mb-3
                img.img-a.img-t(src='@/assets/curso/tema3/img04.svg' alt='tema3')
            h2.text-center Tiza de sastre

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.col-md-9.col-9.mb-3
                img.img-a.img-t(src='@/assets/curso/tema3/img05.svg' alt='tema3')
            h2.text-center Tijeras
          
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.col-md-9.col-9.mb-3
                img.img-a.img-t(src='@/assets/curso/tema3/img06.svg' alt='tema3')
            h2.text-center Alfileres

    p.mb-4 Para iniciar el descosido de prendas con tejidos planos se debe ubicar el desbaratador de modo que se vaya rompiendo toda la línea de costura, se debe finalizar retirando el exceso y, si es necesario, con la ayuda del cortahilos.
    
    .bg3.p-5.mb-4
      .row.justify-content-center.mb-0
        .col-lg-4.col-md-9.col-9.mb-3
          h4.mb-4.text-center Desbaratar costura plana
          img(src='@/assets/curso/tema3/img07.png', alt='Desbaratar costura plana - La imagen contines fotografía de manos sobre la tela indicando la manera de desbaratar costura plana.')  
        .col-lg-4.col-md-9.col-9.mb-3
          h4.mb-4.text-center Apertura de textiles
          img(src='@/assets/curso/tema3/img08.png', alt='Apertura de textiles - La imagen contiene fotografía de manos sobre la tela indicando la manera de hacer apertura de textiles')  
        .col-lg-4.col-md-9.col-9.mb-3
          h4.mb-4.text-center Separación de las piezas
          img(src='@/assets/curso/tema3/img09.png', alt='Separación de las piezas - La imagen contine fotografía de manos manipulando la tela para indicar la manera de hacer separación de piezas con desbaratador.')  
      figcaption Nota. Tomada de Skarlet Costura (2021) 

    p.mb-4 Ahora bien, la mayoría de prendas vienen también fileteadas, por lo que descoser este tipo de prendas requiere de mayor paciencia, pues por lo general son tres hilos que están presentes en el tejido de esta puntada, para ello es recomendable lo siguiente:
    
    .row.mb-4
      .col-3.d-flex
        div           
          div 
            p.BorTit.ms-1 Romper los hilos superiores
            figure
              img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')     
              figcaption.figcaption2 Nota. Tomada de Naii (2015)
      .col-3.d-flex
        div          
          div
            p.BorTit.ms-1 Sacar los hilos cortados
            figure
              img(src='@/assets/curso/tema3/img11.png', alt='Texto que describa la imagen')     
              figcaption.figcaption2 Nota. Tomada de Naii (2015)
      .col-3.d-flex
        div          
          div
            p.BorTit.ms-1 Romper las puntadas de la aguja
            figure
              img(src='@/assets/curso/tema3/img12.png', alt='Texto que describa la imagen')     
              figcaption.figcaption2 Nota. Tomada de Naii (2015)
      .col-3.d-flex
        div         
          div
            p.BorTit.ms-1 Tirar la hebra
            figure
              img(src='@/assets/curso/tema3/img13.png', alt='Texto que describa la imagen')     
              figcaption.figcaption2 Nota. Tomada de Naii (2015)

    p.mb-5 Una vez se tienen desarmadas las piezas que sean necesarias para iniciar con el arreglo, estas se contemplarán como los patrones que son en realidad, por lo anterior, el siguiente apartado contendrá cómo hacer los arreglos respectivos para las modificaciones.
    
    .row.justify-content-center.mb-5
      .col-lg-8.col-md-9.col-9
        .cajon.color-primario.fondo-f.p-4   
          p.mb-0 Cuando se hace un arreglo de prenda y se tiene una buena comprensión de los patrones, desbaratar todo para los expertos no es necesario, esto lo lograrás con la práctica.

    p.mb-5 Para reparar un vestido, que queda amplio en la parte superior y muy justo en la parte inferior. La modista debe realizar los siguientes pasos: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10.col-12.mb-5
        .hr
        .row.justify-content-center.align-items-center.p-2
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/curso/tema3/1.svg', alt='tema2')           
          .col-lg-10
            p.mb-0 Tomar nuevamente las medidas de la clienta.
        .hr.mb-2 
        .hr  
        .row.justify-content-center.align-items-center.p-2
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/curso/tema3/2.svg', alt='tema2')           
          .col-lg-10
            p.mb-0 Realizar las marcaciones con alfileres para indicar qué tanto se debe reducir la prenda sobre el cuerpo de la clienta; y luego marcarlas con la parte superior del lápiz de tiza borrable.
        .hr.mb-2   
        .hr 
        .row.justify-content-center.align-items-center.p-2
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/curso/tema3/3.svg', alt='tema2')           
          .col-lg-10
            p.mb-0 Una vez tiene el vestido en la mesa, se rectificarán las medidas del mismo con las de la clienta, para saber qué tanto se deberá ajustar por costados y centros desde las pinzas, si no tiene pinzas es opcional hacerlas si se desea que quede bien ceñido al cuerpo y ergonómico, si es así se marcan y se procede con máquina a realizarlas.
        .hr.mb-2   
        .hr 
        .row.justify-content-center.align-items-center.p-2
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/curso/tema3/4.svg', alt='tema2')           
          .col-lg-10
            p.mb-0 Si la prenda necesita ser desbaratada, una vez con el patrón se procede a realizar las marcaciones y ajustes cortando el sobrante, esto para la parte superior.
        .hr.mb-2  
        .hr 
        .row.justify-content-center.align-items-center.p-2
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/curso/tema3/5.svg', alt='tema2')           
          .col-lg-10
            p.mb-0 Para el ajuste en la parte inferior se tomarán las medidas de la cadera para ampliar en ¼ para el patrón delantero y superior, realizando una línea paralela en el costado de la falda; se debe respetar la curva de la cadera.
        .hr
    
    
    .row.mb-4
      .col-2
      .col-4(style="background-color: #EDE3B7")
        figure
          p.BorTit Vestido clásico
          img(src='@/assets/curso/tema3/img14.png', alt='Texto que describa la imagen')  
      .col-4(style="background-color: #F6F0D5")
        figure
          p.BorTit Patrón de vestido
          img(src='@/assets/curso/tema3/img15.png', alt='Texto que describa la imagen')   
      .col-2

    p.mb-5 Se debe tener en cuenta que la ampliación de esta parte puede resultar de lo que se liberó de medida en el superior, otra solución, si no se cuenta con la tela suficiente, es añadir a los costados rectificando la medida del contorno de cadera y la línea se trazará por fuera del patrón hasta que coincida con la medida. 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-2.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema3/6.svg", alt="tema 3")
            .col-lg-9.col-md-12.col-12
              h4.mb-1 Modificación de moldes - análisis sobre medidas
              p.mb-0 Conoce otras técnicas que pueden resultar útiles para la modificación de moldes y el análisis sobre medidas.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=2Aa8iCb_Zpo&t=1130s" target="_blank")
                span Ir al sitio
                i.fas.fa-video  


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
