# Algorithms and Data Structure

This repository contains algorithms and data structures implemented using JavaScript.<br />
This small project is part of a test for a frontend job opportunity at Lexart.

## FrontEnd Test - Algorithms. The test was comprised of three parts.
---
### TEST ONE
<summary><strong>
Create an algorithm that runs through a one-dimensional array containing letters and numbers:<br />
- Get an array containing just the letters<br />
- Get an array containing just the numbers<br />
- Get the highest number from the array above<br />
</strong><summary><br />

For this I defined a function named <i>`getInfoFromArray`</i>. It takes an array as an argument. The function creates two new arrays, lettersArray and numbersArray, and a variable called highestNumber initialized to 0. It then filters through the input array and adds any items that are numbers to the numbersArray, and any items that are strings to the lettersArray. Finally, it finds the highest number in numbersArray using the Math.max method and assigns it to highestNumber. The function then returns an object containing the lettersArray, numbersArray, and highestNumber.

---
### TEST TWO
<summary><strong>
Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.<br />
- Take into account that the division must not allow 0 dividend<br />
- The sum function allows an array as an input parameter and adds all its elements.<br />
- The subtraction function allows an array as an input parameter and subtracts all its elements.<br />
- Multiplication Function - Ditto<br />
- The division function accepts two parameters: a and b.<br />
</strong><summary><br />

For this one I defined 5 functions and 1 hashmap.
The 5 functions are:

- checkArrayInput

Function <i>`checkArrayInput`</i> takes an input array "arr" as an argument. It checks if the input array is an actual array and not empty. If the input is not an array, it will throw an error "Input must be an array". If the array is empty, it will throw an error "Input array must not be empty".

- sum

Function <i>`sum`</i> takes an input array "arr" as an argument. It uses the previously defined function "checkArrayInput" to ensure that the input array is not empty and is actually an array. It then uses the "reduce" function to sum all the elements in the input array and returns the total sum.

- subtraction

Function <i>`subtraction`</i> takes an input array "arr" as an argument. It uses the previously defined function "checkArrayInput" to ensure that the input array is not empty and is actually an array. It then subtracts all the elements in the input array starting from the second element and returns the final result.
To achieve this, it uses the "slice" function to create a copy of the input array, starting from the second element, and then uses the "reduce" function on this copy to subtract all the elements from the initial value of the first element of the original input array.

- multiplication

Function <i>`multiplication`</i> takes an input array "arr" as an argument. It uses the previously defined function "checkArrayInput" to ensure that the input array is not empty and is actually an array. It then multiplies all the elements in the input array and returns the final result.
To achieve this, it uses the "reduce" function on the input array and initializes the accumulator value as 1. The reduce function then iterates through each element of the array and multiplies it with the accumulator value. Finally, it returns the total product of all the elements in the array.

- division

Function called <i>`division`</i> takes two parameters: "a" and "b". If "b" is equal to 0, the function throws an error with the message "Dividend must not be 0". Otherwise, the function returns the result of "a" divided by "b".

- The hashmap was named <i>`elementaryFunctions`</i>:

It creates a new Map object. The Map has four key-value pairs, where each key is a string representing the name of a mathematical operation (<i>`sum`, `subtraction`, `multiplication`, `division`</i>), and each value is a reference to a function that performs the corresponding operation.
For example, the value of the 'sum' key is a reference to the function called 'sum', the value of the 'subtraction' key is a reference to the function called 'subtraction', and so on.
This Map can be used to easily access and call any of these four functions by simply referencing their corresponding key in the Map.

---
### TEST THREE
<summary><strong>
Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC<br />
- Where XXXX, AAAA, BBBB and CCCC patterns are random alphanumeric<br />
- The default is a string: "XXXX-AAAA-BBBB-CCCC"<br />
- The result must be stored in a variable. For example:<br />
* $id = generarId()<br />
* id is ~ abc1-bb12-234a-bcc2<br />
</strong><summary><br />


For this I defined two functions: <i>`getRandomChar`</i> and <i>`generateId`</i>.<br />
Function <i>`getRandomChar`</i> returns a random character from a string of alphanumeric characters. The function generates a random index within the string's length and returns the character at that index.
Function <i>`generateId`</i> generates a random string ID. The ID is composed of four segments, each with a predetermined pattern of characters. The patterns are defined in the patterns array. The function uses the map function to iterate over each pattern and generate a segment by calling a <i>`getRandomChar`</i> function for each character in the pattern. Finally, the function joins the segments using a hyphen - and returns the resulting string.

---

## Author
### Pedro Hasse Niemczewski
---

[Linkedin](https://www.linkedin.com/in/pedrohassen/)
---
[Github](https://github.com/pedrohassen)
---
