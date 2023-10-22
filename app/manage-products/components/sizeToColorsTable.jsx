import { Table, Tag } from "antd";
export default function SizeToColorsTable({ defaultData, productId }) {
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

  return defaultData && <Table columns={columns} dataSource={getTableData()} />;
}
