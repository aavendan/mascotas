var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let mascotasLista = [{
            nombre: "Hachiko",
            raza: "Akita inu",
            url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            descripcion: "Hachikō fue un perro japonés de raza akita, recordado por esperar a su amo, el profesor Hidesaburō Ueno, en la estación de Shibuya incluso varios años después de la muerte de este."
        },
        {
            nombre: "Mr. Tinkles",
            raza: "Persia",
            url: "https://akns-images.eonline.com/eol_images/Entire_Site/2015828/rs_600x337-150928133308-123533.jpg",
            descripcion: "Este gato persia emprende lo que quizás muchos gatos han pensado: una revolución en contra de los perros. Egoísta, cruel y despiadado, pero interesante y gracioso."
        },
        {
            nombre: "Flipper",
            raza: "Delfín",
            url: "https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2012/01/28/vye09we280112-photo01_456_336.jpg",
            descripcion: "Flipper es una de las series estadounidenses de televisión producida por Ivan Tors Films en asociación con Metro-Goldwyn-Mayer Television."
        }
    ];
    res.send(JSON.stringify(mascotasLista));
});

module.exports = router;