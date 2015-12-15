/**
* Novedad.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    fecha : {
      type : 'datetime'
    },
    recursoId : {
      type : 'String' // String por ahora cambiar a la association adecuada
    },
    comentario : {
      type : 'String'
    }
  }
};
