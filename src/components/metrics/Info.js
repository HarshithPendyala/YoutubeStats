import React from 'react'

function Info(props){
    return(
        <div className="w-1/2 px-2 mx-2 bg-gray-400 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Info:</div>
                <div className="text-gray-700 text-base"> <strong>Channel Title:</strong> {props.channelTitle}</div>
                <div className="text-gray-700 text-base"> <strong>Video Title:</strong> {props.title}</div>
                <div className="text-gray-700 text-base"> <strong>Views:</strong> {props.views}</div>
            </div>
        </div>
    )
}

export default Info