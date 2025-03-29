function ListGroup() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];
    return ( //Note that react can't return more than one component so we wrap around everything around with a component
           //to get around this. Instead of div use Fragment so we don't introduce another element to DOM
           //can import Fragment from react or can do empty <> and it's registered as Fragment 
           //JSX only allows HTML and other react components so we wrap in braces to allow code 
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map(item => (
          <li key={item}>{item}</li>
          ))}
      </ul>
    </>
  );
}

export default ListGroup;
