const _0xba44 = ['addEventListener', 'rules', 'document', 'actor', 'minimize', 'init', 'click', 'slice', 'cssRules', 'name', 'cssText', '<link\x20rel=\x22stylesheet\x22\x20href=\x22', 'join', 'get', 'pHandleButtonClick', 'includes', 'selectorText', '\x22></body></html>\x0a\x09\x09', '.close', '\x0a\x09\x09<!DOCTYPE\x20html>\x0a\x09\x09<html\x20lang=\x22en\x22><head>\x0a\x09\x09\x09<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a\x09\x09\x09<title>', 'find', 've-hidden', '_doAddButtonSheet', 'removeClass', 'renderSceneConfig', '<a\x20class=\x22pop__btn-open\x22\x20title=\x22Pop\x20Out\x20(Warning:\x20Experimental)\x22><span\x20class=\x22fas\x20fa-external-link-alt\x22></span></a>', '_handlePopoutClick', 'entity', '.window-resizable-handle', 'element', 'pop__window', 'renderArtBrowserApp', 'push', 'className', '_getDocumentStyleHtml', 'styleSheets', '.pop__btn-open', 'preventDefault', '@font-face', 'body', 'append', 'style', 'renderJournalSheet', 'addClass', '<style>\x0a\x09\x09\x09\x09', 'href', 'forEach', 'renderItemSheet', 'startsWith', 'renderActorSheet'];

(function(_0x558644, _0xba4447) {
    const _0x488ed0 = function(_0x15cf03) {
        while (--_0x15cf03) {
            _0x558644['push'](_0x558644['shift']());
        }
    };
    _0x488ed0(++_0xba4447);
}(_0xba44, 0x1cb));

const _0x488e = function(_0x558644, _0xba4447) {
    _0x558644 = _0x558644 - 0x0;
    let _0x488ed0 = _0xba44[_0x558644];
    return _0x488ed0;
};
'use strict';



class PopoutSheet {

    static[_0x488e('0x2e')]() {
        Hooks['on'](_0x488e('0xf'), (_0x3dddca, _0x16b8a1, _0x802208) => PopoutSheet['_doAddButtonSheet'](_0x3dddca, _0x16b8a1, _0x802208)),
        Hooks['on'](_0x488e('0x28'), (_0x333bae, _0x2d3c33, _0x598e9a) => PopoutSheet[_0x488e('0xd')](_0x333bae, _0x2d3c33, _0x598e9a)),
        Hooks['on'](_0x488e('0x26'), (_0x5ad767, _0x1e369f, _0x18efe8) => PopoutSheet['_doAddButtonSheet'](_0x5ad767, _0x1e369f, _0x18efe8)),
        Hooks['on'](_0x488e('0x21'), (_0x38416a, _0x51f131, _0x156bc8) => PopoutSheet[_0x488e('0xd')](_0x38416a, _0x51f131, _0x156bc8)),
        Hooks['on']('renderRollTableConfig', (_0x42ecd9, _0x3ee150, _0x43f16c) => PopoutSheet[_0x488e('0xd')](_0x42ecd9, _0x3ee150, _0x43f16c)),
        Hooks['on'](_0x488e('0x16'), (_0x5b729a, _0x460c98, _0x2a7ec7) => PopoutSheet[_0x488e('0xd')](_0x5b729a, _0x460c98, _0x2a7ec7));
        Hooks['on']('renderSidebarTab', (_0x5b729a, _0x460c98, _0x2a7ec7) => PopoutSheet[_0x488e('0xd')](_0x5b729a, _0x460c98, _0x2a7ec7));
    }

    // _doAddSheetButton
    static[_0x488e('0xd')](_0x59ea42, _0x4e8ad1, _0x12e28a) {
        const _0x1ac1fc = _0x59ea42[_0x488e('0x14')]['find']('.window-header');
        _0x1ac1fc[_0x488e('0xb')](_0x488e('0x1b'))['remove'](), $(_0x488e('0x10'))[_0x488e('0x2f')](_0x349f7c => this[_0x488e('0x5')](_0x349f7c, _0x59ea42, _0x4e8ad1, _0x12e28a))['insertBefore'](_0x1ac1fc[_0x488e('0xb')](_0x488e('0x9')));
    }

    // pHandleButtonClick
    static[_0x488e('0x5')](_0x30b6a0, _0x1e3a4d, _0x5ecf9b, _0x2bdf4b) {
        _0x30b6a0[_0x488e('0x1c')](), this[_0x488e('0x11')](_0x1e3a4d, _0x2bdf4b);
    }

    // _getDocumentStyleHtml
    static[_0x488e('0x19')]() {
        const _0x55933d = [],
            _0x154ff8 = _0x41eec7 => {
                const _0x3e1ba1 = 'cssRules' in _0x41eec7 ? _0x41eec7[_0x488e('0x31')] : _0x41eec7[_0x488e('0x2a')];
                if (!_0x3e1ba1) return;
                const _0x52dc15 = [];
                [..._0x3e1ba1 || []][_0x488e('0x25')](_0xf013bd => {
                    let _0xd4c517 = _0x488e('0x1') in _0xf013bd ? _0xf013bd[_0x488e('0x1')] : _0xf013bd[_0x488e('0x7')] + '\x20{\x0a' + _0xf013bd[_0x488e('0x20')][_0x488e('0x1')] + '\x0a}\x0a';
                    _0xd4c517[_0x488e('0x6')](_0x488e('0x1d')) && (_0xd4c517 = _0xd4c517['replace'](/(url\(")([^"]+)("\))/g, (..._0x727966) => {
                        if (_0x727966[0x2][_0x488e('0x27')]('/') || !_0x41eec7[_0x488e('0x24')]) return '' + _0x727966[0x1] + _0x727966[0x2] + _0x727966[0x3];
                        else {
                            const _0x376a12 = new URL(_0x41eec7[_0x488e('0x24')])['pathname']['split']('/')[_0x488e('0x30')](0x0, -0x1)[_0x488e('0x3')]('/');
                            return '' + _0x727966[0x1] + _0x376a12 + '/' + _0x727966[0x2] + _0x727966[0x3];
                        }
                    })), _0x52dc15['push'](_0xd4c517);
                }), _0x55933d[_0x488e('0x17')](_0x488e('0x23') + _0x52dc15[_0x488e('0x3')]('\x0a') + '\x0a\x09\x09\x09</style>');
            };
        return [...document[_0x488e('0x1a')] || []][_0x488e('0x25')](_0xbee9ec => {
            try {
                _0x154ff8(_0xbee9ec);
            } catch (_0x349aed) {
                if (_0xbee9ec[_0x488e('0x24')]) _0x55933d[_0x488e('0x17')](_0x488e('0x2') + _0xbee9ec[_0x488e('0x24')] + '\x22>');
            }
        }), _0x55933d[_0x488e('0x3')]('\x0a');
    }

    // _handlePopoutClick
    static[_0x488e('0x11')](_0x174f54, _0x1bf1d0) {
        const _0x59642c = MiscUtil[_0x488e('0x4')](_0x1bf1d0, _0x488e('0x2c'), _0x488e('0x0')) || MiscUtil[_0x488e('0x4')](_0x1bf1d0, _0x488e('0x12'), _0x488e('0x0')) || '',
            _0x357c73 = open('', _0x59642c, 'width=800,height=800,location=0,menubar=0,status=0,titlebar=0,toolbar=0,directories=0');
        _0x357c73['document']['write'](_0x488e('0xa') + _0x59642c + '</title>\x0a\x0a\x09\x09\x09' + this['_getDocumentStyleHtml']() + '\x0a\x09\x09</head><body\x20class=\x22flex-col\x20' + document[_0x488e('0x1e')][_0x488e('0x18')] + _0x488e('0x8'));
        const _0x82a964 = $(_0x357c73[_0x488e('0x2b')]['body']),
            _0x40a0b3 = _0x174f54[_0x488e('0x2d')];
        _0x174f54['minimize'] = async () => {}, _0x174f54[_0x488e('0x14')][_0x488e('0x22')](_0x488e('0x15')), _0x82a964['append'](_0x174f54['element']);
        const _0x3d8840 = _0x174f54[_0x488e('0x14')]['find'](_0x488e('0x13'))['addClass'](_0x488e('0xc'));
        _0x357c73[_0x488e('0x29')]('unload', () => {
            $(document['body'])[_0x488e('0x1f')](_0x174f54[_0x488e('0x14')]), _0x174f54[_0x488e('0x14')][_0x488e('0xe')](_0x488e('0x15')), _0x3d8840['removeClass'](_0x488e('0xc')), _0x174f54['minimize'] = _0x40a0b3;
        });
    }
}

export {
    PopoutSheet
};