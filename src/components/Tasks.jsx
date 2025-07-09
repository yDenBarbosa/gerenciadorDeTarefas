function Tasks(props) {
  return (
    <h1>
      {props.tasks.map((tasks) => (
        <p>{tasks.title}</p>
      ))}
    </h1>
  );
}

export default Tasks;
