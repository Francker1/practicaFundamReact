# Práctica Fundamentos React

## Goal
Create list of advertisements

Esta práctica ha sido un reto, ya que ha supuesto cambiar viejos vicios a la hora de programar y poder aplicar nuevos paradigmas a la hora de crear una aplicación. Lo que más me ha costado ha sido organizar el proyecto de tal forma que pudiera ser lo más reutilizable posible, pero creo que hubiera podido hacerlo mejor, pero seguro es algo que alcanzaré con más experiencia creando proyectos con React. 

Otro "error" que no he podido solventar fue pintar los anuncios filtrados en la misma pantalla de **/ads**, y por ello tuve que solventarlo introduciendo una pantalla intermedia llamada **/filter**, por lo demás, creo o espero haber recogido la mayoría de las peticiones de la práctica, pero sobretodo me ha valido para aprender una nueva forma de hacer las cosas...y me encanta!

## Funcionamiento de la aplicación
El usuario aterriza en una pantalla raíz o home **"/"** y desde ella se puede elegir loguearse o registrarse. En caso de no estar logueado y querer ver los anuncios, el manejo de errores (que de momento es un alert) te redirige a login. 

Una vez está en **"/login"** si el usuario no está creado muestra otro alert, y te envía a **"/registro"** si todo es OK, en la respuest exitosa de la llamada a la API te redirige a **"/ads"**. 

En /ads podemos ver un listado de anuncios con sus datos como precio, imagen, etc. Si hacemos click en uno, vamos a **"/detail"**, pasando por parámentro de url el id del anuncio y haciendo la llamada a la API para obtener datos de ese anuncio. SI no estás logueado y quieres ver un anuncio escribiendo el ID en la url, te devuelve a /login.

En la pantalla de **"/ads"** también podemos filtrar y crear anuncio, para crear, es un filtro con los datos necesarios y un multiselect para los tags. 

En el caso del filtrado, como comentaba, para solventar un error, lo tuve que llevar a **"/filter"** y ahí construir la consulta, para poder hacer filtros combinados, esto me pareció un reto, al igual que para el select del precio, quise obtener todos los precios disponibles y crear un array con dos condiciones: que no haya precios repetidos, y que estén ordenados de menor a mayor. 

Disfrutad de KeepAds y sus cosas random!!!!!