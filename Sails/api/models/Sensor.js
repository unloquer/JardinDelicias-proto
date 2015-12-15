/**
* Sensor.js
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
    ubicacion : {
      type : 'String' // ¿Cómo es apropiado guardar un geo_point
    },
    tipo : {
      type : 'String' // Temperatura, Humedad, Ph, etcétera
    },
    valorMax : {
      type : 'Float'
    },
    valorMin : {
      type : 'Float'
    }
  }
};
