import { atom } from "recoil";
import seed from '../../data/seed.json';

interface Grades {
  math: number;
  russian: number;
  literature: number;
  history: number;
  physics: number;
}

export interface Pupil {
  id: string;
  name: string;
  email: string;
  description: string;
  avatarLink: string;
  grades: Grades[];
}

export interface PupilsState {
  [key: string]: Pupil;
}

export const pupils = atom<PupilsState>({
  key: "pupilsState",
  default: seed,
});
