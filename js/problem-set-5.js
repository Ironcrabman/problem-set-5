/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
height = prompt("Please Enter an integer number between 1 and 23");
  while(height > 23 || height < 1 || height % 1 != 0){
  height = prompt("Please enter in a VALID whole integer between 1 and 23");
 }
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  windspeed = prompt(`Please enter the wind speed in MPH as a nonnegative integer`);
 while(windspeed % 1 != 0 || windspeed < 0) {
   windspeed = prompt(`Please enter the wind speed in MPH as a NONNEGATIVE INTEGER`)
 }
let temp = parseInt(windspeed, 10);

 if(windspeed < 39) {
   windspeed =`The skies are calm...`}
if(windspeed >= 39  && windspeed <= 73){
  windspeed=`Tropical Storm.`
}
if(windspeed >= 74 && windspeed <= 95 ){
  windspeed=`Category 1.`
}
if(windspeed >= 96 && windspeed <= 110 ){
  windspeed=`Category 2.`
}
if(windspeed >= 111  && windspeed <= 129 ){
  windspeed=`Category 3.`
}
if(windspeed >= 130 && windspeed <= 156 ){
  windspeed=`Category 4.`
}
if(windspeed >= 157){
  windspeed=`Category 5.`
}
 let p =document.getElementById("hurricane-output")
 p.innerHTML = windspeed

windspeed = temp
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
let s1 = prompt(`Please enter the 1st judge scores between 0.0 and 10.0`);
while(s1 < 0 || s1 > 10) {
  s1 = prompt(`Please enter a valid score between 0.0 and 10.0`)
}
s1 = parseInt(s1, 10);
scores.push(s1);

let s2 = prompt(`Please enter the 2nd judge scores between 0.0 and 10.0`);
while(s2 < 0 || s2 > 10){
  s2 = prompt(`Please enter a valid score between 0.0 and 10.0`)
}

s2 = parseInt(s2, 10);
scores.push(s2);

let s3 = prompt(`Please enter the 3rd judge scores between 0.0 and 10.0`);
while(s3 < 0 || s3 > 10){
  s3 = prompt(`Please enter a valid score between 0.0 and 10.0`)
}
s3 = parseInt(s3, 10);
scores.push(s3);

let s4 = prompt(`Please enter the 4th judge scores between 0.0 and 10.0`);
while(s4 < 0 || s4 > 10){
  s4 = prompt(`Please enter a valid score between 0.0 and 10.0`)
}
s4 = parseInt(s4, 10);
scores.push(s4);

let s5 = prompt(`Please enter the 5th judge scores between 0.0 and 10.0`);
while(s5 < 0 || s5 > 10){
  s5 = prompt(`Please enter a valid score between 0.0 and 10.0`)
}
s5 = parseInt(s5, 10);
scores.push(s5);

let s6 = prompt(`Please enter the 6th judge scores between 0.0 and 10.0`);
while(s6 < 0 || s6 > 10){
  s6 = prompt(`Please enter a valid score between 0.0 and 10.0`)
}
s6 = parseInt(s6, 10);
scores.push(s6);

total = s1 + s2 + s3 + s4 + s5 + s6
let min = Math.min(s1, s2, s3, s4, s5, s6,);
let max = Math.max(s1, s2, s3, s4, s5, s6);

average =(total-(min+max)) / 4;
average = average.toFixed(2);

removed = `${min}, ${max}`;
let p =document.getElementById("gymnastics-output");
p.innerHTML = `Discarded: ${removed}<br/>Score: ${average}`;


/////Finsh this loop
  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */
let testadd
  for (testadd = 0; testadd != -1; testTotal = testTotal + testadd) {
    testadd = prompt(`Enter your test grades between 0.0 and 100.0 when you are done enter "-1"`)
    while (testadd < 0 && testadd != -1 || testadd > 100.0){
      testadd = prompt(`Enter your test grades BETWEEN 0.0 and 100.0 when you are done enter "-1"`)
    }
    testadd = parseInt(testadd, 10);
    tests = tests + 1
}

let quizadd
  for (quizadd = 0; quizadd != -1; quizTotal = quizTotal + quizadd) {
    quizadd = prompt(`Enter your quiz grades between 0.0 and 100.0 when you are done enter "-1"`)
    while (quizadd < 0 && quizadd != -1 || quizadd > 100.0){
      quizadd = prompt(`Enter your quiz grades BETWEEN 0.0 and 100.0 when you are done enter "-1"`)
    }
    quizadd = parseInt(quizadd, 10);
    quizzes = quizzes + 1
}

let testaverage = testTotal / tests
let quizaverage = quizTotal / quizzes
let p =document.getElementById("report-card-output");
p.innerHTML =`Tests: ${testaverage}<br/>Quizzes: ${quizaverage}`;

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
