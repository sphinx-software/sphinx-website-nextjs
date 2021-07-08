import { CommunicationSection } from '../../ui'
import JoinUsTable from '../../ui/JoinUsTable'
import React from 'react'
import dynamic from 'next/dynamic'
const JoinUsBanner = dynamic(() => import('../../ui/JoinUsBanner'), {
  ssr: false
})

const JoinUs = () => {
  return (
    <>
      <JoinUsBanner />
      <JoinUsTable />
      <CommunicationSection />
    </>
  )
}

export default JoinUs
