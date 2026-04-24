//cinsiyetini,yaşını,boyunu,kilosunu giricek.CONST OLAN DEĞERLER VAR.sONRA GELEN BİKLGİLERLE BMR HESAPLANACAK,ve ekrana yazdırılacak. 
// Cinsiyet,Yaş,Boy,Kilo  10*kg+6.25xboy-5*yaş+5
document.getElementById("Calculate-button").onclick = function(){
    //let lbm = parseFloat(document.getElementById("lbm-input"));
    let weight = parseFloat(document.getElementById("weight-input").value);
    let height = parseFloat(document.getElementById("height-input").value);
    let weight_unit= document.getElementById("weight-unit").value;
    let height_unit=document.getElementById("height-unit").value;
    let gender = document.getElementById("gender").value;
    let age = parseInt(document.getElementById("age-input").value);
    if(weight_unit === "lb"){weight = weight * 0.45359237; }
    if (height_unit === "ft"){height = height * 30.48;}
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (gender == "male"){
        bmr = bmr + 5;
    }
    else if(gender == "female"){
        bmr = bmr - 161;
    }
document.getElementById("Resultinput").value = bmr.toFixed(2) + " kcal/day"
}










































/*let BMRCalculator = function(weight_kg,weight_lb,height_cm,height_ft,age){
if (sex == Male){
    if(weight == kilo){
        if (height == cm){return (10 * weight_kg + 6.25 * height_cm - 5 * age + 5);}
        else if (height == ft){return (10 * weight_kg + 190.5 * height_ft - 5 * age + 5);}}
    else if (weight == pounds){
        if (height == cm){return (4.536 * weight_lb + 6.25 * height_cm - 5 * age + 5);}
        else if (height == ft){return(4.536 * weight_lb + 190.5 * height_ft - 5 * age + 5);}
    }  
}
else if(sex == Female){
    if(weight == kilo){
        if(height == cm){return (10 * weight_kg + 6.25 * height_cm - 5 * age - 161);}
        if(height == ft){return(10 * weight_kg + 190.5*height_ft - 5 * age - 161);}}
    else if (weight == pounds){
        if(height == cm){return (4.536 * weight_lb + 6.25 * height_cm - 5 * age -161);}
        else if(height == ft){return(4.536 * weight_lb + 190.5 * height_ft - 5 * age -161 );}}
}}*/

