import Link from "next/link";

const ClientPage = () => {
  const clients = [
    {
      id: "Aks",
      name: "Akshat",
    },
    {
      id: "ram",
      name: "Ramesh",
    },
  ];
  return (
    <div>
      <h1>This is the Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
