import React = require( "react");

import {
  el,
  a,
  p,
  div,
  RenderToDom,
  Component,
  Props
} from "react-tsx";
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';

import {AppBar} from "react-toolbox/lib/app_bar";
import {Button} from "react-toolbox/lib/button";
import {FontIcon} from "react-toolbox/lib/font_icon";

interface ExampleProps extends Props {

}

interface ExampleState {

}

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const TestCards = () => (
  <Card style={{width: '350px', margin:"auto"}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals/kittens"
      title="Meow"
      subtitle="meow meeooooowwwww"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="I love NATURE!!!!"
      subtitle="No I really do!"
    />
    <CardText>{dummyText}</CardText>
    <CardActions >
      <Button label="I concur" />
      <Button label="I disagree" />
    </CardActions>
  </Card>
);

class Example extends Component<ExampleProps, ExampleState>{
  render() {
    return (
      div({},
        div({},el(AppBar, {flat: true }, a({}, el(FontIcon, {value:"home"})))),
        el("section",{className:"example-body", style:{margin:"40px auto"}},TestCards())
      )
    )
  }
}

RenderToDom(el(Example, {}), document.getElementById("example"))
