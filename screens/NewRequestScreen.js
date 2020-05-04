import React, { useState } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Form,
  Item,
  Input,
  Textarea,
  Label,
  Title,
  View,
  Header,
  DatePicker,
} from 'native-base';
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default function NewRequestScreen(props) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [deliveryWindow, setDeliveryWindow] = useState('');
  const [instructions, setInstructions] = useState('');
  const [itemsText, setItemsText] = useState('');
  const [pickerDefaultDate, setPickerDefaultDate] = useState(new Date());
  const [itemArr, setItemArr] = useState([
    {
      id: 1,
      text: 'Item',
      qty: 'Qty',
    },
    {
      id: 2,
      text: 'Item',
      qty: 'Qty',
    },
  ]);

  const [pickerEndDate, setPickerEndDate] = useState(
    moment(pickerDefaultDate)
      .add(8, 'day')
      .format('YYYY-MM-DD')
  );

  var radio_props = [
    { label: 'Anytime', value: 'Anytime' },
    { label: 'Morning: 8am - 12pm', value: 'Morning: 8am - 12pm' },
    { label: 'Noon: 12pm - 4pm', value: 'Noon: 12pm - 4pm' },
    { label: 'Evening: 4pm - 9pm', value: 'Evening: 4pm - 9pm' },
  ];

  function addItem() {
    var newItem = { id: itemArr.length + 1, text: 'Item', qty: 'Qty' };
    var newArr = [...itemArr, newItem];
    setItemArr(newArr);
  }

  function deleteItem(id) {
    var newArr = itemArr.filter(function(obj) {
      return obj.id !== id;
    });
    setItemArr(newArr);
  }

  function datePickerSet(newDate) {
    setDate(newDate);
  }

  function itemsToSave(itemArr) {
    var itemList = itemArr.map(item => item.text + '  ' + item.qty);
    return itemList;
  }

  function updateItem(id, updatedText) {
    var newArr = itemArr.map(item => {
      if (item.id === id) {
        return { id: id, text: updatedText, qty: item.qty };
      }
      return item;
    });
    setItemArr(newArr);
  }

  function updateQty(id, updatedQty) {
    var newArr = itemArr.map(item => {
      if (item.id === id) {
        return { id: id, text: item.text, qty: updatedQty };
      }
      return item;
    });
    setItemArr(newArr);
  }

  function saveRequest() {
    props.navigation.push('Requests', {
      request: {
        name: 'Dhwani',
        address: 'Champaign - 61820',
        date:
          date.toLocaleString('default', { month: 'long' }) +
          ' ' +
          date.getDate(),
        deliveryWindow: deliveryWindow,
        instructions: instructions,
        items: itemsToSave(itemArr),
        status: 'pending',
      },
    });
  }

  return (
    <Container>
      <Header>
        <Body>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('My Request')}>
              <Image
                style={styles.backIcon}
                source={require('../assets/back-icon.png')}
              />
            </TouchableOpacity>
            <Title style={{marginLeft:20}}>Create new request</Title>
          </View>
        </Body>
      </Header>
      <Content padder>
        <Form>
          <Item stackedLabel style={styles.sections}>
            <Label style={styles.labels}>What do you need?</Label>
            {itemArr.map(itemInfo => (
              <View style={styles.items} key={itemInfo.id}>
                <TextInput
                  style={styles.itemInput}
                  onChangeText={text => updateItem(itemInfo.id, text)}
                  placeholder={itemInfo.text}
                />
                <TextInput
                  style={styles.quantityInput}
                  onChangeText={text => updateQty(itemInfo.id, text)}
                  placeholder={itemInfo.qty}
                />
                <TouchableOpacity onPress={() => deleteItem(itemInfo.id)}>
                  <Image
                    style={styles.deleteItem}
                    source={require('../assets/close-button.png')}
                  />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity onPress={() => addItem()}>
              <Image
                style={styles.addItem}
                source={require('../assets/add_green.png')}
              />
            </TouchableOpacity>
          </Item>

          <Item stackedLabel style={{ borderBottomWidth: 0 }}>
            <Label style={styles.labels}>When to deliver?</Label>
            <View style={{ flex: 1 }}>
              <View>
                <CalendarStrip
                  startingDate={pickerDefaultDate}
                  endingDate={pickerEndDate}
                  selectedDate={pickerDefaultDate}
                  minDate={pickerDefaultDate}
                  calendarAnimation={{ type: 'sequence', duration: 30 }}
                  daySelectionAnimation={{
                    type: 'background',
                    duration: 200,
                    highlightColor: '#67c100',
                  }}
                  style={styles.calendar}
                  calendarHeaderStyle={{ color: 'grey', fontSize: 15 }}
                  calendarColor={'white'}
                  dateNumberStyle={{ color: 'black', fontSize: 15 }}
                  dateNameStyle={{ color: 'black' }}
                  disabledDateNameStyle={{ color: 'grey' }}
                  disabledDateNumberStyle={{ color: 'grey' }}
                  iconContainer={{ flex: 0.1 }}
                  onDateSelected={selectedDate =>
                    setDate(new Date(selectedDate))
                  }
                />
              </View>
              <ScrollView style={{ height: 100 }}>
                <TouchableWithoutFeedback>
                  <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={value => {
                      setDeliveryWindow(value);
                    }}
                    style={{ marginLeft: 10 }}
                    buttonColor={'#67c100'}
                    selectedButtonColor={'#67c100'}
                  />
                </TouchableWithoutFeedback>
              </ScrollView>
            </View>
          </Item>

          <Item stackedLabel style={styles.sections}>
            <Label style={styles.labels}>Special instructions</Label>
            <Input
              defaultValue={instructions}
              onChangeText={text => setInstructions(text)}
              placeholder="e.g., leave at door and ring"
              style={{ borderBottomWidth: 0.5, width: 320 }}
            />
          </Item>

          <Item style={styles.sections}>
            <View style={styles.rowContainer}>
              <Image
                style={styles.location}
                source={require('../assets/location.png')}
              />
              <Text style={styles.deliverTo}>
                Deliver to Dhwani - Champaign 61820
              </Text>
            </View>
          </Item>
        </Form>

        <View style={styles.rowContainer}>
          <Button
            block
            transparent
            style={styles.saveButton}
            onPress={() => saveRequest()}>
            <Text style={styles.saveButtonText}>SAVE</Text>
          </Button>
          <Button
            block
            success
            style={styles.postButton}
            onPress={() => saveRequest()}>
            <Text style={styles.postButtonText}>POST</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    width: 25,
    height: 25,
  },
  sections: {
    marginBottom: 10,
    borderBottomWidth: 0,
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'left',
    marginTop: 10,
  },
  itemInput: {
    paddingLeft: 10,
    marginTop: 10,
    width: 180,
    height: 35,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 3,
  },
  quantityInput: {
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 40,
    width: 50,
    height: 35,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 3,
  },
  addItem: {
    marginTop: 10,
    width: 35,
    height: 35,
  },
  deleteItem: {
    marginTop: 18,
    marginLeft: 15,
    width: 25,
    height: 25,
  },
  saveButton: {
    width: 160,
    marginBottom: 10,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#67c100',
    marginRight: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#67c100',
    fontWeight: 'bold',
  },
  postButton: {
    width: 160,
    marginBottom: 10,
    backgroundColor: '#67c100',
  },
  postButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  location: {
    marginRight: 5,
    height: 15,
    width: 15,
  },
  deliverTo: {
    color: '#2a85de',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  labels: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calendar: {
    marginTop: 10,
    height: 80,
    width: 340,
  },
});
