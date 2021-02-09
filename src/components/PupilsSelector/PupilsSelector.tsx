import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { pupils } from "../../recoil/atoms/pupils";
import Select from "react-select";

interface Props {
  className?: string;
}

const PupilsSelector: React.FC<Props> = (props) => {
  const pupilsRecoilState = useRecoilValue(pupils);
  // console.log(pupilsRecoilState);
  const [options, setOptions] = useState<{ label?: string; value?: string }[]>([
    {},
  ]);
  const routerHistory = useHistory();

  useEffect(() => {
    setOptions(
      Object.keys(pupilsRecoilState).map((id) => {
        return {
          label: pupilsRecoilState[id].name,
          value: pupilsRecoilState[id].id,
        };
      })
    );
  }, [pupilsRecoilState]);

  return (
    <>
      <Select
        className={props.className || ""}
        options={options}
        onChange={(pupil) => routerHistory.push("/pupil/" + pupil?.value)}
      />
    </>
  );
};

export default PupilsSelector;
