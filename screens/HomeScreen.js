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
  Right,
  List,
  ListItem,
  Body,
  View,
  Icon,
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

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <Container>
      <Content padder>
        {request !== null && (
          <Card>
            <CardItem header button>
              <Left>
                <Body>
                  <Text header style={{ paddingBottom: 4 }}>
                    Order ID: #{getRandomInt(1000)}
                  </Text>
                  <Text note style={{ paddingBottom: 4, fontWeight: 10 }}>
                    {' '}
                    <Icon
                      active
                      name="ios-time"
                      type="Ionicons"
                      style={{
                        color: '#67c100',
                        fontSize: 20,
                      }}
                    />
                    {request.date}, {request.deliveryWindow}
                  </Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Badge warning>
                    <Text>{request.status}</Text>
                  </Badge>
                </Body>
                <Body>
                  <Button
                    transparent
                    onPress={() =>
                      props.navigation.navigate('Request Details', {
                        request: request,
                      })
                    }>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: 'grey',
                        fontSize: 20,
                      }}>
                      See details >
                    </Text>
                  </Button>
                </Body>
              </Right>
            </CardItem>
            <CardItem style={{ justifyContent: 'space-evenly' }}>
              <Button
                block
                onPress={() => props.navigation.navigate('New Request')}
                style={{
                  width: '45%',
                  marginBottom: 20,
                  backgroundColor: '#67c100',
                }}>
                <Text style={{ fontWeight: '600' }}>MODIFY</Text>
              </Button>
              {request != null && (
                <Button
                  block
                  onPress={() =>
                    props.navigation.push('Requests', { remove: true })
                  }
                  bordered
                  warning
                  style={{ width: '45%', marginBottom: 20, color: '#67c100' }}>
                  <Text style={{ fontWeight: '600' }}>CANCEL</Text>
                </Button>
              )}
            </CardItem>
          </Card>
        )}

        {request !== null && (
          <List>
            <ListItem itemDivider>
              <Text>{'Past Requests'}</Text>
            </ListItem>
            <Card>
              <CardItem header button>
                <Left>
                  <Body>
                    <Text header style={{ paddingBottom: 4 }}>
                      Order ID: #{getRandomInt(1000)}
                    </Text>
                    <Text note style={{ paddingBottom: 4, fontWeight: 10 }}>
                      {' '}
                      <Icon
                        active
                        name="ios-time"
                        type="Ionicons"
                        style={{
                          color: '#67c100',
                          fontSize: 20,
                        }}
                      />
                      Apr 25, 5pm - 6pm
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Body>
                    <Badge style={{ backgroundColor: '#67c100' }}>
                      <Text>Completed</Text>
                    </Badge>
                  </Body>
                  <Body>
                    <Button
                      transparent
                      onPress={() =>
                        props.navigation.navigate('Request Details', {
                          request: request,
                        })
                      }>
                      <Text
                        style={{
                          fontWeight: '600',
                          color: 'grey',
                          fontSize: 20,
                        }}>
                        See details >
                      </Text>
                    </Button>
                  </Body>
                </Right>
              </CardItem>
              <CardItem style={{ justifyContent: 'space-evenly' }}>
                <Button
                  block
                  onPress={() => props.navigation.navigate('New Request')}
                  style={{
                    width: '45%',
                    marginBottom: 20,
                    backgroundColor: '#67c100',
                  }}>
                  <Text style={{ fontWeight: '600' }}>REORDER</Text>
                </Button>
                {request != null && (
                  <Button
                    block
                    onPress={() =>
                      props.navigation.push('Requests', { remove: true })
                    }
                    bordered
                    warning
                    style={{
                      width: '45%',
                      marginBottom: 20,
                      color: '#67c100',
                    }}>
                    <Text style={{ fontWeight: '600' }}>DELETE</Text>
                  </Button>
                )}
              </CardItem>
            </Card>
            <Card>
              <CardItem header button>
                <Left>
                  <Body>
                    <Text header style={{ paddingBottom: 4 }}>
                      Order ID: #{getRandomInt(1000)}
                    </Text>
                    <Text note style={{ paddingBottom: 4, fontWeight: 10 }}>
                      {' '}
                      <Icon
                        active
                        name="ios-time"
                        type="Ionicons"
                        style={{
                          color: '#67c100',
                          fontSize: 20,
                        }}
                      />
                      Apr 25, 5pm - 6pm
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Body>
                    <Badge danger>
                      <Text>{'Failed'}</Text>
                    </Badge>
                  </Body>
                  <Body>
                    <Button
                      transparent
                      onPress={() =>
                        props.navigation.navigate('Request Details', {
                          request: request,
                        })
                      }>
                      <Text
                        style={{
                          fontWeight: '600',
                          color: 'grey',
                          fontSize: 20,
                        }}>
                        See details >
                      </Text>
                    </Button>
                  </Body>
                </Right>
              </CardItem>
              <CardItem style={{ justifyContent: 'space-evenly' }}>
                <Button
                  block
                  onPress={() => props.navigation.navigate('New Request')}
                  style={{
                    width: '45%',
                    marginBottom: 20,
                    backgroundColor: '#67c100',
                  }}>
                  <Text style={{ fontWeight: '600' }}>REORDER</Text>
                </Button>
                {request != null && (
                  <Button
                    block
                    onPress={() =>
                      props.navigation.push('Requests', { remove: true })
                    }
                    bordered
                    warning
                    style={{
                      width: '45%',
                      marginBottom: 20,
                      color: '#67c100',
                    }}>
                    <Text style={{ fontWeight: '600' }}>DELETE</Text>
                  </Button>
                )}
              </CardItem>
            </Card>
          </List>
        )}

        {request == null && (
          <View>
            <Text style={styles.helptext}>
              You would be able to submit only one request at a time.
            </Text>
            <Image
              style={styles.groceryicon}
              source={require('../assets/grocery-delivery.png')}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('New Request')}>
              <Image
                style={styles.logo}
                source={require('../assets/add_green.png')}
              />
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
  helptext: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  groceryicon: {
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
  },
});
