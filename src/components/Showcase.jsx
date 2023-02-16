import ProjectDisplay from "./ProjectDisplay";

function Showcase() {
  const projects = [
    {
      id: 1,
      title: "Dictionary App",
      description:
        "This project uses an api to fetch the data of the particular word searched by the user",
    },
    {
      id: 2,
      title: "Todo Web App",
      description:
        "This project uses an api to fetch the data of the particular word searched by the user",
    },
    {
      id: 3,
      title: "Meals App",
      description:
        "This project uses an api to fetch the data of the particular word searched by the user",
    },
    {
      id: 4,
      title: "Team Member Allocation App",
      description:
        "This project uses an api to fetch the data of the particular word searched by the user",
    },
  ];

  return (
    <div id="showcase" className="px-7 pt-20 h-fit pb-20">
      <div className="showcase-title font-gugi text-5xl mb-10">
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
        <ProjectDisplay projectList={projects} />
      </div>
    </div>
  );
}

export default Showcase;
