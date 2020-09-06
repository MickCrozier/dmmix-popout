var _0x383d = ['catch', 'Failed\x20to\x20initialise\x20', 'log', 'pInit', 'render', 'STR_SEE_CONSOLE', 'alert', 'pDoPreload', 'error', 'journal', 'Initialising', 'tables', 'doMonkeyPatch', 'Firing\x20\x22ready\x22\x20hook...', 'init', 'actors', 'Initialisation\x20complete!', 'MODULE_TITLE', 'preInit', 'ready'];

(function (_0x4e7548, _0x383d66) { 
    var _0xfb73b7 = function (_0x160828) { 
        while (--_0x160828) { _0x4e7548['push'](_0x4e7548['shift']()); } 
    };
    _0xfb73b7(++_0x383d66);
}(_0x383d, 0x1ad));

var _0xfb73 = function (_0x4e7548, _0x383d66) {
    _0x4e7548 = _0x4e7548 - 0x0;
    var _0xfb73b7 = _0x383d[_0x4e7548]; return _0xfb73b7;
};

import { Config } from './Config.js';
import { PopoutSheet } from './PopoutSheet.js';
import { Styler } from './Styler.js';

async function handleReady() { 
    await Config[_0xfb73('0xe')](), PopoutSheet[_0xfb73('0x5')](), Styler[_0xfb73('0x5')](); 
}

Hooks['on'](_0xfb73('0xa'), () => { 
    handleReady()[_0xfb73('0xb')](_0xd30313 => { window[_0xfb73('0x11')](_0xfb73('0xc')); }); 
});