import React from "react";

class Categories extends React.Component {

  constructor(props) {
      super(props);
      this.state = { 
          categories: [],
          
      }
  }

  componentDidMount() {//when the compoennt mounts execute this function
      fetch("https://fakestoreapi.com/products") //call this api
        .then((res) => { this.setState({categories: res.json()})}) 
       //assign resp to state varible

  }

  render(){
      console.log(this.state.categories)
      return (
        <div className="categories-component">
          <p>check</p>
        </div>
      );
  }
}

export default Categories;
/*class Catogories extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         
  
 /*  componentDidMount() {
      this.setTimeRef = setInterval(() => this.setTime(), 1000); 
   }
   componentWillUnmount() {
      clearInterval(this.setTimeRef)
   }
   setTime() {
      this.setState((state, props) => {
         console.log(state.date);
         return {
            date: new Date()
         }
      })
   }
   render() {
      return (
         <div>
            <p>The current time is {this.state.date.toString()}</p>
         </div>
      );
   }
}
export default Clock;
         categories: [ {
                title: "veggies",
                imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                id: 1,
                linkUrl: "veggies",
              },
              {
                title: "jackets",
                imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                id: 2,
                linkUrl: "jackets",
              },
              {
                title: "sneakers",
                imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                id: 3,
                linkUrl: "sneakers",
              },
              {
                title: "womens",
                imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                size: "large",
                id: 4,
                linkUrl: "",
              },
              {
                title: "mens",
                imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                size: "large",
                id: 5,
                linkUrl: "",
              },],
            name: "Bhavani"
        }
    }
  

    render(){
        return(
            <div className="categories-component">
                   {
                       this.state.categories.map(item => (<p>{item.title}</p>))
                   }
                </div>
        )
    }
  } */
  
 
