import React, { Component } from "react";
import { Slide, Image, Subtitle, Columns, List } from '@sambego/diorama';
import Speaker from "../img/JLord.jpg";


export default class TalkTitle extends Component {
  render() {
    return (
      <Slide>
        <Columns>
          <div>
            <Image src={Speaker} style={{width: "50vw", top: "0px"}} color="#ccc" />
          </div>
          <div>
            <Subtitle>Hi, I'm Joel</Subtitle>
            <List className="align-left">
              <li>Technical Evangelist @ Auth0</li>
              <li>Author @ Udemy, Egghead</li>
              <li>Co-organizer @ NomadJs</li>
              <li>❤ Twitter @joel__lord</li>
            </List>
          </div>
        </Columns>
      </Slide>
    )
  }
}