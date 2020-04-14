const CommentsFromDataBase = () => {
  if (this.state.Comments === "No Comments" ) {
    return (
      <div style={{"textAlign":"center", "margin":"auto"}}>There are currently no comments.</div>
    )
  }
  else {
    return (
      <div>{this.state.Comments[0]}</div>
    )
  }
}
