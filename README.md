# Proyecto inicial - Curso de RXJS

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podremos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack serve --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)

# Instrucciones RXJS
Estas son las instrucciones más usadas en RXJS

## Observables
* 01-Observables: Estructura de los observables
* 02-Unsuscribe y add: Estructura de suscriptores, agrupación de estos con add y des-suscripción
* 03-subject: Observable que permite la multidifusión de valores a muchos Observadores. El valor emitido es el mismo para todos los suscriptores. 
* 04-Of: Crea una secuencia de argumentos. Los arrays los devuelve en una sola iteración  
* 05-fromEvent: Crea un observable de un evento como el teclado o el ratón 
* 06-range: crea un observable de un rango de valores
* 07-interval/timer: crea un observable de un rango de tiempo emitiendo números. Timer emite en una fecha dada 
* 08-asyncScheduler:  Se utiliza para retrasar tareas en el tiempo o para programar tareas que se repiten en intervalos.
* 09-from-avanzado: parecido a Of convirtiendo un array, promesa (http://) o iterable en un observable pero en los array todos los valores son individuales 

## Operadores
* 01-map-pluck-mapto: Mapean resultados. Solo usar map, el resto están deprecados 
* 02-filter: permite filtrar mediante una comparación 
* 03-tap: para ejecutar algo y no interferir. Caso de console.log
* 04-scroll: Ejercicio para pintar barra de completado con el scroll de pantalla 
* 05-reduce: acumulador y valor actual. Emite la suma total 
* 06-scan: Parecido a reduce pero emitiendo en cada paso 
* 07-take: limita el numero de emisiones 
* 08-first: Indica cuando empieza emitir 
* 09-takeWhile: Emite mientras se cumple la condición 
* 10-takeUntil/skip: Emite hasta que se emita un observable. Skip salta un numero de valores, se podría usar filter 
* 11-distinct/distinctUntilChanged: distinct muestra los distintos. distinctUntilChanged omite si el anterior es el mismo. 
* 12-distinctUntilKeyChanged: Aplicado a arrays 

## Operadores de tiempo
* 01-debounceTime: Descartar los valores emitidos que toman menos del tiempo especificado entre la salida
* 02-throttleTime: Emite el primer valor y luego ignora durante la duración especificada
* 03-sampleTime: Emite el valor emitido más recientemente desde la fuente Observable dentro de intervalos de tiempo periódicos.
* 04-sample: Emite el valor emitido más recientemente desde el Observable de origen cada vez que otro Observable, el notificador, emite. Por ejemplo, cuando se hace click
* 05-auditTime: Ignorar por un tiempo determinado y luego emitir el valor más reciente. Similar a debounceTime pero no reinicia el contador 

## Ajax
* 01-Ajax-catchError: Llamada a una url y gestión del error
* 02-getJSON: Llamada a URL centrada en la respuesta
* 03-Diferencias entre AJAX y getJSON
* 04-Envíos GET, POST, PUT y DELETE en AJAX y getJSON

## Transformaciones / aplanamiento 
* 01-mergeAll: Recopila y suscribe a todos los observables. 
* 02-mergeMap: Recopila y suscribe a todos los observables. Se completa cuando todos los hijos se completen
* 03-switchMap: Recopila y suscribe a todos los observables. Solo mantiene un observable activo 
* 04-Diferencias 
* 05-concatMap: Concadena salidas, es necesario que los observables se completen ya que los valores se encolan 
* 06-exhaustMap: Ignora nuevas emisiones mientras haya suscripciones activas. No encola e ignora nuevas suscripciones mientras haya una activa 

## Combinaciones
* 01-starWith-endWith: se añaden valores al principio o al final
* 02-laboratorio starWith
* 03-concat: encadena observables, cuando termina uno empieza el otro 
* 04-merge: Emite los resultados según van llegando de los observables. El complete se lanza al finalizar todos 
* 05-combineLatest: Deprecado. Emite los resultados cuando lleguen los valores de todos los observables por lo menos una vez.
* 06-forkJoin: Deprecado. Al completarse los observables, emite los últimos valores 

## Ejercicios
* 01-capitalizar:  from, map 
* 02-filter y reduce: filter, from, reduce
* 03-random y sincronización: interval, Subject, take, map
* 04-cuenta atrás: interval, map, take
* 05-combinar-concadenar: interval, timer, combineLatest, map, take
* 06-starWars: ajax, switchMap, map, zip, of