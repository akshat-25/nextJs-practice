import { useRouter } from "next/router";

const SelectedClientOrijectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The project page for a specific project for a selected client.</h1>
    </div>
  );
};

export default SelectedClientOrijectPage;
