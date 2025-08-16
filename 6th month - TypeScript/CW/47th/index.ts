// type TTransport = {
//     transfer: (country: string, items: string[]) => void
// }

// abstract class TransportCreator {
//     public abstract factoryMethod: () => TTransport
//     public transfer = (country: string, items: string[]): void => {
//         const transport = this.factoryMethod()
//         transport.transfer(country,items)
//     }
// }

// class Truck implements TTransport {
//     transfer = (country: string, items: string[]) => {
//         console.log(`Truck to ${country} transport ${items}`)
//     }; 
// }

// class TruckCreator extends TransportCreator {
//     factoryMethod = () => {
//         return new Truck()
//     }
// }

// class Client {
//     country: string
//     items: string[]
//     creator: TransportCreator
//     constructor(country: string, items: string[], creator: TransportCreator) {
//         this.country = country
//         this.items = items
//         this.creator = creator
//     }

//     transfer = () => {
//         this.creator.transfer(this.country, this.items)
//     }
// }

//     const client1 = new Client('Jamaica',['Goods'], new TruckCreator())
//     console.log(client1.transfer())

class UserDocument {
    state: State
    constructor(state: State) {
        this.state = state
    }
    changeState(state: State) {
        this.state = state
    }
}

abstract class State {
    protected document: UserDocument | undefined
    public setDocument = (document: UserDocument) => {
        this.document = document
    }

    abstract draft: () => void
    abstract moderate: () => void
    abstract publish: () => void
}

class DraftedState extends State {
    draft = () => {
        console.log('Already in draft')
    }
    moderate = () => {
        this.document?.changeState(new ModerateState())
    }
    publish = () => {
        console.log(`Drafted cannot be published`)
    }
}

class  ModerateState extends State {
    draft = () => {
        this.document?.changeState(new DraftedState())
    }
    moderate = () => {
        console.log(`Already in moderate state`)
    };
    publish = () => {
        this.document?.changeState(new PublishedState())
    };
}

class PublishedState extends State {
    draft = () => {
        this.document?.changeState(new DraftedState())
    }
    moderate = () => {
        this,this.document?.changeState(new ModerateState())
    };
    publish = () => {
        console.log(`Already published`)
    };
}

const doc = new UserDocument()
doc.draft()