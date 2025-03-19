import { IQuestion } from "../interfaces/question";

export const questionData: IQuestion[] = [
  {
    questionText: "Maximum Sum Subarray of Size K",
    input: "[2, 1, 5, 1, 3, 2], k=3",
    output: "9",
    info: "Subarray with maximum sum is [5, 1, 3]",
  },
  {
    questionText: "Container With Most Water",
    input: "[1,8,6,2,5,4,8,3,7]",
    output: "49",
    info: "The container formed by bars at indices 1 and 8 holds the most water (min(8, 7) * (8 - 1) = 7 * 7 = 49)",
  },
];
