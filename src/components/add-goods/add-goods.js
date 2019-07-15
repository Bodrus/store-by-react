import React from 'react';
import BooksServices from '../../services/bookstore-service';

export default class AddGoods extends React.Component {
  booksServices = new BooksServices();

  state = {
    form: {
      title: '',
      author: '',
      price: ''
    },
    img: ''
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
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ img: reader.result });
    };
    reader.readAsDataURL(target.files[0]);
  };

  handleSubmitForm = () => {
    const { pressOnSubmit } = this.props;
    const data = this.groupData();
    pressOnSubmit();

    this.booksServices.setData(data);

    this.setState({
      form: {
        title: '',
        author: '',
        price: 0
      },
      img: ''
    });
  };

  groupData = () => {
    const { form, img } = this.state;
    const keys = Object.keys(form);
    return keys.reduce((acc, key) => ({ ...acc, [key]: form[key] }), {
      coverImage: img
    });
  };

  renderResult() {
    const { form, img } = this.state;
    const keys = Object.keys(form);

    return (
      <div>
        <button type="button" onClick={this.handleBackToForm}>
          Back
        </button>
        <table key="fieldsValues" className="table">
          <tbody>{keys.map(this.renderRow)}</tbody>
        </table>
        <img className="book-image" src={img} />
      </div>
    );
  }

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
            <label htmlFor="coverImage">Example file input</label>
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
