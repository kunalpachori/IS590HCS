import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import {
  Badge,
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  View,
  Header,
  Title,
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
                  <Text note>{request.deliveryWindow}</Text>
                  <Badge warning>
                    <Text>{request.status}</Text>
                  </Badge>
                </Body>
              </Left>
            </CardItem>
          </Card>
        )}

        {request == null && (
          <View>
            <Text style={styles.helptext}>You would be able to submit only one request at a time.</Text>
            <Image style={styles.groceryicon} 
              source={require('../assets/grocery-delivery.png')}/>
            <TouchableOpacity onPress={() => props.navigation.navigate('New Request')}>
              <Image style={styles.logo} 
                source={require('../assets/add_green.png')}/>
            </TouchableOpacity>
          </View>
        )}
        {request != null && (
          <Button
          block
          success
          onPress={() => props.navigation.navigate('Create New')}
          style={{ marginTop: 20 }}>
          <Text>Modify request</Text>
          </Button>

        )}

      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  helptext:{
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  groceryicon:{
    marginTop: 30,
    marginLeft: 120,
    height: 128,
    width: 128,
  },
  logo: {
    marginTop: 140,
    marginLeft: 220,
    height: 128,
    width: 128,
  }
});
