import React, { useState } from 'react';
import { 
  Container
  , Content
  , Card
  , CardItem
  , Text
  , Button
  , Left
  , Body
  , Form
  , Item
  , Input
  , Textarea
  , Label
  , Title
  , Header
  , DatePicker } from 'native-base';


export default function NewRequestScreen(props) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [deliveryWindow, setDeliveryWindow] = useState('');
  const [instructions, setInstructions] = useState('');
  const [itemsText, setItemsText] = useState('');
  const [items, setItems] = useState([]);
  const [pickerDefaultDate, setPickerDefaultDate] = useState(new Date());

  function datePickerSet(newDate) {
    setDate(newDate);
  }

  function updateItemList(itemsText) {
    setItems(itemsText.split(/\r?\n/));
  }

  function saveRequest() {
    props.navigation.push('Requests', {
      request: {
        name: name,
        address: address,
        date:  date.toLocaleString('default', { month: 'long'}) + ' ' + date.getDate(),
        deliveryWindow: deliveryWindow,
        instructions: instructions,
        items: items,
        status: 'Pending'
      }
    });

    // setName('');
    // setAddress('');
    // setDate('');
    // setDeliveryWindow('');
    // setInstructions('');
    // setItemsText('');
    // setItems([]);
    // setPickerDefaultDate(new Date());
  }
  
  return (
    <Container>
          <Header>
              <Body>
                <Title>Create new request</Title>
              </Body>    
          </Header>
          <Content padder>
            <Form>
            <Item stackedLabel>
                <Label>First Name</Label>
                <Input autoFocus defaultValue={name} onChangeText={text => setName(text)} />
              </Item>
              <Item stackedLabel>
                <Label>Full Address</Label>
                <Input defaultValue={address} onChangeText={text => setAddress(text)}/>
              </Item>
              <Item stackedLabel>
                <Label>Need Groceries By</Label>
                <DatePicker
                  defaultDate={pickerDefaultDate}
                  minimumDate={new Date()}
                  maximumDate={new Date(2020, 5, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={datePickerSet}
                  disabled={false}
                  />
              </Item>
              <Item stackedLabel>
                <Label>Delivery window (e.g., 2pm-4pm)</Label>
                <Input defaultValue={deliveryWindow} onChangeText={text => setDeliveryWindow(text)}/>
              </Item>
              <Item>
                <Textarea defaultValue={itemsText} onChangeText={text => { setItemsText(text); updateItemList(itemsText);}} style={{flex:1}} rowSpan={6} bordered placeholder="What do you need? Enter one item per line" />
              </Item>

              <Item stackedLabel>
                <Label>Special instructions</Label>
                <Input defaultValue={instructions} onChangeText={text => setInstructions(text)} placeholder="e.g., leave at door and ring"/>
              </Item>
            </Form>

            <Button block success style={{marginBottom: 20, marginTop: 10}} onPress={() => saveRequest()}>
              <Text>Save request</Text>
            </Button>
            <Button block transparent onPress={() => props.navigation.goBack()}><Text>Dismiss</Text></Button>
          </Content>
        </Container>
  )
}