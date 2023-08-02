<em><h1>¿QUE HACER ANTES DE EMPEZAR UN PROYECTO EN APPSSCRIPT?</h1></em>

<h2>1) Preparar la función doGet</h2>
<h2>1) Archivos estaticos (Imagenes y videos)</h2>
<h2>2) Estilos css (Propios o en framework)</h2>
<h2>1) Tag de appscript para llamar funciones o inyectar codigo en el template desde el servidor</h2>


<em><h1>COMO LLEVAR A PRODUCCIÓN CON CLASP + APPSSCRIPT</h1></em>

![Logo de apps script](https://hiviewsolutions.com/wp-content/uploads/2021/07/Apps-Script-min.png)



   <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>




<h2>Configuración principal</h2>

![Ajustes](https://definicion.de/wp-content/uploads/2016/11/configuracion.png)

<h2>1) Debes tener instalado nodejs</h2>
<h2>1) Crear la carpeta donde se alojara el proyecto. Es recomendable que el proyecto tenga una estructura basica</h2>

![Alt text](/src/img/README/root_proyect.png)


Instalar clasp en el proyecto

```
npm install @google/clasp -g
```
Iniciar sesión para darle permisos en appsscript a clasp

```
clasp login
```
Para que reconozca la sintaxis de appsscript
```
npm i -S @types/google-apps-script
```

Para subir los cambios locales al escritorio remoto tendremos dos opciones:

```
clasp push -w
```
Con la opción -w (o –watch) dejamos al cliente que escuche todos nuestros cambios en local para que cuando los guardemos en local se sincronice con lo que hay en remoto.

O sin monitoreo

```
clasp push
```