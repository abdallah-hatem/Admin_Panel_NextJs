import { Table, Tag, Typography } from "antd";
export default function SizeToColorsTable({ defaultData, productId }) {
  const { Text } = Typography;

  const columns = [
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Colors",
      key: "colors",
      dataIndex: "colors",
      render: (_, { colors }) => (
        <>
          {colors.map((el) => {
            return (
              <Tag color={el} key={el}>
                {el.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  function getTableData() {
    const data = defaultData.map((el, index) => {
      return {
        size: el.size.name,
        colors: el.colors.map((el) => el.name),
        quantity: el.quantity,
        key: index,
      };
    });

    return data;
  }

  return (
    defaultData && (
      <Table
        summary={(data) => {
          let total = 0;
          data.forEach((el) => (total += el.quantity));

          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total Qty</Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={2}>
                  <Text type="danger">{total}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
        columns={columns}
        dataSource={getTableData()}
      />
    )
  );
}
