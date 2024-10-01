<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bg1.align-items-center.mb-0
      .col-lg-12.col-12.px-lg-5
        p.mb-4 En el siguiente video se presenta una introducción a las temáticas y conceptos abordados en este componente:
        
        .row.justify-content-center.mb-5
          .col-lg-12.col-md-12.col-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/TmpibmJqKOQ?si=gXQirSem4GTk4Xyi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video: Modificación de prendas

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
