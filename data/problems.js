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
      }
    ],
    hard: [
      { id: 61, question: "Solve for x: 2x + 6 = 16", answers: ["4", "5", "6", "7"], correctAnswer: "5" },
      { id: 62, question: "What is the value of x in the equation: 5x - 7 = 18?", answers: ["4", "5", "6", "7"], correctAnswer: "5" },
      { id: 63, question: "Solve for x: 3x - 4 = 11", answers: ["4", "5", "6", "7"], correctAnswer: "5" },
      { id: 64, question: "Solve for x: x^2 + 6x - 7 = 0", answers: ["-7, 1", "-1, 7", "-6, 1", "1, -7"], correctAnswer: "-7, 1" },
      { id: 65, question: "Simplify the expression: (x + 2)(x - 3)", answers: ["x^2 - x - 6", "x^2 + x - 6", "x^2 - 6x - 6", "x^2 - 5x - 6"], correctAnswer: "x^2 - x - 6" },
      { id: 66, question: "What is the result of 3x^2 - 2x + 5 when x = 2?", answers: ["11", "12", "13", "14"], correctAnswer: "11" },
      { id: 67, question: "What is the solution for the system of equations: 2x + y = 10 and x - y = 2?", answers: ["x = 3, y = 4", "x = 4, y = 3", "x = 5, y = 2", "x = 6, y = 1"], correctAnswer: "x = 6, y = 1" },
      { id: 68, question: "Solve for x: 4x^2 + 3x - 5 = 0", answers: ["-1, 5/4", "1, -5/4", "-5/4, 1", "-5/4, -1"], correctAnswer: "-5/4, 1" },
      { id: 69, question: "Simplify the expression: 6x - 3(x + 2)", answers: ["3x + 6", "3x + 5", "3x - 6", "3x - 5"], correctAnswer: "3x - 6" },
      { id: 70, question: "Solve the quadratic equation: x^2 - 4x - 5 = 0", answers: ["-5, 1", "5, -1", "-1, 5", "1, -5"], correctAnswer: "-5, 1" },
      { id: 71, question: "What is the solution for the system of equations: 3x + y = 10 and 2x - y = 3?", answers: ["x = 3, y = 1", "x = 2, y = 4", "x = 1, y = 2", "x = 2, y = 1"], correctAnswer: "x = 3, y = 1" },
      { id: 72, question: "What is the value of x in the equation: 5x + 2 = 3x + 10?", answers: ["4", "3", "5", "6"], correctAnswer: "4" },
      { id: 73, question: "Solve for x: x^2 - 5x + 6 = 0", answers: ["2, 3", "-2, -3", "1, 6", "4, -2"], correctAnswer: "2, 3" },
      { id: 74, question: "Simplify: 2x^2 + 3x + 5 - x^2 - 2x", answers: ["x^2 + x + 5", "x^2 + x + 7", "x^2 + 5x + 7", "x^2 + 5x + 5"], correctAnswer: "x^2 + x + 5" },
      { id: 75, question: "What is the value of x in the equation: 3(x - 4) = 18?", answers: ["5", "6", "7", "8"], correctAnswer: "10" },
      { id: 76, question: "Solve for x: x^2 - 3x = 18", answers: ["6, -3", "-6, 3", "3, -6", "-3, 6"], correctAnswer: "6, -3" },
      { id: 77, question: "What is the value of x in the equation: x^2 + 2x - 35 = 0?", answers: ["5, -7", "7, -5", "5, -6", "-5, 6"], correctAnswer: "7, -5" },
      { id: 78, question: "Solve the equation: 3(x + 2) = 2(x + 4)", answers: ["2", "3", "4", "5"], correctAnswer: "4" },
      { id: 79, question: "What is the solution to the system of equations: 2x + 3y = 14 and 4x - y = 10?", answers: ["x = 3, y = 2", "x = 4, y = 1", "x = 2, y = 3", "x = 1, y = 5"], correctAnswer: "x = 3, y = 2" },
      { id: 80, question: "Simplify: (x + 1)(x - 3)", answers: ["x^2 - 2x - 3", "x^2 - 2x + 3", "x^2 + 2x - 3", "x^2 - 3x + 3"], correctAnswer: "x^2 - 2x - 3" },
      { id: 81, question: "What is the area of a circle with a radius of 7?", answers: ["49π", "14π", "21π", "49"], correctAnswer: "49π" },
      { id: 82, question: "What is the volume of a cylinder with radius 3 and height 5? (Use π = 3.14)", answers: ["141.3", "141.4", "145.5", "135.2"], correctAnswer: "141.3" },
      { id: 83, question: "What is the sine of a 30° angle?", answers: ["1/2", "√3/2", "√2/2", "1"], correctAnswer: "1/2" },
      { id: 84, question: "What is the cosine of a 45° angle?", answers: ["√2/2", "1/2", "√3/2", "1"], correctAnswer: "√2/2" },
      { id: 85, question: "What is the area of a triangle with base 10 and height 8?", answers: ["40", "30", "50", "60"], correctAnswer: "40" },
      { id: 86, question: "Find the angle θ in a right triangle where the opposite side is 5 and the adjacent side is 12.", answers: ["22.6°", "45°", "36.87°", "53.13°"], correctAnswer: "22.6°" },
      { id: 87, question: "Find the length of the hypotenuse of a right triangle with legs 6 and 8.", answers: ["10", "12", "14", "16"], correctAnswer: "10" },
      { id: 88, question: "What is the area of a sector with a radius of 6 and a central angle of 60°?", answers: ["6π", "9π", "3π", "12π"], correctAnswer: "3π" },
      { id: 89, question: "What is the value of sin(60°)?", answers: ["√3/2", "1/2", "√2/2", "1"], correctAnswer: "√3/2" },
      { id: 90, question: "Find the volume of a cone with a radius of 4 and a height of 9. (Use π = 3.14)", answers: ["113.04", "114.04", "116.04", "115.04"], correctAnswer: "113.04" }
    ]
  },
  science: {
    easy: [
      { id: 91, question: "What is the chemical symbol for water?", answers: ["H2O", "O2", "CO2", "HO2"], correctAnswer: "H2O" },
      { id: 92, question: "What gas do plants absorb from the atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
      { id: 93, question: "What is the main source of energy for the Earth?", answers: ["The Moon", "The Sun", "The Earth’s core", "Clouds"], correctAnswer: "The Sun" },
      { id: 94, question: "What is the boiling point of water at sea level in Celsius?", answers: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: "100°C" },
      { id: 95, question: "What is the process by which plants make their own food?", answers: ["Photosynthesis", "Respiration", "Digestion", "Metabolism"], correctAnswer: "Photosynthesis" },
      { id: 96, question: "Which planet is known as the Red Planet?", answers: ["Mars", "Venus", "Earth", "Jupiter"], correctAnswer: "Mars" },
      { id: 97, question: "What is the primary function of red blood cells?", answers: ["To fight infections", "To carry oxygen", "To form blood clots", "To digest food"], correctAnswer: "To carry oxygen" },
      { id: 98, question: "What type of rock is formed from cooling lava or magma?", answers: ["Sedimentary", "Metamorphic", "Igneous", "Organic"], correctAnswer: "Igneous" },
      { id: 99, question: "Which of the following is a renewable resource?", answers: ["Coal", "Natural Gas", "Solar Energy", "Oil"], correctAnswer: "Solar Energy" },
      { id: 100, question: "What is the process by which a caterpillar turns into a butterfly?", answers: ["Metamorphosis", "Fission", "Evolution", "Transmutation"], correctAnswer: "Metamorphosis" },
      { id: 101, question: "What part of the plant absorbs water and nutrients?", answers: ["Leaf", "Stem", "Root", "Flower"], correctAnswer: "Root" },
      { id: 102, question: "What type of energy is stored in food?", answers: ["Chemical Energy", "Kinetic Energy", "Thermal Energy", "Electrical Energy"], correctAnswer: "Chemical Energy" },
      { id: 103, question: "What is the force that pulls objects towards the Earth?", answers: ["Magnetism", "Friction", "Gravity", "Inertia"], correctAnswer: "Gravity" },
      { id: 104, question: "Which organ is responsible for pumping blood throughout the body?", answers: ["Liver", "Lungs", "Heart", "Stomach"], correctAnswer: "Heart" },
      { id: 105, question: "What is the chemical symbol for oxygen?", answers: ["O", "O2", "O3", "Ox"], correctAnswer: "O" },
      { id: 106, question: "What type of energy is produced by the movement of electrons?", answers: ["Electrical Energy", "Chemical Energy", "Potential Energy", "Thermal Energy"], correctAnswer: "Electrical Energy" },
      { id: 107, question: "What is the largest organ in the human body?", answers: ["Heart", "Brain", "Lung", "Skin"], correctAnswer: "Skin" },
      { id: 108, question: "Which part of the brain controls balance and coordination?", answers: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], correctAnswer: "Cerebellum" },
      { id: 109, question: "What type of bond is formed when electrons are shared between two atoms?", answers: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"], correctAnswer: "Covalent bond" },
      { id: 110, question: "Which gas do humans exhale during respiration?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
      { id: 111, question: "What is the most common element in the Earth's crust?", answers: ["Oxygen", "Silicon", "Iron", "Carbon"], correctAnswer: "Oxygen" },
      { id: 112, question: "What kind of energy does a stretched spring have?", answers: ["Kinetic Energy", "Elastic Potential Energy", "Chemical Energy", "Gravitational Potential Energy"], correctAnswer: "Elastic Potential Energy" },
      { id: 113, question: "What is the main component of the Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Nitrogen" },
      { id: 114, question: "What is the smallest unit of matter?", answers: ["Atom", "Molecule", "Electron", "Proton"], correctAnswer: "Atom" },
      { id: 115, question: "What is the study of living organisms called?", answers: ["Physics", "Chemistry", "Biology", "Geology"], correctAnswer: "Biology" },
      { id: 116, question: "What is the process by which water changes from a liquid to a gas?", answers: ["Evaporation", "Condensation", "Precipitation", "Sublimation"], correctAnswer: "Evaporation" },
      { id: 117, question: "Which of the following is a type of galaxy?", answers: ["Spiral", "Pyramid", "Spherical", "Triangular"], correctAnswer: "Spiral" },
      { id: 118, question: "What is the function of the chloroplast in plant cells?", answers: ["To control the cell", "To produce energy", "To carry out photosynthesis", "To transport proteins"], correctAnswer: "To carry out photosynthesis" },
      { id: 119, question: "What type of energy is stored in an object due to its position above the ground?", answers: ["Gravitational Potential Energy", "Chemical Energy", "Mechanical Energy", "Kinetic Energy"], correctAnswer: "Gravitational Potential Energy" },
      { id: 120, question: "Which of the following is a nonrenewable resource?", answers: ["Solar Power", "Wind Power", "Natural Gas", "Geothermal Energy"], correctAnswer: "Natural Gas" }
    ],
    normal: [
      { id: 121, question: "What is the atomic number of carbon?", answers: ["4", "6", "8", "10"], correctAnswer: "6" },
      { id: 122, question: "What type of rock is formed under intense heat and pressure?", answers: ["Igneous", "Sedimentary", "Metamorphic", "Fossilized"], correctAnswer: "Metamorphic" },
      { id: 123, question: "Which part of the cell is responsible for producing energy?", answers: ["Nucleus", "Ribosome", "Mitochondria", "Cell Wall"], correctAnswer: "Mitochondria" },
      { id: 124, question: "What is the pH value of pure water?", answers: ["5", "7", "9", "12"], correctAnswer: "7" },
      { id: 125, question: "Which gas makes up the majority of Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
      { id: 126, question: "What is the primary function of white blood cells?", answers: ["To carry oxygen", "To fight infections", "To break down food", "To transport nutrients"], correctAnswer: "To fight infections" },
      { id: 127, question: "What is the term for animals that only eat plants?", answers: ["Omnivores", "Herbivores", "Carnivores", "Decomposers"], correctAnswer: "Herbivores" },
      { id: 128, question: "What type of energy is stored in the bonds between atoms?", answers: ["Thermal", "Kinetic", "Chemical", "Elastic"], correctAnswer: "Chemical" },
      { id: 129, question: "What is the powerhouse of the cell?", answers: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"], correctAnswer: "Mitochondria" },
      { id: 130, question: "What gas do plants release during photosynthesis?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Oxygen" },
      { id: 131, question: "Which planet has the largest number of moons?", answers: ["Jupiter", "Saturn", "Mars", "Neptune"], correctAnswer: "Saturn" },
      { id: 132, question: "Which scientist is famous for the theory of evolution?", answers: ["Isaac Newton", "Charles Darwin", "Marie Curie", "Albert Einstein"], correctAnswer: "Charles Darwin" },
      { id: 133, question: "What element is represented by the symbol 'Fe'?", answers: ["Fluorine", "Iron", "Phosphorus", "Francium"], correctAnswer: "Iron" },
      { id: 134, question: "Which layer of Earth's atmosphere contains the ozone layer?", answers: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correctAnswer: "Stratosphere" },
      { id: 135, question: "What is the formula for calculating speed?", answers: ["Distance ÷ Time", "Mass × Acceleration", "Force ÷ Area", "Energy × Time"], correctAnswer: "Distance ÷ Time" },
      { id: 136, question: "Which planet is known for having the most visible ring system?", answers: ["Jupiter", "Uranus", "Saturn", "Neptune"], correctAnswer: "Saturn" },
      { id: 137, question: "What is the chemical symbol for sodium?", answers: ["Na", "So", "Sn", "Sm"], correctAnswer: "Na" },
      { id: 138, question: "Which part of the eye controls the amount of light that enters?", answers: ["Iris", "Pupil", "Cornea", "Lens"], correctAnswer: "Iris" },
      { id: 139, question: "What type of simple machine is a seesaw?", answers: ["Inclined Plane", "Pulley", "Lever", "Wheel and Axle"], correctAnswer: "Lever" },
      { id: 140, question: "What type of cloud is often associated with thunderstorms?", answers: ["Stratus", "Cumulus", "Cirrus", "Cumulonimbus"], correctAnswer: "Cumulonimbus" },
      { id: 141, question: "What is the name for organisms that make their own food?", answers: ["Producers", "Consumers", "Decomposers", "Scavengers"], correctAnswer: "Producers" },
      { id: 142, question: "Which vitamin is produced when the skin is exposed to sunlight?", answers: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correctAnswer: "Vitamin D" },
      { id: 143, question: "What is the term for the outer layer of skin?", answers: ["Dermis", "Epidermis", "Hypodermis", "Keratin"], correctAnswer: "Epidermis" },
      { id: 144, question: "Which planet is known as Earth's twin due to its similar size?", answers: ["Venus", "Mars", "Neptune", "Mercury"], correctAnswer: "Venus" },
      { id: 145, question: "Which gas is commonly used to fill balloons to make them float?", answers: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"], correctAnswer: "Helium" },
      { id: 146, question: "What type of wave is sound?", answers: ["Transverse", "Longitudinal", "Electromagnetic", "Radiation"], correctAnswer: "Longitudinal" },
      { id: 147, question: "What type of scientist studies fossils?", answers: ["Geologist", "Archaeologist", "Paleontologist", "Biologist"], correctAnswer: "Paleontologist" },
      { id: 148, question: "What is the process by which cells divide to create two identical cells?", answers: ["Meiosis", "Fission", "Mitosis", "Replication"], correctAnswer: "Mitosis" },
      { id: 149, question: "Which subatomic particle has a negative charge?", answers: ["Proton", "Neutron", "Electron", "Quark"], correctAnswer: "Electron" },
      { id: 150, question: "What is the speed of light in a vacuum?", answers: ["3 × 10^5 km/s", "3 × 10^6 m/s", "3 × 10^8 m/s", "3 × 10^10 m/s"], correctAnswer: "3 × 10^8 m/s" }
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
          { answer: "F × d", explanation: "Incorrect. F × d represents work done, not kinetic energy." },
          { answer: "V × I", explanation: "Incorrect. V × I represents electrical power, not kinetic energy." }
        ],
        correctAnswer: "1/2 mv^2"
      }
    ]
  },
  english: {
    easy: [
      { id: 181, question: "What is a synonym for 'happy'?", answers: ["Sad", "Angry", "Joyful", "Bored"], correctAnswer: "Joyful" },
      // Additional easy English questions up to id 210
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