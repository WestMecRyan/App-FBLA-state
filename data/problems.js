export const PROBLEMS = {
  math: {
    easy: [
      {
        id: 1,
        question: "What is 15 + 27?",
        answers: [
          { answer: "40", explanation: "This sum is too low. Try adding the numbers again." },
          { answer: "42", explanation: "Correct! 15 + 27 gives you 42." },
          { answer: "43", explanation: "This sum is too high. Try adding the numbers again." },
          { answer: "45", explanation: "This sum is too high. Consider the numbers you're adding." }
        ],
        correctAnswer: "42"
      },
      {
        id: 2,
        question: "What number comes next in the pattern: 1, 4, 9, ...?",
        answers: [
          { answer: "12", explanation: "This answer doesn't fit the pattern. Try looking at the differences between numbers." },
          { answer: "15", explanation: "This number doesn't match the pattern. Think about the relationship between the numbers." },
          { answer: "16", explanation: "Correct! The pattern is made up of square numbers, and 4 squared is 16." },
          { answer: "20", explanation: "This number doesn't match the pattern. Consider the type of sequence." }
        ],
        correctAnswer: "16"
      },
      {
        id: 3,
        question: "What shape has 4 sides of equal length?",
        answers: [
          { answer: "Triangle", explanation: "A triangle has three sides, not four. Look for a shape with four equal sides." },
          { answer: "Rectangle", explanation: "A rectangle has opposite sides of equal length, but not all four sides." },
          { answer: "Square", explanation: "Correct! A square has four sides of equal length." },
          { answer: "Circle", explanation: "A circle has no sides, so this doesn't fit the question." }
        ],
        correctAnswer: "Square"
      },
      {
        id: 4,
        question: "What is half of 25?",
        answers: [
          { answer: "10", explanation: "This answer is too low. Try dividing the number by 2." },
          { answer: "12.5", explanation: "Correct! Half of 25 is 12.5." },
          { answer: "15", explanation: "This number is too high. Recheck your division of 25." },
          { answer: "20", explanation: "This number is too high. Try dividing 25 by 2." }
        ],
        correctAnswer: "12.5"
      },
      {
        id: 5,
        question: "What is 3.2 + 6.8?",
        answers: [
          { answer: "9.5", explanation: "This answer is too low. Try adding the numbers again." },
          { answer: "9.8", explanation: "This is close, but not the correct sum. Try adding the numbers carefully." },
          { answer: "10", explanation: "Correct! 3.2 + 6.8 gives you 10." },
          { answer: "10.2", explanation: "This is too high. Recheck the numbers you're adding." }
        ],
        correctAnswer: "10"
      },
      {
        id: 6,
        question: "What is 10.5 / 2?",
        answers: [
          { answer: "4.5", explanation: "This is too low. Try dividing 10.5 by 2 again." },
          { answer: "5", explanation: "This answer is close, but think about the decimal places." },
          { answer: "5.25", explanation: "Correct! 10.5 divided by 2 is 5.25." },
          { answer: "5.5", explanation: "This is too high. Try dividing 10.5 more carefully." }
        ],
        correctAnswer: "5.25"
      },
      {
        id: 7,
        question: "What number comes next in the pattern: 3, 6, 12, ...?",
        answers: [
          { answer: "15", explanation: "This number doesn't fit the pattern. Double-check the relationship between the numbers." },
          { answer: "18", explanation: "This number is too low. Think about multiplying by 2." },
          { answer: "20", explanation: "This doesn't fit the pattern. The numbers double with each step." },
          { answer: "24", explanation: "Correct! Each number in the pattern doubles." }
        ],
        correctAnswer: "24"
      },
      {
        id: 8,
        question: "What is 20.5 - 7.3?",
        answers: [
          { answer: "11.2", explanation: "This answer is too low. Try subtracting more carefully." },
          { answer: "12.5", explanation: "This is close but not correct. Try again with the correct subtraction." },
          { answer: "13.2", explanation: "Correct! 20.5 - 7.3 gives you 13.2." },
          { answer: "14.5", explanation: "This is too high. Check your subtraction process." }
        ],
        correctAnswer: "13.2"
      },
      {
        id: 9,
        question: "What is 12 + 3 x 2?",
        answers: [
          { answer: "18", explanation: "Correct! According to order of operations, you multiply first, then add." },
          { answer: "20", explanation: "This is incorrect. You need to multiply 3 and 2 first." },
          { answer: "22", explanation: "This is too high. Follow the order of operations carefully." },
          { answer: "30", explanation: "This is too high. Try multiplying before adding." }
        ],
        correctAnswer: "18"
      },
      {
        id: 10,
        question: "What is 2.5 + 3.7?",
        answers: [
          { answer: "5.2", explanation: "This is too low. Try adding the numbers again." },
          { answer: "6.1", explanation: "This is close, but not correct. Double-check your addition." },
          { answer: "6.2", explanation: "Correct! 2.5 + 3.7 gives you 6.2." },
          { answer: "6.5", explanation: "This is too high. Try adding the numbers carefully." }
        ],
        correctAnswer: "6.2"
      },
      {
        id: 11,
        question: "What is 18.6 - 9.1?",
        answers: [
          { answer: "7.5", explanation: "This is too low. Try subtracting the numbers again." },
          { answer: "8", explanation: "This is too low. Double-check your subtraction." },
          { answer: "9.5", explanation: "Correct! 18.6 - 9.1 gives you 9.5." },
          { answer: "10", explanation: "This is too high. Recheck your subtraction process." }
        ],
        correctAnswer: "9.5"
      },
      {
        id: 12,
        question: "What shape has 5 sides?",
        answers: [
          { answer: "Triangle", explanation: "A triangle has three sides, not five. Try again!" },
          { answer: "Square", explanation: "A square has four sides. You're looking for a shape with five sides." },
          { answer: "Pentagon", explanation: "Correct! A pentagon has five sides." },
          { answer: "Hexagon", explanation: "A hexagon has six sides, not five. Try again." }
        ],
        correctAnswer: "Pentagon"
      },
      {
        id: 13,
        question: "What is 7 x 2.1?",
        answers: [
          { answer: "12.5", explanation: "This is too low. Try multiplying 7 by 2.1 again." },
          { answer: "13.5", explanation: "This is close but not correct. Check the multiplication again." },
          { answer: "14.5", explanation: "This is close but not the right answer. Try multiplying carefully." },
          { answer: "14.7", explanation: "Correct! 7 x 2.1 equals 14.7." }
        ],
        correctAnswer: "14.7"
      },
      {
        id: 14,
        question: "What is 2.5 x 4?",
        answers: [
          { answer: "8", explanation: "Correct! 2.5 x 4 equals 8." },
          { answer: "9", explanation: "This is too high. Try multiplying 2.5 and 4 again." },
          { answer: "10", explanation: "This is too high. Check your multiplication carefully." },
          { answer: "10.5", explanation: "This is too high. Recalculate 2.5 times 4." }
        ],
        correctAnswer: "8"
      },
      {
        id: 15,
        question: "What is 100 - 25 x 2?",
        answers: [
          { answer: "50", explanation: "Correct! According to order of operations, you multiply first (25 x 2), then subtract from 100." },
          { answer: "55", explanation: "This is incorrect. Remember, you need to multiply first." },
          { answer: "60", explanation: "This is too high. Follow the order of operations carefully." },
          { answer: "70", explanation: "This is too high. Recheck your multiplication and subtraction." }
        ],
        correctAnswer: "50"
      },
      {
        id: 16,
        question: "What number fits in the sequence: 1, 3, 6, 10, ...?",
        answers: [
          { answer: "13", explanation: "This is close but not correct. Check the pattern in the sequence." },
          { answer: "14", explanation: "This is close but not the correct number. Consider the pattern carefully." },
          { answer: "15", explanation: "Correct! The sequence increases by consecutive numbers (1, 2, 3, 4, etc.)." },
          { answer: "16", explanation: "This is too high. Recheck the pattern and sequence." }
        ],
        correctAnswer: "15"
      },
      {
        id: 17,
        question: "What is 3.1 + 7.9?",
        answers: [
          { answer: "10", explanation: "Correct! 3.1 + 7.9 gives you 10." },
          { answer: "10.5", explanation: "This is too high. Try adding the numbers again." },
          { answer: "11", explanation: "This is too high. Double-check your addition." },
          { answer: "11.2", explanation: "This is too high. Try adding 3.1 and 7.9 more carefully." }
        ],
        correctAnswer: "10"
      },
      {
        id: 18,
        question: "What is 5.5 + 4.5?",
        answers: [
          { answer: "8", explanation: "This is too low. Try adding 5.5 and 4.5 again." },
          { answer: "9", explanation: "This is too low. Double-check your addition." },
          { answer: "10", explanation: "Correct! 5.5 + 4.5 gives you 10." },
          { answer: "11", explanation: "This is too high. Try adding 5.5 and 4.5 again." }
        ],
        correctAnswer: "10"
      },
      {
        id: 19,
        question: "What is 45 - 18?",
        answers: [
          { answer: "25", explanation: "This is too low. Try subtracting 18 from 45 again." },
          { answer: "26", explanation: "This is too low. Recheck your subtraction process." },
          { answer: "27", explanation: "Correct! 45 - 18 equals 27." },
          { answer: "28", explanation: "This is too high. Double-check the subtraction." }
        ],
        correctAnswer: "27"
      },
      {
        id: 20,
        question: "What is 5 x 2.4?",
        answers: [
          { answer: "10", explanation: "This is too low. Try multiplying 5 by 2.4 again." },
          { answer: "11.5", explanation: "This is too high. Recheck the multiplication." },
          { answer: "12", explanation: "Correct! 5 x 2.4 equals 12." },
          { answer: "12.5", explanation: "This is too high. Try multiplying again carefully." }
        ],
        correctAnswer: "12"
      },
      {
        id: 21,
        question: "What is 14.5 - 3.5?",
        answers: [
          { answer: "9", explanation: "This is too low. Try subtracting 3.5 from 14.5 again." },
          { answer: "10", explanation: "This is too high. Double-check your subtraction." },
          { answer: "11", explanation: "Correct! 14.5 - 3.5 equals 11." },
          { answer: "12", explanation: "This is too high. Recheck your subtraction process." }
        ],
        correctAnswer: "11"
      },
      {
        id: 22,
        question: "What is 2.5 x 3.5?",
        answers: [
          { answer: "7", explanation: "This is too low. Try multiplying 2.5 by 3.5 again." },
          { answer: "8", explanation: "This is too low. Recheck the multiplication." },
          { answer: "8.5", explanation: "This is too high. Double-check your multiplication." },
          { answer: "8.75", explanation: "Correct! 2.5 x 3.5 equals 8.75." }
        ],
        correctAnswer: "8.75"
      },
      {
        id: 23,
        question: "What is 30 / 2?",
        answers: [
          { answer: "10", explanation: "This is too low. Try dividing 30 by 2 again." },
          { answer: "12", explanation: "This is too high. Recheck your division process." },
          { answer: "15", explanation: "Correct! 30 divided by 2 gives you 15." },
          { answer: "20", explanation: "This is too high. Recheck your division." }
        ],
        correctAnswer: "15"
      },
      {
        id: 24,
        question: "What number fits the pattern: 4, 8, 16, 32, ...?",
        answers: [
          { answer: "48", explanation: "This is too low. The pattern is doubling each number." },
          { answer: "50", explanation: "This is too low. Try following the doubling pattern." },
          { answer: "60", explanation: "This is too low. Recheck the pattern carefully." },
          { answer: "64", explanation: "Correct! Each number is doubled, so 32 x 2 equals 64." }
        ],
        correctAnswer: "64"
      },
      {
        id: 25,
        question: "What is 9.8 - 3.2?",
        answers: [
          { answer: "5.5", explanation: "This is too low. Try subtracting 3.2 from 9.8 again." },
          { answer: "6", explanation: "This is too low. Double-check your subtraction." },
          { answer: "6.5", explanation: "This is too high. Recheck your subtraction." },
          { answer: "6.6", explanation: "Correct! 9.8 - 3.2 gives you 6.6." }
        ],
        correctAnswer: "6.6"
      },
      {
        id: 26,
        question: "What is the perimeter of a square with sides of 5.5?",
        answers: [
          { answer: "20", explanation: "This is too low. The perimeter is the sum of all sides of the square." },
          { answer: "21", explanation: "This is too low. Try adding up the four sides of the square." },
          { answer: "22", explanation: "Correct! The perimeter is 4 times 5.5, which equals 22." },
          { answer: "24", explanation: "This is too high. Recheck the calculation of the perimeter." }
        ],
        correctAnswer: "22"
      },
      {
        id: 27,
        question: "What is 14.2 - 5.6?",
        answers: [
          { answer: "7", explanation: "This is too low. Try subtracting 5.6 from 14.2 again." },
          { answer: "8", explanation: "This is too low. Double-check the subtraction." },
          { answer: "8.6", explanation: "Correct! 14.2 - 5.6 gives you 8.6." },
          { answer: "9", explanation: "This is too high. Recheck your subtraction process." }
        ],
        correctAnswer: "8.6"
      },
      {
        id: 28,
        question: "What is 15 / 3?",
        answers: [
          { answer: "3", explanation: "This is too low. Try dividing 15 by 3 again." },
          { answer: "4", explanation: "This is too low. Double-check the division." },
          { answer: "5", explanation: "Correct! 15 divided by 3 equals 5." },
          { answer: "6", explanation: "This is too high. Recheck your division process." }
        ],
        correctAnswer: "5"
      },
      {
        id: 29,
        question: "What is 9.8 - 3.2?",
        answers: [
          { answer: "5.5", explanation: "This is too low. Try subtracting 3.2 from 9.8 again." },
          { answer: "6", explanation: "This is too low. Double-check your subtraction." },
          { answer: "6.5", explanation: "This is too high. Recheck your subtraction." },
          { answer: "6.6", explanation: "Correct! 9.8 - 3.2 gives you 6.6." }
        ],
        correctAnswer: "6.6"
      },
      {
        id: 30,
        question: "What shape is formed by connecting 3 points with straight lines?",
        answers: [
          { answer: "Triangle", explanation: "Correct! A triangle is formed by connecting three points with straight lines." },
          { answer: "Square", explanation: "A square has four sides, not three. Try again." },
          { answer: "Hexagon", explanation: "A hexagon has six sides. You're looking for a shape with three sides." },
          { answer: "Circle", explanation: "A circle has no sides. You're looking for a shape with three sides." }
        ],
        correctAnswer: "Triangle"
      }
    ],
    normal: [
      {
        id: 31,
        question: "Solve for x: 2x + 5 = 15",
        answers: [
          { answer: "5", explanation: "Correct! Subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5." },
          { answer: "7", explanation: "This is too high. Try subtracting 5 from both sides." },
          { answer: "10", explanation: "This is too high. Recheck the equation and solve for x." },
          { answer: "15", explanation: "This is too high. Double-check the steps and subtract 5 from both sides." }
        ],
        correctAnswer: "5"
      },
      {
        id: 32,
        question: "What is the value of x in the equation: 3x - 4 = 11?",
        answers: [
          { answer: "4", explanation: "This is too low. Add 4 to both sides of the equation." },
          { answer: "5", explanation: "Correct! Add 4 to both sides to get 3x = 15, then divide by 3 to get x = 5." },
          { answer: "6", explanation: "This is too high. Recheck the equation and solve for x." },
          { answer: "7", explanation: "This is too high. Add 4 to both sides and divide by 3." }
        ],
        correctAnswer: "5"
      },
      {
        id: 33,
        question: "What is 12x - 4 when x = 3?",
        answers: [
          { answer: "32", explanation: "Correct! Substitute 3 for x: 12(3) - 4 = 36 - 4 = 32." },
          { answer: "36", explanation: "This is too high. Recheck the calculation." },
          { answer: "40", explanation: "This is too high. Try plugging in x = 3 into the expression." },
          { answer: "44", explanation: "This is too high. Double-check the substitution for x." }
        ],
        correctAnswer: "32"
      },
      {
        id: 34,
        question: "What is the result of (2 + 3)^2?",
        answers: [
          { answer: "15", explanation: "This is too low. Try adding 2 and 3 first, then squaring the result." },
          { answer: "20", explanation: "This is too high. Recheck the operation." },
          { answer: "25", explanation: "Correct! 2 + 3 is 5, and 5^2 equals 25." },
          { answer: "30", explanation: "This is too high. Recheck your calculations." }
        ],
        correctAnswer: "25"
      },
      {
        id: 35,
        question: "What is 5(2x + 3) if x = 2?",
        answers: [
          { answer: "25", explanation: "Correct! Substitute x = 2 into the expression: 5(2(2) + 3) = 5(4 + 3) = 5(7) = 35." },
          { answer: "27", explanation: "This is close, but double-check your multiplication steps." },
          { answer: "29", explanation: "This is too high. Recheck the values and multiply properly." },
          { answer: "31", explanation: "This is too high. Recheck the equation with x = 2." }
        ],
        correctAnswer: "25"
      },
      {
        id: 36,
        question: "Simplify the expression: 3(4x + 2) - 5x",
        answers: [
          { answer: "7x + 2", explanation: "This is too high. Expand and combine like terms." },
          { answer: "5x + 2", explanation: "This is too low. Try distributing 3 and combining the x terms." },
          { answer: "7x + 6", explanation: "This is too high. Recheck the distribution and simplification." },
          { answer: "7x + 2", explanation: "Correct! Distribute 3 across the parentheses: 3(4x) + 3(2) = 12x + 6. Then subtract 5x to get 7x + 6." }
        ],
        correctAnswer: "7x + 2"
      },
      {
        id: 37,
        question: "What is the perimeter of a triangle with sides 8, 10, and 12?",
        answers: [
          { answer: "28", explanation: "This is too low. Add all three sides together to find the perimeter." },
          { answer: "30", explanation: "Correct! Add 8 + 10 + 12 to get 30." },
          { answer: "32", explanation: "This is too high. Recheck the perimeter calculation." },
          { answer: "34", explanation: "This is too high. Recheck the total of the three sides." }
        ],
        correctAnswer: "30"
      },
      {
        id: 38,
        question: "Solve for x: 5x + 2 = 17",
        answers: [
          { answer: "2", explanation: "This is too low. Try subtracting 2 from both sides first." },
          { answer: "3", explanation: "Correct! Subtract 2 from both sides to get 5x = 15, then divide by 5 to get x = 3." },
          { answer: "4", explanation: "This is too high. Recheck the steps to solve for x." },
          { answer: "5", explanation: "This is too high. Double-check the subtraction and division." }
        ],
        correctAnswer: "3"
      },
      {
        id: 39,
        question: "What is 7x - 3 when x = 4?",
        answers: [
          { answer: "25", explanation: "Correct! Substitute x = 4 into the equation: 7(4) - 3 = 28 - 3 = 25." },
          { answer: "26", explanation: "This is too high. Recheck the calculation using x = 4." },
          { answer: "27", explanation: "This is too high. Try calculating with x = 4 properly." },
          { answer: "28", explanation: "This is too high. Recheck your multiplication and subtraction." }
        ],
        correctAnswer: "25"
      },
      {
        id: 40,
        question: "What is 3x^2 - 2x when x = 2?",
        answers: [
          { answer: "4", explanation: "This is too low. Substitute x = 2 and square it before multiplying." },
          { answer: "6", explanation: "This is too low. Try calculating 3x^2 - 2x for x = 2 again." },
          { answer: "8", explanation: "Correct! Substitute x = 2: 3(2^2) - 2(2) = 3(4) - 4 = 12 - 4 = 8." },
          { answer: "10", explanation: "This is too high. Recheck the equation with x = 2." }
        ],
        correctAnswer: "8"
      },
      {
        id: 41,
        question: "What is the area of a circle with radius 5?",
        answers: [
          { answer: "78.5", explanation: "Correct! The area of a circle is πr^2. Using r = 5, A = π(5)^2 = 25π ≈ 78.5." },
          { answer: "80", explanation: "This is too high. Recheck the calculation for the area using π." },
          { answer: "82", explanation: "This is too high. Recheck the formula and substitute correctly." },
          { answer: "85", explanation: "This is too high. Double-check your calculation using π." }
        ],
        correctAnswer: "78.5"
      },
      {
        id: 42,
        question: "Simplify the expression: 4x + 3 - 2x",
        answers: [
          { answer: "2x + 3", explanation: "Correct! Combine like terms: 4x - 2x = 2x, so the simplified expression is 2x + 3." },
          { answer: "2x + 5", explanation: "This is too high. Check the combination of the x terms." },
          { answer: "3x + 3", explanation: "This is incorrect. Combine the x terms and keep the constant term." },
          { answer: "3x + 5", explanation: "This is incorrect. Simplify the x terms and add the constant correctly." }
        ],
        correctAnswer: "2x + 3"
      },
      {
        id: 43,
        question: "Solve for x: 4x - 7 = 9",
        answers: [
          { answer: "3", explanation: "This is incorrect. Recheck the equation and solve step-by-step." },
          { answer: "4", explanation: "Correct! Add 7 to both sides, then divide by 4 to get x = 4." },
          { answer: "5", explanation: "This is incorrect. Double-check the solution steps." },
          { answer: "6", explanation: "This is incorrect. Recheck the equation and solve step-by-step." }
        ],
        correctAnswer: "4"
      },
      {
        id: 44,
        question: "What is 2(x + 4) = 18?",
        answers: [
          { answer: "7", explanation: "Correct! First, divide both sides by 2 to get x + 4 = 9, then subtract 4 to get x = 7." },
          { answer: "8", explanation: "This is too high. Recheck the steps to solve for x." },
          { answer: "9", explanation: "This is too high. Double-check your division and subtraction." },
          { answer: "10", explanation: "This is too high. Recheck the equation and solve it step-by-step." }
        ],
        correctAnswer: "7"
      },
      {
        id: 45,
        question: "Solve for x: 3x + 7 = 22",
        answers: [
          { answer: "5", explanation: "Correct! Subtract 7 from both sides to get 3x = 15, then divide by 3 to get x = 5." },
          { answer: "6", explanation: "This is too high. Recheck the steps for solving x." },
          { answer: "7", explanation: "This is too high. Double-check your subtraction and division." },
          { answer: "8", explanation: "This is too high. Recheck the equation and solve for x." }
        ],
        correctAnswer: "5"
      },
      {
        id: 46,
        question: "What is the area of a triangle with base 10 and height 6?",
        answers: [
          { answer: "30", explanation: "Correct! The area of a triangle is 1/2 * base * height. So, 1/2 * 10 * 6 = 30." },
          { answer: "32", explanation: "This is too high. Recheck the calculation for the area." },
          { answer: "35", explanation: "This is too high. Double-check your multiplication." },
          { answer: "36", explanation: "This is too high. Recheck the area formula." }
        ],
        correctAnswer: "30"
      },
      {
        id: 47,
        question: "What is the result of 4^2 + 3^2?",
        answers: [
          { answer: "16", explanation: "This is too low. Try squaring both numbers first." },
          { answer: "18", explanation: "This is too low. Try squaring 4 and 3 first, then add them together." },
          { answer: "25", explanation: "Correct! 4^2 = 16 and 3^2 = 9, so 16 + 9 = 25." },
          { answer: "29", explanation: "This is too high. Recheck your addition." }
        ],
        correctAnswer: "25"
      },
      {
        id: 48,
        question: "Simplify the expression: 2(x - 3) + 4",
        answers: [
          { answer: "2x - 2", explanation: "Correct! Distribute 2 across the parentheses: 2(x) - 2(3) = 2x - 6, then add 4 to get 2x - 2." },
          { answer: "2x - 6", explanation: "This is incorrect. Recheck the final steps after distribution." },
          { answer: "2x + 2", explanation: "This is incorrect. Recheck the addition after distributing." },
          { answer: "2x + 6", explanation: "This is incorrect. Check the final step after distributing and adding." }
        ],
        correctAnswer: "2x - 2"
      },
      {
        id: 49,
        question: "What is the slope of the line represented by the equation y = 2x + 3?",
        answers: [
          { answer: "1", explanation: "This is incorrect. The coefficient of x represents the slope." },
          { answer: "2", explanation: "Correct! In the equation y = 2x + 3, the slope is the coefficient of x, which is 2." },
          { answer: "3", explanation: "This is incorrect. The slope is the coefficient of x." },
          { answer: "4", explanation: "This is incorrect. The slope is the number in front of x." }
        ],
        correctAnswer: "2"
      },
      {
        id: 50,
        question: "Solve for x: 5x + 10 = 30",
        answers: [
          { answer: "4", explanation: "Correct! Subtract 10 from both sides to get 5x = 20, then divide by 5 to get x = 4." },
          { answer: "5", explanation: "This is too high. Recheck your subtraction and division." },
          { answer: "6", explanation: "This is too high. Recheck the equation step by step." },
          { answer: "7", explanation: "This is too high. Double-check your steps for solving x." }
        ],
        correctAnswer: "4"
      },
      {
        id: 51,
        question: "What is the volume of a cube with side length 6?",
        answers: [
          { answer: "216", explanation: "Correct! The volume of a cube is calculated as side^3, so 6^3 = 216." },
          { answer: "126", explanation: "This is too low. Recheck the cube volume formula." },
          { answer: "144", explanation: "This is too low. Double-check the cube volume formula." },
          { answer: "160", explanation: "This is too low. The correct calculation is side^3." }
        ],
        correctAnswer: "216"
      },
      {
        id: 52,
        question: "What is the surface area of a cube with side length 4?",
        answers: [
          { answer: "24", explanation: "This is too low. Recheck the surface area formula for a cube." },
          { answer: "48", explanation: "This is too low. Double-check your calculation using the formula 6 * side^2." },
          { answer: "64", explanation: "This is too low. Check the formula again." },
          { answer: "96", explanation: "Correct! The surface area of a cube is calculated as 6 * side^2. So, 6 * 4^2 = 96." }
        ],
        correctAnswer: "96"
      },
      {
        id: 53,
        question: "Simplify the expression: (x + 3)(x - 5)",
        answers: [
          { answer: "x^2 - 2x - 15", explanation: "Correct! Use the distributive property to expand the expression: x(x - 5) + 3(x - 5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15." },
          { answer: "x^2 - 5x + 15", explanation: "This is incorrect. Recheck the multiplication of the terms." },
          { answer: "x^2 + 5x - 15", explanation: "This is incorrect. Recheck the signs when distributing." },
          { answer: "x^2 + 2x - 15", explanation: "This is incorrect. Recheck the middle term after expanding." }
        ],
        correctAnswer: "x^2 - 2x - 15"
      },
      {
        id: 54,
        question: "Solve for x: x^2 - 4 = 12",
        answers: [
          { answer: "2", explanation: "This is incorrect. Recheck your square roots after isolating x^2." },
          { answer: "3", explanation: "This is incorrect. Recheck your steps after adding 4 to both sides." },
          { answer: "4", explanation: "Correct! Add 4 to both sides to get x^2 = 16, then take the square root of both sides to get x = ±4." },
          { answer: "5", explanation: "This is incorrect. Recheck your solution steps after isolating x^2." }
        ],
        correctAnswer: "4"
      },
      {
        id: 55,
        question: "What is the result of 5^3?",
        answers: [
          { answer: "100", explanation: "This is incorrect. Recheck the calculation of 5 cubed." },
          { answer: "120", explanation: "This is incorrect. 5^3 = 5 * 5 * 5." },
          { answer: "125", explanation: "Correct! 5^3 = 5 * 5 * 5 = 125." },
          { answer: "150", explanation: "This is incorrect. Recheck your multiplication." }
        ],
        correctAnswer: "125"
      },
      {
        id: 56,
        question: "Solve for x: 2(x + 3) = 14",
        answers: [
          { answer: "5", explanation: "This is incorrect. Recheck your distribution and solving steps." },
          { answer: "6", explanation: "This is incorrect. Recheck the division step after distributing." },
          { answer: "7", explanation: "This is incorrect. Double-check the steps after isolating x." },
          { answer: "4", explanation: "Correct! First, divide both sides by 2 to get x + 3 = 7, then subtract 3 to get x = 4." }
        ],
        correctAnswer: "4"
      },
      {
        id: 57,
        question: "What is 3x - 2x + 5?",
        answers: [
          { answer: "x + 5", explanation: "Correct! Combine like terms: 3x - 2x = x, so the simplified expression is x + 5." },
          { answer: "x + 6", explanation: "This is incorrect. Check the coefficient of x after simplifying." },
          { answer: "x + 7", explanation: "This is incorrect. Recheck the addition after combining like terms." },
          { answer: "x + 8", explanation: "This is incorrect. Double-check the simplification of the expression." }
        ],
        correctAnswer: "x + 5"
      },
      {
        id: 58,
        question: "What is the result of 7x^2 when x = 3?",
        answers: [
          { answer: "63", explanation: "Correct! Substitute x = 3 into 7x^2: 7(3^2) = 7(9) = 63." },
          { answer: "65", explanation: "This is too high. Check your multiplication of 7 and 9." },
          { answer: "72", explanation: "This is too high. Recheck the multiplication and exponents." },
          { answer: "75", explanation: "This is too high. Double-check your calculation of x^2." }
        ],
        correctAnswer: "63"
      },
      {
        id: 59,
        question: "What is the value of x in the equation: 5x - 3 = 2x + 9?",
        answers: [
          { answer: "3", explanation: "This is incorrect. Recheck your subtraction and solving steps." },
          { answer: "4", explanation: "Correct! Subtract 2x from both sides to get 3x - 3 = 9, then add 3 to both sides to get 3x = 12, and divide by 3 to get x = 4." },
          { answer: "5", explanation: "This is incorrect. Recheck your solving steps." },
          { answer: "6", explanation: "This is incorrect. Double-check your equation and solving method." }
        ],
        correctAnswer: "4"
      },
      {
        id: 60,
        question: "Solve for x: 4(x + 6) = 32",
        answers: [
          { answer: "5", explanation: "This is incorrect. Recheck your distribution and solving steps." },
          { answer: "6", explanation: "This is incorrect. Recheck the equation and simplify it properly." },
          { answer: "7", explanation: "This is incorrect. Double-check the steps after distributing the 4." },
          { answer: "4", explanation: "Correct! First, divide both sides by 4 to get x + 6 = 8, then subtract 6 to get x = 4." }
        ],
        correctAnswer: "4"
      }
    ],
    hard: [
      {
        id: 61,
        question: "Solve for x: 2x + 6 = 16",
        answers: [
          { answer: "4", explanation: "This is incorrect. Try isolating the variable by first subtracting 6 from both sides." },
          { answer: "5", explanation: "Correct! Subtracting 6 from both sides leaves 2x = 10. Dividing both sides by 2 gives x = 5." },
          { answer: "6", explanation: "This is incorrect. Carefully review your steps after simplifying the equation." },
          { answer: "7", explanation: "This is incorrect. Double-check your calculations when isolating x." }
        ],
        correctAnswer: "5"
      },
      {
        id: 62,
        question: "What is the value of x in the equation: 5x - 7 = 18?",
        answers: [
          { answer: "4", explanation: "This is incorrect. Make sure you correctly add 7 to both sides before dividing." },
          { answer: "5", explanation: "Correct! Adding 7 to both sides results in 5x = 25. Dividing both sides by 5 gives x = 5." },
          { answer: "6", explanation: "This is incorrect. Recheck the arithmetic after isolating the variable." },
          { answer: "7", explanation: "This is incorrect. Carefully revisit your steps from the start." }
        ],
        correctAnswer: "5"
      },
      {
        id: 63,
        question: "Solve for x: 3x - 4 = 11",
        answers: [
          { answer: "4", explanation: "This is incorrect. Try adding 4 to both sides first, then isolate x." },
          { answer: "5", explanation: "Correct! Adding 4 to both sides results in 3x = 15. Dividing both sides by 3 gives x = 5." },
          { answer: "6", explanation: "This is incorrect. Double-check your calculations after simplifying." },
          { answer: "7", explanation: "This is incorrect. Carefully review each step to ensure accuracy." }
        ],
        correctAnswer: "5"
      },
      {
        id: 64,
        question: "Solve for x: x^2 + 6x - 7 = 0",
        answers: [
          { answer: "-7, 1", explanation: "Correct! Factoring the quadratic into (x + 7)(x - 1) = 0 leads to x = -7 or 1." },
          { answer: "-1, 7", explanation: "This is incorrect. Be sure to factor the quadratic carefully and verify each root." },
          { answer: "-6, 1", explanation: "This is incorrect. Check the factor pairs that correctly multiply to -7 and add to 6." },
          { answer: "1, -7", explanation: "This is incorrect. Be sure your factor signs match the original equation." }
        ],
        correctAnswer: "-7, 1"
      },
      {
        id: 65,
        question: "Simplify the expression: (x + 2)(x - 3)",
        answers: [
          { answer: "x^2 - x - 6", explanation: "Correct! Distributing each term and combining like terms results in this expression." },
          { answer: "x^2 + x - 6", explanation: "This is incorrect. Pay close attention to the signs when expanding." },
          { answer: "x^2 - 6x - 6", explanation: "This is incorrect. Carefully review your distribution steps." },
          { answer: "x^2 - 5x - 6", explanation: "This is incorrect. Make sure you combine like terms correctly." }
        ],
        correctAnswer: "x^2 - x - 6"
      },
      {
        id: 66,
        question: "What is the result of 3x^2 - 2x + 5 when x = 2?",
        answers: [
          { answer: "11", explanation: "Correct! Substituting x = 2 gives 3(2)^2 - 2(2) + 5 = 12 - 4 + 5 = 11." },
          { answer: "12", explanation: "This is incorrect. Double-check your calculations after multiplying and combining terms." },
          { answer: "13", explanation: "This is incorrect. Review your steps after squaring the x value." },
          { answer: "14", explanation: "This is incorrect. Carefully track each step to ensure accuracy." }
        ],
        correctAnswer: "11"
      },
      {
        id: 67,
        question: "What is the solution for the system of equations: 2x + y = 10 and x - y = 2?",
        answers: [
          { answer: "x = 3, y = 4", explanation: "This is incorrect. Try isolating one variable before substituting into the other equation." },
          { answer: "x = 4, y = 3", explanation: "This is incorrect. Carefully check the substitution step." },
          { answer: "x = 5, y = 2", explanation: "This is incorrect. Revisit your calculations to ensure both equations are satisfied." },
          { answer: "x = 6, y = 1", explanation: "Correct! Solving step by step shows these values satisfy both equations." }
        ],
        correctAnswer: "x = 6, y = 1"
      },
      {
        id: 68,
        question: "Solve for x: 4x^2 + 3x - 5 = 0",
        answers: [
          { answer: "-1, 5/4", explanation: "This is incorrect. Review your factorization process carefully." },
          { answer: "1, -5/4", explanation: "This is incorrect. Verify your solution by substituting back into the original equation." },
          { answer: "-5/4, 1", explanation: "Correct! Factoring the quadratic correctly gives these roots." },
          { answer: "-5/4, -1", explanation: "This is incorrect. Ensure your factoring aligns with the original equation." }
        ],
        correctAnswer: "-5/4, 1"
      },
      {
        id: 69,
        question: "Simplify the expression: 6x - 3(x + 2)",
        answers: [
          { answer: "3x + 6", explanation: "This is incorrect. Carefully distribute the -3 and combine like terms." },
          { answer: "3x + 5", explanation: "This is incorrect. Ensure you simplify the constants correctly." },
          { answer: "3x - 6", explanation: "Correct! Distributing -3 and combining like terms results in this expression." },
          { answer: "3x - 5", explanation: "This is incorrect. Review your steps and track each term carefully." }
        ],
        correctAnswer: "3x - 6"
      },
      {
        id: 71,
        question: "What is the solution for the system of equations: 3x + y = 10 and 2x - y = 3?",
        answers: [
          { answer: "x = 3, y = 1", explanation: "Correct! Solving the system using elimination or substitution leads to these values." },
          { answer: "x = 2, y = 4", explanation: "This is incorrect. Review your substitution steps carefully." },
          { answer: "x = 1, y = 2", explanation: "This is incorrect. Revisit your equation-solving process to isolate the variables correctly." },
          { answer: "x = 2, y = 1", explanation: "This is incorrect. Recheck how you combined the equations." }
        ],
        correctAnswer: "x = 3, y = 1"
      },
      {
        id: 72,
        question: "What is the value of x in the equation: 5x + 2 = 3x + 10?",
        answers: [
          { answer: "4", explanation: "Correct! Combine like terms and isolate x to find the solution." },
          { answer: "3", explanation: "This is incorrect. Carefully simplify both sides of the equation first." },
          { answer: "5", explanation: "This is incorrect. Try combining like terms again and isolate x." },
          { answer: "6", explanation: "This is incorrect. Ensure you're moving terms across the equal sign correctly." }
        ],
        correctAnswer: "4"
      },
      {
        id: 73,
        question: "Solve for x: x^2 - 5x + 6 = 0",
        answers: [
          { answer: "2, 3", explanation: "Correct! Factoring the quadratic leads to these values." },
          { answer: "-2, -3", explanation: "This is incorrect. Recheck your factoring steps." },
          { answer: "1, 6", explanation: "This is incorrect. Review how you split the middle term." },
          { answer: "4, -2", explanation: "This is incorrect. Carefully factor the equation again." }
        ],
        correctAnswer: "2, 3"
      },
      {
        id: 74,
        question: "Simplify: 2x^2 + 3x + 5 - x^2 - 2x",
        answers: [
          { answer: "x^2 + x + 5", explanation: "Correct! Combine like terms by grouping similar variables." },
          { answer: "x^2 + x + 7", explanation: "This is incorrect. Double-check how you simplified the constants." },
          { answer: "x^2 + 5x + 7", explanation: "This is incorrect. Review how you combined the x terms." },
          { answer: "x^2 + 5x + 5", explanation: "This is incorrect. Ensure you simplified each variable properly." }
        ],
        correctAnswer: "x^2 + x + 5"
      },
      {
        id: 75,
        question: "What is the value of x in the equation: 3(x - 4) = 18?",
        answers: [
          { answer: "5", explanation: "This is incorrect. Carefully distribute the 3 and simplify." },
          { answer: "6", explanation: "This is incorrect. Recheck your steps after distributing the 3." },
          { answer: "7", explanation: "This is incorrect. Double-check your steps after isolating x." },
          { answer: "10", explanation: "Correct! Distribute the 3 and isolate x to find the solution." }
        ],
        correctAnswer: "10"
      },
      {
        id: 76,
        question: "Solve for x: x^2 - 3x = 18",
        answers: [
          { answer: "6, -3", explanation: "Correct! Factoring and setting both parts equal to zero leads to these solutions." },
          { answer: "-6, 3", explanation: "This is incorrect. Review how you moved terms and factored the equation." },
          { answer: "3, -6", explanation: "This is incorrect. Carefully isolate x and factor correctly." },
          { answer: "-3, 6", explanation: "This is incorrect. Revisit your factoring process." }
        ],
        correctAnswer: "6, -3"
      },
      {
        id: 77,
        question: "What is the value of x in the equation: x^2 + 2x - 35 = 0?",
        answers: [
          { answer: "5, -7", explanation: "This is incorrect. Double-check how you factored the quadratic." },
          { answer: "7, -5", explanation: "Correct! Factoring the equation properly leads to these values." },
          { answer: "5, -6", explanation: "This is incorrect. Review your factoring process carefully." },
          { answer: "-5, 6", explanation: "This is incorrect. Double-check the values when setting factors equal to zero." }
        ],
        correctAnswer: "7, -5"
      },
      {
        id: 78,
        question: "Solve the equation: 3(x + 2) = 2(x + 4)",
        answers: [
          { answer: "2", explanation: "This is incorrect. Revisit how you distributed on both sides." },
          { answer: "3", explanation: "This is incorrect. Ensure you isolated x correctly." },
          { answer: "4", explanation: "Correct! Distributing both sides and combining like terms leads to this solution." },
          { answer: "5", explanation: "This is incorrect. Check your simplification steps carefully." }
        ],
        correctAnswer: "4"
      },
      {
        id: 79,
        question: "What is the solution to the system of equations: 2x + 3y = 14 and 4x - y = 10?",
        answers: [
          { answer: "x = 3, y = 2", explanation: "Correct! Solving the system step by step leads to these values." },
          { answer: "x = 4, y = 1", explanation: "This is incorrect. Review how you substituted values into the equations." },
          { answer: "x = 2, y = 3", explanation: "This is incorrect. Recheck the steps when combining the two equations." },
          { answer: "x = 1, y = 5", explanation: "This is incorrect. Ensure both equations are properly simplified before substitution." }
        ],
        correctAnswer: "x = 3, y = 2"
      },
      {
        id: 80,
        question: "Simplify: (x + 1)(x - 3)",
        answers: [
          { answer: "x^2 - 2x - 3", explanation: "Correct! Expanding the binomials gives this result." },
          { answer: "x^2 - 2x + 3", explanation: "This is incorrect. Recheck the signs when multiplying terms." },
          { answer: "x^2 + 2x - 3", explanation: "This is incorrect. Carefully expand and combine like terms." },
          { answer: "x^2 - 3x + 3", explanation: "This is incorrect. Review your distribution steps carefully." }
        ],
        correctAnswer: "x^2 - 2x - 3"
      },
      {
        id: 81,
        question: "What is the solution to the inequality: 2x - 5 > 7?",
        answers: [
          { answer: "x > 6", explanation: "Correct! Isolating x leads to this inequality." },
          { answer: "x > 5", explanation: "This is incorrect. Review your steps after moving terms to isolate x." },
          { answer: "x > 4", explanation: "This is incorrect. Ensure you correctly handled the inequality sign." },
          { answer: "x > 3", explanation: "This is incorrect. Recheck the step where you divided both sides." }
        ],
        correctAnswer: "x > 6"
      },
      {
        id: 82,
        question: "Solve for x: 4x + 7 = 2x - 5",
        answers: [
          { answer: "x = -6", explanation: "Correct! Isolating x leads to this solution." },
          { answer: "x = -7", explanation: "This is incorrect. Revisit your steps for combining like terms." },
          { answer: "x = -5", explanation: "This is incorrect. Ensure you moved terms across the equal sign properly." },
          { answer: "x = -8", explanation: "This is incorrect. Review how you simplified both sides." }
        ],
        correctAnswer: "x = -6"
      },
      {
        id: 83,
        question: "What is the value of x in the equation: 3x^2 - 12 = 0?",
        answers: [
          { answer: "2, -2", explanation: "Correct! Factoring the equation leads to these values." },
          { answer: "3, -3", explanation: "This is incorrect. Review how you isolated x." },
          { answer: "4, -4", explanation: "This is incorrect. Recheck the steps when dividing both sides by 3." },
          { answer: "1, -1", explanation: "This is incorrect. Carefully revisit your factoring process." }
        ],
        correctAnswer: "2, -2"
      },
      {
        id: 84,
        question: "Simplify: (x + 2)^2",
        answers: [
          { answer: "x^2 + 4x + 4", explanation: "Correct! Expanding the binomial gives this result." },
          { answer: "x^2 + 2x + 2", explanation: "This is incorrect. Double-check the middle term's coefficient." },
          { answer: "x^2 + 4x + 2", explanation: "This is incorrect. Revisit how you expanded the terms." },
          { answer: "x^2 + 2x + 4", explanation: "This is incorrect. Ensure you've correctly multiplied all terms." }
        ],
        correctAnswer: "x^2 + 4x + 4"
      },
      {
        id: 85,
        question: "What is the value of x in the equation: 2(x - 3) = x + 5?",
        answers: [
          { answer: "x = 11", explanation: "Correct! Distributing and isolating x leads to this solution." },
          { answer: "x = 10", explanation: "This is incorrect. Review your steps after distributing the 2." },
          { answer: "x = 12", explanation: "This is incorrect. Ensure you correctly combined like terms." },
          { answer: "x = 9", explanation: "This is incorrect. Revisit the steps when moving terms." }
        ],
        correctAnswer: "x = 11"
      },
      {
        id: 86,
        question: "Solve for x: 5x - 3 = 2x + 6",
        answers: [
          { answer: "x = 3", explanation: "Correct! Isolating x leads to this solution." },
          { answer: "x = 4", explanation: "This is incorrect. Review your steps after combining like terms." },
          { answer: "x = 2", explanation: "This is incorrect. Recheck how you moved terms across the equal sign." },
          { answer: "x = 5", explanation: "This is incorrect. Carefully revisit your equation-solving steps." }
        ],
        correctAnswer: "x = 3"
      },
      {
        id: 87,
        question: "Simplify: (2x - 1)(x + 3)",
        answers: [
          { answer: "2x^2 + 5x - 3", explanation: "Correct! Expanding the binomials gives this result." },
          { answer: "2x^2 + 7x - 3", explanation: "This is incorrect. Carefully check the middle term." },
          { answer: "2x^2 + 5x + 3", explanation: "This is incorrect. Review the signs when distributing." },
          { answer: "2x^2 + 6x - 3", explanation: "This is incorrect. Ensure you've combined like terms properly." }
        ],
        correctAnswer: "2x^2 + 5x - 3"
      },
      {
        id: 88,
        question: "What is the solution for the system of equations: x + y = 7 and x - y = 1?",
        answers: [
          { answer: "x = 4, y = 3", explanation: "Correct! Solving step by step leads to these values." },
          { answer: "x = 3, y = 4", explanation: "This is incorrect. Revisit how you combined the equations." },
          { answer: "x = 5, y = 2", explanation: "This is incorrect. Carefully check how you isolated the variables." },
          { answer: "x = 2, y = 5", explanation: "This is incorrect. Double-check the steps when combining the equations." }
        ],
        correctAnswer: "x = 4, y = 3"
      },
      {
        id: 89,
        question: "Solve for x: x/3 + 2 = 5",
        answers: [
          { answer: "x = 9", explanation: "Correct! Multiplying both sides by 3 isolates x." },
          { answer: "x = 8", explanation: "This is incorrect. Review your steps after moving constants." },
          { answer: "x = 7", explanation: "This is incorrect. Carefully revisit how you isolated x." },
          { answer: "x = 10", explanation: "This is incorrect. Ensure you simplified correctly after multiplying by 3." }
        ],
        correctAnswer: "x = 9"
      },
      {
        id: 90,
        question: "Simplify: (3x - 2)(x + 4)",
        answers: [
          { answer: "3x^2 + 10x - 8", explanation: "Correct! Expanding the binomials gives this result." },
          { answer: "3x^2 + 12x - 2", explanation: "This is incorrect. Review the middle term carefully." },
          { answer: "3x^2 + 8x - 4", explanation: "This is incorrect. Recheck the steps when multiplying terms." },
          { answer: "3x^2 + 10x + 8", explanation: "This is incorrect. Ensure you’ve correctly combined all terms." }
        ],
        correctAnswer: "3x^2 + 10x - 8"
      }
    ]
  },
  science: {
    easy: [
      {
        id: 91,
        question: "What is the chemical symbol for water?",
        answers: [
          { answer: "H2O", explanation: "Correct! Water is composed of two hydrogen atoms and one oxygen atom." },
          { answer: "O2", explanation: "This is incorrect. O2 represents oxygen gas, not water." },
          { answer: "CO2", explanation: "This is incorrect. CO2 is carbon dioxide, a gas plants absorb." },
          { answer: "HO2", explanation: "This is incorrect. HO2 is not a valid chemical symbol for water." }
        ],
        correctAnswer: "H2O"
      },
      {
        id: 92,
        question: "What gas do plants absorb from the atmosphere?",
        answers: [
          { answer: "Oxygen", explanation: "This is incorrect. While plants release oxygen, they absorb a different gas." },
          { answer: "Carbon Dioxide", explanation: "Correct! Plants take in carbon dioxide during photosynthesis." },
          { answer: "Nitrogen", explanation: "This is incorrect. Nitrogen is present in the air but is not absorbed by plants during photosynthesis." },
          { answer: "Hydrogen", explanation: "This is incorrect. Hydrogen is not the gas that plants absorb from the atmosphere." }
        ],
        correctAnswer: "Carbon Dioxide"
      },
      {
        id: 93,
        question: "What is the main source of energy for the Earth?",
        answers: [
          { answer: "The Moon", explanation: "This is incorrect. The Moon reflects light but does not provide energy like the Sun." },
          { answer: "The Sun", explanation: "Correct! The Sun's energy drives weather, climate, and life processes." },
          { answer: "The Earth’s core", explanation: "This is incorrect. While Earth's core generates some heat, it’s not the primary energy source." },
          { answer: "Clouds", explanation: "This is incorrect. Clouds influence weather but do not provide energy." }
        ],
        correctAnswer: "The Sun"
      },
      {
        id: 94,
        question: "What is the boiling point of water at sea level in Celsius?",
        answers: [
          { answer: "90°C", explanation: "This is incorrect. Water boils at a higher temperature than this." },
          { answer: "100°C", explanation: "Correct! Water boils at 100°C at sea level under normal conditions." },
          { answer: "110°C", explanation: "This is incorrect. Water boils at a lower temperature than this." },
          { answer: "120°C", explanation: "This is incorrect. Water boils before reaching this temperature under normal conditions." }
        ],
        correctAnswer: "100°C"
      },
      {
        id: 95,
        question: "What is the process by which plants make their own food?",
        answers: [
          { answer: "Photosynthesis", explanation: "Correct! Photosynthesis is the process plants use to create food using sunlight." },
          { answer: "Respiration", explanation: "This is incorrect. Respiration is the process of breaking down energy, not creating food." },
          { answer: "Digestion", explanation: "This is incorrect. Digestion occurs in animals, not plants." },
          { answer: "Metabolism", explanation: "This is incorrect. Metabolism is a broad term for energy processes, not specific to food creation in plants." }
        ],
        correctAnswer: "Photosynthesis"
      },
      {
        id: 96,
        question: "Which planet is known as the Red Planet?",
        answers: [
          { answer: "Mars", explanation: "Correct! Mars is often called the Red Planet due to its reddish appearance." },
          { answer: "Venus", explanation: "This is incorrect. Venus appears bright white or yellowish in the sky." },
          { answer: "Earth", explanation: "This is incorrect. Earth is known as the Blue Planet due to its oceans." },
          { answer: "Jupiter", explanation: "This is incorrect. Jupiter is a gas giant with distinctive cloud bands." }
        ],
        correctAnswer: "Mars"
      },
      {
        id: 97,
        question: "What is the primary function of red blood cells?",
        answers: [
          { answer: "To fight infections", explanation: "This is incorrect. White blood cells are responsible for fighting infections." },
          { answer: "To carry oxygen", explanation: "Correct! Red blood cells transport oxygen from the lungs to body tissues." },
          { answer: "To form blood clots", explanation: "This is incorrect. Platelets are responsible for blood clotting." },
          { answer: "To digest food", explanation: "This is incorrect. Digestion occurs in the stomach and intestines." }
        ],
        correctAnswer: "To carry oxygen"
      },
      {
        id: 98,
        question: "What type of rock is formed from cooling lava or magma?",
        answers: [
          { answer: "Sedimentary", explanation: "This is incorrect. Sedimentary rocks form from compressed layers of sediments." },
          { answer: "Metamorphic", explanation: "This is incorrect. Metamorphic rocks form from heat and pressure altering existing rocks." },
          { answer: "Igneous", explanation: "Correct! Igneous rocks form when lava or magma cools and solidifies." },
          { answer: "Organic", explanation: "This is incorrect. Organic materials are not types of rocks." }
        ],
        correctAnswer: "Igneous"
      },
      {
        id: 99,
        question: "Which of the following is a renewable resource?",
        answers: [
          { answer: "Coal", explanation: "This is incorrect. Coal is a nonrenewable fossil fuel." },
          { answer: "Natural Gas", explanation: "This is incorrect. Natural gas is also a nonrenewable resource." },
          { answer: "Solar Energy", explanation: "Correct! Solar energy is renewable because it is continuously available." },
          { answer: "Oil", explanation: "This is incorrect. Oil is a nonrenewable fossil fuel." }
        ],
        correctAnswer: "Solar Energy"
      },
      {
        id: 100,
        question: "What is the process by which a caterpillar turns into a butterfly?",
        answers: [
          { answer: "Metamorphosis", explanation: "Correct! Metamorphosis is the biological process where a caterpillar transforms into a butterfly." },
          { answer: "Fission", explanation: "This is incorrect. Fission is a type of cell division, not a transformation process." },
          { answer: "Evolution", explanation: "This is incorrect. Evolution refers to gradual change in species over generations." },
          { answer: "Transmutation", explanation: "This is incorrect. Transmutation is a term used in physics, not biology." }
        ],
        correctAnswer: "Metamorphosis"
      },
      {
        id: 101,
        question: "What part of the plant absorbs water and nutrients?",
        answers: [
          { answer: "Leaf", explanation: "This is incorrect. The leaf is responsible for photosynthesis, not nutrient absorption." },
          { answer: "Stem", explanation: "This is incorrect. The stem supports the plant but does not absorb water and nutrients." },
          { answer: "Root", explanation: "Correct! The roots absorb water and nutrients from the soil." },
          { answer: "Flower", explanation: "This is incorrect. The flower's role is reproduction, not nutrient absorption." }
        ],
        correctAnswer: "Root"
      },
      {
        id: 102,
        question: "What type of energy is stored in food?",
        answers: [
          { answer: "Kinetic Energy", explanation: "This is incorrect. Kinetic energy is energy of motion, not stored in food." },
          { answer: "Thermal Energy", explanation: "This is incorrect. Thermal energy is heat, not what is stored in food." },
          { answer: "Chemical Energy", explanation: "Correct! Food stores energy in the form of chemical energy, which the body can convert into other forms of energy." },
          { answer: "Electrical Energy", explanation: "This is incorrect. Electrical energy is used in electrical devices, not stored in food." }
        ],
        correctAnswer: "Chemical Energy"
      },
      {
        id: 103,
        question: "What is the force that pulls objects towards the Earth?",
        answers: [
          { answer: "Magnetism", explanation: "This is incorrect. Magnetism pulls magnetic objects but not all objects toward Earth." },
          { answer: "Friction", explanation: "This is incorrect. Friction resists motion, it does not pull objects down to the Earth." },
          { answer: "Gravity", explanation: "Correct! Gravity is the force that pulls objects toward the center of the Earth." },
          { answer: "Inertia", explanation: "This is incorrect. Inertia resists changes in motion, but does not pull objects toward Earth." }
        ],
        correctAnswer: "Gravity"
      },
      {
        id: 104,
        question: "Which organ is responsible for pumping blood throughout the body?",
        answers: [
          { answer: "Liver", explanation: "This is incorrect. The liver processes toxins and produces bile, not pumping blood." },
          { answer: "Lungs", explanation: "This is incorrect. The lungs are involved in gas exchange, not pumping blood." },
          { answer: "Heart", explanation: "Correct! The heart pumps blood throughout the body, delivering oxygen and nutrients." },
          { answer: "Stomach", explanation: "This is incorrect. The stomach digests food, but it does not pump blood." }
        ],
        correctAnswer: "Heart"
      },
      {
        id: 105,
        question: "What is the chemical symbol for oxygen?",
        answers: [
          { answer: "O", explanation: "Correct! 'O' is the chemical symbol for oxygen." },
          { answer: "O2", explanation: "This is incorrect. 'O2' represents two oxygen atoms, but we are looking for the symbol for a single oxygen atom." },
          { answer: "O3", explanation: "This is incorrect. 'O3' is the chemical formula for ozone, not oxygen." },
          { answer: "Ox", explanation: "This is incorrect. 'Ox' is not the chemical symbol for any element." }
        ],
        correctAnswer: "O"
      },
      {
        id: 106,
        question: "What type of energy is produced by the movement of electrons?",
        answers: [
          { answer: "Chemical Energy", explanation: "This is incorrect. Chemical energy is stored in bonds between atoms, not from electron movement." },
          { answer: "Potential Energy", explanation: "This is incorrect. Potential energy is stored energy, not from the movement of electrons." },
          { answer: "Electrical Energy", explanation: "Correct! Electrical energy is generated by the movement of electrons through conductors." },
          { answer: "Thermal Energy", explanation: "This is incorrect. Thermal energy is heat energy, not produced directly by electron movement." }
        ],
        correctAnswer: "Electrical Energy"
      },
      {
        id: 107,
        question: "What is the largest organ in the human body?",
        answers: [
          { answer: "Heart", explanation: "This is incorrect. The heart is a vital organ, but it is not the largest." },
          { answer: "Brain", explanation: "This is incorrect. While the brain is large, it is not the largest organ." },
          { answer: "Lung", explanation: "This is incorrect. The lungs are large, but the skin is the largest organ in the body." },
          { answer: "Skin", explanation: "Correct! The skin is the largest organ in the human body, covering and protecting the body." }
        ],
        correctAnswer: "Skin"
      },
      {
        id: 108,
        question: "Which part of the brain controls balance and coordination?",
        answers: [
          { answer: "Cerebrum", explanation: "This is incorrect. The cerebrum controls higher brain functions such as thinking and movement." },
          { answer: "Cerebellum", explanation: "Correct! The cerebellum controls balance, coordination, and motor control." },
          { answer: "Medulla", explanation: "This is incorrect. The medulla controls involuntary functions like breathing and heart rate." },
          { answer: "Thalamus", explanation: "This is incorrect. The thalamus processes sensory information but does not control balance." }
        ],
        correctAnswer: "Cerebellum"
      },
      {
        id: 109,
        question: "What type of bond is formed when electrons are shared between two atoms?",
        answers: [
          { answer: "Ionic bond", explanation: "This is incorrect. An ionic bond occurs when electrons are transferred, not shared." },
          { answer: "Covalent bond", explanation: "Correct! A covalent bond forms when two atoms share electrons." },
          { answer: "Hydrogen bond", explanation: "This is incorrect. Hydrogen bonds are weaker interactions involving hydrogen atoms." },
          { answer: "Metallic bond", explanation: "This is incorrect. Metallic bonds occur between metal atoms and involve free-moving electrons." }
        ],
        correctAnswer: "Covalent bond"
      },
      {
        id: 110,
        question: "Which gas do humans exhale during respiration?",
        answers: [
          { answer: "Oxygen", explanation: "This is incorrect. Humans inhale oxygen, but they exhale carbon dioxide." },
          { answer: "Nitrogen", explanation: "This is incorrect. Nitrogen makes up most of the air, but humans do not exhale it in large amounts." },
          { answer: "Carbon Dioxide", explanation: "Correct! Humans exhale carbon dioxide as a byproduct of respiration." },
          { answer: "Hydrogen", explanation: "This is incorrect. Hydrogen is not a major gas exhaled during respiration." }
        ],
        correctAnswer: "Carbon Dioxide"
      },
      {
        id: 111,
        question: "What is the most common element in the Earth's crust?",
        answers: [
          { answer: "Oxygen", explanation: "Correct! Oxygen makes up about 46% of the Earth's crust by weight." },
          { answer: "Silicon", explanation: "This is incorrect. While silicon is abundant, oxygen is the most common element in the Earth's crust." },
          { answer: "Iron", explanation: "This is incorrect. Iron is a major component of the Earth's core, but not the crust." },
          { answer: "Carbon", explanation: "This is incorrect. Carbon is much less abundant in the Earth's crust." }
        ],
        correctAnswer: "Oxygen"
      },
      {
        id: 112,
        question: "What kind of energy does a stretched spring have?",
        answers: [
          { answer: "Kinetic Energy", explanation: "This is incorrect. Kinetic energy is the energy of motion, but the spring is at rest when stretched." },
          { answer: "Chemical Energy", explanation: "This is incorrect. Chemical energy is stored in molecules, not in a stretched spring." },
          { answer: "Gravitational Potential Energy", explanation: "This is incorrect. Gravitational potential energy depends on height, not on the stretching of a spring." },
          { answer: "Elastic Potential Energy", explanation: "Correct! A stretched spring has elastic potential energy, which is stored energy due to its deformation." }
        ],
        correctAnswer: "Elastic Potential Energy"
      },
      {
        id: 113,
        question: "What is the main component of the Earth's atmosphere?",
        answers: [
          { answer: "Oxygen", explanation: "This is incorrect. While oxygen is essential for respiration, nitrogen makes up most of the atmosphere." },
          { answer: "Carbon Dioxide", explanation: "This is incorrect. Carbon dioxide is present in small amounts, but nitrogen is the most abundant gas." },
          { answer: "Nitrogen", explanation: "Correct! Nitrogen makes up about 78% of the Earth's atmosphere." },
          { answer: "Hydrogen", explanation: "This is incorrect. Hydrogen is very light and is present in trace amounts in the atmosphere." }
        ],
        correctAnswer: "Nitrogen"
      },
      {
        id: 114,
        question: "What is the smallest unit of matter?",
        answers: [
          { answer: "Atom", explanation: "Correct! An atom is the basic building block of matter and the smallest unit that retains the properties of an element." },
          { answer: "Molecule", explanation: "This is incorrect. A molecule is made up of two or more atoms bonded together." },
          { answer: "Electron", explanation: "This is incorrect. Electrons are subatomic particles, not the smallest unit of matter." },
          { answer: "Proton", explanation: "This is incorrect. Protons are subatomic particles inside atoms, but the atom itself is the smallest unit of matter." }
        ],
        correctAnswer: "Atom"
      },
      {
        id: 115,
        question: "What is the study of living organisms called?",
        answers: [
          { answer: "Physics", explanation: "This is incorrect. Physics studies the laws of nature, not living organisms." },
          { answer: "Chemistry", explanation: "This is incorrect. Chemistry studies the composition and properties of matter, not living organisms." },
          { answer: "Biology", explanation: "Correct! Biology is the study of living organisms and their interactions with the environment." },
          { answer: "Geology", explanation: "This is incorrect. Geology studies the Earth and its processes, not living organisms." }
        ],
        correctAnswer: "Biology"
      },
      {
        id: 116,
        question: "What is the process by which water changes from a liquid to a gas?",
        answers: [
          { answer: "Evaporation", explanation: "Correct! Evaporation is the process where liquid water turns into vapor (gas) due to heat." },
          { answer: "Condensation", explanation: "This is incorrect. Condensation is the opposite process, where gas turns into liquid." },
          { answer: "Precipitation", explanation: "This is incorrect. Precipitation refers to water falling to the Earth as rain, snow, etc." },
          { answer: "Sublimation", explanation: "This is incorrect. Sublimation is when a solid turns directly into a gas, like ice turning into water vapor." }
        ],
        correctAnswer: "Evaporation"
      },
      {
        id: 117,
        question: "Which of the following is a type of galaxy?",
        answers: [
          { answer: "Spiral", explanation: "Correct! A spiral galaxy has a rotating disk of stars, gas, and dust with a central bulge." },
          { answer: "Pyramid", explanation: "This is incorrect. There is no such type of galaxy as a pyramid galaxy." },
          { answer: "Spherical", explanation: "This is incorrect. There are elliptical galaxies, but not spherical ones." },
          { answer: "Triangular", explanation: "This is incorrect. Galaxies do not take a triangular shape." }
        ],
        correctAnswer: "Spiral"
      },
      {
        id: 118,
        question: "What is the function of the chloroplast in plant cells?",
        answers: [
          { answer: "To control the cell", explanation: "This is incorrect. The nucleus controls the cell's activities, not the chloroplast." },
          { answer: "To produce energy", explanation: "This is partially correct. Chloroplasts produce energy, but specifically, they carry out photosynthesis." },
          { answer: "To carry out photosynthesis", explanation: "Correct! Chloroplasts use sunlight to produce food for the plant through photosynthesis." },
          { answer: "To transport proteins", explanation: "This is incorrect. The endoplasmic reticulum transports proteins, not the chloroplast." }
        ],
        correctAnswer: "To carry out photosynthesis"
      },
      {
        id: 119,
        question: "What type of energy is stored in an object due to its position above the ground?",
        answers: [
          { answer: "Kinetic Energy", explanation: "This is incorrect. Kinetic energy is energy due to motion, not position." },
          { answer: "Chemical Energy", explanation: "This is incorrect. Chemical energy is stored in the bonds of molecules, not in an object's position." },
          { answer: "Mechanical Energy", explanation: "This is incorrect. Mechanical energy is a sum of kinetic and potential energy, but not specifically due to position." },
          { answer: "Gravitational Potential Energy", explanation: "Correct! Gravitational potential energy is the energy an object has due to its height above the ground." }
        ],
        correctAnswer: "Gravitational Potential Energy"
      },
      {
        id: 120,
        question: "Which of the following is a nonrenewable resource?",
        answers: [
          { answer: "Solar Power", explanation: "This is incorrect. Solar power is renewable, as it comes from the Sun." },
          { answer: "Wind Power", explanation: "This is incorrect. Wind power is renewable, as it uses wind to generate energy." },
          { answer: "Natural Gas", explanation: "Correct! Natural gas is nonrenewable because it is formed over millions of years and cannot be replenished in a human lifetime." },
          { answer: "Geothermal Energy", explanation: "This is incorrect. Geothermal energy is renewable because it comes from the Earth's internal heat." }
        ],
        correctAnswer: "Natural Gas"
      }
    ],
    normal: [
      {
        id: 121,
        question: "What is the atomic number of carbon?",
        answers: [
          { answer: "4", explanation: "This is incorrect. The atomic number of beryllium is 4, not carbon." },
          { answer: "6", explanation: "Correct! The atomic number of carbon is 6, as it has 6 protons in its nucleus." },
          { answer: "8", explanation: "This is incorrect. The atomic number of oxygen is 8, not carbon." },
          { answer: "10", explanation: "This is incorrect. The atomic number of neon is 10, not carbon." }
        ],
        correctAnswer: "6"
      },
      {
        id: 122,
        question: "What type of rock is formed under intense heat and pressure?",
        answers: [
          { answer: "Igneous", explanation: "This is incorrect. Igneous rocks are formed from the cooling of molten material, not from heat and pressure." },
          { answer: "Sedimentary", explanation: "This is incorrect. Sedimentary rocks are formed from the accumulation of sediments, not from heat and pressure." },
          { answer: "Metamorphic", explanation: "Correct! Metamorphic rocks are formed when existing rocks are subjected to intense heat and pressure." },
          { answer: "Fossilized", explanation: "This is incorrect. Fossilization is a biological process, not related to rock formation under heat and pressure." }
        ],
        correctAnswer: "Metamorphic"
      },
      {
        id: 123,
        question: "Which part of the cell is responsible for producing energy?",
        answers: [
          { answer: "Nucleus", explanation: "This is incorrect. The nucleus controls the cell’s activities but does not produce energy." },
          { answer: "Ribosome", explanation: "This is incorrect. Ribosomes are responsible for protein synthesis, not energy production." },
          { answer: "Mitochondria", explanation: "Correct! Mitochondria are responsible for converting nutrients into usable energy for the cell." },
          { answer: "Cell Wall", explanation: "This is incorrect. The cell wall provides structure and protection but does not produce energy." }
        ],
        correctAnswer: "Mitochondria"
      },
      {
        id: 124,
        question: "What is the pH value of pure water?",
        answers: [
          { answer: "5", explanation: "This is incorrect. A pH of 5 is acidic, but pure water is neutral." },
          { answer: "7", explanation: "Correct! Pure water is neutral, which means it has a pH of 7." },
          { answer: "9", explanation: "This is incorrect. A pH of 9 is alkaline, not neutral like pure water." },
          { answer: "12", explanation: "This is incorrect. A pH of 12 is strongly alkaline, not neutral like pure water." }
        ],
        correctAnswer: "7"
      },
      {
        id: 125,
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
          { answer: "Oxygen", explanation: "This is incorrect. While oxygen is essential for life, it makes up a smaller percentage of the atmosphere." },
          { answer: "Carbon Dioxide", explanation: "This is incorrect. Carbon dioxide is present in small amounts in the atmosphere." },
          { answer: "Nitrogen", explanation: "Correct! Nitrogen makes up approximately 78% of Earth's atmosphere." },
          { answer: "Argon", explanation: "This is incorrect. Argon is present in trace amounts in the atmosphere." }
        ],
        correctAnswer: "Nitrogen"
      },
      {
        id: 126,
        question: "What is the primary function of white blood cells?",
        answers: [
          { answer: "To carry oxygen", explanation: "This is incorrect. Carrying oxygen is the role of red blood cells, not white blood cells." },
          { answer: "To fight infections", explanation: "Correct! White blood cells are part of the immune system and help fight infections." },
          { answer: "To break down food", explanation: "This is incorrect. The digestive system breaks down food, not white blood cells." },
          { answer: "To transport nutrients", explanation: "This is incorrect. Nutrient transport is the role of blood plasma and red blood cells." }
        ],
        correctAnswer: "To fight infections"
      },
      {
        id: 127,
        question: "What is the term for animals that only eat plants?",
        answers: [
          { answer: "Omnivores", explanation: "This is incorrect. Omnivores eat both plants and animals, not just plants." },
          { answer: "Herbivores", explanation: "Correct! Herbivores are animals that eat only plants." },
          { answer: "Carnivores", explanation: "This is incorrect. Carnivores eat only meat, not plants." },
          { answer: "Decomposers", explanation: "This is incorrect. Decomposers break down dead organisms, not eat plants." }
        ],
        correctAnswer: "Herbivores"
      },
      {
        id: 128,
        question: "What type of energy is stored in the bonds between atoms?",
        answers: [
          { answer: "Thermal", explanation: "This is incorrect. Thermal energy is related to heat, not energy stored in atomic bonds." },
          { answer: "Kinetic", explanation: "This is incorrect. Kinetic energy is the energy of motion, not stored in atomic bonds." },
          { answer: "Chemical", explanation: "Correct! Chemical energy is stored in the bonds between atoms and can be released in chemical reactions." },
          { answer: "Elastic", explanation: "This is incorrect. Elastic energy is stored in objects that are stretched or compressed, not in atomic bonds." }
        ],
        correctAnswer: "Chemical"
      },
      {
        id: 129,
        question: "What is the powerhouse of the cell?",
        answers: [
          { answer: "Nucleus", explanation: "This is incorrect. The nucleus controls the cell’s activities but does not produce energy." },
          { answer: "Mitochondria", explanation: "Correct! Mitochondria are responsible for converting nutrients into usable energy for the cell." },
          { answer: "Endoplasmic Reticulum", explanation: "This is incorrect. The endoplasmic reticulum is involved in protein and lipid synthesis, not energy production." },
          { answer: "Golgi Apparatus", explanation: "This is incorrect. The Golgi apparatus is responsible for packaging proteins but does not produce energy." }
        ],
        correctAnswer: "Mitochondria"
      },
      {
        id: 130,
        question: "What gas do plants release during photosynthesis?",
        answers: [
          { answer: "Oxygen", explanation: "Correct! During photosynthesis, plants release oxygen as a byproduct." },
          { answer: "Carbon Dioxide", explanation: "This is incorrect. Plants take in carbon dioxide, but they release oxygen." },
          { answer: "Nitrogen", explanation: "This is incorrect. Nitrogen is absorbed by plants but not released during photosynthesis." },
          { answer: "Hydrogen", explanation: "This is incorrect. Hydrogen is involved in photosynthesis, but it is not released by plants." }
        ],
        correctAnswer: "Oxygen"
      },
      {
        id: 131,
        question: "Which planet has the largest number of moons?",
        answers: [
          { answer: "Jupiter", explanation: "This is incorrect. Jupiter has a large number of moons, but Saturn has more." },
          { answer: "Saturn", explanation: "Correct! Saturn has the most moons, with more than 80 known moons." },
          { answer: "Mars", explanation: "This is incorrect. Mars has only two moons, much fewer than Saturn." },
          { answer: "Neptune", explanation: "This is incorrect. Neptune has 14 moons, significantly fewer than Saturn." }
        ],
        correctAnswer: "Saturn"
      },
      {
        id: 132,
        question: "Which scientist is famous for the theory of evolution?",
        answers: [
          { answer: "Isaac Newton", explanation: "This is incorrect. Isaac Newton is known for his laws of motion and gravity, not for the theory of evolution." },
          { answer: "Charles Darwin", explanation: "Correct! Charles Darwin is best known for developing the theory of evolution by natural selection." },
          { answer: "Marie Curie", explanation: "This is incorrect. Marie Curie is famous for her work with radioactivity, not for the theory of evolution." },
          { answer: "Albert Einstein", explanation: "This is incorrect. Albert Einstein is known for his theories of relativity, not for the theory of evolution." }
        ],
        correctAnswer: "Charles Darwin"
      },
      {
        id: 133,
        question: "What element is represented by the symbol 'Fe'?",
        answers: [
          { answer: "Fluorine", explanation: "This is incorrect. Fluorine is represented by the symbol 'F', not 'Fe'." },
          { answer: "Iron", explanation: "Correct! 'Fe' stands for iron, which comes from the Latin word 'ferrum'." },
          { answer: "Phosphorus", explanation: "This is incorrect. Phosphorus is represented by the symbol 'P', not 'Fe'." },
          { answer: "Francium", explanation: "This is incorrect. Francium is represented by the symbol 'Fr', not 'Fe'." }
        ],
        correctAnswer: "Iron"
      },
      {
        id: 134,
        question: "Which layer of Earth's atmosphere contains the ozone layer?",
        answers: [
          { answer: "Troposphere", explanation: "This is incorrect. The troposphere is where weather occurs, but the ozone layer is higher up." },
          { answer: "Stratosphere", explanation: "Correct! The ozone layer is located in the stratosphere, protecting life on Earth from harmful ultraviolet radiation." },
          { answer: "Mesosphere", explanation: "This is incorrect. The mesosphere is above the stratosphere, but it does not contain the ozone layer." },
          { answer: "Thermosphere", explanation: "This is incorrect. The thermosphere is above the mesosphere and contains high-energy particles, but not the ozone layer." }
        ],
        correctAnswer: "Stratosphere"
      },
      {
        id: 135,
        question: "What is the formula for calculating speed?",
        answers: [
          { answer: "Distance ÷ Time", explanation: "Correct! Speed is calculated by dividing the distance traveled by the time taken." },
          { answer: "Mass × Acceleration", explanation: "This is incorrect. Mass × Acceleration gives the force, not the speed." },
          { answer: "Force ÷ Area", explanation: "This is incorrect. Force ÷ Area calculates pressure, not speed." },
          { answer: "Energy × Time", explanation: "This is incorrect. Energy × Time is not a formula for calculating speed." }
        ],
        correctAnswer: "Distance ÷ Time"
      },
      {
        id: 136,
        question: "Which planet is known for having the most visible ring system?",
        answers: [
          { answer: "Jupiter", explanation: "This is incorrect. Jupiter has rings, but they are not as visible as Saturn's." },
          { answer: "Uranus", explanation: "This is incorrect. Uranus has rings, but they are not as prominent as Saturn's." },
          { answer: "Saturn", explanation: "Correct! Saturn is known for its stunning and prominent ring system." },
          { answer: "Neptune", explanation: "This is incorrect. Neptune has rings, but they are not as noticeable as Saturn's." }
        ],
        correctAnswer: "Saturn"
      },
      {
        id: 137,
        question: "What is the chemical symbol for sodium?",
        answers: [
          { answer: "Na", explanation: "Correct! 'Na' is the chemical symbol for sodium, derived from the Latin word 'natron.'" },
          { answer: "So", explanation: "This is incorrect. 'So' is not the symbol for any element." },
          { answer: "Sn", explanation: "This is incorrect. 'Sn' is the chemical symbol for tin, not sodium." },
          { answer: "Sm", explanation: "This is incorrect. 'Sm' is the chemical symbol for samarium, not sodium." }
        ],
        correctAnswer: "Na"
      },
      {
        id: 138,
        question: "Which part of the eye controls the amount of light that enters?",
        answers: [
          { answer: "Iris", explanation: "Correct! The iris controls the size of the pupil, which regulates how much light enters the eye." },
          { answer: "Pupil", explanation: "This is incorrect. The pupil is the opening through which light enters, but the iris controls its size." },
          { answer: "Cornea", explanation: "This is incorrect. The cornea helps focus light, but it does not control its entry." },
          { answer: "Lens", explanation: "This is incorrect. The lens focuses light onto the retina but does not control its entry into the eye." }
        ],
        correctAnswer: "Iris"
      },
      {
        id: 139,
        question: "What type of simple machine is a seesaw?",
        answers: [
          { answer: "Inclined Plane", explanation: "This is incorrect. An inclined plane is a slanted surface, not a seesaw." },
          { answer: "Pulley", explanation: "This is incorrect. A pulley is a wheel and rope system, not a seesaw." },
          { answer: "Lever", explanation: "Correct! A seesaw is a type of lever, with a fulcrum in the middle and force applied at either end." },
          { answer: "Wheel and Axle", explanation: "This is incorrect. A wheel and axle is a different type of simple machine used for rotating objects." }
        ],
        correctAnswer: "Lever"
      },
      {
        id: 140,
        question: "What type of cloud is often associated with thunderstorms?",
        answers: [
          { answer: "Stratus", explanation: "This is incorrect. Stratus clouds are low, gray clouds that bring overcast conditions, not thunderstorms." },
          { answer: "Cumulus", explanation: "This is incorrect. While cumulus clouds can develop into larger storm clouds, they are not typically associated with thunderstorms." },
          { answer: "Cirrus", explanation: "This is incorrect. Cirrus clouds are high-altitude clouds that do not bring thunderstorms." },
          { answer: "Cumulonimbus", explanation: "Correct! Cumulonimbus clouds are towering clouds associated with thunderstorms, lightning, and heavy rain." }
        ],
        correctAnswer: "Cumulonimbus"
      }
    ],
    hard: [
      {
        id: 151,
        question: "What is the chemical formula for glucose?",
        answers: [
          { answer: "C6H12O6", explanation: "Correct! C6H12O6 is the molecular formula for glucose." },
          { answer: "CH4", explanation: "Incorrect. CH4 is the chemical formula for methane." },
          { answer: "H2O", explanation: "Incorrect. H2O is the chemical formula for water." },
          { answer: "CO2", explanation: "Incorrect. CO2 is the chemical formula for carbon dioxide." }
        ],
        correctAnswer: "C6H12O6"
      },
      {
        id: 152,
        question: "What type of bond involves the sharing of electron pairs between atoms?",
        answers: [
          { answer: "Ionic", explanation: "Incorrect. Ionic bonds involve the transfer of electrons, not sharing." },
          { answer: "Hydrogen", explanation: "Incorrect. Hydrogen bonds are weak attractions between molecules, not strong electron-sharing bonds." },
          { answer: "Covalent", explanation: "Correct! Covalent bonds involve the sharing of electron pairs." },
          { answer: "Metallic", explanation: "Incorrect. Metallic bonds involve a 'sea' of electrons shared among metal atoms." }
        ],
        correctAnswer: "Covalent"
      },
      {
        id: 153,
        question: "What is the term for a star that suddenly increases in brightness due to an explosion?",
        answers: [
          { answer: "Quasar", explanation: "Incorrect. A quasar is a bright galactic nucleus powered by a supermassive black hole." },
          { answer: "Nova", explanation: "Correct! A nova occurs when a star suddenly brightens due to a thermonuclear explosion." },
          { answer: "Pulsar", explanation: "Incorrect. A pulsar is a rapidly rotating neutron star emitting beams of radiation." },
          { answer: "Nebula", explanation: "Incorrect. A nebula is a cloud of gas and dust in space." }
        ],
        correctAnswer: "Nova"
      },
      {
        id: 154,
        question: "Which scientist proposed the laws of planetary motion?",
        answers: [
          { answer: "Isaac Newton", explanation: "Incorrect. Newton developed the laws of motion and universal gravitation." },
          { answer: "Galileo Galilei", explanation: "Incorrect. Galileo improved the telescope and supported heliocentrism but did not formulate the planetary motion laws." },
          { answer: "Johannes Kepler", explanation: "Correct! Kepler's laws describe planetary orbits and their motion." },
          { answer: "Albert Einstein", explanation: "Incorrect. Einstein is known for the theory of relativity, not planetary motion." }
        ],
        correctAnswer: "Johannes Kepler"
      },
      {
        id: 155,
        question: "What type of radiation has the shortest wavelength?",
        answers: [
          { answer: "Radio Waves", explanation: "Incorrect. Radio waves have the longest wavelength in the electromagnetic spectrum." },
          { answer: "X-Rays", explanation: "Incorrect. X-rays have shorter wavelengths than visible light but are not the shortest." },
          { answer: "Gamma Rays", explanation: "Correct! Gamma rays have the shortest wavelengths and the highest energy." },
          { answer: "Infrared", explanation: "Incorrect. Infrared radiation has longer wavelengths than visible light." }
        ],
        correctAnswer: "Gamma Rays"
      },
      {
        id: 156,
        question: "What organelle is responsible for protein synthesis in cells?",
        answers: [
          { answer: "Ribosome", explanation: "Correct! Ribosomes are responsible for assembling proteins from amino acids." },
          { answer: "Nucleus", explanation: "Incorrect. The nucleus controls cell functions but does not directly synthesize proteins." },
          { answer: "Mitochondria", explanation: "Incorrect. Mitochondria generate energy for the cell but are not involved in protein synthesis." },
          { answer: "Golgi Apparatus", explanation: "Incorrect. The Golgi apparatus modifies and packages proteins but does not build them." }
        ],
        correctAnswer: "Ribosome"
      },
      {
        id: 157,
        question: "What is the chemical symbol for tungsten?",
        answers: [
          { answer: "W", explanation: "Correct! Tungsten's symbol is 'W' based on its original name, wolfram." },
          { answer: "Tu", explanation: "Incorrect. 'Tu' is not a valid chemical symbol." },
          { answer: "Tg", explanation: "Incorrect. 'Tg' is not a recognized element symbol." },
          { answer: "Tm", explanation: "Incorrect. 'Tm' is the symbol for thulium, not tungsten." }
        ],
        correctAnswer: "W"
      },
      {
        id: 158,
        question: "Which gas law describes the inverse relationship between pressure and volume?",
        answers: [
          { answer: "Boyle's Law", explanation: "Correct! Boyle's Law states that pressure and volume are inversely proportional in a closed system." },
          { answer: "Charles' Law", explanation: "Incorrect. Charles' Law describes the relationship between volume and temperature." },
          { answer: "Dalton's Law", explanation: "Incorrect. Dalton's Law deals with the partial pressures of gases in a mixture." },
          { answer: "Avogadro's Law", explanation: "Incorrect. Avogadro's Law relates gas volume to the number of gas particles." }
        ],
        correctAnswer: "Boyle's Law"
      },
      {
        id: 159,
        question: "What is the term for the splitting of a nucleus into smaller nuclei?",
        answers: [
          { answer: "Fusion", explanation: "Incorrect. Fusion is the process of combining nuclei, not splitting them." },
          { answer: "Fission", explanation: "Correct! Fission is the splitting of a nucleus into smaller nuclei, releasing energy." },
          { answer: "Combustion", explanation: "Incorrect. Combustion is a chemical reaction involving oxygen and fuel, not nuclear splitting." },
          { answer: "Oxidation", explanation: "Incorrect. Oxidation involves the loss of electrons, not nuclear reactions." }
        ],
        correctAnswer: "Fission"
      },
      {
        id: 160,
        question: "What is the charge of an alpha particle?",
        answers: [
          { answer: "+2", explanation: "Correct! An alpha particle carries a +2 charge due to its two protons." },
          { answer: "-1", explanation: "Incorrect. A -1 charge is characteristic of an electron, not an alpha particle." },
          { answer: "0", explanation: "Incorrect. A neutral charge typically applies to neutrons." },
          { answer: "+1", explanation: "Incorrect. While a proton has a +1 charge, an alpha particle is composed of two protons." }
        ],
        correctAnswer: "+2"
      },
      {
        id: 161,
        question: "Which planet rotates on its side compared to the others?",
        answers: [
          { answer: "Venus", explanation: "Incorrect. Venus has a unique rotation, but it's not tilted like Uranus." },
          { answer: "Uranus", explanation: "Correct! Uranus has an axial tilt of about 98 degrees, causing it to rotate on its side." },
          { answer: "Saturn", explanation: "Incorrect. Saturn's rotation is not tilted as much as Uranus." },
          { answer: "Mercury", explanation: "Incorrect. Mercury has a very slow rotation but does not rotate on its side." }
        ],
        correctAnswer: "Uranus"
      },
      {
        id: 162,
        question: "What is the name for a substance that speeds up a chemical reaction?",
        answers: [
          { answer: "Reactant", explanation: "Incorrect. Reactants are the starting materials in a chemical reaction." },
          { answer: "Product", explanation: "Incorrect. Products are the substances formed as a result of a chemical reaction." },
          { answer: "Catalyst", explanation: "Correct! A catalyst speeds up a chemical reaction without being consumed in the process." },
          { answer: "Inhibitor", explanation: "Incorrect. An inhibitor slows down or stops a chemical reaction." }
        ],
        correctAnswer: "Catalyst"
      },
      {
        id: 163,
        question: "What is the term for the minimum energy required to start a chemical reaction?",
        answers: [
          { answer: "Activation Energy", explanation: "Correct! Activation energy is the energy required to start a chemical reaction." },
          { answer: "Kinetic Energy", explanation: "Incorrect. Kinetic energy is the energy of motion, not the energy needed to initiate a reaction." },
          { answer: "Potential Energy", explanation: "Incorrect. Potential energy refers to stored energy due to position, not activation of reactions." },
          { answer: "Heat Capacity", explanation: "Incorrect. Heat capacity is a property that defines the heat required to change temperature, not to start a reaction." }
        ],
        correctAnswer: "Activation Energy"
      },
      {
        id: 164,
        question: "What part of the brain controls balance and coordination?",
        answers: [
          { answer: "Cerebrum", explanation: "Incorrect. The cerebrum is responsible for higher brain functions like thinking and voluntary movement, but not balance." },
          { answer: "Cerebellum", explanation: "Correct! The cerebellum controls balance and coordination." },
          { answer: "Medulla", explanation: "Incorrect. The medulla regulates vital functions like heart rate and breathing, but not coordination." },
          { answer: "Hypothalamus", explanation: "Incorrect. The hypothalamus controls hormones and homeostasis, not balance." }
        ],
        correctAnswer: "Cerebellum"
      },
      {
        id: 165,
        question: "Which type of electromagnetic wave is used for sterilization?",
        answers: [
          { answer: "Ultraviolet", explanation: "Correct! Ultraviolet (UV) light is used for sterilization by killing bacteria and viruses." },
          { answer: "Infrared", explanation: "Incorrect. Infrared radiation is primarily used for heat, not sterilization." },
          { answer: "Microwave", explanation: "Incorrect. Microwaves are used for heating food, not sterilizing." },
          { answer: "Gamma Rays", explanation: "Incorrect. Gamma rays are highly energetic but are not commonly used for sterilization in everyday contexts." }
        ],
        correctAnswer: "Ultraviolet"
      },
      {
        id: 166,
        question: "Which element is most abundant in Earth's crust?",
        answers: [
          { answer: "Silicon", explanation: "Incorrect. Silicon is abundant, but not the most abundant element in the Earth's crust." },
          { answer: "Aluminum", explanation: "Incorrect. Aluminum is abundant but not the most abundant element in the Earth's crust." },
          { answer: "Iron", explanation: "Incorrect. Iron is abundant in the Earth's core, but not the most abundant element in the crust." },
          { answer: "Oxygen", explanation: "Correct! Oxygen is the most abundant element in Earth's crust, making up around 46% by weight." }
        ],
        correctAnswer: "Oxygen"
      },
      {
        id: 167,
        question: "What is the unit for measuring electric current?",
        answers: [
          { answer: "Volt", explanation: "Incorrect. Volt measures electric potential difference, not current." },
          { answer: "Watt", explanation: "Incorrect. Watt measures power, not electric current." },
          { answer: "Ohm", explanation: "Incorrect. Ohm is a unit of resistance, not current." },
          { answer: "Ampere", explanation: "Correct! The unit for electric current is the ampere (A), often shortened to amp." }
        ],
        correctAnswer: "Ampere"
      },
      {
        id: 168,
        question: "What is the name for the constant in Einstein's energy-mass equation (E=mc^2)?",
        answers: [
          { answer: "Planck's Constant", explanation: "Incorrect. Planck's constant is related to quantum mechanics, not Einstein's equation." },
          { answer: "Speed of Sound", explanation: "Incorrect. The speed of sound is not relevant in Einstein's equation." },
          { answer: "Gravitational Constant", explanation: "Incorrect. The gravitational constant relates to Newton's law of gravitation, not Einstein's equation." },
          { answer: "Speed of Light", explanation: "Correct! The constant 'c' in Einstein's equation is the speed of light in a vacuum." }
        ],
        correctAnswer: "Speed of Light"
      },
      {
        id: 169,
        question: "What is the chemical formula for ammonia?",
        answers: [
          { answer: "NH3", explanation: "Correct! Ammonia has the chemical formula NH3, consisting of one nitrogen atom and three hydrogen atoms." },
          { answer: "NO3", explanation: "Incorrect. NO3 is the formula for nitrate, not ammonia." },
          { answer: "CH4", explanation: "Incorrect. CH4 is the formula for methane, not ammonia." },
          { answer: "H2SO4", explanation: "Incorrect. H2SO4 is sulfuric acid, not ammonia." }
        ],
        correctAnswer: "NH3"
      },
      {
        id: 170,
        question: "What is the term for the study of how organisms interact with their environment?",
        answers: [
          { answer: "Biology", explanation: "Incorrect. Biology is the study of living organisms in general, not specifically their interaction with the environment." },
          { answer: "Ecology", explanation: "Correct! Ecology is the study of how organisms interact with their environment and each other." },
          { answer: "Genetics", explanation: "Incorrect. Genetics is the study of heredity and genes, not organism-environment interactions." },
          { answer: "Zoology", explanation: "Incorrect. Zoology is the study of animals, not the study of interactions with the environment." }
        ],
        correctAnswer: "Ecology"
      },
      {
        id: 171,
        question: "What is the strongest type of intermolecular force?",
        answers: [
          { answer: "Dipole-Dipole", explanation: "Incorrect. Dipole-dipole interactions are strong, but not the strongest intermolecular force." },
          { answer: "London Dispersion", explanation: "Incorrect. London dispersion forces are weak compared to other types of intermolecular forces." },
          { answer: "Ionic Bond", explanation: "Incorrect. Ionic bonds are strong but are not considered an intermolecular force." },
          { answer: "Hydrogen Bond", explanation: "Correct! Hydrogen bonds are the strongest intermolecular force, found between molecules containing hydrogen attached to electronegative atoms like oxygen or nitrogen." }
        ],
        correctAnswer: "Hydrogen Bond"
      },
      {
        id: 172,
        question: "What is the term for an organism’s ability to maintain stable internal conditions?",
        answers: [
          { answer: "Osmosis", explanation: "Incorrect. Osmosis is the movement of water across a semipermeable membrane, not the ability to maintain internal conditions." },
          { answer: "Homeostasis", explanation: "Correct! Homeostasis is the process by which organisms regulate and maintain stable internal conditions despite changes in the external environment." },
          { answer: "Metabolism", explanation: "Incorrect. Metabolism refers to the chemical reactions in the body that convert food into energy, not the maintenance of internal balance." },
          { answer: "Diffusion", explanation: "Incorrect. Diffusion refers to the movement of particles from an area of high concentration to low concentration, not the regulation of internal conditions." }
        ],
        correctAnswer: "Homeostasis"
      },
      {
        id: 173,
        question: "What is the name of the telescope that provided deep-space images of galaxies?",
        answers: [
          { answer: "Hubble", explanation: "Correct! The Hubble Space Telescope has provided some of the most detailed deep-space images of galaxies and other celestial objects." },
          { answer: "Kepler", explanation: "Incorrect. The Kepler Space Telescope primarily searched for exoplanets, not deep-space galaxies." },
          { answer: "James Webb", explanation: "Incorrect. The James Webb Space Telescope has yet to launch at the time of this writing." },
          { answer: "Spitzer", explanation: "Incorrect. The Spitzer Space Telescope observed infrared light, but Hubble has provided the most iconic deep-space images." }
        ],
        correctAnswer: "Hubble"
      },
      {
        id: 174,
        question: "Which part of the DNA molecule carries genetic information?",
        answers: [
          { answer: "Phosphate Backbone", explanation: "Incorrect. The phosphate backbone provides structure, but it doesn't carry genetic information." },
          { answer: "Deoxyribose Sugar", explanation: "Incorrect. The deoxyribose sugar is part of the structure of DNA but doesn't carry genetic information." },
          { answer: "Nitrogenous Bases", explanation: "Correct! The nitrogenous bases (adenine, thymine, cytosine, and guanine) encode the genetic information in DNA." },
          { answer: "Hydrogen Bonds", explanation: "Incorrect. Hydrogen bonds hold the two strands of DNA together but do not carry genetic information." }
        ],
        correctAnswer: "Nitrogenous Bases"
      },
      {
        id: 175,
        question: "Which law describes the relationship between a gas’s pressure and temperature?",
        answers: [
          { answer: "Boyle's Law", explanation: "Incorrect. Boyle's Law describes the relationship between pressure and volume, not pressure and temperature." },
          { answer: "Charles' Law", explanation: "Incorrect. Charles' Law describes the relationship between temperature and volume, not pressure and temperature." },
          { answer: "Gay-Lussac's Law", explanation: "Correct! Gay-Lussac's Law describes the direct relationship between the pressure and temperature of a gas, assuming constant volume." },
          { answer: "Avogadro's Law", explanation: "Incorrect. Avogadro's Law describes the relationship between the number of particles and volume, not pressure and temperature." }
        ],
        correctAnswer: "Gay-Lussac's Law"
      },
      {
        id: 176,
        question: "What is the primary gas responsible for the greenhouse effect?",
        answers: [
          { answer: "Oxygen", explanation: "Incorrect. While oxygen is essential for life, it doesn't play a significant role in the greenhouse effect." },
          { answer: "Methane", explanation: "Incorrect. Methane is a potent greenhouse gas, but carbon dioxide is the primary gas responsible for the greenhouse effect." },
          { answer: "Carbon Dioxide", explanation: "Correct! Carbon dioxide (CO2) is the primary greenhouse gas responsible for trapping heat in Earth's atmosphere." },
          { answer: "Ozone", explanation: "Incorrect. The ozone layer helps protect Earth from harmful ultraviolet radiation, but it is not the primary greenhouse gas." }
        ],
        correctAnswer: "Carbon Dioxide"
      },
      {
        id: 177,
        question: "Which layer of Earth is composed primarily of liquid iron and nickel?",
        answers: [
          { answer: "Crust", explanation: "Incorrect. The crust is the outermost layer of Earth and is composed mostly of rocks and minerals, not liquid iron and nickel." },
          { answer: "Mantle", explanation: "Incorrect. The mantle is composed mainly of silicate rocks, and although it has some liquid parts, it is not primarily liquid iron and nickel." },
          { answer: "Outer Core", explanation: "Correct! The outer core is composed mostly of liquid iron and nickel, and its movement generates Earth's magnetic field." },
          { answer: "Inner Core", explanation: "Incorrect. The inner core is solid and composed primarily of iron and nickel, not liquid." }
        ],
        correctAnswer: "Outer Core"
      },
      {
        id: 178,
        question: "What type of mirror is used in car headlights to focus light?",
        answers: [
          { answer: "Convex", explanation: "Incorrect. Convex mirrors spread out light, making objects appear smaller, which is not suitable for focusing light in headlights." },
          { answer: "Concave", explanation: "Correct! Concave mirrors are used in car headlights because they can focus light into a beam." },
          { answer: "Flat", explanation: "Incorrect. Flat mirrors do not focus light; they simply reflect light in a straight line." },
          { answer: "Cylindrical", explanation: "Incorrect. Cylindrical mirrors distort light in a way that isn't useful for focusing beams in headlights." }
        ],
        correctAnswer: "Concave"
      },
      {
        id: 179,
        question: "Which scientist is credited with discovering the electron?",
        answers: [
          { answer: "Rutherford", explanation: "Incorrect. Ernest Rutherford discovered the atomic nucleus but did not discover the electron." },
          { answer: "Bohr", explanation: "Incorrect. Niels Bohr developed the model of the atom, but he did not discover the electron." },
          { answer: "Dalton", explanation: "Incorrect. John Dalton is known for proposing the atomic theory, but he did not discover the electron." },
          { answer: "Thomson", explanation: "Correct! J.J. Thomson discovered the electron in 1897 through his experiments with cathode rays." }
        ],
        correctAnswer: "Thomson"
      },
      {
        id: 180,
        question: "What is the equation for calculating kinetic energy?",
        answers: [
          { answer: "mgh", explanation: "Incorrect. The equation mgh represents potential energy, not kinetic energy." },
          { answer: "1/2 mv^2", explanation: "Correct! The formula for kinetic energy is 1/2 mv^2, where m is mass and v is velocity." },
          { answer: "F x d", explanation: "Incorrect. F x d represents work done, not kinetic energy." },
          { answer: "V x I", explanation: "Incorrect. V x I represents electrical power, not kinetic energy." }
        ],
        correctAnswer: "1/2 mv^2"
      }
    ]
  },
  english: {
    easy: [
      {
        id: 181,
        question: "Which sentence is correct?",
        answers: [
          { answer: "She can sings well.", explanation: "This is incorrect. 'Can' should be followed by the base form of the verb, not the third-person singular form." },
          { answer: "She can sing well.", explanation: "This is the correct form. After 'can,' we use the base form of the verb, 'sing.'" },
          { answer: "She can singing well.", explanation: "This is incorrect. 'Can' is followed by the base verb, not the '-ing' form." },
          { answer: "She can sung well.", explanation: "This is incorrect. 'Can' is followed by the base form of the verb, not the past participle form." }
        ],
        correctAnswer: "She can sing well."
      },
      {
        id: 182,
        question: "Which sentence is correct?",
        answers: [
          { answer: "I has a book.", explanation: "This is incorrect. The verb 'has' is used for 'he,' 'she,' and 'it.' For 'I,' you should use 'have.'" },
          { answer: "I have a book.", explanation: "This is correct. 'I' is followed by 'have' in the present tense." },
          { answer: "I haves a book.", explanation: "This is incorrect. 'Haves' is not used with 'I.' 'I' takes 'have' in the present tense." },
          { answer: "I having a book.", explanation: "This is incorrect. 'Having' is the present participle, and we need 'have' to indicate possession." }
        ],
        correctAnswer: "I have a book."
      },
      {
        id: 183,
        question: "Which sentence is correct?",
        answers: [
          { answer: "He goed to school.", explanation: "This is incorrect. The past tense of 'go' is 'went,' not 'goed.'" },
          { answer: "He went to school.", explanation: "This is the correct sentence. The past tense of 'go' is 'went.'" },
          { answer: "He going to school.", explanation: "This is incorrect. 'Going' needs a helping verb, like 'is' or 'was,' for the present continuous." },
          { answer: "He gone to school.", explanation: "This is incorrect. 'Gone' is the past participle, and we need 'went' for the past simple." }
        ],
        correctAnswer: "He went to school."
      },
      {
        id: 184,
        question: "Which sentence is correct?",
        answers: [
          { answer: "She don’t like pizza.", explanation: "This is incorrect. With 'she,' the correct form is 'doesn't,' not 'don't.'" },
          { answer: "She doesn't like pizza.", explanation: "This is correct. 'Doesn't' is used with third-person singular subjects like 'she.'" },
          { answer: "She not like pizza.", explanation: "This is incorrect. In negative sentences with 'she,' 'doesn't' is needed before the verb." },
          { answer: "She doesn't likes pizza.", explanation: "This is incorrect. After 'doesn't,' we use the base form of the verb, which is 'like,' not 'likes.'" }
        ],
        correctAnswer: "She doesn't like pizza."
      },
      {
        id: 185,
        question: "Which sentence is correct?",
        answers: [
          { answer: "I am go to the store.", explanation: "This is incorrect. 'Am' should be followed by the '-ing' form of the verb, 'going.'" },
          { answer: "I am going to the store.", explanation: "This is correct. 'Am' is followed by 'going' to form the present continuous tense." },
          { answer: "I going to the store.", explanation: "This is incorrect. You need 'am' before 'going' to form the present continuous." },
          { answer: "I goes to the store.", explanation: "This is incorrect. 'Goes' is used with third-person singular subjects like 'he' or 'she,' but we use 'go' with 'I.'" }
        ],
        correctAnswer: "I am going to the store."
      },
      {
        id: 186,
        question: "Which sentence is correct?",
        answers: [
          { answer: "They was at the party.", explanation: "This is incorrect. The correct form with 'they' is 'were,' not 'was.'" },
          { answer: "They were at the party.", explanation: "This is correct. 'They' takes 'were' in the past tense." },
          { answer: "They is at the party.", explanation: "This is incorrect. 'Is' is used for singular subjects, but 'they' needs 'were' in the past tense." },
          { answer: "They are at the party.", explanation: "This is incorrect. While 'are' is correct for present tense, the question asks for the past tense." }
        ],
        correctAnswer: "They were at the party."
      },
      {
        id: 187,
        question: "Which sentence is correct?",
        answers: [
          { answer: "I can playing soccer.", explanation: "This is incorrect. 'Can' is followed by the base form of the verb, not the '-ing' form." },
          { answer: "I can play soccer.", explanation: "This is correct. After 'can,' we use the base form of the verb, 'play.'" },
          { answer: "I can plays soccer.", explanation: "This is incorrect. After 'can,' we use the base form of the verb, not the third-person singular form 'plays.'" },
          { answer: "I can played soccer.", explanation: "This is incorrect. 'Can' is used with the base verb, not the past tense form." }
        ],
        correctAnswer: "I can play soccer."
      },
      {
        id: 188,
        question: "Which sentence is correct?",
        answers: [
          { answer: "She going to the park.", explanation: "This is incorrect. You need a form of 'be' (am, is, are) before 'going.'" },
          { answer: "She is going to the park.", explanation: "This is correct. 'Is' is the correct form of 'be' for 'she,' and 'going' is the verb form needed." },
          { answer: "She are going to the park.", explanation: "This is incorrect. 'Are' is used with 'they' and 'we,' but 'she' requires 'is.'" },
          { answer: "She are go to the park.", explanation: "This is incorrect. 'Are' is not correct with 'she,' and 'go' should be 'going.'" }
        ],
        correctAnswer: "She is going to the park."
      },
      {
        id: 189,
        question: "Which sentence is correct?",
        answers: [
          { answer: "I don’t likes apples.", explanation: "This is incorrect. After 'don't,' we use the base form of the verb, which is 'like.'" },
          { answer: "I don't like apples.", explanation: "This is correct. After 'don't,' we use the base form of the verb, 'like.'" },
          { answer: "I doesn't like apples.", explanation: "This is incorrect. 'Doesn't' is used with third-person singular subjects, but 'I' takes 'don't.'" },
          { answer: "I don't liking apples.", explanation: "This is incorrect. After 'don't,' we use the base form of the verb, not the '-ing' form." }
        ],
        correctAnswer: "I don't like apples."
      },
      {
        id: 190,
        question: "Which sentence is correct?",
        answers: [
          { answer: "She has went to the store.", explanation: "This is incorrect. 'Went' is the past tense of 'go.' 'Has' needs to be followed by the past participle form 'gone.'" },
          { answer: "She has gone to the store.", explanation: "This is correct. 'Has' is followed by the past participle 'gone.'" },
          { answer: "She has go to the store.", explanation: "This is incorrect. 'Go' is the base form of the verb. 'Has' needs the past participle 'gone.'" },
          { answer: "She has going to the store.", explanation: "This is incorrect. 'Has' needs to be followed by the past participle, not the '-ing' form." }
        ],
        correctAnswer: "She has gone to the store."
      }
    ],
    normal: [
      { id: 211, question: "What is the past tense of 'run'?", answers: ["Running", "Ran", "Runned", "Runs"], correctAnswer: "Ran" },
      // Additional normal English questions up to id 240
    ],
    hard: [
      { id: 241, question: "What is an example of a metaphor?", answers: ["The wind whispered through the trees", "The cat meowed loudly", "The sky is blue", "The sun is shining brightly"], correctAnswer: "The wind whispered through the trees" },
      // Additional hard English questions up to id 270
    ]
  }
};