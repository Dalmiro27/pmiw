//Castellano Dalmiro
// Legajo: 118991/8
//Tp1 Comision 1
// Video explicación del código: https://www.youtube.com/watch?v=17UpCx8EaYM
let imagen; // Obra original elegida
let tamanoCuadricula = 8; // Tamaño de la cuadrícula
let fondo = 255; // Color de fondo

function preload() {
  imagen = loadImage('F_34.jpg');
}

function setup() {
  createCanvas(800, 400); // Tamaño del lienzo
  imagen.resize(400, 400); // Redimensionar la imagen a 400x400
  background(fondo); // Fondo inicial
}

function draw() {
  background(fondo);
  if (imagen) {
    image(imagen, 0, 0); // Dibujar la obra original a la izquierda
  }
  dibujarCuadrado(400, 0); // Dibujar el patrón generado a la derecha
}

function mousePressed() {
  fondo = color(random(255), random(255), random(255)); // Cambiar el fondo a un color aleatorio al hacer clic
}

function dibujarCuadrado(desplazamientoX, desplazamientoY) {
  let tamanoCelda = 400.0 / tamanoCuadricula; // Tamaño de cada celda en la cuadrícula
  stroke(50); // Color de las líneas 
  strokeWeight(4); // Grosor de las líneas

  for (let i = 0; i < tamanoCuadricula; i++) {
    for (let j = 0; j < tamanoCuadricula; j++) {
      let x = desplazamientoX + i * tamanoCelda;
      let y = desplazamientoY + j * tamanoCelda;
      dibujarLineas(x, y, tamanoCelda / 2);
    }
  }
}

function dibujarLineas(x, y, radio) {
  // Líneas horizontales y verticales
  line(x - radio, y, x + radio, y);
  line(x, y - radio, x, y + radio);

  // Dibujar líneas diagonales
  line(x - radio, y - radio, x + radio, y + radio);
  line(x - radio, y + radio, x + radio, y - radio);

  // Círculos negros en las intersecciones
  if (mouseIsPressed && dist(mouseX, mouseY, x, y) < 10) {
    fill(0); // Relleno negro
  } else {
    fill(255); // Sin relleno
  }
  ellipse(x, y, 5, 5); // Círculo en el centro
}

function keyPressed() {
  if (key === 'k' || key === 'K') {
    reiniciarPatron();
  }
}

function reiniciarPatron() {
  fondo = 255; // Reiniciar el color de fondo a blanco
  redraw(); // Volver a dibujar el patrón
}
