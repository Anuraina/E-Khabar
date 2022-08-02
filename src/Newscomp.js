import PropTypes from 'prop-types'
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class Newscomp extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8,
    category: 'general',
  }

    // see proptypws case
  static propTypes={  
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  
  // u use state when you change it dynamically , or change it again and again w/o loading it again nd again.
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async updateNews(){
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f4b85f85a843ca93e9c1e20e7cb9e0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
        page:this.state.page - 1 ,
        loading: false
      })
    }
  

    // cdm runs after render method 
  async  componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f4b85f85a843ca93e9c1e20e7cb9e0&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

    handlePrev = async ()=>{
   
    this.setState({page: this.state.page - 1})
    this.updateNews();
    }
  
    handleNext = async ()=>{
      // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      //   let  url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f4b85f85a843ca93e9c1e20e7cb9e0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      //   // page size = no. of articles in one page
      // this.setState({loading: true})
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   console.log(parsedData);
      //   this.setState({articles: parsedData.articles,
      //     page:this.state.page + 1 ,
      //     loading: false
      //   })
      // }
    
    this.setState({page: this.state.page + 1})
    this.updateNews();
    }
      

      
  render() {
    return (
      <div className="container my-3">
          {/* A bootstrapp class to center text     , and again adding javascript styling 2brackets one for js and other for object.*/}
        <h1 className="text-center" style={{margin: '35px 0px'}}>News component</h1>  
     {this.state.loading && <Spinner/>}    {/* if loading is true then show spinner */}
        <div className="row">
        {this.state.articles.map((element) => {
              return  <div className="col-md-4" key={element.url}>
                  {/* this div and return must  be in a same line if they are not they wont be renddered m map function also gibves an error */}
              {/* means medium devices me ye 4 columns le legi, 12 ki grid hoti h bootstrapp me 4 col lelegi mtlb 4*3=12(poora spaace lellegi container ka) */}
              <NewsItem
                title={element.title ? element.title.slice(0, 45):""}
                description={element.description? element.title.slice(0, 88):""}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
              {/* See this also how its written ,title="mytitle" not title={mytitle} */}
            </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
         
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark " onClick={this.handleNext}>Next &rarr; </button>
        </div>
      </div>
      
          
    )
  }
}

export default Newscomp;
