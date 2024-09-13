<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Atención al cliente y recepción de la prenda
    
    .row.bg2.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")
    
        .row.justify-content-center(data-aos="fade-left")
          .col-lg-12.col-md-10.col-10
            img.img-a.img-t.mb-4(src='@/assets/curso/tema1/imgg1.png', alt='tema1')          
        
        p.mb-0 Una de las bases fundamentales de la modistería es la atención al cliente y recepción de la prenda, para lo cual se determina que haya un análisis ergonómico del cliente, la evolución del cuerpo humano, las causas de anomalías del cuerpo, además de la medición y señalizado de la prenda. A continuación, se relaciona esta información con mayor detalle.
    
        Separador   
        #t_1_1.titulo-segundo
          h2 1.1 Análisis ergonómico del cliente

    figure.mb-4(data-aos="fade-right")
      .video  
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_4VpDjFYDPw?si=Xfsd-YAMnILNeHLC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)    
      figcaption.mb-5 Video. Análisis ergonómico del cliente
  
    p.mb-4 El punto de partida para el análisis ergonómico, es la observación. En el momento de la toma de medidas lo primero por identificar es la silueta, luego la proporción, así como la desproporción de las partes del cuerpo y, por último, la estatura que determina el tamaño de elementos como bolsillos, botones, cruces, etc., acordes con el tamaño de la figura humana. En concordancia con lo descrito, su aplicación ayudará a mejorar la imagen estética del cliente.

    .row.justify-content-center.mb-4(data-aos="fade-left") 
      .col-lg-10.col-md-12.col-12
        .cajaverdec.p-4
          .row.justify-content-center 
            .col-lg-8.col-md-12.col-12 
              p.my-4 Aunque la humanidad ha vivido un proceso de mestizaje, existen grupos raciales con características físicas similares y un alto porcentaje de exactitud entre las personas que lo conforman, como el color de piel, estatura, grosor de cuerpo. Por ejemplo, en países europeos la estatura promedio de un hombre es de 1,80 m y su contextura es delgada, comparada con la raza latina donde el promedio de estatura de un hombre es de 1,72 m y contextura más gruesa.
            .col-lg-3.col-md-10.col-10(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/tema1/img01.svg', alt='tema1')          

    p.mb-4(data-aos="fade-left") Siguiendo con este orden de ideas, se puede analizar cómo varía la postura del cuerpo humano con el paso de los años, una persona anciana adquiere una mayor curvatura en la espina dorsal que la de un joven que posee un porte más lineal.
    p.mb-5(data-aos="fade-left") El conocer y aplicar estos conocimientos en un análisis ergonómico, ofrece comprender qué puntos de variación se deben ejecutar en la prenda.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-6.col-md-12.col-12
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 1.
          | Tipos de raza
        img.mb-3(data-aos="zoom-in")(src='@/assets/curso/tema1/img02.svg', alt='Texto alternativo figura 1: la imagen presenta tres imágenes de mujeres de diferentes razas y describe estaturas de la siguiente manera: Raza blanca: estatura 1.80m, raza americana: estatura 1.70m, raza asiática: estatura 1.60m.') 
        figcaption Nota. Tomada de Plásticamente bilingüe (2021)        
    

    .titulo-tercero
      h3 Evolución del cuerpo humano

    p.mb-4(data-aos="fade-left") El cuerpo humano sufre diferentes cambios a medida que va creciendo, pero también cuando va envejeciendo y aquí varios factores influyen como la edad, patologías, accidentes y alimentación; y para alcanzar la precisión de ajuste en una prenda de vestir es necesario conocer esas variaciones y anormalidades del cuerpo para poder aplicar las modificaciones.
    p.mb-4(data-aos="fade-left") Con respecto a la contextura se entiende esta como la configuración corporal de hombres y mujeres, y se divide en tres (3) tipos: 
    

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              h3 Cuerpo normal:
              p Es la armonía estructural entre la estatura y los cánones de estructura según género y edad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/1.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              h3 Cuerpo delgado:
              p Reducido desarrollo muscular. Generalmente, los omóplatos sobresalen en la superficie de la espalda. La espina dorsal es curvada y el esternón es hundido y la cintura delgada.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/2.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              h3 Cuerpo obeso:
              p Excesivo desarrollo del tejido adiposo produciendo un aumento de peso por encima de lo que corresponde de acuerdo con la edad, talla y sexo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/3.svg')})`}")
  

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-6.col-md-12.col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          | Tipos de cuerpo
        img(data-aos="zoom-in")(src='@/assets/curso/tema1/immg.svg', alt='la figura presenta los tipos de cuerpo: cuerpo delgado, cuerpo grueso, cuerpo obeso.')  
        figcaption Nota. Tomada de 123rf (2021) 

    p.mb-5(data-aos="fade-left") Cuando se habla de porte, se refiere a la disposición física de una persona. Los siguientes son las clases de cuerpos: 
    
    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-conte--borde.p-4(titulo="Cuerpo de porte normal")
            .row.justify-content-center.align-items-top
              .col-lg-6
                h4 Cuerpo de porte normal
                p Es cuando la espina dorsal, mantiene la curva superior en relación con la entrada de la región lumbar.
              .col-lg-6.col-md-9.col-9
                figure
                  img.img-a.img-t(src='@/assets/curso/tema1/immg1.svg', alt='tema1')
    
      
          .tarjeta.color-acento-conte--borde.p-4(titulo="Cuerpo de espalda curva y tórax reprimiento")
            .row.justify-content-center.align-items-top
              .col-lg-6
                h4 Cuerpo de espalda curva y tórax reprimiento
                p Es el cuerpo que tiene la espina dorsal curva en la parte superior, dando origen a la inclinación del cuerpo hacia adelante y la entrada teniendo el pecho plano.
              .col-lg-6.col-md-9.col-9
                figure
                  img.img-a.img-t(src='@/assets/curso/tema1/immg2.svg', alt='tema1')
              

          .tarjeta.color-acento-conte--borde.p-4(titulo="Convexo")
            .row.justify-content-center.align-items-top
              .col-lg-6
                h4 Convexo
                p Se llama convexo al cuerpo que tiene en el centro la parte prominente. Se caracteriza este cuerpo por tener la espina dorsal inclinada hacia atrás dando origen que la cabeza se eleve con tendencia a irse hacia atrás. Se caracteriza también por tener el pecho desarrollado y las costillas planas.
              .col-lg-6.col-md-9.col-9
                figure
                  img.img-a.img-t(src='@/assets/curso/tema1/immg3.svg', alt='tema1')


    .titulo-tercero
      h3 Causas de anomalías del cuerpo
        
    p.mb-4(data-aos="fade-left") Las principales causas de anomalías en el cuerpo se dividen en patológicas y funcionales, derivadas de hábitos posturales y malformaciones adquiridas. Con respecto al oficio de modista o sastre, saber detectarlas logra ampliar el entendimiento de los puntos en el patrón o prenda desarmada que deban ajustarse. La inclinación del cuerpo, por ejemplo, cambia la línea de manga y el calce del frente, además de la espalda de la prenda. Los hombros se ven afectados en cuanto a la caída y el pecho con alteraciones no solo afecta al frente, sino a toda la pieza en general. Este análisis aplica para cualquier línea ya sea femenina, masculina e infantil.
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10.col-md-12.col-12
        .cajarosa.p-5
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-9.col-9
              img.img-a.img-t(src="@/assets/curso/tema1/img15.svg")
            .col-lg-7.col-md-9.col-9
              #t_1_2.titulo-segundo.tit
                h2 Infografía anomalías del cuerpo
              p.mb-4 Las principales causas de anomalías en el cuerpo.
                .col-sm-auto
                  a.boton.color.my-4(:href="obtenerLink('/downloads/infografia_Anomalias_Cuerpo.pdf')" target="_blank")
                    span.text-black Descargar
                    i.fas.fa-file-download

    Separador
    #t_1_2.titulo-segundo
      h2 1.2 Medición y señalizado de la prenda

    p.mb-4(data-aos="fade-left") El momento de la medición de la prenda se puede aplicar en dos ocasiones diferentes a saber: cuando se está construyendo desde cero o para ejecutar arreglos mediante adaptaciones de una prenda que ya esté confeccionada. Para esta ocasión se trabajará hacia la segunda opción.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Cuando el cliente agenda la cita, y en el caso de las mujeres, se le sugiere ir con la ropa interior de uso más frecuente, para manejar con mejor aproximación las alturas de busto y contorno de pecho. Ya con el análisis antropométrico del cliente bien documentado, se analiza la prenda categorizando su tipología, tipo de tela y detalles en general para que, en el momento del diálogo, se puedan ofrecer recomendaciones que vayan acordes con la silueta del cliente. Antes de la medición de la prenda se debe tener claro el arreglo que se debe hacer, para lo cual se sugiere realizar el boceto plano de la prenda de su parte frontal, de costado y de atrás. 

    p.mb-3(data-aos="fade-left") Los instrumentos que se deben tener a mano son: alfileres, hilo con hilo en contraste, tiza o lápiz para marcar, cinta métrica, desbaratador y libreta de apuntes.
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-5.col-md-12.col-12.mb-4
        .caja1.p-5.mb-0.my-5
          p.mb-4.my-1 Durante el procedimiento se debe ir ajustando con alfileres o hilvanando la prenda de ser necesario, luego marcar las líneas de lo que se quiere hacer y dibujando sobre la prenda puesta, ya en el boceto dibujado ir anotando las distancias y medidas para realizar aumentos o acortar largos. Después se procede a quitar la pieza dejando los alfileres puestos. 
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          | Medición
        img.img-a.img-t.mb-2(data-aos="zoom-in")(src='@/assets/curso/tema1/img07.png', alt='la fotografía presenta los hombros de una persona midiéndose una chaqueta a medio hacer, con alfileres y unas manos con un metro y realizando marcas con una tiza.  ')  
        figcaption Nota. Tomada 1.000 cursos gratis (2019)

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-5.col-md-12.col-12.mb-4
        .caja11.p-5.mb-0.my-2 
          p.mb-5.my-4 Si se tiene un maniquí de costura, se debe colocar la prenda allí para definir mejor las líneas dibujadas, pues sobre la persona es más complejo este proceso. Este paso se puede ejecutar con la prenda completa o con el desmontaje de piezas ya realizadas.
      .col-lg-5.col-md-12.col-12.mb-4.my-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          | Maniquí de costura 
        img.img-a.img-t.mb-2(data-aos="zoom-in")(src='@/assets/curso/tema1/img08.png', alt='la fotografía presenta una chaqueta con marcas y sin terminar sobre un maniquí.')  
        figcaption Nota. Tomada de Istock (2021)
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.col-md-12.col-12.mb-4
        .caja111.p-5.mb-0.my-2  
          p.mb-5.my-4 Por último, se debe ubicar la prenda en una superficie plana, suavizar con las reglas de patronaje y apoyarse con la cinta métrica para las distancias. Luego hay que analizar, según la necesidad de ajuste, el desarmado de la prenda y proceder a ejecutar los ajustes.
      .col-lg-5.col-md-12.col-12.mb-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          | Corrección de curvas
        img.img-a.img-t.mb-2(data-aos="zoom-in")(src='@/assets/curso/tema1/img09.png', alt='la fotografía presenta unas manos tomando medidas en una prenda sobre una superficie plana.')  
        figcaption Nota. Tomada de Istock (2021)


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
