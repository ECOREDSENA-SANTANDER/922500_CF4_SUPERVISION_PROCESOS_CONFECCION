<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Gerber

    p.mb-5(data-aos="fade-right") Es un software destinado a la creación de patrones digitales, aunque es poco utilizado en la actualidad, aún existen empresas que lo manejan dentro de sus procesos productivos, es por ello que se trae a colación, pero no profundizaremos en él. Es un software especializado en diseño de modas, el cual permite visualizar las prendas de forma tridimensional (3D) a partir de patrones de trazo plano, este analiza los detalles del patrón y aplica automáticamente los cálculos.
    p.mb-5(data-aos="fade-right") El software Gerber consta de varios programas que están agrupados en una barra de herramientas llamada "LaunchPad" que aparece en la interfaz:

    .row.mb-5
      .col-lg-3.d-flex(data-aos="fade-right")
        div.borde-1.d-flex.flex-column     
          div.p-4.fondo-rojo-claro-1
            h3.m-0.text-center Procesos patrones
          div.p-5.d-flex.align-items-center(style="height:100%")
            p.text-center Aquí podremos introducir las piezas (si tenemos la opción SILO). Hace posible escalar y modificar nuestros patrones.
      .col-lg-3.d-flex(data-aos="fade-up")
        div.borde-1.d-flex.flex-column          
          div.p-4.fondo-rojo-claro-1
            h3.m-0.text-center Creación de marcadas
          div.p-5.d-flex.align-items-center(style="height:100%")
            p.text-center Se realiza la marcada de los moldes, los límites de extendido, permisos para giros en piezas, parámetros de separación entre piezas enmarcadas.
      .col-lg-3.d-flex(data-aos="fade-up")
        div.borde-1.d-flex.flex-column           
          div.p-4.fondo-rojo-claro-1
            h3.m-0.text-center Plotter y corte
          div.p-5.d-flex.align-items-center(style="height:100%")
            p.text-center Las marcadas que deseemos al plotter, configuración de envió al plotter.
      .col-lg-3.d-flex(data-aos="fade-left")
        div.borde-1.d-flex.flex-column           
          div.p-4.fondo-rojo-claro-1
            h3.m-0.text-center Accuamark
          div.p-5.d-flex.align-items-center(style="height:100%")
            p.text-center Permite transformar patrones 2D (bidimensional) a 3D.

    .row.fondo-gris-1.py-5.mb-5
      .col-lg-1
      .col-lg-10.py-3(data-aos="fade-left")
        figure.mb-4
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 31.
            span Interfaz para patronar
          img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")
          figcaption Fuente: Gerber Software
      .col-lg-1

    .row.fondo-a.py-5.mb-5
      .col-lg-1
      .col-lg-10.py-3(data-aos="fade-left")
        figure.mb-4
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 32.
            span Interfaz 3D
          img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")
          figcaption Fuente: Gerber Software
      .col-lg-1

    .row.fondo-gris-1.py-5.mb-5
      .col-lg-1
      .col-lg-10.py-3(data-aos="fade-left")
        figure.mb-4
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 33.
            span Interfaz marcada para corte
          img(src='@/assets/curso/tema3/img03.png' alt="Imagen decorativa")
          figcaption Fuente: Gerber Software
      .col-lg-1

    p.mb-5(data-aos="fade-right") Para observar cómo funciona el programa ya entrado en práctica, se invita al aprendiz a consultar los videos del canal “Patrones y costuras” en donde explican la utilización del software paso a paso para la creación de prendas.
    
    .row.mb-5
      .col-lg-2
      .col-lg-8.fondo-a.py-5
        .row.mb-4(data-aos="fade-right")
          .col-lg-1
          .col-lg-5
            p.mb-4 <b>1. Anotaciones</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=3hezwHMyKek&t=7s" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Anotaciones
          .col-lg-5
            p.mb-4 <b>2. P-notch</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=xylEcHtj1OM" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> P-notch            
          .col-lg-1

        .row.mb-4(data-aos="fade-left")
          .col-lg-1
          .col-lg-5
            p.mb-4 <b>3. Marker Plot</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=LR7uexasQHE" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Marker Plot
          .col-lg-5
            p.mb-4 <b>4. Plot</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=-G-2OlGrURc" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Plot           
          .col-lg-1

        .row.mb-4(data-aos="fade-right")
          .col-lg-1
          .col-lg-5
            p.mb-4 <b>5. Límites de tendido</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=GKQoVgGmK3Y" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Límites de tendido
          .col-lg-5
            p.mb-4 <b>6. Reglas de escalado</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=iqM1frt3F-s" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Reglas de escalado           
          .col-lg-1

        .row.mb-4(data-aos="fade-left")
          .col-lg-1
          .col-lg-5
            p.mb-4 <b>7. Configurar PDS</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=X9Db-Zzbl_4" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Configurar PDS
          .col-lg-5
            p.mb-4 <b>8. Patrón de playera (delantero y espalda)</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=1acdmeRfC2s" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Patrón de playera (delantero y espalda)
          
          .col-lg-1

        .row.mb-4(data-aos="fade-right")
          .col-lg-1
          .col-lg-5
            p.mb-4 <b>9. Graduación o escalado de playera</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=6VC4BbU4Tjc" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Graduación o escalado de playera
          .col-lg-5
            p.mb-4 <b>10. Crear orden y trazo</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=ese2BHLyJQ8" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Crear orden y trazo
          .col-lg-1

        .row.mb-4(data-aos="fade-left")
          .col-lg-4
          .col-lg-4
            p.mb-4 <b>11. Patrón base de falda</b>
            a.mb-4.anexo(href="https://www.youtube.com/watch?v=2SJPeFNtcZY" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg" alt="Imagen decorativa")
              .anexo__texto
                p <b>Enlace web.</b> Patrón base de falda     
          .col-lg-4
      .col-lg-2

    p(data-aos="fade-right") Así como los mencionados anteriormente, existen otros softwares dedicados al patronaje y trazado de prendas en el mercado, como Lectra que contiene un paquete de Patronaje llamado Modaris y para trazado denominado Diamino, cumplen funciones similares y bajo una estructura similar, decidir qué software implementar es una tarea de cada empresa, pues dependerá de sus necesidades y de cómo este se complementa junto con la labor desempeñada por cada uno de sus integrantes.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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

<style lang="sass" scoped></style>
