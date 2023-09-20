import { Card } from "antd";

export default function CardComponent({ children, title }) {
  return (
    <Card
      title={title}
      style={
        {
          // width: 300,
        }
      }
    >
      {children}
    </Card>
  );
}
