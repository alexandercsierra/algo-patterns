export interface IQuestion {
  name: string;
  questionText: string;
  input: string;
  output: string;
  answer: string;
  info?: string;
  explanation?: string;
}

export interface IAnswer {
  id: string;
  ans: string;
}
