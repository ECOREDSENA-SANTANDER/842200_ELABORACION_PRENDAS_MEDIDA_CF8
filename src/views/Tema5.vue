<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Acabados y terminados

    p.mb-4 Los acabados en una prenda son los que le permiten darle el toque final, <b>muchas veces son los que realzan y les dan el elemento diferenciador.</b> Algunos de los terminados son despeluce de la prenda, el lavado si es necesario por algún proceso implementado, el planchado a vapor si es preferible, la medición y la entrega.

    .row.mb-5
      .col-lg-2
      .col-lg-8
         .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/icono-pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 INFOGRAFIA
                  p.text-small Acabados y terminados
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Terminados y acabados.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-2

    .row     
      .col-12.px-5
        a.anexo.mb-1(href="https://www.youtube.com/watch?v=I8adPpXG-n8&t=28s" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Inspección de producto terminado.</b> Conoce cómo se debe realizar la revisión de las prendas y que estas cumplan de acuerdo a los criterios, se necesitan revisar midiendo cada una de las partes, dado que todo patrón es simétrico dependiendo del diseño y estas deberán responder a su vez a las medidas del cliente.
      
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
