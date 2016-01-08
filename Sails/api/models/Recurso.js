/**
* Recurso.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nombre : {
      type : 'String'
    },
    descripcion : {
      type : 'String'
    },
    tipo : {
      type : 'String' // Planta, Plántula, Vermicultivo, Compost
    },
    ubicacion : {
      type : 'String' // ¿Cómo es apropiado guardar un geo_point
    },
    sensores : {
      collection : 'Sensor', // Verificar si es correcta la association. Un recurso puede tener varios sensores que no son exclusivos de
      via : 'recursoId'
    },
    jardinID : {
      type : 'String' // String por ahora cambiar a la association adecuada
    },
    userId : {
      type : 'String' // String por ahora cambiar a la association adecuada
    },
    novedades : {
      collection: 'Novedad',
      via : 'recursoId'
    }
  }
};
