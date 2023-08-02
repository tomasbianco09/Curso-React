import React from 'react';
import { useParams} from 'react-router-dom';
import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, Flex } from '@chakra-ui/react'
const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const productoFilter = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {productoFilter.map((producto) => {
                return (
                    <div key={producto.id}>
                        <Flex>
                            <Card>
                                <CardHeader>
                                    <Heading size='md'>{producto.nombre}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{producto.description}</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button>{producto.category}</Button>
                                </CardFooter>
                            </Card>
                        </Flex>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail