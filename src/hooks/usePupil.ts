import React from "react";
import {pupils as pupilsState} from "../recoil/atoms/pupils";
import {useRecoilState} from 'recoil';

export const usePupil = (id: string) => {
  const [pupils, setPupils] = useRecoilState(pupilsState);
  return pupils[id];
}
