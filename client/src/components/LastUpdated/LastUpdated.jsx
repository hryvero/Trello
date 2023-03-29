import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function LastUpdated({ date }) {
  return (
    <div>
      Last updated: <ReactTimeAgo date={date} locale="en-US"/>
    </div>
  )
}