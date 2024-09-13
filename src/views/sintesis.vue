<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El principal objetivo de las prendas de vestir es que las personas se sientan cómodas al usarlas, en este componente se exponen características de la anatomía humana para tener en cuenta a la hora de confeccionar o adaptar una prenda de vestir, adicionalmente se presentan diferentes procesos de adaptación de las prendas que se pueden realizar de manera manual o en máquina de coser. En el cuadro a continuación se presentan los temas a tratar: 

      .row.justify-content-center
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El diagrama de flujo presenta el contenido de la unidad con sus temas, subtemas y conceptos importantes")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
