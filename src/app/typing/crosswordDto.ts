import { Answer } from "./answer";
import { Cell } from "./cell";

export interface CrosswordDto{
  questions: string[];
  answers: Answer[];
  cells: Cell[];
}
