interface ParsedMessage {
    tags: { [key: string]: any } | null;
    source: { nick: string | null, host: string } | null;
    command: Command | null;
    parameters: string | null;
}

interface Command {
    command: string;
    channel?: string;
    isCapRequestEnabled?: boolean;
    botCommand?: string;
    botCommandParams?: string;
}

function parseMessage(message: string): ParsedMessage | null {
    const parsedMessage: ParsedMessage = {
        tags: null,
        source: null,
        command: null,
        parameters: null
    };

    let idx = 0;
    let rawTagsComponent: string | null = null;
    let rawSourceComponent: string | null = null;
    let rawCommandComponent: string | null = null;
    let rawParametersComponent: string | null = null;

    if (message[idx] === '@') {
        const endIdx = message.indexOf(' ');
        rawTagsComponent = message.slice(1, endIdx);
        idx = endIdx + 1;
    }

    if (message[idx] === ':') {
        idx += 1;
        const endIdx = message.indexOf(' ', idx);
        rawSourceComponent = message.slice(idx, endIdx);
        idx = endIdx + 1;
    }

    let endIdx = message.indexOf(':', idx);
    if (endIdx === -1) {
        endIdx = message.length;
    }
    rawCommandComponent = message.slice(idx, endIdx).trim();

    if (endIdx !== message.length) {
        idx = endIdx + 1;
        rawParametersComponent = message.slice(idx);
    }

    parsedMessage.command = parseCommand(rawCommandComponent);

    if (parsedMessage.command === null) {
        return null;
    } else {
        if (rawTagsComponent !== null) {
            parsedMessage.tags = parseTags(rawTagsComponent);
        }
        parsedMessage.source = parseSource(rawSourceComponent);
        parsedMessage.parameters = rawParametersComponent;

        if (rawParametersComponent && rawParametersComponent[0] === '!') {
            parsedMessage.command = parseParameters(rawParametersComponent, parsedMessage.command);
        }
    }

    return parsedMessage;
}

function parseTags(tags: string): { [key: string]: any } {
    const tagsToIgnore = {
        'client-nonce': null,
        'flags': null
    };

    const dictParsedTags: { [key: string]: any } = {};

    const parsedTags = tags.split(';');
    parsedTags.forEach((tag) => {
        const parsedTag = tag.split('=');
        const tagValue = (parsedTag[1] === '') ? null : parsedTag[1];

        switch (parsedTag[0]) {
            case 'badges':
            case 'badge-info':
                if (tagValue) {
                    const dict: { [key: string]: string } = {};
                    const badges = tagValue.split(',');
                    badges.forEach((pair) => {
                        const badgeParts = pair.split('/');
                        dict[badgeParts[0]] = badgeParts[1];
                    });
                    dictParsedTags[parsedTag[0]] = dict;
                } else {
                    dictParsedTags[parsedTag[0]] = null;
                }
                break;
            case 'emotes':
                if (tagValue) {
                    const dictEmotes: { [key: string]: { startPosition: string, endPosition: string }[] } = {};
                    const emotes = tagValue.split('/');
                    emotes.forEach((emote) => {
                        const emoteParts = emote.split(':');
                        const textPositions: { startPosition: string, endPosition: string }[] = [];
                        const positions = emoteParts[1].split(',');
                        positions.forEach((position) => {
                            const positionParts = position.split('-');
                            textPositions.push({
                                startPosition: positionParts[0],
                                endPosition: positionParts[1]
                            });
                        });
                        dictEmotes[emoteParts[0]] = textPositions;
                    });
                    dictParsedTags[parsedTag[0]] = dictEmotes;
                } else {
                    dictParsedTags[parsedTag[0]] = null;
                }
                break;
            case 'emote-sets':
                const emoteSetIds = tagValue.split(',');
                dictParsedTags[parsedTag[0]] = emoteSetIds;
                break;
            default:
                if (tagsToIgnore.hasOwnProperty(parsedTag[0])) {
                    ;
                } else {
                    dictParsedTags[parsedTag[0]] = tagValue;
                }
        }
    });

    return dictParsedTags;
}

function parseCommand(rawCommandComponent: string): Command | null {
    let parsedCommand: Command | null = null;
    const commandParts = rawCommandComponent.split(' ');

    switch (commandParts[0]) {
        case 'JOIN':
        case 'PART':
        case 'NOTICE':
        case 'CLEARCHAT':
        case 'HOSTTARGET':
        case 'PRIVMSG':
            parsedCommand = {
                command: commandParts[0],
                channel: commandParts[1]
            };
            break;
        case 'PING':
            parsedCommand = {
                command: commandParts[0]
            };
            break;
        case 'CAP':
            parsedCommand = {
                command: commandParts[0],
                isCapRequestEnabled: (commandParts[2] === 'ACK') ? true : false,
            };
            break;
        case 'GLOBALUSERSTATE':
            parsedCommand = {
                command: commandParts[0]
            };
            break;
        case 'USERSTATE':
        case 'ROOMSTATE':
            parsedCommand = {
                command: commandParts[0],
                channel: commandParts[1]
            };
            break;
        case 'RECONNECT':
            console.log('The Twitch IRC server is about to terminate the connection for maintenance.');
            parsedCommand = {
                command: commandParts[0]
            };
            break;
        case '421':
            console.log(`Unsupported IRC command: ${commandParts[2]}`);
            return null;
        case '001':
            parsedCommand = {
                command: commandParts[0],
                channel: commandParts[1]
            };
            break;
        case '002':
        case '003':
        case '004':
        case '353':
        case '366':
        case '372':
        case '375':
        case '376':
            console.log(`numeric message: ${commandParts[0]}`);
            return null;
        default:
            console.log(`\nUnexpected command: ${commandParts[0]}\n`);
            return null;
    }

    return parsedCommand;
}

function parseSource(rawSourceComponent: string | null): { nick: string | null, host: string } | null {
    if (rawSourceComponent === null) {
        return null;
    } else {
        const sourceParts = rawSourceComponent.split('!');
        return {
            nick: (sourceParts.length === 2) ? sourceParts[0] : null,
            host: (sourceParts.length === 2) ? sourceParts[1] : sourceParts[0]
        };
    }
}

function parseParameters(rawParametersComponent: string, command: Command): Command {
    const idx = 0;
    const commandParts = rawParametersComponent.slice(idx + 1).trim();
    const paramsIdx = commandParts.indexOf(' ');

    if (paramsIdx === -1) {
        command.botCommand = commandParts.slice(0);
    } else {
        command.botCommand = commandParts.slice(0, paramsIdx);
        command.botCommandParams = commandParts.slice(paramsIdx).trim();
    }

    return command;
}

export default parseMessage;