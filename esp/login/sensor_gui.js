
//form
class Form{

   constructor(config){ 

      this.fields= config.fields 
   }
   getField (field){

      console.log('getField')
      var selector = this.fields[field]
      return $(selector).val()
      

   }
}
class Sensor_form extends Form{
   constructor(){
      var config= {
         fields: {
            nombre: '#nombre_sensor',
            tipo: '#tipo_sensor',
            modelo: '#modelo_sensor',
            pin: '#pin_sensor',
            modo: '#pin_mode'
         }
      }
      super(config);
      console.log('hola')

   }
}
var http_opts= {
   serverRoot: 'http://localhost:3000',
   apiRoot: '/api/sensors',

}
$(document).ready(() =>{

   var formulario_sensor = new Sensor_form()
   var http = new JQueryHttp(http_opts)

   $('.sensor_form_submit').on('click', (e) =>{
      console.log('clicke')

      var _form_data = {
         
         name : formulario_sensor.getField('nombre'),
         type: formulario_sensor.getField('tipo'),
         model: formulario_sensor.getField('modelo')
        /* formulario_sensor.getField('pin')
         formulario_sensor.getField('modo')*/
      }
      var http_request = {
         method: 'POST',
         data: form_data
      }

      http.request(http_request).then(response => console.log(response))

      e.preventDefault()
      var nombre = formulario_sensor.getField('nombre')
      console.log(nombre)

   })
});
