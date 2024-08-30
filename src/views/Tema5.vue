<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Acabados y terminados
  
    p.mb-4(data-aos="fade-left") Los acabados en una prenda son los que le permiten darle el toque final, muchas veces son los que realzan y les dan el elemento diferenciador. Algunos de los terminados son despeluce de la prenda, el lavado si es necesario por algún proceso implementado, el planchado a vapor si es preferible, la medición y la entrega.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-12.col-12
        .cajarosa.p-5
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-9.col-9
              img.img-a.img-t(data-aos="zoom-in")(src="@/assets/curso/tema5/img15.svg")
            .col-lg-7.col-md-9.col-9
              #t_1_2.titulo-segundo.tit
                h2 Infografía terminados y acabados
              p.mb-4 Acabados y terminados. Para mayor información descargue la infografía.
                .col-sm-auto
                  a.boton.color.my-4(:href="obtenerLink('/downloads/Infografia_Terminados_y_acabados.pdf')" target="_blank")
                    span.text-black Descargar
                    i.fas.fa-file-download

    h4.mb-4(data-aos="fade-left") Inspección de producto terminado

    p.mb-5(data-aos="fade-left") Conoce cómo se debe realizar la revisión de las prendas y que estas cumplan de acuerdo a los criterios, se necesitan revisar midiendo cada una de las partes, dado que todo patrón es simétrico dependiendo del diseño y estas deberán responder a su vez a las medidas del cliente.
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        figure
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/I8adPpXG-n8?si=PcfyIgDKEMUpcbeq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Inspección producto terminado
  
  
</template>

<script>
export default {
  name: 'Tema5',
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
