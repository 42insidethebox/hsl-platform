import { Component } from '@angular/core';

// Define the ChatMessage type/interface
interface ChatMessage {
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-real-time-chat',
  templateUrl: './real-time-chat.component.html',
  styleUrls: ['./real-time-chat.component.css'],
})
export class RealTimeChatComponent {
  messages: ChatMessage[] = []; // Array to store chat messages
  newMessage: string = '';
  clientDetailsTooltip = `
  Full Name: John Doe
  Profile Picture: [Thumbnail]
  User ID: john.doe@email.com
  Location: New York, USA
  Joined Date: Jan 1, 2022
  ...
  `;

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Create a new message object
      const newChatMessage: ChatMessage = {
        user: {
          name: 'Your Name', // Replace with the sender's name
          avatar: 'avatar-url', // Replace with the sender's avatar URL
        },
        text: this.newMessage,
        timestamp: new Date(),
      };

      // Add the new message to the 'messages' array
      this.messages.push(newChatMessage);

      // Clear the message input field
      this.newMessage = '';
    }
  }

  replyMessage(message: ChatMessage) {
    // Logic to reply to a message
    // You can implement your reply functionality here
  }

  forwardMessage(message: ChatMessage) {
    // Logic to forward a message
    // You can implement your forward functionality here
  }

  deleteMessage(message: ChatMessage) {
    // Logic to delete a message
    // You can implement your delete functionality here
  }

  reactToMessage(message: ChatMessage, reaction: string) {
    // Logic to react to a message
    // 'reaction' can be 'like', 'love', 'emoji', etc.
    // You can implement your reaction functionality here
  }
  // Mini Action Handlers
  startVideoCall() {
    // Logic to start a video call
  }

  startVoiceCall() {
    // Logic to start a voice call
  }

  showClientDetails() {
    // Logic to display client details
  }
}
