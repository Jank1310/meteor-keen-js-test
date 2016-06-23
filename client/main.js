import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import keen from 'keen-js';

var keenClient = new Keen({
  projectId: "YOUR_PROJECT_ID",
  writeKey: "YOUR_READ_KEY"
});

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  // add keen event
  keenClient.addEvent('test-collection', {testKey: "testValue"}, function callback(err, res) {
    console.log("Keen callback", err, res);
  })
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
