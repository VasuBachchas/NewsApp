import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    pageSize: 6,
    category: 'sports',
    country: 'in'
  }
  static propTypes = {
    country: PropTypes.string
  }
  articles = [];
  pages = 0;
  async componentDidMount() {
    //this is a lifecycle funtion that gets executed after render mathod
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d05fa37b05dc45709bc66b2916317806&category=${this.props.category}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();

    this.pages = parseInt(parsedData.totalResults / this.props.pageSize) + 1;

    this.setState({
      articles: parsedData.articles,
      loading: false
    })
  }
  handleNextClick = async () => {
    console.log('Next');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d05fa37b05dc45709bc66b2916317806&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    });

  }
  handlePreviousClick = async () => {
    console.log('Previous');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d05fa37b05dc45709bc66b2916317806&category=${this.props.category}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  }
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false
    }
  }
  render() {

    return (

      <div className="container my-3" >
        <h2>NewsMonkey | Top Headlines</h2>
        {this.state.loading ? <Spinner /> : <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4'>
              <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt}/>
            </div>

          })}



        </div>}



        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePreviousClick}>Previous</button>
          <button id="av" disabled={this.state.page == this.pages} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>

      </div>
    )
  }
}

export default News
