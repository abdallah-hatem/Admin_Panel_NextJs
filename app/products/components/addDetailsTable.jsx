import { Button, Form, InputNumber, Select } from "antd";
export default function AddDetailsTable({
  sizesData,
  colorsData,
  setSizeToColors,
  sizeToColors,
  defaultData,
}) {
  const sizeToColorsId = defaultData && defaultData.id;
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const onFinish = (values) => {
    if (defaultData) values = { ...values, ["sizeToColorsId"]: sizeToColorsId };

    const isValid =
      sizeToColors.filter((el) => el.sizeId === values.sizeId).length > 0;

    if (isValid) {
      setSizeToColors((prev) =>
        prev.filter((el) => el.sizeId !== values.sizeId)
      );
      setSizeToColors((prev) => [...prev, values]);

      return;
    }
    setSizeToColors((prev) => [...prev, values]);
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="sizeId"
        label="Size"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select size",
          },
        ]}
      >
        <Select
          defaultValue={defaultData && defaultData.sizeId}
          placeholder="Please select a size"
        >
          {sizesData.map((el) => (
            <Option value={el.id}>{el.name}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="colors"
        label="Colors"
        rules={[
          {
            required: true,
            message: "Please select colors",
            type: "array",
          },
        ]}
      >
        <Select
          defaultValue={defaultData && defaultData.colors.map((el) => el.id)}
          mode="multiple"
          placeholder="Please select colors"
        >
          {colorsData.map((el) => (
            <Option value={el.id}>{el.name}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="quantity"
        label="Quantity"
        hasFeedback
        rules={[{ required: true, type: "number" }]}
      >
        <InputNumber defaultValue={defaultData && defaultData.quantity} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Form.Item>
    </Form>
  );
}
