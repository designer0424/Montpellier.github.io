/* ============================================================
   MONTPELLIER RESTOBAR — DATOS DEL MENÚ
   ============================================================

   CÓMO EDITAR:
   - Cada apartado tiene su lista de "items"
   - Por cada plato puedes cambiar:
       name:      Nombre del plato
       desc:      Descripción breve (1-2 líneas)
       price:     Precio  ej. "$45.000"
       tags:      Etiquetas: "Chef", "Popular", "Vegano"  (o [])
       allergens: Ingredientes alérgenos (o "Ninguno")
       img:       Ruta de la foto  ej. "img/nombre.jpg"
                  o URL externa    ej. "https://..."

   CÓMO AGREGAR UN PLATO:
   Copia uno de los bloques { } dentro de items y pégalo.

   CÓMO AGREGAR UN APARTADO EXTRA:
   Al final del archivo hay una sección "extra" desactivada.
   Descomenta el bloque y ponle nombre, platos, etc.
   ============================================================ */

const MENU_DATA = {

  /* ──────────────────────────────────────────
     1. para comenzar 
     ────────────────────────────────────────── */
  Bienvenidos: {
    title: "Para Comenzar",
    tagline: "Para comenzar el viaje",
    items: [
      {
        name: "La trilogia de Montpellier",//#1
        desc: " 3 Unidades de pan brioche mini rellenos de camarón y carne de jaiba en cremosa salsa bisque, terminados con queso mozzarella, alioli y cilantro fresco.",
        price: "$43.500",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Nachos de Carne y Jalapeños",//#1
        desc: "Totopos crocantes bañados en carne de res artesanal molida, queso mozzarella gratinado, jalapeños y cebollas encurtidas, acompañados de guacamole y suero costeño. ",
        price: "$38.500",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Empanaditas Pork Belly",//#1
        desc: "5 Crujientes empanadas rellenas de bondiola ahumada y queso mozzarella,acompañadas de salsa citrus y suero picante.",
        price: "$35.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Patacones Poseidon",//#1
        desc: "3 Unidades de Patacones crocantes coronados con mix de mariscos en salsa cóctel, terminados con langostinos salteados.",
        price: "$40.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Tostaditas Trufadas",//#1
        desc: "3 Tostadas de maíz crocantes con solomito trufado, terminadas con maicitos, queso parmesano y cebollin.",
        price: "$38.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      /* ← Para agregar más entradas, pega un bloque aquí antes del ] */
    ]
  }, 
     entradas: {
    title: "Entradas",
    tagline: "Para comenzar el viaje",
    items: [
      {
        name: "Nombre del plato",//#1
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1547592180-85f173990554"
      },
      {
        name: "Nombre del plato",//#2
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1608039755401-742074f0548d"
      },
      {
        name: "Nombre del plato",//#3
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        name: "Nombre del plato",//#4
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
      }
      /* ← Para agregar más entradas, pega un bloque aquí antes del ] */
    ]
  },

  /* ──────────────────────────────────────────
     2. PLATO FUERTE
     ────────────────────────────────────────── */
  plato_fuerte: {
    title: "Plato Fuerte",
    tagline: "El corazón de nuestra cocina",
    items: [
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Vegano"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1516684732162-798a0062be99"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1619895092538-128341789043"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1559847844-5315695dadae"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1559847844-5315695dadae"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1534080564583-6be75777b70a"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1558030006-450675393462"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1546793665-c74683f339c1"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468"
      },

      /* ← Para agregar más platos fuertes, pega un bloque aquí antes del ] */
    ]
  },

  /* ──────────────────────────────────────────
     3. POSTRES
     ────────────────────────────────────────── */
  postres: {
    title: "Postres",
    tagline: "El final perfecto",
    items: [
      {
        name: "Nombre del postre",
        desc: "Descripción breve del postre, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
      },
      {
        name: "Nombre del postre",
        desc: "Descripción breve del postre, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
      },
      {
        name: "Nombre del postre",
        desc: "Descripción breve del postre, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
      },
      {
        name: "Nombre del postre",
        desc: "Descripción breve del postre, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Vegano"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777"
      }
      /* ← Para agregar más postres, pega un bloque aquí antes del ] */
    ]
  },

  /* ──────────────────────────────────────────
     4. BEBIDAS
     ────────────────────────────────────────── */
  bebidas: {
    title: "Bebidas",
    tagline: "Para acompañar",
    items: [
      {
        name: "Nombre de la bebida",
        desc: "Descripción breve: tipo, origen o características principales.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
      },
      {
        name: "Nombre de la bebida",
        desc: "Descripción breve: tipo, origen o características principales.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1497534446932-c925b458314e"
      },
      {
        name: "Nombre de la bebida",
        desc: "Descripción breve: tipo, origen o características principales.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
      },
      {
        name: "Nombre de la bebida",
        desc: "Descripción breve: tipo, origen o características principales.",
        price: "$00.000",
        tags: [],
        allergens: "Sulfitos",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
      }
      /* ← Para agregar más bebidas, pega un bloque aquí antes del ] */
    ]
  },

  /* ──────────────────────────────────────────
     5. CÓCTELES
     ────────────────────────────────────────── */
  cocteles: {
    title: "Cócteles",
    tagline: "Mixología de autor",
    items: [
      {
        name: "Nombre del cóctel",
        desc: "Descripción breve: base alcohólica, notas de sabor y presentación.",
        price: "$00.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
      },
      {
        name: "Nombre del cóctel",
        desc: "Descripción breve: base alcohólica, notas de sabor y presentación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187"
      },
      {
        name: "Nombre del cóctel",
        desc: "Descripción breve: base alcohólica, notas de sabor y presentación.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
      },
      {
        name: "Nombre del cóctel",
        desc: "Descripción breve: base alcohólica, notas de sabor y presentación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1517620430776-0ec904756579"
      },
      {
        name: "Sin Alcohol",
        desc: "Opción sin alcohol. Describe los ingredientes y sabores principales.",
        price: "$00.000",
        tags: ["Vegano"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1517620430776-0ec904756579"
      }
      /* ← Para agregar más cócteles, pega un bloque aquí antes del ] */
    ]
  }

  /* ══════════════════════════════════════════════
     APARTADO EXTRA — DESCOMENTA PARA ACTIVARLO
     (quita los  /*  y  * /  de este bloque)
     ══════════════════════════════════════════════

  ,
  extra: {
    title: "Especiales",          ← Cambia el nombre del apartado
    tagline: "Solo por hoy",      ← Cambia el subtítulo
    items: [
      {
        name: "Nombre del plato",
        desc: "Descripción breve.",
        price: "$00.000",
        tags: ["Chef"],
        allergens: "Ninguno",
        img: "img/especial-1.jpg"
      }
    ]
  }

     ══════════════════════════════════════════════ */

};

/* ── LEYENDA DE ETIQUETAS ────────────────────────
   "Chef"    → Recomendación del chef
   "Popular" → Plato más pedido
   "Vegano"  → Opción vegetariana / vegana
   ─────────────────────────────────────────────── */
