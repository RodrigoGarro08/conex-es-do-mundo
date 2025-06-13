let confetes = [];

function setup() {
  createCanvas(800, 400);
  frameRate(60);
}

function draw() {
  background(135, 206, 235); // Céu azul claro

  // Campo (lado esquerdo)
  fill(85, 180, 90); // Verde
  rect(0, height / 2, width / 2, height / 2);
  drawArvores();

  // Cidade (lado direito)
  fill(180); // Cinza para prédios
  rect(width / 2, height / 2, width / 2, height / 2);
  drawPredios();

  // Estrada/ponte conectando
  fill(60);
  rect(width / 2 - 20, height / 2, 40, height / 2);

  // Mensagem
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("🎉 Celebrando a conexão do Campo com a Cidade 🎉", width / 2, 40);

  // Confetes festivos
  for (let i = confetes.length - 1; i >= 0; i--) {
    confetes[i].update();
    confetes[i].show();
    if (confetes[i].offScreen()) {
      confetes.splice(i, 1);
    }
  }

  if (frameCount % 5 === 0) {
    confetes.push(new Confete(random(width), 0));
  }
}

// --- Desenho de árvores no campo ---
function drawArvores() {
  for (let i = 50; i < width / 2; i += 100) {
    fill(101, 67, 33);
    rect(i, height - 80, 10, 30); // tronco
    fill(34, 139, 34);
    ellipse(i + 5, height - 90, 40, 40); // copa
  }
}

// --- Desenho de prédios na cidade ---
function drawPredios() {
  for (let i = width / 2 + 20; i < width; i += 60) {
    fill(100);
    let h = random(100, 180);
    rect(i, height - h, 40, h);
  }
}

// --- Classe de confete ---
class Confete {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(5, 10);
    this.color = color(random(255), random(255), random(255));
    this.speed = random(2, 5);
  }

  update() {
    this.y += this.speed;
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  offScreen() {
    return this.y > height;
  }
}
