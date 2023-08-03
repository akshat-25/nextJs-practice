import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  // send a request to the backend server to fetch the data with an ID of router.query.projectId

  return (
    <div>
      <h1>Learning Dynamic Routing in NextJS</h1>
    </div>
  );
}

export default PortfolioProjectPage;
