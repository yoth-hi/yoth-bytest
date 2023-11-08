"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseMessage(message) {
    var parsedMessage = {
        tags: null,
        source: null,
        command: null,
        parameters: null
    };
    var idx = 0;
    var rawTagsComponent = null;
    var rawSourceComponent = null;
    var rawCommandComponent = null;
    var rawParametersComponent = null;
    if (message[idx] === '@') {
        var endIdx_1 = message.indexOf(' ');
        rawTagsComponent = message.slice(1, endIdx_1);
        idx = endIdx_1 + 1;
    }
    if (message[idx] === ':') {
        idx += 1;
        var endIdx_2 = message.indexOf(' ', idx);
        rawSourceComponent = message.slice(idx, endIdx_2);
        idx = endIdx_2 + 1;
    }
    var endIdx = message.indexOf(':', idx);
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
    }
    else {
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
function parseTags(tags) {
    var tagsToIgnore = {
        'client-nonce': null,
        'flags': null
    };
    var dictParsedTags = {};
    var parsedTags = tags.split(';');
    parsedTags.forEach(function (tag) {
        var parsedTag = tag.split('=');
        var tagValue = (parsedTag[1] === '') ? null : parsedTag[1];
        switch (parsedTag[0]) {
            case 'badges':
            case 'badge-info':
                if (tagValue) {
                    var dict_1 = {};
                    var badges = tagValue.split(',');
                    badges.forEach(function (pair) {
                        var badgeParts = pair.split('/');
                        dict_1[badgeParts[0]] = badgeParts[1];
                    });
                    dictParsedTags[parsedTag[0]] = dict_1;
                }
                else {
                    dictParsedTags[parsedTag[0]] = null;
                }
                break;
            case 'emotes':
                if (tagValue) {
                    var dictEmotes_1 = {};
                    var emotes = tagValue.split('/');
                    emotes.forEach(function (emote) {
                        var emoteParts = emote.split(':');
                        var textPositions = [];
                        var positions = emoteParts[1].split(',');
                        positions.forEach(function (position) {
                            var positionParts = position.split('-');
                            textPositions.push({
                                startPosition: positionParts[0],
                                endPosition: positionParts[1]
                            });
                        });
                        dictEmotes_1[emoteParts[0]] = textPositions;
                    });
                    dictParsedTags[parsedTag[0]] = dictEmotes_1;
                }
                else {
                    dictParsedTags[parsedTag[0]] = null;
                }
                break;
            case 'emote-sets':
                var emoteSetIds = tagValue.split(',');
                dictParsedTags[parsedTag[0]] = emoteSetIds;
                break;
            default:
                if (tagsToIgnore.hasOwnProperty(parsedTag[0])) {
                    ;
                }
                else {
                    dictParsedTags[parsedTag[0]] = tagValue;
                }
        }
    });
    return dictParsedTags;
}
function parseCommand(rawCommandComponent) {
    var parsedCommand = null;
    var commandParts = rawCommandComponent.split(' ');
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
            console.log("Unsupported IRC command: ".concat(commandParts[2]));
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
            console.log("numeric message: ".concat(commandParts[0]));
            return null;
        default:
            console.log("\nUnexpected command: ".concat(commandParts[0], "\n"));
            return null;
    }
    return parsedCommand;
}
function parseSource(rawSourceComponent) {
    if (rawSourceComponent === null) {
        return null;
    }
    else {
        var sourceParts = rawSourceComponent.split('!');
        return {
            nick: (sourceParts.length === 2) ? sourceParts[0] : null,
            host: (sourceParts.length === 2) ? sourceParts[1] : sourceParts[0]
        };
    }
}
function parseParameters(rawParametersComponent, command) {
    var idx = 0;
    var commandParts = rawParametersComponent.slice(idx + 1).trim();
    var paramsIdx = commandParts.indexOf(' ');
    if (paramsIdx === -1) {
        command.botCommand = commandParts.slice(0);
    }
    else {
        command.botCommand = commandParts.slice(0, paramsIdx);
        command.botCommandParams = commandParts.slice(paramsIdx).trim();
    }
    return command;
}
exports.default = parseMessage;
