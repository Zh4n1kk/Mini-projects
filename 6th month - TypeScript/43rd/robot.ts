import readline from 'readline-sync'

abstract class Tool {
    durability: number = 100
    useCost: number = 10

    action(): void {
        if (this.durability <= 0) {
            console.log("Tool is broken and can't be used.")
            return
        } else if (this.durability === 10) {
            console.log('Last use')
        }
        this.durability -= this.useCost
    }
}

class Saw extends Tool {
    action(): void {
        super.action()
        if (this.durability > 0) console.log("ZZZZZZZZ")
    }
}

class Axe extends Tool {
    action(): void {
        super.action()
        if (this.durability > 0) console.log("THWACK!")
    }
}

class Drill extends Tool {
    action(): void {
        super.action()
        if (this.durability > 0) console.log("VRRRRRRRR")
    }
}

class Hammer extends Tool {
    action(): void {
        super.action()
        if (this.durability > 0) console.log("BANG BANG")
    }
}

class Screwdriver extends Tool {
    action(): void {
        super.action()
        if (this.durability > 0) console.log("CLICK CLICK")
    }
}

class Robot {
    tool: Tool | null = null

    setup_tool(tool: Tool): void {
        this.tool = tool
        console.log("Tool equipped.")
    }

    drop_tool(): void {
        if (this.tool) {
            console.log("Tool dropped.")
            this.tool = null
        } else {
            console.log("No tool to drop.")
        }
    }

    action(): void {
        if (!this.tool) {
            console.log("No tool equipped.")
            return
        }

        if (this.tool.durability <= 0) {
            console.log("Can't use tool. It is broken.")
            return
        }

        this.tool.action()
    }
}

const nuRobot = new Robot();

type ToolType = {
    [key: string]: Tool
}

const tools: ToolType = {
    hammer: new Hammer(),
    saw: new Saw(),
    axe: new Axe(),
    drill: new Drill(),
    screwdriver: new Screwdriver()
};

while (true) {
    const input = readline.question("\nChoose an action: setup, drop, use, exit: ").toLowerCase();

    if (input === "setup") {
        const toolName = readline.question("Which tool? (hammer, saw, axe, drill, screwdriver): ").toLowerCase();
        const validToolNames = ['hammer', 'saw', 'axe', 'drill', 'screwdriver'];
        if (nuRobot.tool !== null) {
            console.log('You have to drop your tool first!')
        } else if (validToolNames.indexOf(toolName) !== -1) {
            nuRobot.setup_tool(tools[toolName]);
        }  else {    
            console.log("Unknown tool.");
        }
    } else if (input === "drop") {
        nuRobot.drop_tool();
    } else if (input === "use") {
        nuRobot.action();
    } else if (input === "exit") {
        break;
    } else {
        console.log("Invalid command.");
    }
}