import * as React from 'react';
import { useState } from 'react';
import {
  Container,
  Content,
  Card,
  Button,
  Text,
  CardItem,
  Left,
  View,
  Fab,
  Right,
  Icon,
  Body,
  Badge,
  List,
  Accordion,
  ListItem,
} from 'native-base';

export default function DetailsScreen(props) {
  const { request } = props.navigation.state.params;
  const [state, setState] = useState(false);
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem header>
            <Icon active name="ios-cart" style={{ color: '#67c100' }} />
            <Text>{'Delivery Date: '}</Text>
            <Text>{request.date}</Text>
          </CardItem>

          <CardItem footer style={{ justifyContent: 'space-evenly' }}>
            <Left>
              <Text>Status:</Text>
              <Badge warning>
                <Text>{request.status}</Text>
              </Badge>
            </Left>
            <Button small primary transparent>
              <Icon iconRight="10" active name="ios-call" />
            </Button>
            <Text primary>{'Helper'}</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Icon active name="md-car" style={{ color: '#67c100' }} />
            <Text>{'Deliver to '}</Text>
            <Text>{request.address}</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Icon active name="ios-person" style={{ color: '#67c100' }} />
            <Text>{request.name}</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Icon active name="ios-calendar" style={{ color: '#67c100' }} />
            <Text>{request.deliveryWindow}</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Icon
              active
              name="ios-information-circle-outline"
              style={{ color: '#67c100' }}
            />
            <Text>{'Instructions: '}</Text>
            <Text>{request.instructions}</Text>
          </CardItem>
        </Card>

        <List>
          <ListItem itemDivider>
            <Text>{'Items'}</Text>
          </ListItem>
          {request.items.map(item => (
            <ListItem key={item}>
              <Text>{item}</Text>
            </ListItem>
          ))}
        </List>
      </Content>

      <Fab
        active={state}
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => (state ? setState(false) : setState(true))}>
        <Icon name="share" />
        <Button style={{ backgroundColor: '#34A34F' }}>
          <Icon name="logo-whatsapp" />
        </Button>
        <Button style={{ backgroundColor: '#3B5998' }}>
          <Icon name="logo-facebook" />
        </Button>
        <Button disabled style={{ backgroundColor: '#DD5144' }}>
          <Icon name="mail" />
        </Button>
      </Fab>
    </Container>
  );
}
