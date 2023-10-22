import { Checkbox, Divider } from "antd";
import { useState } from "react";

export default function GroupCheckBoxes({ plainOptions }) {
  const CheckboxGroup = Checkbox.Group;

  const [checkedList, setCheckedList] = useState([]);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions.map((el) => el.value) : []);
  };

  console.log(checkedList);

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>

      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
}
