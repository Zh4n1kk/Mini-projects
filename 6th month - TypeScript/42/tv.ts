import readline from 'readline-sync'

class TV {
    currentChannel: number;
    channelLimit: number;

    constructor(currentChannel: number, channelLimit: number) {
        this.currentChannel = currentChannel;
        this.channelLimit = channelLimit;
    }

    getChannelName(): string {
        const arr = ['Main', 'News', 'Sports', 'Movies', 'Kids'];
        const arr2 = ['Channel', 'Commedy', 'Action', 'Drama', 'Documentary'];

        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomIndex2 = Math.floor(Math.random() * arr2.length);
        return `${arr[randomIndex]} ${arr2[randomIndex2]}`;
    }

    nextChannel():void {
        if (this.currentChannel < this.channelLimit) {
            this.currentChannel++;
        } else {
            this.currentChannel = 1;
        }
    }

    previousChannel():void {
        if (this.currentChannel > 1) {
            this.currentChannel--;
        } else {
            this.currentChannel = this.channelLimit;
        }
    }

    moveToChannel(channel: number) {
        if (channel > 0 && channel <= this.channelLimit) {
            this.currentChannel = channel;
        } else {
            console.log('Invalid channel number');
        }
    }
}
const tv = new TV(1,50);
const channelArr = ['']

for (let i = 1; i < 51; i++) {
    const channelName = tv.getChannelName();
    channelArr.push(channelName);
}
    console.log(`Current channel: ${channelArr[tv.currentChannel]} ${tv.currentChannel}`);
while (true) {
   
    const askUser = readline.question('What do you want to do? (next, previous, move , current , exit) channel: ');
    
    if (askUser === 'next') {
        tv.nextChannel();
        console.log(`Current channel: ${channelArr[tv.currentChannel]} ${tv.currentChannel}`);
    } else if (askUser === 'previous') {
        tv.previousChannel()
        console.log(`Current channel: ${channelArr[tv.currentChannel]} ${tv.currentChannel}`);
    } else if (askUser === 'move') {
        const chNumber = readline.question('What channel you want to move to?: ')
        const chNumberParsed = parseInt(chNumber);
        tv.moveToChannel(chNumberParsed)
        console.log(`Current channel: ${channelArr[tv.currentChannel]} ${tv.currentChannel}`);
    } else if (askUser === 'current') {
        console.log(`Current channel: ${channelArr[tv.currentChannel]} ${tv.currentChannel}`);
    } else if (askUser === 'exit') {
        console.log('Stopping the TV');
        break;
    } else {
        console.log('Invalid input, please try again');
    }
}