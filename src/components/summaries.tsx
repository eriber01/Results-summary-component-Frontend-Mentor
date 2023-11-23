import React from 'react'
import { ImageSvg } from './image-svg'
import { key } from '@/interfaces'
import { bgColors, textColors } from './colors'

interface Props {
  name: key
  percentage: string
}

const Summaries = ({ name, percentage }: Props) => {

  return (
    <div className="flex flex-col justify-between h-full">
      <div className={`flex items-center justify-between ${bgColors(name)} rounded-md py-4 pr-3`}>
        <div className="flex items-center pl-3">
          <ImageSvg name={name} />
          <p className={`${textColors(name)} text-xs pl-1`}>
            {name}
          </p>
        </div>
        <div className="flex text-sm">
          <p className="pr-1">
            {percentage}
          </p>
          <p className="opacity-50">
            / 100
          </p>
        </div>
      </div>
    </div>
  )
}

export default Summaries