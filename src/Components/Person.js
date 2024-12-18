import React from "react"

class Person extends React.Component{
    constructor(){
        // fullName,bio, imgSrc, profession
        super()
        this.state={
            person : {
                fullName :"Youssef Siala",
                bio : "Tree",
                imgSrc :"https://gomycodelearn.blob.core.windows.net/profiles/0187346b-f4de-4194-9c02-227b84a30d71-133577378151276202.jpg",
                profession : "Dev React"
            },
            count : 0
        }
    }

    componentDidMount(){
      
        setInterval(() => {
           this.setState({count : this.state.count + 1})
          }, 1000)
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h2>Person Component</h2>
                <h3>{this.state.person.fullName}</h3>
                <h4>{this.state.person.bio}</h4>
                <h5>{this.state.person.profession}</h5>
                <img src={this.state.person.imgSrc} alt="Not Found"/>
            </div>
        )
    }
}

export default Person