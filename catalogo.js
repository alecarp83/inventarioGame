import * as THREE from "three";

export const catalogo = [
  {
    id: "hacha",
    nombre: "Hacha",
    categoria: "Herramientas",
    color: "#eab77c",
    descripcion: "Mango de madera, agarre reforzado y una hoja de acero con filo biselado."
  },
  {
    id: "pico",
    nombre: "Pico",
    categoria: "Herramientas",
    color: "#8dc5eb",
    descripcion: "Cabeza metálica de doble punta y un mango robusto para aventuras mineras."
  },
  {
    id: "martillo",
    nombre: "Martillo",
    categoria: "Herramientas",
    color: "#b5bed2",
    descripcion: "Una herramienta de construcción con cabeza industrial y empuñadura estriada."
  },
  {
    id: "destornillador",
    nombre: "Destornillador",
    categoria: "Herramientas",
    color: "#ffb74a",
    descripcion: "Mango naranja de seguridad, anillos de goma y punta plana de acero."
  },
  {
    id: "bate",
    nombre: "Bate",
    categoria: "Armas",
    color: "#e6b980",
    descripcion: "Bate deportivo de madera facetada con una empuñadura oscura y cómoda."
  },
  {
    id: "cuchillo",
    nombre: "Cuchillo",
    categoria: "Armas",
    color: "#a4b9cb",
    descripcion: "Hoja plateada angular con un filo contrastado, guarda y mango remachado."
  },
  {
    id: "revolver",
    nombre: "Revolver",
    categoria: "Armas",
    color: "#b3a2ed",
    descripcion: "Accesorio ficticio low-poly con tambor, cañón corto y empuñadura de madera."
  },
  {
    id: "espada-cristal",
    nombre: "Espada de cristal",
    categoria: "Armas",
    color: "#73efff",
    descripcion: "Una hoja de cristal celeste, guarda dorada y una gema luminosa en la empuñadura."
  },
  {
    id: "baston-luz",
    nombre: "Bastón de luz",
    categoria: "Armas",
    color: "#c3a1ff",
    descripcion: "Bastón arcano con aros dorados y un cristal suspendido entre cuatro puntas."
  },
  {
    id: "manzana",
    nombre: "Manzana",
    categoria: "Alimentos",
    color: "#ff6975",
    descripcion: "Una manzana roja de superficies facetadas, tallo de madera y hoja verde."
  },
  {
    id: "frutilla",
    nombre: "Frutilla",
    categoria: "Alimentos",
    color: "#ff5269",
    descripcion: "Frutilla de forma cónica con pequeñas semillas doradas y una corona de hojas."
  },
  {
    id: "chocolate",
    nombre: "Chocolate",
    categoria: "Alimentos",
    color: "#ba87e8",
    descripcion: "Tableta de chocolate dividida en porciones, con envoltorio violeta y borde plateado."
  },
  {
    id: "hamburguesa",
    nombre: "Hamburguesa",
    categoria: "Alimentos",
    color: "#ffbd65",
    descripcion: "Pan con semillas, queso, tomate, lechuga y una hamburguesa en capas."
  },
  {
    id: "papas-fritas",
    nombre: "Papas fritas",
    categoria: "Alimentos",
    color: "#ffe17b",
    descripcion: "Papas doradas de distintos tamaños en un envase rojo con una estrella frontal."
  },
  {
    id: "llave-cofre",
    nombre: "Llave de cofre",
    categoria: "Objetos",
    color: "#ffda75",
    descripcion: "Llave dorada de fantasía con aro ornamental y una pequeña gema roja."
  },
  {
    id: "llave-puerta",
    nombre: "Llave de puerta",
    categoria: "Objetos",
    color: "#b9d9ec",
    descripcion: "Llave plateada con aro hexagonal, cuello azul y dientes cuadrados."
  },
  {
    id: "gema-blanca",
    nombre: "Gema blanca",
    categoria: "Objetos",
    color: "#edfaff",
    descripcion: "Cristal blanco de corte facetado con reflejos fríos y un soporte oscuro."
  },
  {
    id: "gema-roja",
    nombre: "Gema roja",
    categoria: "Objetos",
    color: "#ff526c",
    descripcion: "Cristal rubí con caras geométricas y un resplandor rojo en su interior."
  },
  {
    id: "gema-verde",
    nombre: "Gema verde",
    categoria: "Objetos",
    color: "#62f0ae",
    descripcion: "Cristal esmeralda de silueta angular con un brillo verde intenso."
  },
  {
    id: "gema-azul",
    nombre: "Gema azul",
    categoria: "Objetos",
    color: "#5bafff",
    descripcion: "Cristal zafiro con una punta alargada y reflejos azul eléctrico."
  },
  {
    id: "nota-blanca",
    nombre: "Nota blanca",
    categoria: "Notas",
    color: "#f2ecdc",
    descripcion: "Una nota de papel marfil con líneas grabadas, esquina doblada y sello gris."
  },
  {
    id: "nota-verde",
    nombre: "Nota verde",
    categoria: "Notas",
    color: "#88e4ad",
    descripcion: "Una nota verde menta con líneas oscuras y un sello esmeralda."
  },
  {
    id: "nota-azul",
    nombre: "Nota azul",
    categoria: "Notas",
    color: "#8dc5ff",
    descripcion: "Una nota celeste con esquina doblada y un sello de color azul profundo."
  },
  {
    id: "nota-dorada",
    nombre: "Nota dorada",
    categoria: "Notas",
    color: "#ffdc7c",
    descripcion: "Una nota especial de acabado dorado, con bordes decorativos y un sello rojo."
  }
];

// Colores y materiales compartidos por los diseños.
// Cada pieza recibe su propio material para simplificar su liberación.
const C = {
  wood: 0xa86c3b,
  woodLight: 0xdca165,
  dark: 0x283248,
  steel: 0x8dabc0,
  silver: 0xd3e6ee,
  gold: 0xf7c45e,
  red: 0xe74859,
  green: 0x49ae65
};

function material(color, metalness = 0, roughness = 0.55, emissive = 0) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    flatShading: true,
    emissive,
    emissiveIntensity: emissive ? 0.35 : 0
  });
}

function add(group, geometry, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.position.set(x, y, z);
  group.add(mesh);
  return mesh;
}

function box(group, w, h, d, color, x = 0, y = 0, z = 0, metal = 0) {
  return add(
    group,
    new THREE.BoxGeometry(w, h, d),
    material(color, metal),
    x, y, z
  );
}

function cylinder(
  group, top, bottom, height, color,
  x = 0, y = 0, z = 0, sides = 10, metal = 0
) {
  return add(
    group,
    new THREE.CylinderGeometry(top, bottom, height, sides),
    material(color, metal),
    x, y, z
  );
}

function sphere(group, radius, color, x = 0, y = 0, z = 0, detail = 1) {
  return add(
    group,
    new THREE.IcosahedronGeometry(radius, detail),
    material(color),
    x, y, z
  );
}

// Polígono extruido, centrado en su profundidad.
function polygon(group, points, depth, color, metal = 0, bevel = 0.025) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  points.slice(1).forEach(([x, y]) => shape.lineTo(x, y));
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelSegments: 1,
    steps: 1,
    bevelSize: bevel,
    bevelThickness: bevel,
    curveSegments: 1
  });

  geometry.translate(0, 0, -depth / 2);
  return add(group, geometry, material(color, metal));
}

function ring(group, radius, tube, color, x, y, z = 0, sides = 12) {
  return add(
    group,
    new THREE.TorusGeometry(radius, tube, 6, sides),
    material(color, 0.55, 0.3),
    x, y, z
  );
}

function crystal(group, radius, height, color, x = 0, y = 0, z = 0) {
  const points = [
    new THREE.Vector2(0, -height * 0.5),
    new THREE.Vector2(radius, -height * 0.16),
    new THREE.Vector2(radius * 0.83, height * 0.24),
    new THREE.Vector2(0, height * 0.5)
  ];

  return add(
    group,
    new THREE.LatheGeometry(points, 6),
    material(color, 0.28, 0.18, color),
    x, y, z
  );
}

function grip(group, y, length = 0.7, radius = 0.12, color = C.dark) {
  cylinder(group, radius, radius, length, color, 0, y);

  for (let i = 0; i < 6; i++) {
    cylinder(
      group,
      radius + 0.012,
      radius + 0.012,
      0.033,
      0x566078,
      0,
      y - length / 2 + 0.07 + i * (length - 0.14) / 5
    );
  }
}

function toolHandle(group) {
  cylinder(group, 0.085, 0.105, 1.9, C.wood, 0, -0.05);
  grip(group, -0.65, 0.58, 0.11);
  cylinder(group, 0.13, 0.13, 0.12, C.gold, 0, 0.63, 0, 10, 0.5);
}

function hacha(group) {
  toolHandle(group);

  polygon(group, [
    [-0.15, 0.91], [0.27, 1.03], [0.87, 0.93],
    [0.78, 0.30], [0.33, 0.40], [0.06, 0.64], [-0.15, 0.64]
  ], 0.23, C.steel, 0.6);

  polygon(group, [
    [0.71, 0.94], [0.87, 0.93],
    [0.78, 0.30], [0.62, 0.35]
  ], 0.26, C.silver, 0.75, 0.012);

  box(group, 0.3, 0.32, 0.31, C.dark, 0, 0.78, 0, 0.4);
}

function pico(group) {
  toolHandle(group);

  polygon(group, [
    [-1.02, 0.48], [-0.72, 0.91], [-0.24, 1.04],
    [0.22, 1.04], [0.72, 0.85], [1.02, 0.47],
    [0.60, 0.65], [0.18, 0.79], [-0.18, 0.79], [-0.60, 0.72]
  ], 0.19, C.steel, 0.65);

  box(group, 0.31, 0.34, 0.29, C.dark, 0, 0.89, 0, 0.4);
}

function martillo(group) {
  toolHandle(group);
  box(group, 0.94, 0.49, 0.48, C.steel, 0, 0.84, 0, 0.65);
  box(group, 0.15, 0.55, 0.54, C.silver, -0.49, 0.84, 0, 0.75);
  box(group, 0.15, 0.55, 0.54, C.silver, 0.49, 0.84, 0, 0.75);
  box(group, 0.23, 0.51, 0.50, C.dark, 0, 0.84);
}

function destornillador(group) {
  cylinder(group, 0.18, 0.23, 0.85, 0xf89b34, 0, -0.58, 0, 8);
  for (let i = 0; i < 4; i++) {
    cylinder(group, 0.225, 0.225, 0.06, C.dark, 0, -0.86 + i * 0.16, 0, 8);
  }
  cylinder(group, 0.14, 0.14, 0.13, C.dark, 0, -0.1);
  cylinder(group, 0.055, 0.055, 0.99, C.silver, 0, 0.45, 0, 8, 0.7);

  polygon(group, [
    [-0.055, 0.87], [0.055, 0.87],
    [0.1, 1.12], [-0.1, 1.12]
  ], 0.045, C.silver, 0.7, 0.008);
}

function bate(group) {
  const profile = [
    [0, -1.2], [0.13, -1.2], [0.13, -1.11],
    [0.075, -1.05], [0.075, -0.55], [0.13, -0.05],
    [0.23, 0.42], [0.24, 0.95], [0.18, 1.1], [0, 1.14]
  ].map(([x, y]) => new THREE.Vector2(x, y));

  add(group, new THREE.LatheGeometry(profile, 10), material(C.woodLight));
  grip(group, -0.82, 0.5, 0.084);
}

function cuchillo(group) {
  grip(group, -0.66, 0.78, 0.14);
  box(group, 0.5, 0.10, 0.28, C.steel, 0, -0.19, 0, 0.7);

  polygon(group, [
    [-0.16, -0.14], [0.16, -0.14], [0.16, 0.72],
    [0.03, 1.15], [-0.20, 0.67]
  ], 0.085, C.steel, 0.7);

  polygon(group, [
    [-0.16, -0.1], [-0.065, -0.1],
    [-0.065, 0.68], [0.03, 1.15], [-0.20, 0.67]
  ], 0.093, C.silver, 0.7, 0.004);

  [ -0.85, -0.48 ].forEach((y) => {
    sphere(group, 0.038, C.gold, 0, y, 0.14, 0);
  });
}

function revolver(group) {
  box(group, 0.8, 0.4, 0.34, C.dark, -0.08, 0.25, 0, 0.5);
  const barrel = cylinder(group, 0.13, 0.13, 0.96, C.steel, 0.67, 0.36, 0, 8, 0.7);
  barrel.rotation.z = Math.PI / 2;

  const muzzle = cylinder(group, 0.083, 0.083, 0.015, 0x151a26, 1.16, 0.36, 0, 8);
  muzzle.rotation.z = Math.PI / 2;

  const drum = cylinder(group, 0.27, 0.27, 0.47, C.steel, -0.08, 0.27, 0, 10, 0.7);
  drum.rotation.z = Math.PI / 2;

  for (let i = 0; i < 6; i++) {
    const angle = i * Math.PI / 3;
    const chamber = cylinder(
      group, 0.055, 0.055, 0.49, C.dark,
      -0.08,
      0.27 + Math.cos(angle) * 0.195,
      Math.sin(angle) * 0.195,
      6
    );
    chamber.rotation.z = Math.PI / 2;
  }

  const handle = box(group, 0.3, 0.71, 0.32, C.wood, -0.47, -0.32);
  handle.rotation.z = -0.23;
  sphere(group, 0.045, C.gold, -0.47, -0.30, 0.17, 0);

  const guard = ring(group, 0.21, 0.044, C.steel, -0.01, -0.13);
  guard.scale.y = 0.8;

  const trigger = box(group, 0.045, 0.18, 0.06, C.silver, -0.06, -0.08);
  trigger.rotation.z = -0.3;

  box(group, 0.08, 0.11, 0.08, C.dark, 0.98, 0.53);
  const hammer = box(group, 0.13, 0.20, 0.12, C.steel, -0.47, 0.49);
  hammer.rotation.z = -0.4;
}

function espada(group) {
  grip(group, -0.96, 0.53, 0.105);
  crystal(group, 0.13, 0.26, 0x55e6ff, 0, -1.30);
  box(group, 0.73, 0.12, 0.22, C.gold, 0, -0.61, 0, 0.65);

  [-1, 1].forEach((side) => {
    const tip = box(group, 0.13, 0.25, 0.22, C.gold, side * 0.34, -0.55);
    tip.rotation.z = side * -0.4;
  });

  polygon(group, [
    [-0.17, -0.54], [0.17, -0.54], [0.23, 0.89],
    [0, 1.40], [-0.23, 0.89]
  ], 0.10, 0x56cbe9, 0.3, 0.02);

  const ridge = polygon(group, [
    [0, -0.50], [0.17, 0.89], [0, 1.40], [-0.03, 0.82]
  ], 0.04, 0xc4faff, 0.2, 0.005);
  ridge.position.z = 0.085;

  crystal(group, 0.095, 0.22, 0x71f1ff, 0, -0.60, 0.17);
}

function baston(group) {
  cylinder(group, 0.065, 0.09, 2.08, 0x40365e, 0, -0.3);
  grip(group, -0.38, 0.6, 0.085);

  [-1.22, 0.38, 0.69].forEach((y) => {
    cylinder(group, 0.115, 0.115, 0.10, C.gold, 0, y, 0, 8, 0.6);
  });

  crystal(group, 0.28, 0.8, 0xb794ff, 0, 1.02);
  const halo = ring(group, 0.35, 0.038, C.gold, 0, 1.02);
  halo.rotation.x = Math.PI / 2;

  for (let i = 0; i < 4; i++) {
    const angle = i * Math.PI / 2;
    const point = cylinder(
      group, 0.018, 0.075, 0.44, C.gold,
      Math.cos(angle) * 0.28, 0.78, Math.sin(angle) * 0.28,
      6, 0.5
    );
    point.rotation.z = -Math.cos(angle) * 0.25;
    point.rotation.x = Math.sin(angle) * 0.25;
  }
}

function manzana(group) {
  const body = sphere(group, 0.75, 0xe84e59, 0, -0.08, 0, 2);
  body.scale.set(1, 0.9, 0.94);
  sphere(group, 0.27, 0xf45a62, -0.23, 0.42, 0, 1);
  sphere(group, 0.27, 0xdd3c4f, 0.23, 0.42, 0, 1);

  const stem = cylinder(group, 0.06, 0.075, 0.35, C.wood, 0.01, 0.73, 0, 7);
  stem.rotation.z = -0.17;

  const leaf = polygon(group, [
    [0, 0], [0.22, 0.24], [0.56, 0.17], [0.29, -0.015]
  ], 0.04, C.green);
  leaf.position.set(0.04, 0.75, 0);
  leaf.rotation.x = -0.35;
}

function frutilla(group) {
  const profile = [
    [0, -0.8], [0.19, -0.6], [0.42, -0.22],
    [0.60, 0.18], [0.57, 0.46], [0.36, 0.62], [0, 0.65]
  ].map(([x, y]) => new THREE.Vector2(x, y));

  add(group, new THREE.LatheGeometry(profile, 12), material(0xee4259));

  [
    { y: -0.40, radius: 0.315, count: 7 },
    { y: -0.07, radius: 0.492, count: 10 },
    { y: 0.27, radius: 0.59, count: 12 }
  ].forEach((row, r) => {
    for (let i = 0; i < row.count; i++) {
      const angle = i * Math.PI * 2 / row.count + r * 0.24;
      const seed = sphere(
        group, 0.035, 0xffdc83,
        Math.sin(angle) * row.radius, row.y,
        Math.cos(angle) * row.radius, 0
      );
      seed.scale.set(0.75, 1.6, 0.75);
    }
  });

  for (let i = 0; i < 6; i++) {
    const leaf = polygon(group, [
      [0, 0], [0.16, 0.23], [0, 0.53], [-0.16, 0.23]
    ], 0.025, i % 2 ? 0x48ab59 : 0x6bc866, 0, 0.008);
    leaf.rotation.x = -Math.PI / 2;
    leaf.rotation.z = i * Math.PI / 3;
    leaf.position.y = 0.61;
  }

  cylinder(group, 0.05, 0.065, 0.23, C.green, 0, 0.73, 0, 6);
}

function chocolate(group) {
  box(group, 1.05, 1.65, 0.18, 0x47251f);

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      box(
        group, 0.29, 0.32, 0.10,
        row % 2 ? 0x75432f : 0x683925,
        -0.34 + col * 0.34, -0.60 + row * 0.40, 0.13
      );
    }
  }

  box(group, 1.10, 0.68, 0.32, 0x8052b9, 0, -0.51, 0.04);
  box(group, 1.12, 0.12, 0.34, C.silver, 0, -0.13, 0.04, 0.7);
  box(group, 0.67, 0.07, 0.015, 0xd9bdf9, 0, -0.49, 0.21);
  box(group, 0.39, 0.045, 0.015, 0xd9bdf9, 0, -0.62, 0.21);
}

function hamburguesa(group) {
  cylinder(group, 0.68, 0.57, 0.23, 0xd98c3f, 0, -0.46, 0, 14);
  cylinder(group, 0.67, 0.67, 0.19, 0x653522, 0, -0.24, 0, 12);

  const cheese = box(group, 1.19, 0.065, 1.18, 0xffd355, 0, -0.10);
  cheese.rotation.y = 0.18;

  cylinder(group, 0.64, 0.64, 0.11, 0xe94b42, 0, 0.015, 0, 14);
  cylinder(group, 0.66, 0.66, 0.065, 0x6bc951, 0, 0.105, 0, 12);

  for (let i = 0; i < 9; i++) {
    const angle = i * Math.PI * 2 / 9;
    const leaf = sphere(
      group, 0.19, i % 2 ? 0x59b947 : 0x8bda57,
      Math.cos(angle) * 0.54, 0.10, Math.sin(angle) * 0.54, 0
    );
    leaf.scale.y = 0.25;
  }

  const dome = new THREE.SphereGeometry(
    0.69, 16, 6, 0, Math.PI * 2, 0, Math.PI / 2
  );
  const top = add(group, dome, material(0xf0b45f), 0, 0.19);
  top.scale.y = 0.66;
  cylinder(group, 0.69, 0.69, 0.08, 0xe9a350, 0, 0.17, 0, 16);

  for (let i = 0; i < 18; i++) {
    const angle = i * 2.39996;
    const radius = Math.sqrt((i + 0.5) / 18) * 0.59;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = 0.19 + Math.sqrt(0.69 ** 2 - radius ** 2) * 0.66;
    const seed = sphere(group, 0.034, 0xffedb3, x, y + 0.012, z, 0);
    seed.scale.set(0.65, 0.45, 1.7);
    seed.rotation.y = angle;
  }
}

function papas(group) {
  // Envase abierto: frente, fondo, laterales y base.
  const outline = [
    [-0.42, -0.85], [0.42, -0.85],
    [0.58, 0.12], [-0.58, 0.12]
  ];

  const front = polygon(group, outline, 0.06, 0xe64e57);
  front.position.z = 0.29;
  const back = polygon(group, outline, 0.06, 0xb93245);
  back.position.z = -0.29;

  [-1, 1].forEach((side) => {
    const wall = box(group, 0.06, 0.97, 0.58, 0xc83d4d, side * 0.50, -0.36);
    wall.rotation.z = -side * 0.16;
  });
  box(group, 0.83, 0.06, 0.58, 0xc83d4d, 0, -0.85);

  for (let i = 0; i < 11; i++) {
    const x = (i % 4 - 1.5) * 0.22;
    const z = (Math.floor(i / 4) - 1) * 0.18;
    const height = 0.85 + ((i * 7) % 5) * 0.105;
    const fry = box(
      group, 0.155, height, 0.155,
      i % 2 ? 0xffd36b : 0xf5b847,
      x, -0.20 + height / 2, z
    );
    fry.rotation.z = (i % 3 - 1) * 0.11;
    fry.rotation.x = (i % 2 ? 1 : -1) * 0.07;
  }

  const points = [];
  for (let i = 0; i < 10; i++) {
    const angle = Math.PI / 2 + i * Math.PI / 5;
    const radius = i % 2 ? 0.10 : 0.21;
    points.push([Math.cos(angle) * radius, Math.sin(angle) * radius]);
  }

  const star = polygon(group, points, 0.018, 0xffe28a, 0, 0.005);
  star.position.set(0, -0.39, 0.34);
}

function llave(group, cofre) {
  const color = cofre ? C.gold : C.silver;
  ring(group, 0.34, 0.09, color, 0, 0.67, 0, cofre ? 12 : 6);
  box(group, 0.14, 1.11, 0.13, color, 0, -0.09, 0, 0.65);
  box(group, 0.27, 0.13, 0.20, cofre ? C.gold : 0x598bc9, 0, 0.24);

  box(group, 0.43, 0.14, 0.14, color, 0.14, -0.66, 0, 0.6);
  box(group, 0.13, 0.27, 0.14, color, 0.30, -0.59, 0, 0.6);
  box(group, 0.12, 0.20, 0.14, color, 0.12, -0.63, 0, 0.6);

  if (cofre) {
    crystal(group, 0.125, 0.25, 0xf05c6b, 0, 0.67, 0.035);
    box(group, 0.29, 0.06, 0.10, C.gold, 0, 0.67, -0.06);
  }
}

function gema(group, color) {
  cylinder(group, 0.45, 0.53, 0.14, C.dark, 0, -0.82, 0, 8, 0.35);
  cylinder(group, 0.44, 0.44, 0.055, C.gold, 0, -0.73, 0, 8, 0.6);
  crystal(group, 0.53, 1.55, color, 0, 0.08);

  for (let i = 0; i < 3; i++) {
    const angle = i * Math.PI * 2 / 3;
    crystal(
      group, 0.07, 0.22, color,
      Math.cos(angle) * 0.72,
      -0.1 + i * 0.28,
      Math.sin(angle) * 0.50
    );
  }
}

function nota(group, color, seal, golden = false) {
  polygon(group, [
    [-0.61, -0.81], [0.61, -0.81], [0.61, 0.52],
    [0.34, 0.81], [-0.61, 0.81]
  ], 0.055, color, golden ? 0.35 : 0, 0.01);

  const fold = polygon(group, [
    [0.34, 0.52], [0.61, 0.52], [0.34, 0.81]
  ], 0.04, golden ? 0xffefb0 : 0xf0f6ed, 0, 0.005);
  fold.position.z = 0.048;

  const lineColor = golden ? 0xa77a30 : 0x536877;
  [0.43, 0.24, 0.05, -0.14].forEach((y, i) => {
    box(
      group, i === 3 ? 0.47 : 0.78, 0.036, 0.014,
      lineColor, i === 3 ? -0.12 : 0, y, 0.047
    );
  });

  const stamp = cylinder(group, 0.17, 0.17, 0.045, seal, 0.29, -0.48, 0.07, 10);
  stamp.rotation.x = Math.PI / 2;

  const inset = ring(group, 0.10, 0.012, golden ? C.gold : color, 0.29, -0.48, 0.10);
  inset.material.metalness = golden ? 0.65 : 0;

  if (golden) {
    [-0.55, 0.55].forEach((x) => {
      box(group, 0.018, 1.17, 0.016, C.gold, x, -0.11, 0.05, 0.65);
    });
    box(group, 1.08, 0.018, 0.016, C.gold, 0, -0.74, 0.05, 0.65);
  }

  group.rotation.y = -0.15;
}

const builders = {
  hacha,
  pico,
  martillo,
  destornillador,
  bate,
  cuchillo,
  revolver,
  "espada-cristal": espada,
  "baston-luz": baston,
  manzana,
  frutilla,
  chocolate,
  hamburguesa,
  "papas-fritas": papas,
  "llave-cofre": (group) => llave(group, true),
  "llave-puerta": (group) => llave(group, false),
  "gema-blanca": (group) => gema(group, 0xdff6ff),
  "gema-roja": (group) => gema(group, 0xf34868),
  "gema-verde": (group) => gema(group, 0x39df99),
  "gema-azul": (group) => gema(group, 0x459dff),
  "nota-blanca": (group) => nota(group, 0xeee6d3, 0x81909b),
  "nota-verde": (group) => nota(group, 0x9cdeb3, 0x2a9762),
  "nota-azul": (group) => nota(group, 0x9fc8ef, 0x3977be),
  "nota-dorada": (group) => nota(group, 0xf6d477, 0xb84750, true)
};

export function crearObjeto(id) {
  const builder = builders[id];
  if (!builder) throw new Error(`Objeto desconocido: ${id}`);

  const model = new THREE.Group();
  model.name = id;
  builder(model);
  model.updateMatrixWorld(true);

  // Centrado y escala uniforme para todas las miniaturas y el visor.
  const bounds = new THREE.Box3().setFromObject(model);
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  const scale = 2.45 / Math.max(size.x, size.y, size.z);

  const wrapper = new THREE.Group();
  model.position.sub(center);
  wrapper.add(model);
  wrapper.scale.setScalar(scale);
  return wrapper;
}
