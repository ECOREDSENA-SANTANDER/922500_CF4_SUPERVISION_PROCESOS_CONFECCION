<template lang="pug">
.slyder-c
  ScrollHorizontal(v-if="datos.length" :selectedId="selected" item-full-width)
    .slyder-c__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .slyder-c__imagen.mb-4
        figure.slyder-c__img.py-2
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 {{item.figura}}
            span {{item.tituloImagen}}
          img(:src='item.imagen', :alt='item.leyendaImagen')
          figcaption(v-if="item.leyendaImagen") {{item.leyendaImagen}}
      .slyder-c__content
        .slyder-c__content__header.mb-4
          .row
            .col
              div
                h4 {{item.titulo}}
                p {{item.descripcion}}
            .col-auto
              .slyder__action
                .slyder__pagination {{index+1}}/{{datos.length}}
                a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
                  i.fas.fa-angle-left
                a.slyder__btn(
                  v-if="index != datos.length -1"
                  @click="selected = getId(index +1)"
                  @mouseover="mostrarIndicador = false"
                )
                  i.fas.fa-angle-right
                  .indicador__container.indicador--left(v-if="mostrarIndicador && index === 0")
                    .indicador--click.indicador--sm
                  
        .slyder-c__content__body
          p.mb-3(v-html="item.texto")

</template>

<script>
import slyderMixins from '../../node_modules/ecored-base-pkg/src/mixins/slyderMixins'
import ScrollHorizontal from '../../node_modules/ecored-base-pkg/src/components/plantilla/ScrollHorizontal'
export default {
  name: 'SlyderCTitulo',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.selected = this.getId(0)
  },
}
</script>

<style lang="sass"></style>
