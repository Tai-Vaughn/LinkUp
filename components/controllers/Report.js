class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "Select Time",
      date: "Select Date",
      location:"Select Location",
      category:' Select Category',
      details: 'Please enter the report information'

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Select Time
        <input
          name="Select Time"
          type="number"
          value={this.state.time}
          onChange={this.handleInputChange} />
      </label>
      <br />
        <label>
          Select location
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Med Sci">Med Sci</option>
            <option value="Sci Tech">Sci Tech</option>
            <option value="Law">Law</option>
            <option value="Humanities">Humanities</option>
          </select>
        </label>
        <br />
        <label>
          Select category
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Robbery">Robbery</option>
          </select>
        </label>
        <br />
        <label>
          Report Details:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
