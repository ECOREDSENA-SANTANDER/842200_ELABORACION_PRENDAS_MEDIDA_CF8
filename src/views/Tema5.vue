<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Acabados y terminados

    p.mb-4 Los acabados en una prenda son los que le permiten darle el toque final, muchas veces son los que realzan y les dan el elemento diferenciador. Algunos de los terminados son despeluce de la prenda, el lavado si es necesario por algún proceso implementado, el planchado a vapor si es preferible, la medición y la entrega.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12.col-12
        .cajarosa.p-5
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-9.col-9
              img.img-a.img-t(src="@/assets/curso/tema5/img15.svg")
            .col-lg-7.col-md-9.col-9
              #t_1_2.titulo-segundo.tit
                h2 Infografía acabados y terminados
              p.mb-4 Acabados y terminados. Para mayor información descargue la infografía.
                .col-sm-auto
                  a.boton.color.my-4(:href="obtenerLink('/downloads/Terminados y acabados.pdf')" target="_blank")
                    span.text-black Descargar
                    i.fas.fa-file-download

    h4.mb-4 Inspección de producto terminado

    p.mb-5 Conoce cómo se debe realizar la revisión de las prendas y que estas cumplan de acuerdo a los criterios, se necesitan revisar midiendo cada una de las partes, dado que todo patrón es simétrico dependiendo del diseño y estas deberán responder a su vez a las medidas del cliente.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-12
        figure
          .video.mb-1
            iframe(width="1280" height="720" src="https://www.youtube.com/watch?v=I8adPpXG-n8&t=28s" title="Análisis y valoración de riesgos de ciberseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
