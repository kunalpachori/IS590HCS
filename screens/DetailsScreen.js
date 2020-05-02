import * as React from 'react';
import {useState} from 'react';
import { Container, Content, Card, Button, Text, CardItem, Left, View, Fab, Right, Icon, Body, Badge, List, ListItem } from 'native-base';

export default function DetailsScreen(props) {
    const { request } = props.navigation.state.params;
    const [setState] = useState(false);
    return (
      <Container>
        <Content padder>
          <Card>
              <CardItem header>
                <Left>
                  <Body>
                    <Text>{request.date}</Text>
                    <Text note>{request.deliveryWindow}</Text>
                    <Text note>{request.instructions}</Text>
                  </Body>
                </Left>
              </CardItem>

              <CardItem>
                <Left>
                  <Button onPress={() => props.navigation.push('Requests', {remove: true})} bordered small danger><Text>Cancel</Text></Button>
                </Left>
                <Right>
                  <Button small primary><Icon active name="ios-call" /><Text>Call Helper</Text></Button>
                </Right>
              </CardItem>

              <CardItem footer>
                <Text>Status:</Text>
                <Badge warning><Text>{request.status}</Text></Badge>
              </CardItem>
            </Card>

            <List>
            {
              request.items.map(item => (
                <ListItem key={item}>
                  <Text>{item}</Text>
                </ListItem>
              ))
            }
            </List>
        </Content>
        <View style={{ flex: 1 }}>
          <Fab
            active={true}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => setState(true)}>
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
        </View>
      </Container>
    );
}