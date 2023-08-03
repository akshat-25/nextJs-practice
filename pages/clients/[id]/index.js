import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    //load data....
    // router.push("/clients/aks/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "aks", clientprojectid: "projecta" },
    });
  };
  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
