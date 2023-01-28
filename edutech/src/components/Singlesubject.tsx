import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'


type obj={
    title: string,
    image: string,
    drivelink: string,
    subject: string,
    description: string
}

const Singlesubject = (el:obj) => {
  return (
    <div>
        <Accordion  allowMultiple borderLeft={'2px solid teal'} style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",backgroundColor:"white"}} margin={'7px'}>
<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='center'  >
        {el.title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4} textAlign={'center'} >
    <Flex direction={'column'} margin="auto">
    <div className='image-div'><img src={el.image} style={{margin:"auto"}} width="50%" alt="" /></div>
    <Link href={el.drivelink}><h2 style={{color:"blue"}}>Open Pdf</h2></Link>
    <p>{el.description}</p>
    </Flex>
  </AccordionPanel>
</AccordionItem>
</Accordion>
    </div>
    
  )
}

export default Singlesubject