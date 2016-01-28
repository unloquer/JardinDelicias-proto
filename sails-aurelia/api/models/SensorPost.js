/**
* SensorPost.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    sensorId : {
      type : 'String' // String por ahora cambiar a la association adecuada
    },
    valor : {
      type : 'Float'
    },
    fecha : {
      type : 'datetime'
    }
  }
};
