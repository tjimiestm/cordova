/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*Definimos una variable JSON*/
/*Lenguaje prototipado: directamente se define el objeto y lo utiliza, es decir,
no define una clase primero y depues lo instancia. M´as r´apido as´i*/
var app = {
    // Application Constructor
    initialize: function() {
        console.log("Inicializando app");
        document.addEventListener('deviceready', this.onDeviceReady, false);
        console.log("App incializada");
       
    },
    
    onDeviceReady: function() {
        console.log("El dispositivo ya esta listo");
         $("#btnfoto").click(function(event){
           
           navigator.camera.getPicture(cameraSuccess, cameraError, {});
           
          /* alert("Ahora haria una foto");*/
    });
 }
};

app.initialize();
function cameraSuccess() {
    alert("La camara ha funcionado bien");
}
function cameraError() {
    alert("Ha habido un errror");
}