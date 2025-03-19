export interface IQuestion {
  questionText: string;
  input: string;
  output: string;
  answer: string;
  info?: string;
}

export interface IAnswer {
  id: string;
  ans: string;
}
