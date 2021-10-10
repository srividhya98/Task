import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { hash } from 'rsvp';
import $ from 'jquery';
export default Route.extend({
    model(){
        return hash({
            welcome:true,
            getData:null
        });
    },
    setupController(controller,model) {
        controller.set('model', model);//No I18N
        controller.set('currentRoute', this);//No I18N
    },
    actions:{
        checkOutUser(){
            this.transitionTo('login');
        },
        getApiData(){
            let model=this.controller.get('model');
            const xhr = new XMLHttpRequest();
            xhr.open("GET","https://reqres.in/api/users", true);
            xhr.onload = function () {
                set(model,"welcome",false);
                if (this.status === 200) {
                    let obj = JSON.parse(this.responseText);
                   set(model,"getData",JSON.stringify(obj.data));
                }
                else {
                    set(model,"getData","data not found");
                }
               
            }
            xhr.send();

        },
        postUserData(){
            let model=this.controller.get('model');
            const data = {
                name:"morphus",
                job:"leader"
            };
            const xhr = new XMLHttpRequest();
            xhr.open("POST","https://reqres.in/api/users", true);
            xhr.onload = function () {
                if (this.status === 201) {
                   set(model,"welcome",true);
                   console.log("data posted succesfully");
                }
            }
            xhr.send(JSON.stringify(data));
        }
    }
});
