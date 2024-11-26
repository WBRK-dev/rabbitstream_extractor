const cryptoJs = require('crypto-js');
const {createCanvas, createImageData, loadImage} = require('canvas')
const domain = 'grostembed.online';
const embed_url = "https://" + domain + "/v2/embed-4/";
const referrer = "https://flixhq.to/";
const user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";

let wasm: any;
let arr = new Array(128).fill(void 0);
const dateNow = Date.now();
let content: string = '';

const dataURL = ""

const meta = {
    content: content
}
const pixels = [];
const data = new Uint8ClampedArray(pixels);


const image_data = {
    height: 50,
    width: 65,
    data: data,
}

interface fakeLocalStorage {
    [key: string]: string | Function

    setItem: Function
}

interface fakeWindow {
    localStorage: fakeLocalStorage

    [key: string]: any
}

const canvas = {
    baseUrl: "https://" + domain + "/v2/embed-4/NO6a1j1cRkYb?z=",
    width: 0,
    height: 0,
    style: {
        style: {
            display: "inline",
        },
    },
    context2d: {}
}

const fake_window: fakeWindow = {
    localStorage: {
        setItem: function (item: string, value: string) {
            fake_window.localStorage[item] = value;
        }
    },
    navigator: {
        webdriver: false,
        userAgent: user_agent,
        appVersion: user_agent
    },
    length: 0,
    document: {
        cookie: "",
    },
    origin: "https://" + domain,
    location: {
        href: "https://" + domain + "/v2/embed-4/NO6a1j1cRkYb?z=",
        origin: "https://" + domain,
    },
    performance: {
        timeOrigin: dateNow,
    },
    t: 1878522368,
    browser_version: 1878522368,
    xrax: '',
    crypto: {
        getRandomValues(array: Uint8Array): Uint8Array {
            for (let i = 0; i < array.length; i++) {
                array[i] = Math.floor(Math.random() * 256);
            }
            return array;
        },
        // 加密方法
        encrypt(data: string, key: string): string {
            return CryptoJS.AES.encrypt(data, key).toString();
        },
        // 解密方法
        decrypt(ciphertext: string, key: string): string {
            const bytes = CryptoJS.AES.decrypt(ciphertext, key);
            return bytes.toString(CryptoJS.enc.Utf8);
        }
    }

};

const nodeList = {
    image: {
        src: "https://" + domain + "/images/image.png?v=0.1.0",
        height: 50,
        width: 65,
        complete: true,
    },
    context2d: {},
    length: 1,
}


function get(index: number) {
    return arr[index];
}

arr.push(void 0, null, true, false);

let size = 0;
let memoryBuff: Uint8Array | null;

//fix this
function getMemBuff(): Uint8Array {
    return memoryBuff = null !== memoryBuff && 0 !== memoryBuff.byteLength ? memoryBuff : new Uint8Array(wasm.memory.buffer);
}

const encoder = new TextEncoder();
const encode = function (text: string, array: Uint8Array) {
    return encoder.encodeInto(text, array)
}

function parse(text: string, func: Function, func2: Function) {
    console.log("parse call: ", text, func, func2);
    if (void 0 === func2) {
        var encoded = encoder.encode(text);
        const parsedIndex = func(encoded.length, 1) >>> 0;
        return getMemBuff().subarray(parsedIndex, parsedIndex + encoded.length).set(encoded), size = encoded.length, parsedIndex;
    }
    let len = text.length;
    let parsedLen = func(len, 1) >>> 0;
    var new_arr = getMemBuff();
    let i = 0;
    for (; i < len; i++) {
        var char = text.charCodeAt(i);
        if (127 < char) {
            break;
        }
        new_arr[parsedLen + i] = char;
    }
    return i !== len && (0 !== i && (text = text.slice(i)), parsedLen = func2(parsedLen, len, len = i + 3 * text.length, 1) >>> 0, encoded = getMemBuff().subarray(parsedLen + i, parsedLen + len), i += encode(text, encoded).written, parsedLen = func2(parsedLen, len, i, 1) >>> 0), size = i, parsedLen;
}


let arr32: DataView | null = null;

function isNull(test: any) {
    console.log("is null call: ", (null == test));
    return null == test;
}

function getArr32() {
    let isDetached = true
    try {
        // @ts-ignore
        if (null != arr32){
            isDetached =  arr32.byteLength === 0;
        }
    } catch (e) {
        console.log('buffer is detached:',e)
        isDetached =  true;
    }
    if(null != arr32 && !isDetached && arr32.buffer == wasm.memory.buffer){
        return arr32
    }else{
        arr32 = new DataView(wasm.memory.buffer)
    }
    console.log('new dataview:',Date.now())
    return arr32
    // return arr32 = null !== arr32 && 0 !== arr32.byteLength ? arr32 : new Int32Array(wasm.memory.buffer);
}

let pointer = arr.length;

function shift(QP: number) {
    QP < 132 || (arr[QP] = pointer, pointer = QP);
}

function shiftGet(QP: number) {
    console.log("shiftGet call: ", QP);
    var Qn = get(QP);
    return shift(QP), Qn;
}

const decoder = new TextDecoder("utf-8", {
    fatal: true,
    ignoreBOM: true,
});

function decodeSub(index: number, offset: number) {
    return index >>>= 0, decoder.decode(getMemBuff().subarray(index, index + offset));
}

function addToStack(item: any) {
    pointer === arr.length && arr.push(arr.length + 1);
    var Qn = pointer;
    return pointer = arr[Qn], arr[Qn] = item, Qn;
}

function args(QP: any, Qn: number, QT: number, func: Function) {
    const Qx = {
        'a': QP,
        'b': Qn,
        'cnt': 1,
        'dtor': QT
    }
    return QP = (...Qw: any) => {
        Qx.cnt++;
        try {
            return func(Qx.a, Qx.b, ...Qw);
        } finally {
            0 == --Qx.cnt && (wasm.__wbindgen_export_2.get(Qx.dtor)(Qx.a, Qx.b), Qx.a = 0);
        }
    }, (QP.original = Qx, QP);
}

function export3(QP: any, Qn: any) {
    return shiftGet(wasm.__wbindgen_export_3(QP, Qn));
}

function export4(QP: any, Qn: any, QT: any) {
    wasm.__wbindgen_export_4(QP, Qn, addToStack(QT));
}

function export5(QP: any, Qn: any) {
    wasm.__wbindgen_export_5(QP, Qn)
}

function applyToWindow(func: Function, args: ArrayLike<Object>) {
    console.log("arguments: ", args);
    try {
        return func.apply(fake_window, args);
    } catch (error) {
        wasm.__wbindgen_export_6(addToStack(error));
    }
}

function Qj(QP: ArrayLike<number>, Qn: any) {
    return Qn = Qn(+QP.length, 1) >>> 0, (getMemBuff().set(QP, Qn), size = QP.length, Qn);
}

async function QN(QP: Response, Qn: WebAssembly.Imports) {
    let QT: ArrayBuffer, Qt: any;
    return 'function' == typeof Response && QP instanceof Response ? (QT = await QP.arrayBuffer(), Qt = await WebAssembly.instantiate(QT, Qn), Object.assign(Qt, {'bytes': QT})) : (Qt = await WebAssembly.instantiate(QP, Qn)) instanceof WebAssembly.Instance ? {
        'instance': Qt,
        'module': QP
    } : Qt;
}


function initWasm() {
    const wasmObj = {
        'wbg': {
            '__wbindgen_closure_wrapper117': function (Qn: any, QT: any) {
                return addToStack(args(Qn, QT, 2, export3));
            },
            '__wbindgen_closure_wrapper119': function (Qn: any, QT: any) {
                return addToStack(args(Qn, QT, 2, export4));
            },
            '__wbindgen_closure_wrapper121': function (Qn: any, QT: any) {
                return addToStack(args(Qn, QT, 2, export5));
            },
            '__wbindgen_closure_wrapper123': function (Qn: any, QT: any) {
                return addToStack(args(Qn, QT, 9, export4));
            },
            '__wbg_subarray_adc418253d76e2f1': function (arg0: any, arg1: any, arg2: any) {
                const ret = get(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
                return addToStack(ret);
            },

            '__wbg_toString_139023ab33acec36': function (arg0: any) {
                const ret = get(arg0).toString();
                return addToStack(ret);
            },
            '__wbg_toString_6eb7c1f755c00453': function (arg0: any) {
                const ret = get(arg0).toString();
                return addToStack(ret);
            },
            '__wbg_call_67f2111acd2dfdb6': function (arg0: any, arg1: any) {
                // const ret = get(arg0).call(get(arg1));
                // return addToStack(ret);
            },
            '__wbindgen_is_function': function (arg0: any) {
                const ret = typeof (get(arg0)) === 'function';
                console.log('isFunc:', ret)
                return ret;
            },
            '__wbg_getRandomValues_3aa56aa6edec874c': function () {
                return applyToWindow(function (arg0: number, arg1: number) {
                    let a0 = get(arg0)
                    let a1 = get(arg1)
                    a0.getRandomValues(a1)
                }, arguments);
            },

            '__wbg_randomFillSync_5c9c955aa56b6049': function () {
                // return applyToWindow(function (index: number, index2: number) {
                //
                //     return addToStack(get(index).context2d);
                // }, arguments);
            },
            '__wbg_msCrypto_eb05e62b530a1508': function (arg0: any) {
                // const ret = get(arg0).msCrypto;
                // return addToStack(ret);
            },
            '__wbg_require_cca90b1a94a0255b': function (arg0: any) {
                // const ret = get(arg0).require;
                // return addToStack(ret)
            },
            '__wbindgen_is_string': function (arg0: any) {
                let val = get(arg0);
                let ret = typeof val === 'string';
                return ret;
            },
            '__wbg_node_104a2ff8d6ea03a2': function (arg0: any) {
                const ret = get(arg0).node;
                return addToStack(ret);
            },
            '__wbg_versions_f686565e586dd935': function (arg0: any) {
                const ret = get(arg0).versions;
                return addToStack(ret);
            },
            '__wbg_process_4a72847cc503995b': function (arg0: any) {
                const ret = get(arg0).msCrypto;
                return addToStack(ret);
            },
            '__wbg_localStorage_3d538af21ea07fcc': function () {
                return applyToWindow(function (index: number) {
                    let a0 = get(index).localStorage;
                    return isNull(a0) ? 0 : addToStack(a0);
                }, arguments);
            },
            '__wbindgen_is_object': function (arg0: any) {
                let val = get(arg0);
                let ret = typeof val === 'object' && val !== null;
                return ret;
            },
            '__wbg_crypto_1d1f22824a6a080c': function (arg0: any) {
                const ret = get(arg0).crypto;
                return addToStack(ret);
            },
            '__wbindgen_number_get': function (offset: number, index: number) {
                let obj = get(index);
                // @ts-ignore
                let b: number = 'number' == typeof obj ? obj : void 0;
                console.log('number_get:', b)
                getArr32().setFloat32(offset + 8, b, true);
                getArr32().setInt32(offset, 1, true);

            },
            '__wbindgen_string_get': function (offset: number, index: number) {
                let str = get(index);
                let val = parse(str, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
                getArr32().setInt32(offset + 4, size, true);
                getArr32().setInt32(offset, val, true);
            },
            '__wbindgen_object_drop_ref': function (index: number) {
                shiftGet(index);
            },
            '__wbindgen_cb_drop': function (index: number) {
                let org = shiftGet(index).original;
                return 1 == org['cnt']-- && !(org['a'] = 0);

            },
            '__wbindgen_string_new': function (index: number, offset: number) {
                return addToStack(decodeSub(index, offset));
            },
            '__wbindgen_is_null': function (index: number) {
                return null === get(index);
            },
            '__wbindgen_is_undefined': function (index: number) {
                console.log("is_undefined call: ", (void 0 === get(index)));
                return void 0 === get(index);
            },
            '__wbindgen_boolean_get': function (index: number) {
                let bool = get(index);
                return 'boolean' == typeof bool ? bool ? 1 : 0 : 2;
            },
            '__wbg_instanceof_CanvasRenderingContext2d_4ec30ddd3f29f8f9': function (index: number) {
                let a = get(index)
                return true;
            },
            '__wbg_setfillStyle_59f426135f52910f': function (index1: number, index2: number) {
                let a1 = get(index1)
                let a2 = get(index2)
                // a1.fillStyle = a2;
            },
            '__wbg_setshadowBlur_229c56539d02f401': function () {
            },
            '__wbg_setshadowColor_340d5290cdc4ae9d': function () {
            },
            '__wbg_setfont_16d6e31e06a420a5': function () {
            },
            '__wbg_settextBaseline_c3266d3bd4a6695c': function () {
            },
            '__wbg_drawImage_cb13768a1bdc04bd': function () {
                return applyToWindow(function (index: any, decodeIndex: number, decodeIndexOffset: number, Ab: any) {
                    // get(index)['drawImage'](get(decodeIndex),decodeIndexOffset,Ab);
                    // get(index)['drawImage'](get(decodeIndex),decodeIndexOffset,Ab);
                }, arguments);

            },
            '__wbg_getImageData_66269d289f37d3c7': function () {
                return applyToWindow(function (index: number) {
                    console.log('get Image_data:', image_data)
                    let a = get(index);
                    return addToStack(image_data);
                }, arguments);
            },
            '__wbg_rect_2fa1df87ef638738': function () {
            },
            '__wbg_fillRect_4dd28e628381d240': function () {
            },
            '__wbg_fillText_07e5da9e41652f20': function () {
            },
            '__wbg_setProperty_5144ddce66bbde41': function () {
            },
            '__wbg_createElement_03cf347ddad1c8c0': function () {
                return applyToWindow(function (index: any, decodeIndex: number, decodeIndexOffset: number) {
                    // let a1 = get(index);
                    let a2 = decodeSub(decodeIndex, decodeIndexOffset)
                    console.log("createElement call: ", index, ' ', a2);
                    // let new_canvas = createCanvas()
                    // return addToStack(new_canvas);
                    return addToStack(canvas);
                }, arguments);
            },
            '__wbg_querySelector_118a0639aa1f51cd': function () {
                return applyToWindow(function (index: number, decodeIndex: number, decodeOffset: number) {
                    //let item = get(index).querySelector(decodeSub(decodeIndex, decodeOffset));
                    //return isNull(item) ? 0 : addToStack(item);
                    return addToStack(meta);
                }, arguments);
            },
            '__wbg_querySelectorAll_50c79cd4f7573825': function () {
                return applyToWindow(function () {
                    return addToStack(nodeList);
                }, arguments);
            },
            '__wbg_getAttribute_706ae88bd37410fa': function (offset: number, index: number, decodeIndex: number, decodeOffset: number) {
                //let attr = get(index).getAttribute(decodeSub(decodeIndex, decodeOffset));
                let attr = meta.content;
                //todo!
                let todo = isNull(attr) ? 0 : parse(attr, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
                getArr32().setInt32(offset + 4, size, true);
                getArr32().setInt32(offset, todo, true);
            },
            '__wbg_target_6795373f170fd786': function (index: number) {
                let target = get(index).target
                return isNull(target) ? 0 : addToStack(target);
            },
            '__wbg_addEventListener_f984e99465a6a7f4': function () {
            },
            '__wbg_instanceof_HtmlCanvasElement_1e81f71f630e46bc': function (index: number) {
                let a = get(index)
                return true;
            },
            '__wbg_setwidth_233645b297bb3318': function (index: number, set: number) {
                get(index).width = set >>> 0;
            },
            '__wbg_setheight_fcb491cf54e3527c': function (index: number, set: number) {
                get(index).height = set >>> 0;
            },
            '__wbg_getContext_dfc91ab0837db1d1': function () {
                return applyToWindow(function (index: number) {
                    console.log("getContext call: ");
                    let a0 = get(index)
                    // return addToStack(a0.getContext('2d'));
                    return addToStack(a0.context2d);

                }, arguments);
            },
            '__wbg_toDataURL_97b108dd1a4b7454': function () {
                return applyToWindow(function (offset: number) {
                    let _dataUrl = parse(dataURL, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
                    getArr32().setInt32(offset + 4, size, true);
                    getArr32().setInt32(offset, _dataUrl, true);
                }, arguments);
            },
            '__wbg_instanceof_HtmlDocument_1100f8a983ca79f9': function () {
                return true;
            },
            '__wbg_cookie_0ad89e781441fb95': function () {
                return applyToWindow(function (offset: number, index: number) {
                    let _cookie = parse(get(index).cookie, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
                    getArr32().setInt32(offset + 4, size, true);
                    getArr32().setInt32(offset, _cookie, true);
                }, arguments);
            },
            '__wbg_style_ca229e3326b3c3fb': function (index: number) {
                addToStack(get(index).style);
            },
            '__wbg_instanceof_HtmlImageElement_9c82d4e3651a8533': function () {
                return true;
            },
            '__wbg_src_87a0e38af6229364': function (offset: number, index: number) {
                let _src = parse(get(index).src, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
                getArr32().setInt32(offset + 4, size, true);
                getArr32().setInt32(offset, _src, true);

            },
            '__wbg_width_e1a38bdd483e1283': function (index: number) {
                return get(index).width;
            },
            '__wbg_height_e4cc2294187313c9': function (index: number) {
                return get(index).height;
            },
            '__wbg_complete_1162c2697406af11': function (index: number) {
                return get(index).complete;
            },
            '__wbg_data_d34dc554f90b8652': function (offset: number, index: number) {
                var _data = Qj(get(index).data, wasm.__wbindgen_export_0);
                getArr32().setInt32(offset + 4, size, true);
                getArr32().setInt32(offset , _data, true);
            },
            '__wbg_origin_305402044aa148ce': function () {
                return applyToWindow(function (offset: number, index: number) {
                    let _origin = parse(get(index).origin, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
                    getArr32().setInt32(offset + 4, size, true);
                    getArr32().setInt32(offset , _origin, true);
                }, arguments)
            },
            '__wbg_length_8a9352f7b7360c37': function (index: number) {
                return get(index).length;
            },
            '__wbg_get_c30ae0782d86747f': function (index: number, index2: number) {
                let _image = get(index).image;
                // let a0 = get(index)[index2 >>> 0x0]

                return isNull(_image) ? 0 : addToStack(_image);
            },
            '__wbg_timeOrigin_f462952854d802ec': function (index: number) {
                return get(index).timeOrigin;
            },
            '__wbg_instanceof_Window_cee7a886d55e7df5': function (index: number) {
                let a0 = get(index)
                return true
            },
            '__wbg_document_eb7fd66bde3ee213': function (index: number) {
                let _document = get(index).document;
                return isNull(_document) ? 0 : addToStack(_document);
            },
            '__wbg_location_b17760ac7977a47a': function (index: number) {
                return addToStack(get(index).location);
            },
            '__wbg_performance_4ca1873776fdb3d2': function (index: number) {
                let _performance = get(index).performance;
                return isNull(_performance) ? 0 : addToStack(_performance);
            },
            '__wbg_origin_e1f8acdeb3a39a2b': function (offset: number, index: number) {
                let _origin = parse(get(index).origin, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
                getArr32().setInt32(offset + 4, size, true);
                getArr32().setInt32(offset , _origin, true);
            },
            '__wbg_get_8986951b1ee310e0': function (index: number, index2: number, index3: number) {
                let a = get(index);
                let b = decodeSub(index2, index3);
                console.log('get Win:', b)
                let c = a[b]
                return isNull(c) ? 0 : addToStack(c);
            },
            '__wbg_setTimeout_6ed7182ebad5d297': function () {
                return applyToWindow(function () {
                    return 10;
                }, arguments)
            },
            '__wbg_self_05040bd9523805b9': function () {
                return applyToWindow(function () {
                    return addToStack(fake_window);
                }, arguments);
            },
            '__wbg_window_adc720039f2cb14f': function () {
                return applyToWindow(function () {
                    return addToStack(fake_window);
                }, arguments);
            },
            '__wbg_globalThis_622105db80c1457d': function () {
                return applyToWindow(function () {
                    return addToStack(fake_window);
                }, arguments)
            },
            '__wbg_global_f56b013ed9bcf359': function () {
                return applyToWindow(function () {
                    return addToStack(fake_window);
                }, arguments)
            },
            '__wbg_newnoargs_cfecb3965268594c': function (index: number, offset: number) {
                return addToStack(new Function(decodeSub(index, offset)));
            },
            '__wbindgen_object_clone_ref': function (index: number) {
                return addToStack(get(index));
            },
            '__wbg_eval_c824e170787ad184': function () {
                return applyToWindow(function (index: number, offset: number) {
                    let code = decodeSub(index, offset)
                    console.log("source code:", code);
                    let fake_str = "fake_" + code;
                    let ev = eval(fake_str);
                    console.log("eval: ", fake_str, ' ', ev);

                    return addToStack(ev);
                }, arguments)
            },
            '__wbg_call_3f093dd26d5569f8': function () {
                return applyToWindow(function (index: number, index2: number) {
                    return addToStack(get(index).call(get(index2)));
                }, arguments);
            },
            '__wbg_set_961700853a212a39': function () {
                return applyToWindow(function (index: number, index2: number, index3: number) {
                    return Reflect.set(get(index), get(index2), get(index3));
                }, arguments);
            },
            '__wbg_buffer_b914fb8b50ebbc3e': function (index: number) {
                return addToStack(get(index).buffer);
            },
            '__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e': function (index: number, val: number, val2: number) {
                return addToStack(new Uint8Array(get(index), val >>> 0, val2 >>> 0));
            },
            '__wbg_new_b1f2d6842d615181': function (index: number) {
                return addToStack(new Uint8Array(get(index)));
            },
            '__wbg_newwithlength_0d03cef43b68a530': function (val: any) {
                return addToStack(new Uint8Array(val >>> 0));
            },
            '__wbg_buffer_67e624f5a0ab2319': function (index: number) {
                return addToStack(get(index).buffer);
            },
            '__wbg_length_21c4b0ae73cba59d': function (index: number) {
                return get(index).length;
            },
            '__wbg_set_7d988c98e6ced92d': function (index: number, index2: number, val: number) {
                get(index).set(get(index2), val >>> 0);
            },
            '__wbindgen_debug_string': function () {
            },
            '__wbindgen_throw': function (index: number, offset: number) {
                throw new Error(decodeSub(index, offset));
            },
            '__wbindgen_memory': function () {
                return addToStack(wasm.memory);
            }
        }
    }
    return wasmObj;
}

function assignWasm(resp: any) {
    wasm = resp.exports;
    arr32 = null, memoryBuff = null, wasm;
}

function QZ(QP: any) {
    let Qn: any;
    return void 0 !== wasm ? wasm : (Qn = initWasm(), QP instanceof WebAssembly.Module || (QP = new WebAssembly.Module(QP)), assignWasm(new WebAssembly.Instance(QP, Qn)));
}


// todo!
async function loadWasm(url: any) {
    let mod: any, buffer: any;
    return void 0 !== wasm ? wasm : (mod = initWasm(), {
        instance: url,
        module: mod,
        bytes: buffer
    } = (url = fetch(url), void 0, await QN(await url, mod)), assignWasm(url), buffer);
}

const greetLoader = {
    greet: function () {
        wasm.groot();
    }
}

let wasmLoader = Object.assign(loadWasm, {'initSync': QZ}, greetLoader);

const Z = (z: string, Q0: string) => {
    try {
        var Q1 = cryptoJs.AES.decrypt(z, Q0);
        return JSON.parse(Q1.toString(cryptoJs.enc.Utf8));
    } catch (Q2: any) {
    }
    return [];
}

const R = (z: Uint8Array, Q0: Array<number>) => {
    try {
        for (let Q1 = 0; Q1 < z.length; Q1++) {
            z[Q1] = z[Q1] ^ Q0[Q1 % Q0.length];
        }
    } catch (Q2) {
        return null;
    }
}


function r(z: number) {
    return [
        (4278190080 & z) >> 24,
        (16711680 & z) >> 16,
        (65280 & z) >> 8,
        255 & z
    ];
}

const V = async () => {
    let Q0 = await wasmLoader('https://' + domain + '/images/loading.png?v=0.0.9');
    try {
        fake_window.bytes = Q0;
        wasmLoader.greet();
    } catch (error) {
        console.log("error: ", error);
    }
    fake_window.jwt_plugin(Q0);
}

const getMeta = async (url: string) => {
    let resp = await fetch(url, {
        "headers": {
            "UserAgent": user_agent,
            "Referrer": referrer,
        }
    });
    let txt = await resp.text();
    let regx = /name="j_crt" content="[A-Za-z0-9=]*/g
    // @ts-ignore
    let match = txt.match(regx)[0];
    let content = match.slice(match.lastIndexOf('"') + 1)
    console.log('content:', content)
    meta.content = content;
}

const main = async (xrax) => {
    await getMeta((embed_url + xrax + "?z="));
    fake_window.xrax = xrax;
    await V();

    // let getSourcesUrl = "https://"+domain+"/ajax/v2/embed-4/getSources?id=" + fake_window.pid + "&v=" + fake_window.localStorage.kversion + "&h=" + fake_window.localStorage.kid + "&b=1676800512"
    let getSourcesUrl = "https://" + domain + "/ajax/v2/embed-4/getSources?id=" + fake_window.pid + "&v=" + fake_window.localStorage.kversion + "&h=" + fake_window.localStorage.kid + "&b=" + fake_window.browser_version
    console.log(getSourcesUrl)
    const headers = {
        'Host': domain,
        'sec-ch-ua-platform': '"macOS"',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        'accept': '*/*',
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://' + domain + '/v2/embed-4/YtWrKhOWfk3v?z=',
        'accept-language': 'zh-CN,zh;q=0.9',
        'priority': 'u=1, i'
    }
    let resp_json = await (await fetch(getSourcesUrl, {
        "headers": headers,
        "method": "GET",
        "mode": "cors"
    })).json();
    console.log("\nResponse from getSources:");
    console.log(resp_json);
}


main('kcpnPif91E4N'); //change this value to the embed-id you want to extract from