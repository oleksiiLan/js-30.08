let message = 'Hello JavaScript';
alert(message);
message = 'Nice to see you';
alert(message);

const userAge = parseInt(prompt('Enter your age'));//+сконвертуе в число
alert('Your age is '+user);

const nextAge = userAge + 1;
alert('Your next age '+nextAge);


//string
//number
//boolean
//undefined- нема.
//null - немає але могло бути
//object -комплексний тип
//symbol -генеруе середовще(ключ)


if (userAge >=18 && userAge < 65) {//()-умова
   alert('You adult');
} else if (userAge >=65);{
    alert('You are retired');
} else {
    alert('You are kid');
}
 function addOne(value){
     const newValue = value + 1;
     return newValue;
 }

