import React from 'react'
import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'

const Item = ({nombre, description, stock}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size='md'> {nombre} </Heading>
        </CardHeader>
        <CardBody>
          <Text> {description} </Text>
        </CardBody>
        <CardFooter>
          <Button>Agregar al carrito</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default Item
