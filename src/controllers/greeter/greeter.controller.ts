import { Controller, Get, Post, BodyParams } from "@tsed/common";
import { BadRequest } from "ts-httpexceptions";

export interface UpdateGreetingMessagePayload {
  message: string;
}

@Controller('/greeter')
class GreeterController {

  private _greetingMessage = 'Hello World';

  @Get()
  getGreetingMessage() {
    return this._greetingMessage;
  }

  @Post()
  updateGreetingMessage(@BodyParams() body: UpdateGreetingMessagePayload) {
    const newGreeting = (body ? body.message : null);

    if (newGreeting) {
      this._greetingMessage = newGreeting;
      return ('Greeting message updated');
    } else {
      throw (new BadRequest('Greetings message is missing'));
    }
  }

}

export default GreeterController;