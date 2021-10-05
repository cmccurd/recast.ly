class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.onSubmit(this.state.entry);
  }
  handleSearchChange(event) {
    this.setState({entry: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Do something...'
          value={this.state.entry}
          onChange={this.handleSearchChange}
        />
        <button type='submit'>Search</button>
      </form>
    );
  } //eslint-disable-line
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
