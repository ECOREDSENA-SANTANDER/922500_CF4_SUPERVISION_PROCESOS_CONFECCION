<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Gerber

    p.mb-5(data-aos="zoom-in-left")  Es un #[i software ] destinado a la creación de patrones digitales, aunque es poco utilizado en la actualidad, aún existen empresas que lo manejan dentro de sus procesos productivos, es por ello que se trae a colación, pero no profundizaremos en él. Es un #[i software ] especializado en diseño de modas, el cual permite consultar las prendas de forma tridimensional (3D) a partir de patrones de trazo plano, este analiza los detalles del patrón y aplica automáticamente los cálculos.
    p.mb-5(data-aos="zoom-in-left")  El #[i software ] Gerber consta de varios programas que están agrupados en una barra de herramientas llamada "#[i LaunchPad ]" que aparece en la interfaz:

    .row.mb-5(data-aos="zoom-in-left")
      .col-lg-3.d-flex 
        div.bg-img-4.d-flex.flex-column     
          div.p-4.bg-9
            h3.m-0.text-center Procesos patrones
          div.p-5.d-flex.align-items-center(style="height:100%")
            p.text-center Aquí podremos introducir las piezas (si tenemos la opción SILO). Hace posible escalar y modificar nuestros patrones.
      .col-lg-3.d-flex 
        div.bg-img-4.d-flex.flex-column          
          div.p-4.bg-9
            h3.m-0.text-center Creación de marcadas
          div.p-5.d-flex.align-items-center(style="height:100%")
            p.text-center Se realiza la marcada de los moldes, los límites de extendido, permisos para giros en piezas, parámetros de separación entre piezas enmarcadas.
      .col-lg-3.d-flex 
        div.bg-img-4.d-flex.flex-column           
          div.p-4.bg-9
            h3.m-0.text-center #[i Plotter ] y corte
          div.p-5.d-flex.align-items-center(style="height:100%")
            p.text-center Las marcadas que deseemos al #[i plotter ], configuración de envió al #[i plotter ].
      .col-lg-3.d-flex 
        div.bg-img-4.d-flex.flex-column           
          div.p-4.bg-9
            h3.m-0.text-center #[i Accuamark ]
          div.p-5.d-flex.align-items-center(style="height:100%")
            p.text-center Permite transformar patrones 2D (bidimensional) a 3D.

    .row.bg-6.py-5.mb-5(data-aos="zoom-in-left")
      .col-lg-1
      .col-lg-10.py-3 
        p.mb-5 Como se presenta en la imagen la herramienta Gerber  #[i software, ] es útil para hacer patrones pues permite distribuir de la mejor forma los cortes requeridos.
        figure.mb-4
          .titulo-sexto.color-acento-contenido 
            h5 Figura 31.
            span Interfaz para patronar
          img(src='@/assets/curso/tema3/img01.png' alt='Se expone la interfaz de un software de patronaje. En la pantalla principal se visualizan varios patrones de piezas de ropa distribuidos en el área de trabajo. La barra de herramientas superior contiene múltiples opciones y herramientas relacionadas con el diseño de patrones, como "File", "Advanced", "Edit", "View", "Tools", "Piece", "Layout" y "Help".')
          figcaption Fuente: Gerber  #[i software ]
      .col-lg-1

    .row.bg-6.py-5.mb-5(data-aos="zoom-in-left")
      .col-lg-1
      .col-lg-10.py-3 
        p.mb-5 Se expone en la imagen un vestido para dama con corte en la cintura en versión 3D, junto con los cortes que debe tener la tela para obtener este resultado. 
        figure.mb-4
          .titulo-sexto.color-acento-contenido 
            h5 Figura 32.
            span Interfaz 3D
          img(src='@/assets/curso/tema3/img02.png' alt='La figura expone la interfaz de un software de diseño de moda en 3D. A la izquierda, se visualiza un modelo 3D de un vestido azul, mostrando cómo se vería la prenda terminada. A la derecha, se muestran los patrones planos correspondientes a las diferentes piezas del vestido, también en azul. La barra de herramientas superior contiene varias opciones y herramientas relacionadas con el diseño y la simulación en 3D, mientras que a la izquierda hay un panel con una lista de piezas y materiales.')
          figcaption Fuente: Gerber  #[i software ]
      .col-lg-1

    .row.fondo-gris-1.py-5.mb-5(data-aos="zoom-in-left")
      .col-lg-1
      .col-lg-10.py-3 
        p.mb-5 Consultar la imagen número 33, en donde se expone la optimización de la tela utilizando esta herramienta de  #[i software. ]
        figure.mb-4
          .titulo-sexto.color-acento-contenido 
            h5 Figura 33.
            span Interfaz marcada para corte
          img(src='@/assets/curso/tema3/img03.png' alt='Se describe la interfaz de un software de corte de telas. En la pantalla principal se visualizan múltiples piezas de patrón dispuestas sobre un área rectangular, todas marcadas en color naranja. Estas piezas están organizadas para optimizar el uso del material durante el corte. La barra de herramientas superior contiene diversas opciones y herramientas relacionadas con el corte y la disposición de las piezas. En la parte inferior, hay controles y opciones adicionales para ajustar el proceso de corte.')
          figcaption Fuente: Gerber  #[i software.]
      .col-lg-1

    p.mb-5(data-aos="zoom-in-left")  Para consultar cómo funciona el programa ya entrado en práctica se invita al aprendiz a consultar los videos del canal “Patrones y costuras” en donde explican la utilización del  #[i software ] paso a paso para la creación de prendas.
   
    .row.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>1. Anotaciones</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=3hezwHMyKek&t=7s" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido Anotaciones
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>2. #[i P-notch ]</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=xylEcHtj1OM" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido #[i P-notch ]  
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>3. #[i Marker Plot ]</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=LR7uexasQHE" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido #[i Marker Plot ]
    .row.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>4. Límites de tendido</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=GKQoVgGmK3Y" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido Límites de tendido
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>5. Reglas de escalado</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=iqM1frt3F-s" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido Reglas de escalado     
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>6. Configurar #[i PDS ]</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=X9Db-Zzbl_4" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido Configurar #[i PDS ]      
      

    .row.mb-4(data-aos="zoom-in-left")
     
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>7. Patrón de playera (delantero y espalda)</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=1acdmeRfC2s" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido Patrón de playera (delantero y espalda)
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>8. Graduación o escalado de playera</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=6VC4BbU4Tjc" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido Graduación o escalado de playera
    
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>9. Crear orden y trazo</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=ese2BHLyJQ8" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido Crear orden y trazo
    .row.mb-4.justify-content-center(data-aos="zoom-in-left")  
      .col-sm-12.col-lg-4
        .card-cus-2.px-5.py-3
          p.mb-4 <b>10. Patrón base de falda</b>
          a.mb-4.anexo(href="https://www.youtube.com/watch?v=2SJPeFNtcZY" target="_blank")
            .anexo__icono
              img(src="@/assets/componentes/icono-link.svg" )
            .anexo__texto
              p.text-acento-contenido <b>Enlace web.</b> 
                span.text-acento-contenido Patrón base de falda     
        

    p(data-aos="zoom-in-left")  Así como los mencionados anteriormente, existen otros #[i softwares ] dedicados al patronaje y trazado de prendas en el mercado, como Lectra que contiene un paquete de Patronaje llamado #[i Modaris ] y para trazado denominado #[i Diamino ], cumplen funciones similares y bajo una estructura similar, decidir qué #[i software ] implementar es una tarea de cada empresa, pues dependerá de sus necesidades y de cómo este se complementa junto con la labor desempeñada por cada uno de sus integrantes.
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
