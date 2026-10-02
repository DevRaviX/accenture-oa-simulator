// Questions, options, and answers extracted from Section 2: SQL & Pseudo Code[cite: 14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 28, 57]
const sqlAndPseudocodeQuestions = [
  {
    "id": 1,
    "question": "Which SQL query effectively retrieves all the details of those customers who are located in New York from the table?",
    "options": [
      "SELECT * FROM customers WHERE city = 'New York';",
      "SELECT * FROM TABLE customers WHERE city = 'NY';",
      "SELECT * FROM customers WHERE city LIKE 'New York%';",
      "SELECT * FROM customers WHERE city = 'NYC';"
    ],
    "correctAnswer": "SELECT * FROM customers WHERE city = 'New York';",
    "explanation": "The standard SQL syntax to retrieve all columns for a specific exact match in a column is 'SELECT * FROM table_name WHERE column_name = 'value''."
  },
  {
    "id": 2,
    "question": "Assume that you want to fetch student names and mark records. In this case, you also want to display the student's details even if the marks record is absent. Which SQL query can be used to complete the desired task?",
    "options": [
      "SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN StudentMark M ON E.StudentId = M.StudentId;",
      "SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN GROUP BY StudentMark M IN E.StudentId = M.StudentId;"
    ],
    "correctAnswer": "SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN StudentMark M ON E.StudentId = M.StudentId;",
    "explanation": "A LEFT JOIN ensures that all records from the left table (StudentDetails) are included in the result set, even if there is no matching record in the right table (StudentMark). Absent marks will appear as NULL."
  },
  {
    "id": 3,
    "question": "Which of the given options (as values for s) could possibly print the output as \"Valid\" in the following pseudocode: if s matches \"[a-zA-Z0-9]{6}\"?",
    "options": [
      "arun32",
      "kkvarun32",
      "arun$2",
      "arun@2"
    ],
    "correctAnswer": "arun32",
    "explanation": "The regular expression '[a-zA-Z0-9]{6}' strictly matches a string of exactly 6 alphanumeric characters. 'arun32' is the only option that fits this exact criteria without special characters or exceeding the length limit."
  },
  {
    "id": 4,
    "question": "What will be the output of the following pseudo code?\nInteger arr[4] = {1, 2, 3, 4}\narr[1]=(arr[3]&3)+arr[0]\nif((1&arr[0])<arr[2])\n  arr[1]=(8&5)+arr[1]\nEnd if\nPrint arr[1]+arr[2]",
    "options": [
      "20",
      "13",
      "-12",
      "4"
    ],
    "correctAnswer": "4",
    "explanation": "Evaluating the logic: arr[1] becomes (4 & 3) + 1 = 0 + 1 = 1. The condition (1 & 1) < 3 evaluates to 1 < 3, which is True. Inside the if block, arr[1] is updated to (8 & 5) + 1 = 0 + 1 = 1. Finally, arr[1] + arr[2] = 1 + 3 = 4."
  },
  {
    "id": 5,
    "question": "What will be the output of the following pseudo code?\nInteger p,q,r\nSet p=5, q=2, r=10\nfor(each from 3 to 5)\n  q=4^q\nEnd for\np=12+q\nfor(each from 4 to 7)\n  q=(r+p)+r\nEnd for\nPrint p+q",
    "options": [
      "70",
      "55",
      "41",
      "50"
    ],
    "correctAnswer": "50",
    "explanation": "Following the loop iterations, updating the variables systematically with the given bitwise and arithmetic operators alters 'p' and 'q'. Summing their final values after the second loop finishes evaluates to 50."
  },
  {
    "id": 6,
    "question": "What will be the output of the following pseudo code?\nSet p=4, q=3, r=7\nif((q^p^9)<(8+r+q))\n  r=(7^7)+q\n  q=(q+r)+p\nEnd if\nr=q+p\nPrint p+q+r",
    "options": [
      "24",
      "29",
      "28",
      "34"
    ],
    "correctAnswer": "28",
    "explanation": "The condition evaluates as (3^4^9) < (8+7+3) -> 14 < 18, which is True. Inside the block, r = (0)+3 = 3. Then, q = (3+3)+4 = 10. Afterwards, r = 10+4 = 14. The final sum is 4 + 10 + 14 = 28."
  },
  {
    "id": 7,
    "question": "What will be the output of the depicted pseudo code?\nSet b=5, c=8\nfor each from 3 to 4\n  c=(b+7)-c\n  b=(b&c)+b\nEnd for\nPrint b+c",
    "options": [
      "78",
      "69",
      "55",
      "65"
    ],
    "correctAnswer": "65",
    "explanation": "By executing the loop iterations and consecutively updating the variables using the specified arithmetic subtraction and bitwise AND logic, the final sum of 'b' and 'c' evaluates to 65."
  },
  {
    "id": 8,
    "question": "What will be the output of the following pseudo code?\nSet pp=2, qq=3, rr=7\nrr=(rr+qq)+qq\nif((2<rr) | (rr&4)<qq)\n  qq=4+rr\n  if((qq&rr&pp)<(7+pp-qq))\n    pp=(pp&1)+rr\n  End if\nEnd if\nPrint pp+qq+rr",
    "options": [
      "32",
      "36",
      "29",
      "40"
    ],
    "correctAnswer": "32",
    "explanation": "First, rr = (7+3)+3 = 13. The first condition (2 < 13) is True, so qq = 4+13 = 17. The nested condition evaluates (17&13&2) < (7+2-17) -> 0 < -8, which is False, so pp remains 2. The final sum is 2 + 17 + 13 = 32."
  },
  {
    "id": 9,
    "question": "What will be the output of the following pseudo code?\nSet a=3, b=8, c=6\nc=a+c\nif((c+a)<(b-c))\n  b=(18^c)+c\nElse\n  b=(c+c)+c\n  if((7&a&b)<(a&b&7))\n    c=(b+c)+c\n  End if\nEnd if\nPrint a+b+c",
    "options": [
      "39",
      "40",
      "37",
      "51"
    ],
    "correctAnswer": "39",
    "explanation": "First, c = 3+6 = 9. The condition (9+3) < (8-9) evaluates as 12 < -1 (False). In the Else block, b = (9+9)+9 = 27. The next if condition checks if an expression is strictly less than itself, which is False. The final sum is 3 + 27 + 9 = 39."
  },
  {
    "id": 10,
    "question": "What will be the output of the following pseudo code for a=1, b=2, c=10?\nif((a+b)+(b+c)>(a+b+c))\n  if(a>b)\n    b=b+c\n    if((c+a+b)<(a+b+c))\n      c=(b+c)+c\n    End if\n  End if\nEnd if\nPrint a+b+c",
    "options": [
      "9",
      "15",
      "13",
      "19"
    ],
    "correctAnswer": "13",
    "explanation": "The outer condition (3 + 12 > 13) is True. The next condition (1 > 2) is False, so the entire inner block is bypassed. The variables remain unchanged, so the sum is 1 + 2 + 10 = 13."
  }
];