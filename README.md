# ANALIZADOR DE TEXTO
---

## 1. Introducción

<p>El analizador de texto esta diseñado para ser una herramienta valiosa que extrae información significativa, facilitando la toma de decisiones basadas en el contenido. En este proyecto se muestran seis indicadores: palabras, caracteres, caracteres sin espacios, longitud promedio, números y suma de números; cuya funcionalidad se detalla más adelante.</p>

---

## 2. Funcionalidades

<p>Este analizador dispone de tres elementos principales:</p>

#### 2.1 Caja de Texto

<p>Conformado por un elemento textarea que permite escribir un texto.</p>

#### 2.2 Métricas

<p>Son los indicadores que proporcionan a la usuaria el resultado de la inspección cuidadosa del texto:</p>

* **Palabras:** muestra el total de palabras incluidas en el texto.
* **Caracteres:** refleja el recuento de todos los caracteres.
* **Caracteres sin espacios:** al contrario que la métrica anterior nos muestra la cantidad de caracteres excluyendo espacios y signos de puntuación.
* **Longitud promedio:** representa la media de palabras contenidas en el texto.
* **Números:** identifica la cantidad de números.
* **Suma de números:** representa la suma total de las cifras integradas en el texto.

#### 2.3 Botón

<p>Este elemento restablece las métricas a su estado original, permitiendo así la inclusión inmediata de otro texto.</p>

---

## 3. Instrucciones de Uso

* Diríjase a esta dirección en GitHub Pages donde se aloja este sitio:
* Una vez ahí seleccione la caja de texto y escriba el contenido que desee.
* Mientras realiza el paso anterior, visualizará la actualización de las métricas en tiempo real al lado izquierdo.
* Luego puede hacer uso del botón restaurar, para limpiar los indicadores.

---

## 4. Desarrollo 

<p>Este proyecto está desarrollado empleando HTML, CSS y JS.</p>

#### 4.1 HTML 
<p>Este analizador aplica HTML semántico, organizando el contenido en tres estructuras principales: header, main y footer.</p>

#### 4.2 CSS  
<p>En este proyecto se incorporó estilos con selectores de: tipo, clase, id y atributos. Además se tuvo en cuenta el modelo de cajas para su diseño.</p>

#### 4.3 JS   
<p>Se hizo uso de ES Modules, así como también se implementan 6 funciones que permiten la visualización de las métricas: </p>

* **getWordCount:** para calcular el recuento de palabras.
* **getCharacterCount:** para calcular el recuento de caracteres.
* **getCharacterCountExcludingSpaces:** para calcular el recuento de caracteres excluyendo espacios y signos de puntuación.
* **getAverageWordLength:** para calcular la longitud media de las palabras.
* **getNumbersCount:** para contar cúantos números hay en un texto.
* **getNumbersSum:** para la suma longitud media de los números.

<p>Este analizador también incluye manejo de eventos de DOM como "input" que actualiza las métricas cuando se escribe en el cuadro de texto, y el evento "click" para restaturar los indicadores.</p>
<p>Asi mismo se hace uso de selectores del DOM como querySelector y getElementById, se incluye la propiedad innerHTML para incorporar los datos ejecutados por los métodos sobre las métricas. </p>

---

## 5. Diseño

<p>Este proyecto se trabajo por hitos, cada hito incluyó el uso de HTML y JS, así como también CSS.</p>
<p>Se optó por un diseño básico y amigable para las usuarias, que destaca por su facilidad de uso y su enfoque minimalista.</p>
