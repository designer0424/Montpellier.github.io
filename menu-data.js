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
     1. ENTRADAS
     ────────────────────────────────────────── */
  entradas: {
    title: "Entradas",
    tagline: "Para comenzar el viaje",
    items: [
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "img/entrada-1.jpg"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "img/entrada-2.jpg"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef"],
        allergens: "Ninguno",
        img: "img/entrada-3.jpg"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "img/entrada-4.jpg"
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
        img: "img/fuerte-1.jpg"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "img/fuerte-2.jpg"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "img/fuerte-3.jpg"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "img/fuerte-4.jpg"
      },
      {
        name: "Nombre del plato",
        desc: "Descripción breve del plato, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Vegano"],
        allergens: "Ninguno",
        img: "img/fuerte-5.jpg"
      }
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
        img: "img/postre-1.jpg"
      },
      {
        name: "Nombre del postre",
        desc: "Descripción breve del postre, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "img/postre-2.jpg"
      },
      {
        name: "Nombre del postre",
        desc: "Descripción breve del postre, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Chef"],
        allergens: "Ninguno",
        img: "img/postre-3.jpg"
      },
      {
        name: "Nombre del postre",
        desc: "Descripción breve del postre, ingredientes principales y forma de preparación.",
        price: "$00.000",
        tags: ["Vegano"],
        allergens: "Ninguno",
        img: "img/postre-4.jpg"
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
        img: "img/bebida-1.jpg"
      },
      {
        name: "Nombre de la bebida",
        desc: "Descripción breve: tipo, origen o características principales.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "img/bebida-2.jpg"
      },
      {
        name: "Nombre de la bebida",
        desc: "Descripción breve: tipo, origen o características principales.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "img/bebida-3.jpg"
      },
      {
        name: "Nombre de la bebida",
        desc: "Descripción breve: tipo, origen o características principales.",
        price: "$00.000",
        tags: [],
        allergens: "Sulfitos",
        img: "img/bebida-4.jpg"
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
        img: "img/coctel-1.jpg"
      },
      {
        name: "Nombre del cóctel",
        desc: "Descripción breve: base alcohólica, notas de sabor y presentación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "img/coctel-2.jpg"
      },
      {
        name: "Nombre del cóctel",
        desc: "Descripción breve: base alcohólica, notas de sabor y presentación.",
        price: "$00.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "img/coctel-3.jpg"
      },
      {
        name: "Nombre del cóctel",
        desc: "Descripción breve: base alcohólica, notas de sabor y presentación.",
        price: "$00.000",
        tags: [],
        allergens: "Ninguno",
        img: "img/coctel-4.jpg"
      },
      {
        name: "Sin Alcohol",
        desc: "Opción sin alcohol. Describe los ingredientes y sabores principales.",
        price: "$00.000",
        tags: ["Vegano"],
        allergens: "Ninguno",
        img: "img/coctel-5.jpg"
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
