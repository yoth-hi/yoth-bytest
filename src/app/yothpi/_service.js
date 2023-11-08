"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.req_btn = exports.getTraslate = void 0;
var _tr_1 = require("./_tr");
var getTraslate = function (ling) {
    return _tr_1.default[ling] || _tr_1.default["en"];
};
exports.getTraslate = getTraslate;
var req_btn = function (_a) {
    var title = _a.title, id = _a.id, endpoint = _a.endpoint, icon = _a.icon, img = _a.img;
    return {
        id: id,
        title: title,
        endpoint: {
            url: endpoint
        },
        icon: icon,
        img: img
    };
};
exports.req_btn = req_btn;
