// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three', 
    'Message Four',
]

const types = [
    'info',
    'success',
    'error',
]

button.addEventListener('click', () => createNotification(
    // the message to be passed should be written here, but this is blank because we're using a random function
))

function createNotification(message = null, type =  null) {
    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.classList.add(type ? type : getRandomType)

    // notification.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 3000);
}

function getRandomMessage() {
    return messages [
        Math.floor(Math.random() * messages.length)
    ]
}

function getRandomType() {
    return types [
        Math.floor(Math.random() * types.length)
    ]
}