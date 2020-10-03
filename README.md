# Proyecto-1-Tooltip
Proyecto uno sobre el tooltip con javascript

Proyecto 1 de JavaScript sobre el Tooltip, Mayelin Vargas Leiva y Jeareth Venegas Arias.

Descripción general del javascript a implementar Función del Tooltip: Al posicionarse sobre un elemento (puede ser una imagen u otro elemento HTML), se muestra contenido asociado flotante junto al puntero. Mientras el puntero esté sobre el elemento, el contenido se muestra y cuando el puntero sale del elemento, el contenido asociado se oculta.

JavaScript

Inicializamos con querySelector para seleccionar el elemento especificado o imagen de la bandera y llame al tooltip por su id o clase.

Información sobre herramientas

Tooltip style En este ejemplo, la información sobre herramientas se coloca a la derecha ( left:) del texto "flotante" (

). Esto lo ocuparemos para tener un orden
También ocuparemos el top propiedad para asegurarse de que se mantenga en el medio la descripción del tooltip

Aquí con estos atributos podemos escoger en qué posición queremos que salga el mensaje para una mejor visión de la descripción del país y el usuario tenga un mejor entendimiento de la página

Se utilizarían dos function, el primero para establecer el tamaño del tooltip y en donde se va a posicionar. El segundo es para quitar el default del tooltip para que no aparezca.

Además se añadirán dos eventos de mouseenter y mouseleave que va permitir que, como se explicó anteriormente, el tooltip se muestre cuando el mouse se coloque sobre la imagen y luego se desaparece cuando el mouse se aleja de dicha imagen.