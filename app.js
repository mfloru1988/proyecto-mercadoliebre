const express = require('express')
const app = express()
const path = require('path');
   
app.use(express.static(path.resolve(__dirname, './public')));
// todo es publico pueden acceder sin problema
app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en puerto 3004");
});

app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});                           
 
app.get('/crearcuenta', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/crearcuenta.html'));
});                           
 
app.get('/ingresar', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/ingresar.html'));
});                           
 