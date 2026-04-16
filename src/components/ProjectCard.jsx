function ProjectCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link}>Ver projeto</a>
    </div>
  );
}

export default ProjectCard;