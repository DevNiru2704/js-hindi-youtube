let form=document.querySelector("form")
// const height=parseInt(document.querySelector("#height").value) //This use case will give you empty value.
form.addEventListener("submit",function(event){
    event.preventDefault();

    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result= document.querySelector("#result")
    const bmiVerdict=document.querySelector("#bmi-verdict")
    if(height === '' || height < 0 || isNaN(height)||weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML="Please give a valid input!!"
        bmiVerdict.innerHTML="";
    }
    else{
        const bmi=((weight*10000)/(height*height)).toFixed(1)
        result.innerHTML=`BMI: ${bmi} kg/cm<sup>2</sup>`
        if (bmi <= 18.4) {
            bmiVerdict.innerHTML = "Underweight!!😕<br>Looks like you've been skipping meals! Time to hit the buffet and bulk up! 🍔🍕";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiVerdict.innerHTML = "Normal!!😊<br>Great job! You're in perfect shape! Keep up the healthy lifestyle! 🌟💪";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            bmiVerdict.innerHTML = "Overweight!!😨<br>Enjoying too many treats? Let's balance it out with some exercise! 🏃‍♂️🥗";
        } else {
            bmiVerdict.innerHTML = "Obese!!😱<br>Time to rethink those extra helpings. Let's get moving and stay fit! 🚴‍♀️💦";
        }
        
    }
        
})