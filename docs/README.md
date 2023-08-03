![Logo de apps script](https://hiviewsolutions.com/wp-content/uploads/2021/07/Apps-Script-min.png)



<em><h1>¿COMO CREAR UN PROYECTO EN APPSSCRIPT?</h1></em>

   <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>


Metodologia para crear un proyecto en Appsscript con JavaScript vanilla, Css3 y Html5 con un control de versiones en Clasp y NodeJs.


<h2>PREPARACIÓN DEL LADO DEL SERVIDOR EN LOS ARCHIVOS CON EXTENSIÓN ".GS"</h2>

![Imagen de Backend](https://cdn-icons-png.flaticon.com/512/6213/6213731.png)

<h2>CONFIGURACIÓN PREVIA</h2>
<h2>1) Preparar la función doGet</h2>

Para crear una aplicación web con el servicio HTML, tu código debe incluir una función doGet() que le indique a la secuencia de comandos cómo entregar la página. La función debe mostrar un objeto HtmlOutput, como se muestra en este ejemplo:
```
function doGet(){
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
```
<h2>2) Preparar la función include</h2>

Servimos código estatico en el html con la siguiente función:
```
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
```
<h2>3) Preparar la funciones que reciben los datos del cliente</h2>

![Funciones del backend](https://github.com/appsservisalud/template_appsscript/assets/108880293/68b5c5fc-8b5a-4688-a69a-6f03c0056edc)

Preparamos las funciones que reciben los datos del cliente. Estas funciones pueden retornar datos y enviarlos al cliente ó pueden
ser usados para procesos internos con hojas de calculo, texto ó gmail.

```
function get_data(form)
     {
       new_user = form.user + '-'
       return new_user
     }
```
 


<h2>PREPARACIÓN DEL LADO DEL CLIENTE</h2>

![Imagen de Frontend](https://aws-storage-aulab.s3.eu-south-1.amazonaws.com/aulabes/app/public/36/conversions/articoloweb-cover-cover.jpg)

<h2>CONFIGURACIÓN PREVIA</h2>
<h2>1) Preparar los scriptlet ( Para incluir contenido o configurar valores estáticos)</h2>

Estructura de la etiqueta
```
<?!= include(style.html)?>
```
<h2>2) Archivos estaticos (Imagenes y videos)</h2>
En alguna carpeta de Google drive. Autenticadas con la cuenta de nuestro proyecto Appsscript. Organizamos los archivos estaticos (Fotos,iconos y videos).
Luego le damos en compartir. Ubicamos el enlace y extraemos el id unico del objeto multimedia. Ese Id unico lo colocamos de la siguiente forma en el atributo src de la etiqueta img o video.

```
<img src="https://drive.google.com/uc?export=download&id=1lnwLYGa3_CvRzXOF62jMjZO5yfl1rUCf" id="person-img" alt="" />
```
<h2>3) Estilos css (Propios o en framework)</h2>

Una aplicación muy util del siguiente scriplet es llamar desde el cliente una función del lado del servidor. Luego inyecta el  `CSS` en el `HTML`. Para que se cargue en la pagina html. Siempre y cuando se haga dentro la etiqueta `<style></style>` y el archivo que incluye el código `CSS` sea con la extensión `HTML` y esté en el proyecto.
Asi podemos colocar nuestros propios estilos. Aunque puede optar por un CDN para cargar una bibloteca de estilos o un Framework Css. El CDN puede ser cargado en una
etiqueta `<Link>` dentro del `<head>` del html.

```
<!--Estilos desde CDN-->
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>

<!--Estilos propios-->
<style>
<?!= include(style.html)?>
</style>
```

<h2>4) ¿COMO INTERACTUAR CON EL DOM Y EL SERVIDOR?</h2>

![Frontend-Backend](https://github.com/appsservisalud/template_appsscript/assets/108880293/3aabc5c6-39eb-4c84-8531-b2d98b7f2a76)


   * 4.1 Dentro de la etiqueta `<script></script>` al final del archivo `Html` desarrollamos nuestro código en Java Script Vanilla o nos ayudamos de alguna libreria como 
        `Jquery`. Aqui podemos interectuar con los elementos del `DOM`. Preparar los datos para enviarlos al servidor mediante la API asincrona `google.script.run` con 
         sus respectivos controladores de exito `withSuccessHandler(function)` y falla `withFailureHandler(function)` para una mayor control de la ejecución.
     
   * 4.2 NOTA: `google.script.run` es una API de JavaScript asíncrona del cliente que permite que las páginas de servicios HTML llamen a funciones de Apps Script en el 
     servidor. Las llamadas del cliente a las funciones del lado del servidor son asíncronas: después de que el navegador solicita que el servidor ejecute la función 
     `function example()`, el navegador continúa inmediatamente en la siguiente línea de código sin esperar una respuesta.

<em><h1>CONTROL DE VERSIONES Y PUSH DE LOCAL A REMOTO CON "CLASP + APPSSCRIPT"</h1></em>


<h2>Configuración principal</h2>

![Ajustes](https://definicion.de/wp-content/uploads/2016/11/configuracion.png)

### 1. Debes tener instalado nodejs (Servidor escrito en JavaScript)

[Enlace de descarga de Nodejs](https://nodejs.org/es/download)

### 2. Crear la carpeta donde se alojara el proyecto. Es recomendable que el proyecto tenga una estructura basica.

![Alt text](/src/img/README/root_proyect.png)


### 3. Instalar clasp en el proyecto

```
npm install @google/clasp -g
```
### 4. Iniciamos sesión para dar permisos en appsscript a clasp. Le damos permitir.
```
clasp login
```

![Autorización a Clasp](https://github.com/appsservisalud/template_appsscript/assets/108880293/8e883c06-11dc-423c-9397-39841a80f934)



### 5.  Clonamos nuestro proyecto en local

Pulsamos en el botón Permitir y ya podemos cerrar la página web y volver al terminal. Creamos una carpeta contenedora del proyecto, en mi caso mi-aplicacion-web y clonamos el proyecto con clasp.

```
1. mkdir mi-aplicacion-web
2. clasp clone <script_id>
```

## 5.1 ¿Donde encontramos el Script_id?
![Script_id](https://github.com/appsservisalud/template_appsscript/assets/108880293/92686065-2d82-4606-8473-4c22d3043320)



### 6. Instalamos lo siguiente para que Visual studio code reconozca la sintaxis de appsscript del lado del servidor.
```
npm i -S @types/google-apps-script
```
### 7. Con el siguiente comando subimos los cambios locales al proyecto remoto de appsscript. De forma predeterminada los cambios se suben en el  `<HEAD>` "Cabecera principal". Para ello tendremos dos opciones:

 * 7.1 Con la opción -w (o –watch) dejamos al cliente que escuche todos nuestros cambios en local para que cuando los guardemos en local se sincronice con lo que hay en remoto.

```
clasp push -w
```

  * 7.2 Sin monitoreo
```
clasp push
```
