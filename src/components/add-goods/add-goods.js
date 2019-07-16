import React from 'react';

export default class AddGoods extends React.Component {
  state = {
    form: {
      title: '',
      author: '',
      price: 0,
      coverImage: ''
    }
  };

  handleChangeField = ({ target }) => {
    const { form } = this.state;
    const value = target.value;
    if (target.name === 'price') {
      this.setState({ form: { ...form, [target.name]: value } });
    }
    this.setState({ form: { ...form, [target.name]: value } });
  };

  handleChangeImg = ({ target }) => {
    const { form } = this.state;
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ form: { ...form, coverImage: reader.result } });
    };
    reader.readAsDataURL(target.files[0]);
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { pressOnSubmit } = this.props;
    const data = this.groupData();
    pressOnSubmit(data);

    this.setState({
      form: {
        title: '',
        author: '',
        price: 0,
        coverImage: ''
      }
    });
  };

  groupData = () => {
    const { form } = this.state;
    const keys = Object.keys(form);
    const x = keys.reduce((acc, key) => ({ ...acc, [key]: form[key] }), {});
    return x;
  };

  renderForm() {
    const { form } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <div className="form-group">
          <div className="form-group col-md-6">
            <label htmlFor="title" className="col-form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={this.handleChangeField}
              value={form.title}
              className="form-control"
              id="title"
              placeholder="title"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="author" className="col-form-label">
              Author
            </label>
            <input
              type="text"
              name="author"
              onChange={this.handleChangeField}
              value={form.author}
              className="form-control"
              id="author"
              placeholder="author"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="price" className="col-form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              onChange={this.handleChangeField}
              value={form.price}
              className="form-control"
              id="price"
              placeholder="price"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="coverImage">Load image</label>
            <input
              type="file"
              name="coverImage"
              className="form-control-file"
              id="coverImage"
              onChange={this.handleChangeImg}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add book
        </button>
      </form>
    );
  }

  render() {
    return this.renderForm();
  }
}
