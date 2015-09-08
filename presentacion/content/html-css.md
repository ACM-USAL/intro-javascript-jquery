#Estructurando el contenido

Ya tenemos un lenguaje de programación para nuestra aplicación web, pero todavía no hemos mostrado nada en la pantalla. Para este fin es necesario comprender HTML y CSS.



##HTML

* Desarrollado inicialmente por Tim Berners-Lee en 1990, con el objetivo de tener un lenguaje de hipertexto para Internet. Actualmente desarrollado por el [W3C](http://www.w3.org) y el [WHATWG](http://www.whatwg.org/).

* Lenguaje de marcas, no de programación.

* Orientado a documentos, aunque define también formularios.

* La estética de las páginas no se define en HTML. Cada navegador (*user agent*) decidirá cómo se muestra una página.



##HTML

    <!DOCTYPE html>
    <html>
    <head>
       <meta charset="UTF-8">
       <title>Caperucita y el lobo</title>
    </head>
    <body>
      <header>
        <h1>Caperucita y el lobo</h1>
        <h2>Cuento abreviado</h2>
      </header>
      <article>
        <p>Érase una vez...</p>
      </article>
    </body>
    </html>
    


##Etiquetas

Los documentos HTML se componen de etiquetas. Estas son algunas:

* `<h1></h1>` Encabezado de primer nivel.

* `<p></p>` Párrafo

* `<div></div>` *Divisiones* o grupos de elementos

* `<ul><li></li></ul>` Listas no ordenadas

* `<ol><li></li></ol>` Listas ordenadas

* `<strong></strong>` Algo importante (negrita)

* `<img src="lobo.png">` Imagen

* `<a href="/login">Login</a>` Enlaces


##Etiquetas

Más elementos en la MDN:

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

Lista completa en la especificación:

http://www.w3.org/html/wg/drafts/html/CR/



##Formularios

HTML define algunas etiquetas para crear formularios.

* `<input type="text">` <input type="text"> Campo de texto

* `<input type="password">` <input type="password" value="foobar"> Contraseña

* `<input type="checkbox">` <input type="checkbox"> Casilla de verificación

* `<input type="radio">` <input type="radio"> Botón de radio

* `<button></button>` <button>Púlsame</button> Botón

* `<button type="submit"></button>` <button type="submit">Enviar</button> Botón predeterminado

En HTML5 se han definido muchos nuevos tipos de controles. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input



##Estilo

Los navegadores tienen estilos por defecto para todas las etiquetas HTML. Sin embargo, en la práctica estos estilos son poco prácticos.

Una primera aproximación para atajar el problema fue añadir a HTML etiquetas de estilo como `<font></font>` y `<center></center>`.

Sin embargo, estas etiquetas requerían repetir mucho código para mantener un estilo consistente y mezclaban información de presentación con el contenido, cosa que no encajaba con la idea original de HTML.

Por este motivo fueron eliminadas en posteriores versiones del estándar, aunque todos los navegadores las soportan.


##Estilo

Para permitir a los desarrolladores tener un control más fino sobre el estilo de la página sin sobrecargar el código HTML con información innecesaria se desarrolló un nuevo estándar conocido como CSS (*Cascading Style Sheets*).


La primera versión de CSS se publicó en 1996. Sin embargo, el soporte de navegadores siempre ha sido problemático.

Particularmente, el advenimiento de Internet Explorer 6 en 2001 y su permanencia como navegador dominante en el mercado hasta hace pocos años ha causado mucho dolor en este aspecto, congelando la adopción de nuevas características durante casi una década.


Por si fuera poco, la especificación de CSS tampoco es perfecta.

La distribucción de elementos es especialmente problemática: hasta hace muy poco tiempo no había ninguna regla específica para centrar verticalmente elementos.


##Añadiendo CSS

Las hojas de estilo CSS tienen formato de texto, con extensión `.css` y se vinculan a un HTML mediante una etiqueta en el `<head>`.

    <!DOCTYPE html>
    <html>
    <head>
       <meta charset="UTF-8">
       <title>Título</title>
       <link rel="stylesheet" href="/stylesheet.css">
    </head>
    <body>
       Contenido...
    </body>
    </html>


##Primer ejemplo

CSS tiene una sintaxis sencilla: especificamos a qué tipo de elementos queremos dar estilo, y qué estilo les queremos dar.

    <h1>Caperucita y el lobo</h1>

<p></p>

    h1 {
        color: #EC8282;
        font-style: italic;
        font-size: 30px;
        font-family: Arial;
    }

<h1 style="
        color: #EC8282;
        font-style: italic;
        font-size: 36px;
        font-family: Arial;
">Caperucita y el lobo</h1>


##Clases

HTML permite denotar cualquier elemento con una o más *clases*. Estas clases permiten filtrar fácilmente elementos a los que aplicar reglas de estilo.

    <div class="caja-aviso">
        Usuario o contraseña incorrectos
    </div>

<p></p>

    .caja-aviso {
        color: black;
        background: orange;
        border: 1px solid #7C7C7C;
        border-radius: 5px;
    }

<div style="
        color: black;
        background: orange;
        border: 1px solid #7C7C7C;
        border-radius: 5px;
        ">Usuario o contraseña incorrectos</div>


##Selectores

Selectores son las expresiones que determinan sobre qué elementos se aplicará una o más reglas de estilo.

* `.nombre` selecciona aquellos elementos que tengan la clase `nombre`.

* `h1` selecciona todos los elementos `h1`.


##Selectores

Los selectores pueden combinarse.

* `h1.nombre` selecciona aquellos elementos `h1` con clase `nombre`.

* `h1 .nombre` selecciona aquellos elementos con clase `nombre` dentro de un elemento `h1`.

* `h1 > .nombre` selecciona aquellos elementos con clase `nombre` que son descendientes directos de un elemento `h1`.


##Selectores

Hay muchísimos selectores más definidos en CSS.

http://www.w3.org/TR/css3-selectors/

&nbsp;

Un juego para practicar selectores CSS:

http://flukeout.github.io/


##El modelo de cajas

<div style="position: relative">
<img src="content/box_model.svg" alt="" class="no-decorations">
<img src="content/box_model2.svg" alt="" class="fragment no-decorations" style="position: absolute; left: 24px; top: 0;">
</div>


##El modelo de cajas

    .box {
        margin: 20px;
        padding: 5px 10px;
        padding-bottom: 20px;
        border-left: 1px dashed orange;
        width: 50px;
        height: 50px;
        box-sizing: content-box;
    }

![content-box](content/content_box.png)


##El modelo de cajas

    .box {
        margin: 20px;
        padding: 5px 10px;
        padding-bottom: 20px;
        border-left: 1px dashed orange;
        width: 50px;
        height: 50px;
        box-sizing: border-box;
    }

![content-box](content/border_box.png)



##Posicionamiento

Existen cuatro tipos de posicionamiento, a elegir mediante la propiedad `position`:

* `static` Reserva espacio. Se coloca a continuación del elemento anterior y ocupa el espacio que le toca.

* `absolute` No reserva espacio. Se coloca respecto al elemento antecesor *posicionado* (no `static`) más cercano.

* `relative` Reserva espacio. Se coloca a continuación del elemento anterior, pero no necesariamente en el espacio que ha reservado.

* `fixed` No reserva espacio. Se coloca respecto a la pantalla. El elemento ocupa la misma posición incluso al hacer scroll.


##Posicionamiento

Las propiedades `top`, `bottom`, `left` y `right` permiten especificar la posición del objeto.

Cuando el objeto está posicionado con `absolute` o `fixed`, especifican la distancia con los bordes del objeto sobre el que se posiciona.

Cuando el objeto está posicionado con `relative`, especifican cómo varía la posición de cada lado del objeto respecto de la posición original.