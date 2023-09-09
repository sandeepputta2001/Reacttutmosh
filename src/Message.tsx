function Message() {
  const name = "Sandeep";
  if (name) {
    return <h1>Hello {name}</h1>;
  } else {
    return <div>Hello World</div>;
  }
}

export default Message;
