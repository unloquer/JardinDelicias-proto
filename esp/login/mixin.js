


/* variable para heredar de una clase base a
 * sus hijos, en nuestro caso la clase Form*/
var class_add = (baseClass, ...mixins) => {
   let base = class _Combined extends baseClass{
      constructor (...args){
         super(...args)
         mixins.forEach((mixin) => {
            mixin.prototype.initializer.call(this);
         })
      }

   }
   let copyProps =(target, source) => {

      Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach((prop) => {

         if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
            return
         Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source,prop))
      })
   }
   mixins.forEach((mixin) => {
      copyProps(base.prototype, mixins.prototype)
      copyProps(base,mixin)
   })
   return base
}

//form
class Form{
   constructor(config){
      this.fields= config
   }
   get_field('field'){

      return $(fields['field']).val()

   }
}
class Sensor {
   initializer(){
      
   }
   get formType (){
      console.log("Im a Sensor Form")
   }
}
class AddSensorForm extends class_add(Form, Sensor)
var config = {
   nombre: 'Miguel';
   tipo: '';
   modelo: '';
}
var sensor_form = new AddSensorForm(config)

console.log(sensor_form.get_field('nombre'), sensor_form.formType)
