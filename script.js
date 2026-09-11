function calculateBMI(){
    let inputWeight=prompt("Enter your weight in kg")
    let inputHeight=prompt("Enter your height in cm")

    let weight=parseFloat(inputWeight);
    let heightcm=parseFloat(inputHeight);

    let height=heightcm / 100;
    let bmi= weight / (height * height)
    document.getElementById("result").innerHTML=`Your calculated BMI is ${bmi.toFixed(1)}`
}