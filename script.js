// Petal Class
class Petal {
  constructor(container) {
    this.container = container;
    this.element = this.createElement();
    this.animate();
  }

  createElement() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Randomize size
    const size = Math.random() * 12 + 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // Random starting position
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = `-10vh`;
    
    // Random drift and rotation
    const driftX = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 720 - 360;
    petal.style.setProperty('--drift-x', `${driftX}px`);
    petal.style.setProperty('--rotation', `${rotation}deg`);
    
    // Random animation duration and delay
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    petal.style.animation = `float-petal ${duration}s linear ${delay}s infinite`;
    
    this.container.appendChild(petal);
    return petal;
  }

  animate() {
    // Animation is handled by CSS
  }

  remove() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

// Petal Manager
class PetalManager {
  constructor(containerId, petalCount = 12) {
    this.container = document.getElementById(containerId);
    this.petalCount = petalCount;
    this.petals = [];
    this.init();
  }

  init() {
    for (let i = 0; i < this.petalCount; i++) {
      this.petals.push(new Petal(this.container));
    }
  }

  addPetal() {
    this.petals.push(new Petal(this.container));
  }

  clear() {
    this.petals.forEach(petal => petal.remove());
    this.petals = [];
  }
}

window.onload = () => {
  // 移除container类以启动动画
  const container = document.querySelector('.container');
  if (container) {
    container.classList.remove("container");
  }

  // Initialize floating petals
  const petalManager = new PetalManager('petals-container', 12);
};
