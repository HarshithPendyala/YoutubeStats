import React,{Component} from 'react'
import Tags from './metrics/Tags'
import Info from './metrics/Info'


class Results extends Component{
    render(){
        return(
            <div className="w-full container m-12 mx-auto">
                <div id="tags">
                    <div className="px-2">
                        <div className="flex -mx-2">
                            <Tags tags={this.props.tags}/>
                            <Info channelTitle={this.props.channelTitle} title={this.props.title} views={this.props.views}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Results