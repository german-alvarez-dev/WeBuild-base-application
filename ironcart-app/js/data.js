// Array para almacenar los alimentos seleccionados
let buyingFoodsArray = []

// Array con el total de alimentos disponibles
let availableFoodsArray = [
    {
        id: '0001AL',
        name: 'Espárragos',
        description: 'Manojo de 10 unidades. Variedad de tronco ancho, origen Perú.',
        img: 'img/esparragos.jpg',
        price: 2.25,
        kcal: 139,
        protein: 5,
        fat: 12,
        carbs: 3,
        origin: ['united states', 'italy', 'united kingdom', 'france', 'italy']
    }, {
        id: '0002AL',
        name: 'Lechuga romana',
        description: 'Variedad de tronco ancho, alargado y erguido. Precio unitario, peso aproximado 250 gramos. Embalaje plástico.',
        img: 'img/lechuga.jpg',
        price: 3.15,
        kcal: 13,
        protein: 1,
        fat: 00000,
        carbs: 2,
        origin: ['china', 'japan', 'united states', 'italy', 'india']
    }, {
        id: '0003AL',
        name: 'Tomate rama',
        description: 'Rama entera original. Variedad de tomate ensalada en rama, peso aproximado 200 gramos. Origen España.',
        img: 'img/tomate.jpg',
        price: 2,
        kcal: 18,
        protein: 00000,
        fat: 00000,
        carbs: 3,
        origin: ['china', 'united states', 'turkey', 'egypt']
    }, {
        id: '0005AL',
        name: 'Aguacate',
        description: 'Variedad grande de semilla ancha. Precio por kilogramo, variable a lo largo del año.',
        img: 'img/aguacate.jpg',
        price: 5.75,
        kcal: 160,
        protein: 2,
        fat: 14,
        carbs: 8,
        origin: ['mexico', 'peru', 'colombia', 'chile', 'kenya']
    }, {
        id: '0006AL',
        name: 'Berenjena',
        description: 'Precio unitario, peso unitario aproximado 100 / 200 gramos. Variedad de origen francés.',
        img: 'img/berenjena.jpg',
        price: 3.2,
        kcal: 25,
        protein: 0,
        fat: 0,
        carbs: 5,
        origin: ['spain', 'china', 'mexico', 'japan']
    }, {
        id: '0007AL',
        name: 'Cebolla',
        description: 'Bolsa de 4 unidades, variedad española. Precio por bolsa, peso aproximado 350 / 400 gramos.',
        img: 'img/cebolla.jpg',
        price: 2.25,
        kcal: 40,
        protein: 1,
        fat: 0,
        carbs: 9,
        origin: ['china', 'india', 'united states', 'iran', 'russia', 'pakistan']
    }, {
        id: '0008AL',
        name: 'Champiñón',
        description: 'Paquete de 100 gramos, variedad grande sin laminar de tronco cortado. No lavados. Origen España.',
        img: 'img/champinon.jpg',
        price: 2.1,
        kcal: 22,
        protein: 3,
        fat: 0,
        carbs: 3,
        origin: ['france', 'china', 'spain', 'united states', 'poland', 'canada']
    }, {
        id: '0009AL',
        name: 'Espinaca',
        description: 'Manojo de 150 gramos. Variedad alta de tronco estrecho, origen España.',
        img: 'img/espinaca.jpg',
        price: 1,
        kcal: 23,
        protein: 2,
        fat: 0,
        carbs: 3,
        origin: ['china', 'japan', 'united states', 'turkey', 'france']
    }, {
        id: '0010AL',
        name: 'Pepino',
        description: 'Precio unitario, peso unitario aproximado 100 / 200 gramos. Variedad de origen francés.',
        img: 'img/pepino.jpg',
        price: 1.15,
        kcal: 15,
        protein: 0,
        fat: 0,
        carbs: 3,
        origin: ['china', 'iran', 'spain', 'japan', 'russia']
    }, {
        id: '0011AL',
        name: 'Sandía',
        description: 'Sin pepitas, precio por 100 gramos. Peso unitario aproximado 600 / 800 gramos. Origen España.',
        img: 'img/sandia.jpg',
        price: 3.2,
        kcal: 30,
        protein: 0,
        fat: 0,
        carbs: 7,
        origin: ['china', 'iran', 'united states', 'spain', 'japan', 'russia']
    }
]