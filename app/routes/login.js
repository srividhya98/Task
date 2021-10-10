import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { set } from '@ember/object';
export default Route.extend({
    model(){
        return hash({
            emailId:"test@pqsi.in",
            password:"pqsi123",
            emailError:false,
            passwordError:false,
            errorMessage:""
        });
    },
    setupController(controller,model) {
        controller.set('model', model);//No I18N
        controller.set('currentRoute', this);//No I18N
    },
    actions:{
        checkUser(){
           let model=this.controller.get('model');
           /*let emailValue=document.getElementById("email").value;
           let passwordValue=document.getElementById("password").value;
           if(emailValue == ""){

           }if(passwordValue == ""){

           }
            if( ! value.emailId == emailValue){
                console.log("incoorect email");
            }
            if( ! value.password == passwordValue){
                console.log("incorrect pass");
            }
            if( value.emailId == emailValue && value.password == passwordValue){
                console.log("welcome");
                this.transitionTo('welcome');
            }*/
            let emailValue=document.getElementById("email").value;
           let passwordValue=document.getElementById("password").value;
            set(model,"passwordError",false);
            set(model,"emailError",false);
            if( ! model.password == passwordValue){
                set(model,"errorMessage","Incorrect Password");
                set(model,"passwordError",true);
             }
             if( ! model.emailId == emailValue){
                set(model,"errorMessage","Incorrect emailId");
                set(model,"emailError",true);
             }
            if(passwordValue == ""){
                set(model,"errorMessage","Password should not be empty");
                set(model,"passwordError",true);
            }
            if(emailValue == ""){
                set(model,"errorMessage","EmailId should not be empty");
                set(model,"emailError",true);
            }
            if(emailValue == "" && passwordValue == ""){
                set(model,"errorMessage","EmailId and Password should not be empty");
                set(model,"passwordError",true);
                set(model,"emailError",true);
            }
             if( model.emailId == emailValue && model.password == passwordValue){
                 this.transitionTo('welcome');
             }
        }
    }
});
