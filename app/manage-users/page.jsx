import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";

export default function ManageUsers() {
  const columns = [
    {
      field: "name",
      caption: "Name",
    },
    {
      field: "email",
      caption: "Email",
    },
  ];

  const data = [
    {
      name: "Abdallah",
      email: "test@gmail.com",
    },
    {
      name: "Abdallah",
      email: "test@gmail.com",
    },
  ];
  return (
    <CardComponent title="Manage users">
      <MasterTable
        allowDelete
        allowUpdate
        allowPaging
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
      />
    </CardComponent>
  );
}
