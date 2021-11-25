# Text-encryption-and-decryption
A little project made from scratch for practice.

For the first time created my own HTML, CSS and JavaScript code. The button styles were taken from an existing code, as I did not want to spend too much time
stylizing the buttons.

The project it self is pretty straight forward. In the input field you input the text that you either wish to encrypt or decrypt, and after clicking the 
appropriate button the encyption/decryption takes place. If you look into the JavaScript code you will see 2 functions. They pretty much do the same thing
except in reverse order. We have 2 strings, "input" is the normal alphabet with some symbols in order, and the second string "crypt" is a string with the
same characters but with a shuffled order. The encrypt function takes in a message, finds each character of the message in the "input" string, logs their position as "letterNumber", then throws the characters from "crypt" string at position "letterNumber" to a new string that finally leaves us with the crypted message at the end.

