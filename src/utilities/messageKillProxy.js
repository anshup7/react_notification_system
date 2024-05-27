const handler = {
    get(target, prop) {
        if(prop === "message") {
            console.log("Message is read, starting kill timer", prop);
            target.accessTime = Date.now();
        }

        return target[prop];
    }
}

const messageKillProxy = (target) => new Proxy(target, handler);

export default messageKillProxy;