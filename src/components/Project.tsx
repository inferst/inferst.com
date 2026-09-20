import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  link?: string;
};

const Project = (props: ProjectProps) => {
  const content = (
    <>
      <h3 className="text-xl">{props.title}</h3>
      <p className="text-foreground-secondary">{props.description}</p>
    </>
  );

  if (props.link) {
    return (
      <Link
        href={props.link}
        target="_blank"
        className="border-1 border-foreground-secondary px-4 py-2 rounded-lg w-full block transition-colors hover:border-foreground-highlight hover:bg-background-highlight"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="border-1 border-foreground-secondary px-4 py-2 rounded-lg w-full">
      {content}
    </div>
  );
};

export default Project;
