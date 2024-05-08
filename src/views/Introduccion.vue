<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mb-5 Video: Leyenda del video
    
    
    .row.bg1.align-items-center
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
    
        .row.justify-content-center 
          .col-lg-10.col-md-12.col-12
            .cajaverde.p-4
              p.my-2 En el desarrollo de proyectos que tienen como finalidad la elaboración de prendas de vestir, es elemental incorporar los métodos y procedimientos apropiados con altos modelos de calidad. Por ello, <b>este componente trata de la modificación de prendas desde un análisis del cuerpo, anomalías de cuerpos y adaptación de la prenda acorde a las necesidades y asesoría al cliente.</b> Durante el proceso de arreglos se aplicarán técnicas de modistería y procesos artesanales, desde los análisis del cuerpo hasta la adaptación de las piezas según los requerimientos de ajuste, el desarmado y procesos de adaptación manuales y en máquinas de coser. La comunicación con el cliente y una asesoría según la silueta y anomalías del cuerpo son las herramientas clave para lograr una atención óptima y acorde a las necesidades reales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
