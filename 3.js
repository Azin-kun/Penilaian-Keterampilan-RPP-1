var nama = "Rhodey";
var Tbadan = 1.7;
var Bbadan = 90;

var BMI = Bbadan / Math.pow(Tbadan,2);

if (BMI >= 30.0){
    console.log(nama + " memiliki status BMI " + "kegemukan")
}else if(BMI <= 25.0 && BMI >= 29.9){
    console.log(nama + " memiliki status BMI " + "kelebihan berat badan")
}else if(BMI <= 24.9 && BMI >= 18.5){
    console.log(nama + " memiliki status BMI " + "normal(ideal)")
}else{
    console.log(nama + " memiliki status BMI " + "kekurangan berat badan")
}
