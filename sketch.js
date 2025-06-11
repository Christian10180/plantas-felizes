function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let angle = 0;  // Ângulo de movimento
let x, y;  // Posições do "agrinho"
let amplitude = 50;  // Amplitude do movimento
let velocidade = 0.05;  // Velocidade do movimento

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height - 50;
}

function draw() {
  background(135, 206, 250);  // Céu azul claro

  // Sol
  noStroke();
  fill(255, 223, 0);  // Cor do sol
  ellipse(300, 80, 100, 100);  // Desenha o sol no canto superior direito

  // Nuvem
  fill(255);  // Cor branca
  noStroke();
  ellipse(100, 100, 120, 60);  // Nuvem 1
  ellipse(140, 90, 120, 60);   // Nuvem 2
  ellipse(180, 100, 120, 60);  // Nuvem 3
  
  // Calculando o movimento oscilante
  let sway = sin(angle) * amplitude;

  // Corpo do "agrinho"
  stroke(0);
  strokeWeight(2);
  line(x, y, x + sway, y - 100);  // Corpo se movendo de acordo com o "sway"
  
  // Folhas
  fill(34, 139, 34);  // Cor das folhas (verde)
  noStroke();
  ellipse(x + sway - 20, y - 90, 40, 20);  // Folha esquerda
  ellipse(x + sway + 20, y - 90, 40, 20);  // Folha direita
  
  // Movimento suave
  angle += velocidade;
}
