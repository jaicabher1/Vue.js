<script setup lang="ts">
import { ref } from 'vue'
import ollama from 'ollama'

const chatInput = ref('Why is the sky blue?')
const messages = ref([{ role: 'agent', content: 'Hello, I am Jaime. How can I help you?' }])
const currentOutputMessageContent = ref('')

const submitChat = async () => {
  const content = chatInput.value
  chatInput.value = ''
  const inputMessage = { role: 'user', content }
  messages.value.push(inputMessage)
  const response = await ollama.chat({ model: 'ipe', messages: [inputMessage], stream: true })
  for await (const part of response) {
    currentOutputMessageContent.value += part.message.content
  }
  messages.value.push({ role: 'agent', content: currentOutputMessageContent.value })
  currentOutputMessageContent.value = ''
}
</script>

<template>
  <div id="chatBox">
    <div id="chatContainer">
      <div id="chatArea" ref="chatArea">
        <div v-for="message in messages" :key="message.content" :class="message.role">
          <div class="message">{{ message.content }}</div>
        </div>
        <div v-if="currentOutputMessageContent" class="agent">
          <div class="message">{{ currentOutputMessageContent }}</div>
        </div>
      </div>
    </div>
    <div id="inputArea">
      <input id="chatInput" v-model="chatInput" @keyup.enter="submitChat" placeholder="Type your message here..." />
      <button @click="submitChat" id="submitButton">Submit</button>
    </div>
  </div>
</template>

<style scoped>
#chatBox {
  display: flex;
  flex-direction: column;
  height: 80vh; 
  width: 80vw; 
  max-width: 800px; 
  margin: auto; 
  background-color: #fcf9b9;
  border: 1px solid #fcf9b9;
  border-radius: 8px;
  overflow: hidden ;
  font-family: 'Courier';
}

#chatContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
}

#chatArea {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.message {
  padding: 15px;
  border-radius: 20px;
  max-width: 99%;
  word-wrap: break-word;
}

.user .message {
  background-color: #352495; 
  color: white; 
  text-align: end; 
  margin-left: 0; 
}

.agent .message {
  background-color: #fffceb;
  text-align: start;
  margin-right: 0;
}

#inputArea {
  display: flex;
  padding: 10px;
  border-top: 1px solid #fcf9b9;
  background-color: #fcf9b9;
}

#chatInput {
  flex: 1;
  padding: 10px;
  border: 1px solid #fcf9b9;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 14px;
  font-family: 'Courier';
}

#submitButton {
  padding: 10px 20px;
  background-color: #352495;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Courier';
}

#submitButton:hover {
  background-color: #0056b3;
}
</style>
