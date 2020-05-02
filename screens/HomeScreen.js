import React, { useState } from 'react';
import {
  Badge,
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Right,
  Body,
  View,
} from 'native-base';

export default function HomeScreen(props) {
  const [request, setRequest] = useState(null);

  React.useEffect(() => {
    let newRequest = props.navigation.getParam('request', null);
    let removeRequest = props.navigation.getParam('remove', null);

    if (newRequest !== null) {
      setRequest(newRequest);
    }

    if (removeRequest) {
      setRequest(null);
    }
  }, [props.navigation]);

  return (
    <Container>
      <Content padder>
        {request !== null && (
          <Card>
            <CardItem
              header
              button
              onPress={() =>
                props.navigation.navigate('Request Details', {
                  request: request,
                })
              }>
              <Left>
                <Body>
                  <Text>{request.date}</Text>
                  <Badge warning>
                    <Text>{request.status}</Text>
                  </Badge>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text note>{request.deliveryWindow}</Text>
                  <Text note>{request.instructions}</Text>
                </Body>
              </Right>
            </CardItem>
            <CardItem footer style={{ justifyContent: 'space-evenly' }}>
              <Button
                block
                rounded
                warning
                onPress={() => props.navigation.navigate('New Request')}
                style={{ marginTop: 20, width: '45%' }}>
                <Text>Modify request</Text>
              </Button>
              {request != null && (
                <Button
                  onPress={() =>
                    props.navigation.push('Requests', { remove: true })
                  }
                  rounded
                  danger
                  style={{ marginTop: 20, width: '45%' }}>
                  <Text>Cancel request</Text>
                </Button>
              )}
            </CardItem>
          </Card>
        )}

        {request == null && (
          <View>
            <Text>You have not added a request</Text>
            <Button
              block
              success
              rounded
              onPress={() => props.navigation.navigate('New Request')}
              style={{ marginTop: 20 }}>
              <Text>Add a new request</Text>
            </Button>
          </View>
        )}
      </Content>
    </Container>
  );
}
