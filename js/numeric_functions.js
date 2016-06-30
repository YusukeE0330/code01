function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function mod(a, b){
  return a % b;
}

 function R(r){
   return 2 * r * Math.PI; 
 }

 function M(m){
   return r * r * Math.PI;
 }

 function N(n,o,p){
   var n_m = M(n);
   var o_m = M(o);
   var p_m = M(p);
   return Math.max(n_m,o_m,p_m);
 }