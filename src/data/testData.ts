import { IQuestion, IAnswer } from "../interfaces/question";

export const questionData: IQuestion[] = [
  {
    name: "Maximum Sum Subarray of Size K",
    questionText:
      "Given an array of integers and a number k, find the maximum sum of a subarray of size k.",
    input: "[2, 1, 5, 1, 3, 2], k=3",
    output: "9",
    info: "Subarray with maximum sum is [5, 1, 3]",
    answer: "sw",
  },
  {
    name: "Container With Most Water",
    questionText:
      "Given n non-negative integers representing the heights of bars where the width of each bar is 1, find two bars that together with the x-axis forms a container that holds the most water.",
    input: "[1,8,6,2,5,4,8,3,7]",
    output: "49",
    info: "The container formed by bars at indices 1 and 8 holds the most water (min(8, 7) * (8 - 1) = 7 * 7 = 49)",
    answer: "tp",
  },
];

export const answers: IAnswer[] = [
  {
    id: "bns",
    ans: "binary search",
  },
  {
    id: "hash",
    ans: "hashmap",
  },
  {
    id: "sw",
    ans: "sliding window",
  },
  {
    id: "tp",
    ans: "two pointers",
  },
];
