const tmi = require('tmi.js')

const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "rawbotage",
        password: "oauth:4700ugnex819gqgvlwmeehka34i6rs"
    },
//    channels: ["rawvoltage", "kaogee", "g96k", "danyellyjelly", "micheller"]
    channels: ["rawvoltage"]
};

const client = new tmi.client(options)
client.connect()

let currentlyJoined = []

//client.on('chat', function(channel, user, message, self) {
    if (self) return
    
    if (message == "!twitter") {
        client.action("rawvoltage", "twitter.com/rawvoltage")
    }
    
    if (message == "!instagram") {
        client.action("rawvoltage", "instagram.com/raw.voltage")
    }
    
    if (message.includes("rawvoltage") == true) {
        client.whisper("rawvoltage", "You have been mentioned by " + user['display-name'] + " in channel " + channel)
    }
//    client.action("rawvoltage", user['display-name'])
    try { // join command
        if (message.includes("!join") && (user['badges']['broadcaster'] == 1 || user['mod'] == true)) {
            client.join(message.slice(6))
            currentlyJoined.push(message.slice(6))
//            client.action("rawvoltage", "You are currently in the following channels: " + currentlyJoined)
//            client.action("rawvoltage", "You have succesfully joined " + message.slice(6) + currentlyJoined)
        }
    } catch (err) {
        client.action("rawvoltage", user['display-name'] + " You are not authorized to use this command.")
        console.log(err.message)
    }
    
    try { // leave command
        if (message.includes("!leave") && (user['badges']['broadcaster'] == 1 || user['mod'] == true)) {
            client.part(message.slice(7))
            client.action("rawvoltage", "Left " + message.slice(7))
            }
    } catch (err) {
        client.action("rawvoltage", user['display-name'] + " You are not authorized to use this command.")
        console.log(err.message)
    }
    
    try { // reset command
        if (message.includes("!reset") && (user['badges']['broadcaster'] == 1 || user['mod'] == true)) {
//            console.log(currentlyJoined.forEach)
            currentlyJoined.forEach(function (e) {
                console.log(e)
            })
            }
    } catch (err) {
        client.action("rawvoltage", user['display-name'] + " You are not authorized to use this command.")
        console.log(err.message)
    }
})

client.on("join", function(channel, username, self) {
    if (username === "streamelements") {
        return
    }
//    client.action("rawvoltage", username + " <3")
    
    const vips = ["alexa", "anteluce", "danyellyjelly", "ivircatalyst", "letzie", "rawvoltage", "sumbunny", "tiffae", "tinaqt", "xequ"]
    
    const matching = vips.filter((vips) => username.includes(vips))
//    console.log(matching)
    if (matching.length == 0) {
        return
    } else client.whisper("rawvoltage", username + " has joined " + channel)
    console.log(matching)
    
})

client.on('connected', function (address, port) {
    console.log("Address: " + address + " Port: " + port)
//    client.action("rawvoltage", "Hello, I have arrived")
})