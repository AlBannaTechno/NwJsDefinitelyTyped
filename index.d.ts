/**
 @description Document DefinitelyTyped file to support autocomplete and embedded docs for NwJs version 0.34.0
 This File will updated on two repositories
 first nwjs itself[if the comunity allow this file to be an embedded file with the source] : https://github.com/nwjs/nw.js

 second DefinitelyTyped repository itself : https://github.com/DefinitelyTyped/DefinitelyTyped
 but here we will change the name of the folder with every new version of nwjs

 @author Al Banna Techno(Osama Al Banna)
 */

type integer=number;
type float=number;
type double=number;
//////////////////////////// Copied From lib.dom.d.ts : Until we get a method to import from lib.dom.d.ts directly
interface HtmlDomWindow extends EventTarget, WindowTimers, WindowSessionStorage, WindowLocalStorage, WindowConsole, GlobalEventHandlers, IDBEnvironment, WindowBase64, GlobalFetch {
    readonly applicationCache: ApplicationCache;
    readonly caches: CacheStorage;
    readonly clientInformation: Navigator;
    readonly closed: boolean;
    readonly crypto: Crypto;
    defaultStatus: string;
    readonly devicePixelRatio: number;
    readonly document: Document;
    readonly doNotTrack: string;
    event: Event | undefined;
    readonly external: External;
    readonly frameElement: Element;
    readonly frames: Window;
    readonly history: History;
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly isSecureContext: boolean;
    readonly length: number;
    readonly location: Location;
    readonly locationbar: BarProp;
    readonly menubar: BarProp;
    readonly msContentScript: ExtensionScriptApis;
    readonly msCredentials: MSCredentials;
    name: string;
    readonly navigator: Navigator;
    offscreenBuffering: string | boolean;
    onabort: (this: Window, ev: UIEvent) => any;
    onafterprint: (this: Window, ev: Event) => any;
    onbeforeprint: (this: Window, ev: Event) => any;
    onbeforeunload: (this: Window, ev: BeforeUnloadEvent) => any;
    onblur: (this: Window, ev: FocusEvent) => any;
    oncanplay: (this: Window, ev: Event) => any;
    oncanplaythrough: (this: Window, ev: Event) => any;
    onchange: (this: Window, ev: Event) => any;
    onclick: (this: Window, ev: MouseEvent) => any;
    oncompassneedscalibration: (this: Window, ev: Event) => any;
    oncontextmenu: (this: Window, ev: PointerEvent) => any;
    ondblclick: (this: Window, ev: MouseEvent) => any;
    ondevicelight: (this: Window, ev: DeviceLightEvent) => any;
    ondevicemotion: (this: Window, ev: DeviceMotionEvent) => any;
    ondeviceorientation: (this: Window, ev: DeviceOrientationEvent) => any;
    ondrag: (this: Window, ev: DragEvent) => any;
    ondragend: (this: Window, ev: DragEvent) => any;
    ondragenter: (this: Window, ev: DragEvent) => any;
    ondragleave: (this: Window, ev: DragEvent) => any;
    ondragover: (this: Window, ev: DragEvent) => any;
    ondragstart: (this: Window, ev: DragEvent) => any;
    ondrop: (this: Window, ev: DragEvent) => any;
    ondurationchange: (this: Window, ev: Event) => any;
    onemptied: (this: Window, ev: Event) => any;
    onended: (this: Window, ev: MediaStreamErrorEvent) => any;
    onerror: ErrorEventHandler;
    onfocus: (this: Window, ev: FocusEvent) => any;
    onhashchange: (this: Window, ev: HashChangeEvent) => any;
    oninput: (this: Window, ev: Event) => any;
    oninvalid: (this: Window, ev: Event) => any;
    onkeydown: (this: Window, ev: KeyboardEvent) => any;
    onkeypress: (this: Window, ev: KeyboardEvent) => any;
    onkeyup: (this: Window, ev: KeyboardEvent) => any;
    onload: (this: Window, ev: Event) => any;
    onloadeddata: (this: Window, ev: Event) => any;
    onloadedmetadata: (this: Window, ev: Event) => any;
    onloadstart: (this: Window, ev: Event) => any;
    onmessage: (this: Window, ev: MessageEvent) => any;
    onmousedown: (this: Window, ev: MouseEvent) => any;
    onmouseenter: (this: Window, ev: MouseEvent) => any;
    onmouseleave: (this: Window, ev: MouseEvent) => any;
    onmousemove: (this: Window, ev: MouseEvent) => any;
    onmouseout: (this: Window, ev: MouseEvent) => any;
    onmouseover: (this: Window, ev: MouseEvent) => any;
    onmouseup: (this: Window, ev: MouseEvent) => any;
    onmousewheel: (this: Window, ev: WheelEvent) => any;
    onmsgesturechange: (this: Window, ev: MSGestureEvent) => any;
    onmsgesturedoubletap: (this: Window, ev: MSGestureEvent) => any;
    onmsgestureend: (this: Window, ev: MSGestureEvent) => any;
    onmsgesturehold: (this: Window, ev: MSGestureEvent) => any;
    onmsgesturestart: (this: Window, ev: MSGestureEvent) => any;
    onmsgesturetap: (this: Window, ev: MSGestureEvent) => any;
    onmsinertiastart: (this: Window, ev: MSGestureEvent) => any;
    onmspointercancel: (this: Window, ev: MSPointerEvent) => any;
    onmspointerdown: (this: Window, ev: MSPointerEvent) => any;
    onmspointerenter: (this: Window, ev: MSPointerEvent) => any;
    onmspointerleave: (this: Window, ev: MSPointerEvent) => any;
    onmspointermove: (this: Window, ev: MSPointerEvent) => any;
    onmspointerout: (this: Window, ev: MSPointerEvent) => any;
    onmspointerover: (this: Window, ev: MSPointerEvent) => any;
    onmspointerup: (this: Window, ev: MSPointerEvent) => any;
    onoffline: (this: Window, ev: Event) => any;
    ononline: (this: Window, ev: Event) => any;
    onorientationchange: (this: Window, ev: Event) => any;
    onpagehide: (this: Window, ev: PageTransitionEvent) => any;
    onpageshow: (this: Window, ev: PageTransitionEvent) => any;
    onpause: (this: Window, ev: Event) => any;
    onplay: (this: Window, ev: Event) => any;
    onplaying: (this: Window, ev: Event) => any;
    onpopstate: (this: Window, ev: PopStateEvent) => any;
    onprogress: (this: Window, ev: ProgressEvent) => any;
    onratechange: (this: Window, ev: Event) => any;
    onreadystatechange: (this: Window, ev: ProgressEvent) => any;
    onreset: (this: Window, ev: Event) => any;
    onresize: (this: Window, ev: UIEvent) => any;
    onscroll: (this: Window, ev: UIEvent) => any;
    onseeked: (this: Window, ev: Event) => any;
    onseeking: (this: Window, ev: Event) => any;
    onselect: (this: Window, ev: UIEvent) => any;
    onstalled: (this: Window, ev: Event) => any;
    onstorage: (this: Window, ev: StorageEvent) => any;
    onsubmit: (this: Window, ev: Event) => any;
    onsuspend: (this: Window, ev: Event) => any;
    ontimeupdate: (this: Window, ev: Event) => any;
    ontouchcancel: (ev: TouchEvent) => any;
    ontouchend: (ev: TouchEvent) => any;
    ontouchmove: (ev: TouchEvent) => any;
    ontouchstart: (ev: TouchEvent) => any;
    onunload: (this: Window, ev: Event) => any;
    onvolumechange: (this: Window, ev: Event) => any;
    onwaiting: (this: Window, ev: Event) => any;
    opener: any;
    orientation: string | number;
    readonly outerHeight: number;
    readonly outerWidth: number;
    readonly pageXOffset: number;
    readonly pageYOffset: number;
    readonly parent: Window;
    readonly performance: Performance;
    readonly personalbar: BarProp;
    readonly screen: Screen;
    readonly screenLeft: number;
    readonly screenTop: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly scrollbars: BarProp;
    readonly scrollX: number;
    readonly scrollY: number;
    readonly self: Window;
    readonly speechSynthesis: SpeechSynthesis;
    status: string;
    readonly statusbar: BarProp;
    readonly styleMedia: StyleMedia;
    readonly toolbar: BarProp;
    readonly top: Window;
    readonly window: Window;
    URL: typeof URL;
    URLSearchParams: typeof URLSearchParams;
    Blob: typeof Blob;
    customElements: CustomElementRegistry;
    alert(message?: any): void;
    blur(): void;
    cancelAnimationFrame(handle: number): void;
    captureEvents(): void;
    close(): void;
    confirm(message?: string): boolean;
    departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void;
    focus(): void;
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
    getMatchedCSSRules(elt: Element, pseudoElt?: string): CSSRuleList;
    getSelection(): Selection;
    matchMedia(mediaQuery: string): MediaQueryList;
    moveBy(x?: number, y?: number): void;
    moveTo(x?: number, y?: number): void;
    msWriteProfilerMark(profilerMarkName: string): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window | null;
    postMessage(message: any, targetOrigin: string, transfer?: any[]): void;
    print(): void;
    prompt(message?: string, _default?: string): string | null;
    releaseEvents(): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    resizeBy(x?: number, y?: number): void;
    resizeTo(x?: number, y?: number): void;
    scroll(x?: number, y?: number): void;
    scrollBy(x?: number, y?: number): void;
    scrollTo(x?: number, y?: number): void;
    stop(): void;
    webkitCancelAnimationFrame(handle: number): void;
    webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
    createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    scroll(options?: ScrollToOptions): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollBy(options?: ScrollToOptions): void;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

// declare var Window: {
//     prototype: Window;
//     new(): Window;
// };

////////////////////////////////////
declare namespace nw{
    /**
     * @description Shell is a collection of APIs that do desktop related jobs.
     * <a href="https://nwjs.readthedocs.io/en/nw14/References/Shell/">Docs</a>
     * @example
     // Open URL with default browser.
     nw.Shell.openExternal('https://github.com/nwjs/nw.js');

     // Open a text file with default text editor.
     nw.Shell.openItem('test.txt');

     // Show a file in parent folder with file manager.
     nw.Shell.showItemInFolder('test.txt');
     */
    export type Shell={};

    // we will use Screen Here To Just Support View Document of Screen ItSelf
    // but we will separate it's functions in another scope 'nw.Screen'
    // Also Create a Type With EventEmitter  instance will support auto-complete automatic on it
    // Also we can combine auto complete for more than class by using
    // type name = class1 | class2 | .....
    /**
     * @description Screen is an instance of EventEmitter object,
     * And you’re able to use Screen.on(...) to respond to native screen’s events
     * Screen is a singleton object, need to be initiated once by calling nw.Screen.Init()
     * <a href="https://nwjs.readthedocs.io/en/nw14/References/Screen/">Docs</a>
     * @example

     //init must be called once during startup, before any function to nw.Screen can be called
     nw.Screen.Init();

     var screenCB = {
        onDisplayBoundsChanged: function(screen) {
            console.log('displayBoundsChanged', screen);
        },

        onDisplayAdded: function(screen) {
            console.log('displayAdded', screen);
        },

        onDisplayRemoved: function(screen) {
            console.log('displayRemoved', screen)
        }
    };

     // listen to screen events
     nw.Screen.on('displayBoundsChanged', screenCB.onDisplayBoundsChanged);
     nw.Screen.on('displayAdded', screenCB.onDisplayAdded);
     nw.Screen.on('displayRemoved', screenCB.onDisplayRemoved);
     */
    export type Screen=EventEmitter;
    interface ShortcutOptions {
        key:string,
        active?:()=>any,
        failed?:(msg:string)=>any
    }
    type validShortcutEvents=string | "active" | "failed";
    /**
     * @description  Create new Shortcut, option is an object contains initial settings for the Shortcut.
     * <hr/>
     * Shortcut represents a global keyboard shortcut, also known as system-wide hotkey. If registered successfully, it works even if your app does not have focus.
     * <hr/>
     * Shortcut inherited from EventEmitter. Every time the user presses the registered shortcut, your app will receive an active event of the shortcut object.
     * <hr/>
     * param option
     *<ul>
     *     <li>key {String} key combinations of the shortcut, such as "ctrl+shift+a". See shortcut.key property for details.</li>
     *     <li>active {Function} Optional a callback when the hotkey is triggered. See shortcut.active property for details.</li>
     *     <li>failed {Function} Optional a callback when failed to register the hotkey. See shortcut.failed property for details.</li>
     *<ul>
     * <a href="http://docs.nwjs.io/en/latest/References/Shortcut/" >Docs</a>
     */
    export class Shortcut {
        constructor(option:ShortcutOptions);

        /**
         * @description add listener to shortcut's active and failed event
         *
         * Note [1]  : We can add multiple listeners with every once we called on() function
         * Note [2]  : don't use Arrow function <p style="background-color:rgb(50,50,50)">()=></p> as a callback
         * so you can't use this : <p style="background-color:rgb(50,50,50)">this.key</p> in arrow function
         * , you need to use function(){}
         */
        on(event:validShortcutEvents,callback:()=>any):any;

        /**
         * @description Get or set the active callback of a Shortcut. It will be called when user presses the shortcut.
         *
         */
        active:any;

        /**
         * @description *Get or set the failed callback of a Shortcut. It will be called when application passes an invalid key , or failed to register the key.
         */
        failed:any;

        /**
         * @description Get the key of a Shortcut. It is a string to specify the shortcut key, like "Ctrl+Alt+A". The key is consisted of zero or more modifiers and a key on your keyboard. Only one key code is supported. Key code is case insensitive
         <hr/>
         <h3>List of supported modifiers:<h3>
         Ctrl
         Alt
         Shift
         Command: Command modifier maps to Apple key (⌘) on Mac, and maps to the Windows key on Windows and Linux.
         List of supported keys:

         Alphabet: A-Z
         Digits: 0-9
         Function Keys: F1-F24
         Comma
         Period
         Tab
         Home / End / PageUp / PageDown / Insert / Delete
         Up / Down / Left / Right
         MediaNextTrack / MediaPlayPause / MediaPrevTrack / MediaStop
         Comma or ,
         Period or .
         Tab or \t
         Backquote or `
         Enter or \n
         Minus or -
         Equal or =
         Backslash or \
         Semicolon or ;
         Quote or '
         BracketLeft or [
         BracketRight or ]
         Escape

         <a href="https://www.w3.org/TR/DOM-Level-3-Events-code/">DOM Level 3 W3C KeyboardEvent Code Values</a>

         <p style="background-color:rgb(40,40,40);color:darkorange;">
         Single Key without Modifiers

         The API App.registerGlobalHotKey() can support applications intercepting a single key (like { key: "A"}). But users will not be able to use “A” normally any more until the app unregisters it. However, the API doesn’t limit this usage, and it would be useful if the applications wants to listen Media Keys.
         Only use zero modifier when you are knowing what your are doing.
         </p>
         @see ValidKeys
         */
        key:string;

    }

    /**
     * @extends EventEmitter
     * @see MenuItemOption
     * @description <a style="color:rgb(255,175,0)">MenuItem</a> represents an item in a menu. A <a style="color:rgb(255,175,0)">MenuItem<a/> can be a separator or a normal item which has label and icon or a checkbox. It can response to mouse click or keyboard shortcut
     * <a href="http://docs.nwjs.io/en/latest/References/MenuItem/">Docs</a>
     * @example

     var item;

     * // Create a separator
     item = new nw.MenuItem({ type: 'separator' });

     * // Create a normal item with label and icon
     item = new nw.MenuItem({
        type: "normal",
        label: "I'm a menu item",
        icon: "img/icon.png"
    });

     * // Or you can omit the 'type' field for normal items
     item = new nw.MenuItem({ label: 'Simple item' });

     * // Bind a callback to item
     item = new nw.MenuItem({
        label: "Click me",
        click: function() {
            console.log("I'm clicked");
        },
        key: "s",
        modifiers: "ctrl+alt",
    });

     * // You can have submenu!
     var submenu = new nw.Menu();
     submenu.append(new nw.MenuItem({ label: 'Item 1' }));
     submenu.append(new nw.MenuItem({ label: 'Item 2' }));
     submenu.append(new nw.MenuItem({ label: 'Item 3' }));
     item.submenu = submenu;

     * // And everything can be changed at runtime
     item.label = 'New label';
     item.click = function() { console.log('New click callback'); }
     */
    export class MenuItem extends EventEmitter{
        /**
         * @param {nw.MenuItemOption} option
         */
        constructor(option:MenuItemOption);

        /**
         * @description Get the type of a MenuItem, it can be separator, checkbox and normal
         * <hr/>
         * <h3>Note</h3>
         * <p style="background-color:rgb(33,33,33);">The type can be set only when you create it. It cannot be changed at runtime.<p/>
         */
        type:"normal"|"checkbox"|"separator";
        /**
         * @description Get or set the label of a MenuItem, it can only be plain text for now.
         */
        label:string;
        /**
         * @description Get or set the icon of a MenuItem,
         * it must a path to your icon file. It can be
         * a relative path which points to an icon in your app,
         * or an absolute path pointing to a file in user’s system.
         *
         * It has no effect on setting icon of a separator item.
         */
        icon:string;
        /**
         * @description iconIsTemplate (Mac)
         * <p style="background-color:rgb(33,33,33)">Get or set whether icon image is treated as “template” (true by default). When the property is set to true the image is treated as “template” and the system automatically ensures proper styling according to the various states of the status item (e.g. dark menu, light menu, etc.). Template images should consist only of black and clear colours and can use the alpha channel in the image to adjust the opacity of black content. It has no effects on Linux and Windows.<a/>
         */
        iconIsTemplate:boolean;
        /**
         * @description Get or set the tooltip of a MenuItem, it can only be plain text. A tooltip is short string that describes the menu item, it will show when you hover your mouse on the item.
         */
        tooltip:string;
        /**
         * @description Get or set whether the MenuItem is checked. Usually if a MenuItem is checked. There will be a mark on the left side of it. It’s used mostly to indicate whether an option is on.
         */
        checked:boolean;
        /**
         * @description Get or set whether the MenuItem is enabled. An disabled MenuItem will be greyed out and you will not be able to click on it.
         */
        enabled:boolean;
        /**
         * @description Get or set the submenu of a MenuItem, the submenu must be a Menu object. You should set submenu in the option when creating the MenuItem. <a style="color:rgb(160,90,0);background-color:rgb(22,22,22)">Changing it at runtime is slow on some platforms.<a/>
         */
        submenu:Menu;
        /**
         * @description Get or set the click callback of a MenuItem, the click must be a valid function. It will be called when users activate the item.
         * This Also Firing Event <a style="color:orange">click<a/>
         * And Can assign in <a style="color:green">run-time</a>
         */
        click:Function;
        /**
         * @description A single character string to specify the shortcut key for the menu item.
         */
        key:ValidKeys;
        /**
         * @description A string to specify the modifier keys for the shortcut of the menu item
         *
         */
        modifiers:AllowedModifiers;

    }

    /**
     * @description Allowed Modifiers To use With Key and Shortcuts
     * A string to specify the modifier keys for the shortcut of the menu item. It should be the concatenation of the following strings: cmd / command / super, shift, ctrl, alt. e.g. "cmd+shift+alt".
     * <hr/>
     * cmd represents different keys on all platforms: Windows key (Windows) on Windows and Linux, Apple key (⌘) on Mac. super and command are aliases of cmd
     * <a style="color:rgb(255,175,40)">Note : ctrl+shift+A===shift+ctrl+A</a>
     * <a style="color:rgb(220,155,10)">Generated With Next Python Code</a>
     @example
     import itertools
     data_list=['cmd','shift','ctrl','alt']
     forOne=list(itertools.combinations(data_list,1))
     forTwo=list(itertools.combinations(data_list,2))
     forThree=list(itertools.combinations(data_list,3))
     forFour=list(itertools.combinations(data_list,4))
     ge_list=[forOne,forTwo,forThree,forFour]
     def generate(g_list):
     store_d=""
     for item in g_list:
     for a in item:
     store_d+='"'
     for b in a:
     store_d+=str(b)+"+"
     store_d+='"|\n'
     return store_d

     tempStore=generate(ge_list)
     open('fResult.txt','w',encoding="utf-8").write(tempStore)
     */
    type AllowedModifiers=
        "cmd"|
        "shift"|
        "ctrl"|
        "alt"|
        "cmd+shift"|
        "cmd+ctrl"|
        "cmd+alt"|
        "shift+ctrl"|
        "shift+alt"|
        "ctrl+alt"|
        "cmd+shift+ctrl"|
        "command+shift+ctrl"|
        "super+shift+ctrl"|
        "cmd+shift+alt"|
        "command+shift+alt"|
        "super+shift+alt"|
        "command+ctrl+alt"|
        "super+ctrl+alt"|
        "cmd+ctrl+alt"|
        "shift+ctrl+alt"|
        "cmd+shift+ctrl+alt"
        ;
    /**
     * @description Valid Keys for All Platforms
     *
     Alphabet: a-z
     Digits: 0-9
     Other keys on main area: [ , ] , ' , , , . , / , ` , - , = , \ , ' , ; , Tab
     Esc
     Down , Up , Left , Right
     <a href="https://www.w3.org/TR/DOM-Level-3-Events-key/">W3C DOM Level 3 KeyboardEvent Key Values</a>: KeyA (same as A), Escape (same as Esc), F1, ArrowDown (same as Down) etc.
     <p style="color:rgb(255,190,10)">Special Keys for Mac Only<p/>
     On Mac, you can also use special keys as shortcut key with String.fromCharCode(specialKey). Here are some useful keys:

     <ul style="color:rgb(255,190,10)" >
     <li>28: Left (←)</li>
     <li>29: Right (→)</li>
     <li>30: Up (↑)</li>
     <li>31: Down (↓)</li>
     <li>27: Escape (⎋)</li>
     <li>11: PageUp (⇞)</li>
     <li>12: PageDown (⇟)</li>
     </ul>
     *
     * For full list of special keys supported on Mac, see <a href="https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Classes/NSMenuItem_Class/#//apple_ref/occ/instp/NSMenuItem/keyEquivalent">NSMenuItem.keyEquivalent <a/>
     * And <a href="https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Classes/NSEvent_Class/index.html#//apple_ref/doc/constant_group/Function_Key_Unicodes">NSEvent: Function-Key Unicodes<a/>.
     */
    type ValidKeys=
        "a"| "b"| "c"| "d"| "e"| "f"| "g"| "h"| "i"| "j"| "k"| "l"| "m"| "n"| "o"| "p"| "q"| "r"| "s"| "t"| "u"| "v"| "w"| "x"| "y"| "z" |
        "0"| "1"| "2"| "3"| "4"| "5"| "6"| "7"| "8"| "9"|
        "["| "]"| "'"| ","| "."| "/"| "`"| "-"| "="| "\\"| "'"| ";"| "Tab"|
        "Esc"|"Down"|"Up"|"Left"|"Right"|
        string
        ;
    /**
     * @description just to provide EventEmitter Class in this scope
     * To support Auto-complete to MenuItem from EventEmitter
     * From Docs <a style="color:rgb(255,175,0)">MenuItem is inherited from EventEmitter. You can use on to listen to the events</a>
     */
    class EventEmitter{

    }
    /**
     * @description  an object contains initial settings for the MenuItem
     *
     <a style="color:rgb(255,175,0)">MenuItemOption</a> {Object} an object contains initial settings for the MenuItem
     * @example
     label {String} Optional label for normal item or checkbox
     icon {String} Optional icon for normal item or checkbox
     tooltip {String} Optional tooltip for normal item or checkbox
     type {String} Optional the type of the item. Three types are accepted: normal, checkbox, separator
     click {Function} Optional the callback function when item is triggered by mouse click or keyboard shortcut
     enabled {Boolean} Optional whether the item is enabled or disabled. It’s set to true by default.
     checked {Boolean} Optional whether the checkbox is checked or not. It’s set to false by default.
     submenu {Menu} Optional a submenu
     key {String} Optional the key of the shortcut
     modifiers {String} Optional the modifiers of the shortcut
     */
    interface MenuItemOption{
        /**
         * @description Optional label for normal item or checkbox
         */
        label?:string ,
        /**
         * @description  Optional icon for normal item or checkbox
         */
        icon?:string,
        /**
         * @description Optional tooltip for normal item or checkbox
         */
        tooltip?:string,
        /**
         * @description Optional tooltip for normal item or checkbox
         */
        type?:"normal"|"checkbox"|"separator",
        /**
         * @description Optional the callback function when item is triggered by mouse click or keyboard shortcut
         */
        click?:Function,
        /**
         * @description Optional whether the item is enabled or disabled. It’s set to true by default
         */
        enabled?:boolean,
        /**
         * @description Optional whether the checkbox is checked or not. It’s set to false by default
         */
        checked?:boolean,
        /**
         * @description Optional a submenu
         */
        submenu?:Menu,
        /**
         * @description  Optional the key of the shortcut
         */
        key?:string,
        /**
         * @description Optional the modifiers of the shortcut
         */
        modifiers?:string
    }


    /**
     *  @description type: "menubar" Or "contextmenu"
     *  @default type:contextmenu
     */
    interface AvailableMenuOption {
        type:"menubar" | "contextmenu"
    }

    /**
     * @description "hideEdit":boolean Optional do not populate the Edit menu
     *
     * "hideWindow":boolean Optional do not populate the Window menu
     */
    interface createMacBuiltinOption {
        "hideEdit":boolean,
        "hideWindow":boolean
    }
    /**
     * @description represents a menubar or a context menu. And MenuItem is item inside a menu. Please read the document of MenuItem for more details
     * <a href="http://docs.nwjs.io/en/latest/References/Menu/">Docs</a>
     * <hr/>
     * @example
     An example to create a context menu:
     // Create an empty context menu
     var menu = new nw.Menu();

     // Add some items
     menu.append(new nw.MenuItem({ label: 'Item A' }));
     menu.append(new nw.MenuItem({ label: 'Item B' }));
     menu.append(new nw.MenuItem({ type: 'separator' }));
     menu.append(new nw.MenuItem({ label: 'Item C' }));

     // Remove one item
     menu.removeAt(1);

     // Popup as context menu
     menu.popup(10, 10);

     // Iterate menu's items
     for (var i = 0; i < menu.items.length; ++i) {
        console.log(menu.items[i]);
     }

     To create a menubar, usually you have to create a 2-level menu
     And assign it to win.menu. Here is the example of creating a menubar:
     @example
     // Create an empty menubar
     var menu = new nw.Menu({type: 'menubar'});

     // Create a submenu as the 2nd level menu
     var submenu = new nw.Menu();
     submenu.append(new nw.MenuItem({ label: 'Item A' }));
     submenu.append(new nw.MenuItem({ label: 'Item B' }));

     // Create and append the 1st level menu to the menubar
     menu.append(new nw.MenuItem({
            label: 'First Menu',
            submenu: submenu
     }));
     // Assign it to `window.menu` to get the menu displayed
     nw.Window.get().menu = menu;
     */
    export class Menu {
        /**
         * @description Create a Menu object
         * @param {nw.AvailableMenuOption} option
         */
        constructor(option?:AvailableMenuOption);

        /**
         * @description Get an array that contains all items of a menu. Each item is an instance of MenuItem.
         * @see MenuItem
         */
        items:Array<MenuItem>;

        /**
         * @description Append item to the tail of the menu
         * @param {nw.MenuItem} item the item to be appended to the tail of the menu
         * @returns {undefined}
         */
        append(item:MenuItem):undefined;

        /**
         * @description Insert the item at ith position of the menu. The index is started from 0.
         * @param {nw.MenuItem} item  the item to be inserted into the menu
         * @param {number} i the index in the menu list to insert the the item
         * @returns {undefined}
         */
        insert(item:MenuItem,i:number):undefined;

        /**
         * @description Remove item from the menu. This method requires you to keep the MenuItem outside the Menu
         * @param {nw.MenuItem} item the item to be removed
         * @returns {undefined}
         */
        remove(item:MenuItem):undefined;

        /**
         * @description Remove the ith item form the menu.
         * @param {number} i the index of the item to be removed from the menu : integer
         * @returns {undefined}
         */
        removeAt(i:number):undefined;

        /**
         * @description Popup the context menu at the anchor in (x, y) in current window. This method is only valid for contextmenu type
         * @example
         * Usually you would listen to contextmenu event of DOM elements and manually popup the menu:
         *
         *
         document.body.addEventListener('contextmenu', function(ev) {
              ev.preventDefault();
              menu.popup(ev.x, ev.y);
              return false;
            });

         In this way, you can precisely choose which menu
         to show for different elements, and you can update
         menu elements just before popuping it.
         * @param {number} x the x position of the anchor
         * @param {number} y the y position of the anchor
         * @returns {undefined}
         */
        popup(x:number,y:number):undefined;

        /**
         * @description Creates the builtin menus (App, Edit and Window)
         * within the menubar on Mac. The items can be manipulated with
         * the items property. The argument appname is used for the title of App menu.
         *
         * You can still use builtin menus with other menu items. i.e. append or insert items to the menu is still valid.
         * @param {string} appname The application name
         * @param {nw.createMacBuiltinOption} options Options
         * @returns {undefined}
         */
        createMacBuiltin(appname:string,options?:createMacBuiltinOption):undefined;

        // Valid but will not use it
        // createMacBuiltin(appname:string,options:{
        //     "hideEdit":boolean,
        //     "hideWindow":boolean
        // }):undefined;

    }
}

declare namespace nw.App {
    import MainManifest = nw.Window.MainManifest;
    /**
     * @description Get the filtered command line arguments when starting the app. In NW.js, some command line arguments are used by NW.js, which should not be interested of your app. App.argv will filter out those arguments and return the ones left. You can get filtered patterns from App.filteredArgv and the full arguments from App.fullArgv.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appargv}
     */
    export const argv: Array<string>;
    /**
     * @description Get all the command line arguments when starting the app. The return values contains the arguments used by NW.js, such as --nwapp, --remote-debugging-port etc.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appfullargv}
     */
    export const fullArgv: Array<string>;
    /**
     * @description Get a list of patterns of filtered command line arguments used by App.argv. By default, following patterns are used to filter the arguments:

     [
     /\^--url=/,
     /\^--remote-debugging-port=/,
     /\^--renderer-cmd-prefix=/,
     /\^--nwapp=/
     ]
     * {@link http://docs.nwjs.io/en/latest/References/App/#appfilteredargv}
     */
    export const filteredArgv: Array<string>;
    /**
     * @description Get the directory where the application starts. The application will change the current directory to where the package files reside after start.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appstartpath}
     */
    export const startPath: string;
    /**
     * Get the application’s data path in user’s directory.
     <ul>
     <li>Windows: %LOCALAPPDATA%/<name></li>
     <li>Linux: ~/.config/<name></li>
     <li>OS X: ~/Library/Application Support/<name>/Default (was ~/Library/Application Support/<name> in v0.12.3 and below)</li>
     <name> is the name field in the package.json manifest.
     </ul>
     */
    export const dataPath: string;

    /**
     * @description Get the JSON object of the manifest file.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appmanifest}
     * @see MainManifestJson
     */
    export const manifest:MainManifest;

    /**
     * @description Clear the HTTP cache in memory and the one on disk. This method call is synchronized.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appclearcache}
     */
    export function clearCache(): undefined;

    /**
     * @description Mark the Application cache group specified by manifest_url obsolete. This method call is synchronized.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appclearappcachemanifest_url}
     */
    export function clearAppCache(manifest_url: string): undefined;

    /**
     * @description Send the close event to all windows of current app, if no window is blocking the close event, then the app will quit after all windows have done shutdown. Use this method to quit an app will give windows a chance to save data.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appcloseallwindows}
     */

    export function closeAllWindows(): undefined;

    /**
     * @description This function crashes the browser process to test the <a href="http://docs.nwjs.io/en/latest/For%20Developers/Understanding%20Crash%20Dump/">Crash Dump</a> feature.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appcrashbrowser}
     */
    export function crashBrowser(): any;

    /**
     * @description This function crashes the renderer  process to test the Crash dump feature.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appcrashrenderer}
     * {@link http://docs.nwjs.io/en/latest/For%20Developers/Understanding%20Crash%20Dump/}
     */
    export function crashRenderer(): any;

    /**
     * @description <li> url {String} the URL to query for proxy </li>
     *
     * <li>Query the proxy to be used for loading url in DOM. The return value is in the same format used in <a href="http://en.wikipedia.org/wiki/Proxy_auto-config">PAC</a> (e.g. “DIRECT”, “PROXY localhost:8080”). </li>
     * {@link http://docs.nwjs.io/en/latest/References/App/#appgetproxyforurlurl}
     */
    export function getProxyForURL(url:string):string;

    /**
     @description
     <ul>
     <li>config {String} Proxy rules</li>
     <li>pac_url {String} <a href="http://en.wikipedia.org/wiki/Proxy_auto-config">PAC</a>  url</li>
     <ul>
     set the proxy config which the web engine will be used to request network resources or PAC url to detect proxy automatically.

     {@link http://docs.nwjs.io/en/latest/References/App/#appsetproxyconfigconfig-pac_url}
     <hr/>
     <h4>Rule (copied from <a href="https://github.com/nwjs/chromium.src/blob/nw13/net/proxy/proxy_config.h">net/proxy/proxy_config.h</a>)</h4>
     <p>
     // Parses the rules from a string, indicating which proxies to use.
     //
     //   proxy-uri = [<proxy-scheme>"://"]<proxy-host>[":"<proxy-port>]
     //
     //   proxy-uri-list = <proxy-uri>[","<proxy-uri-list>]
     //
     //   url-scheme = "http" | "https" | "ftp" | "socks"
     //
     //   scheme-proxies = [<url-scheme>"="]<proxy-uri-list>
     //
     //   proxy-rules = scheme-proxies[";"<scheme-proxies>]
     //
     // Thus, the proxy-rules string should be a semicolon-separated list of
     // ordered proxies that apply to a particular URL scheme. Unless specified,
     // the proxy scheme for proxy-uris is assumed to be http.
     //
     // Some special cases:
     //  * If the scheme is omitted from the first proxy list, that list applies
     //    to all URL schemes and subsequent lists are ignored.
     //  * If a scheme is omitted from any proxy list after a list where a scheme
     //    has been provided, the list without a scheme is ignored.
     //  * If the url-scheme is set to 'socks', that sets a fallback list that
     //    to all otherwise unspecified url-schemes, however the default proxy-
     //    scheme for proxy urls in the 'socks' list is understood to be
     //    socks4:// if unspecified.
     //
     // For example:
     //   "http=foopy:80;ftp=foopy2"  -- use HTTP proxy "foopy:80" for http://
     //                                  URLs, and HTTP proxy "foopy2:80" for
     //                                  ftp:// URLs.
     //   "foopy:80"                  -- use HTTP proxy "foopy:80" for all URLs.
     //   "foopy:80,bar,direct://"    -- use HTTP proxy "foopy:80" for all URLs,
     //                                  failing over to "bar" if "foopy:80" is
     //                                  unavailable, and after that using no
     //                                  proxy.
     //   "socks4://foopy"            -- use SOCKS v4 proxy "foopy:1080" for all
     //                                  URLs.
     //   "http=foop,socks5://bar.com -- use HTTP proxy "foopy" for http URLs,
     //                                  and fail over to the SOCKS5 proxy
     //                                  "bar.com" if "foop" is unavailable.
     //   "http=foopy,direct://       -- use HTTP proxy "foopy" for http URLs,
     //                                  and use no proxy if "foopy" is
     //                                  unavailable.
     //   "http=foopy;socks=foopy2   --  use HTTP proxy "foopy" for http URLs,
     //                                  and use socks4://foopy2 for all other
     //                                  URLs.
     </p>
     */
    export function setProxyConfig(config:string,pac_url:string):any;

    /**
     * @description Quit current app. This method will not send close event to windows and app will just quit quietly.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appquit}
     *
     */
    export function quit():any;

    /**
     * @deprecated This API was deprecated since 0.11.0.
     * @description Quit current app. This method will not send close event to windows and app will just quit quietly.
     * {@link http://docs.nwjs.io/en/latest/References/App/#appsetcrashdumpdirdir}
     * <hr/> Set the directory where the minidump file will be saved on crash. For more information, see <a href="http://docs.nwjs.io/en/latest/For%20Developers/Understanding%20Crash%20Dump/">Crash dump.</a>
     */
    export function setCrashDumpDir(dir:string):any;

    /**
     * <li>sourceOrigin {String} The source origin. e.g. http://github.com/</li>
     * <li>destinationProtocol {String} The destination protocol where the sourceOrigin can access to. e.g. app</li>
     * <li>destinationHost {String} The destination host where the sourceOrigin can access to. e.g. myapp</li>
     * <li>allowDestinationSubdomains {Boolean} If set to true, the sourceOrigin is allowed to access subdomains of destinations.</li>
     <a href="http://docs.nwjs.io/en/latest/References/App/#appaddoriginaccesswhitelistentrysourceorigin-destinationprotocol-destinationhost-allowdestinationsubdomains">docs</a>
     <hr/>
     * @description Add an entry to the whitelist used for controlling
     * cross-origin access. Suppose you want to allow HTTP redirecting
     * from github.com to the page of your app, use something like this:
     * <h2>App.addOriginAccessWhitelistEntry('http://github.com/', 'chrome-extension', location.host, true);</h4>
     * Use App.removeOriginAccessWhitelistEntry with exactly the same arguments to do the contrary.
     */
    export function addOriginAccessWhitelistEntry(
        sourceOrigin:string,
        destinationProtocol:string,
        destinationHost:string,
        allowDestinationSubdomains:boolean
    ):any;

    /**
     * <li>sourceOrigin {String} The source origin. e.g. http://github.com/</li>
     * <li>destinationProtocol {String} The destination protocol where the sourceOrigin can access to. e.g. app</li>
     * <li>destinationHost {String} The destination host where the sourceOrigin can access to. e.g. myapp</li>
     * <li>allowDestinationSubdomains {Boolean} If set to true, the sourceOrigin is allowed to access subdomains of destinations.</li>
     <a href="http://docs.nwjs.io/en/latest/References/App/#appremoveoriginaccesswhitelistentrysourceorigin-destinationprotocol-destinationhost-allowdestinationsubdomains">docs</a>
     <hr/>
     * @description Remove an entry from the whitelist used for controlling cross-origin access. See addOriginAccessWhitelistEntry above.
     */
    export function addOriginAccessWhitelistEntry(
        sourceOrigin:string,
        destinationProtocol:string,
        destinationHost:string,
        allowDestinationSubdomains:boolean
    ):any;

    /**
     * @description Register a global keyboard shortcut (also known as system-wide hot key) to the system.
     *
     * See <a href="http://docs.nwjs.io/en/latest/References/Shortcut/">Shortcut</a> for more information.
     *
     <p style="background-color:rgb(40,40,40);color:darkorange;">
     Single Key without Modifiers

     The API App.registerGlobalHotKey() can support applications intercepting a single key (like { key: "A"}). But users will not be able to use “A” normally any more until the app unregisters it. However, the API doesn’t limit this usage, and it would be useful if the applications wants to listen Media Keys.
     Only use zero modifier when you are knowing what your are doing.
     </p>
     */
    export function registerGlobalHotKey(shortcut:Shortcut):any;

    /**
     * @param shortcut {Shortcut} the Shortcut object to unregister.
     *
     * @description Unregisters a global keyboard shortcut.
     * See <a href="http://docs.nwjs.io/en/latest/References/Shortcut/">Shortcut</a> for more information.
     */
    export function unregisterGlobalHotKey(shortcut:Shortcut):any;

    /**
     * @description Event: open(args)
     *
     * @param args {String} the full command line of the program.
     * Emitted when users opened a file with your app.
     */
    export let onOpen:Event;

    /**
     * @description Event: reopen
     * This is a Mac specific feature. This event is sent when the user clicks the dock icon for an already running application.
     */
    export let onReopen:Event;
}

/**
 * @description Window is a wrapper of the DOM’s topmost window object. It has extended operations and can receive various window events.
 * Every Window is an instance of the EventEmitter class, and you’re able to use Window.on(...) to respond to native window’s events.
 * <a href="https://nwjs.readthedocs.io/en/latest/References/Window/">Docs</a>
 * @example
 // Get the current window
 var win = nw.Window.get();

 // Listen to the minimize event
 win.on('minimize', function() {
  console.log('Window is minimized');
});

 // Minimize the window
 win.minimize();

 // Unlisten the minimize event
 win.removeAllListeners('minimize');

 // Create a new window and get it
 nw.Window.open('https://github.com', {}, function(new_win) {
  // And listen to new window's focus event
  new_win.on('focus', function() {
    console.log('New window is focused');
  });

});
 */
declare namespace nw.Window{
    /**
     * @description see <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#window-subfields">Window subfields Docs</a>
     * , <a href="https://nwjs.readthedocs.io/en/latest/References/Window/#windowopenurl-options-callback">Window open option Docs</a>
     * <hr/>
     * <p style="color:rgb(244,165,11)">details<p/>
     * <ul>
     *     <li> new_instance {Boolean} Optional whether to open a new window in a separate render process.</li>
     *     <li>inject_js_start {String} Optional the script to be injected before document loaded. See <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#inject_js_start">Manifest format</a></li>
     *     <li>inject_js_end {String} Optional the script to be injected before document unloaded. See <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#inject_js_end">Manifest format</a></li>
     *     <li> id {String} Optional the id used to identify the window. This will be used to remember the size and position of the window and restore that geometry when a window with the same id is later opened. See also <a href="https://developer.chrome.com/apps/app_window#type-CreateWindowOptions">the Chrome App documentation <a/> </li>
     *     <li>title {string} the default title of window created by NW.js, it’s very useful if you want to show your own title when the app is starting </li>
     *     <li>width {Integer}   the initial width of the main window.</li>
     *     <li>height {Integer}  the initial height of the main window.</li>
     *     <li>toolbar {Boolean} should the navigation toolbar be showed. : This property is deprecated since 0.13.0</li>
     *     <li>icon {String} path to window’s icon </li>
     *     <li>position ["null","center","mouse"]  be null or center or mouse, controls where window will be put</li>
     *     <li>min_width {Integer} minimum width of window</li>
     *     <li>min_height {Integer} minimum height of window</li>
     *     <li>max_width {Integer}  maximum width of window</li>
     *     <li>max_height {Integer}  maximum height of window</li>
     *     <li>as_desktop {Boolean}  show as desktop background window under X11 environment(Linux Only)</li>
     *     <li>resizable {Boolean} whether window is resizable : Beware, if resizable is set to false on OS X and frame is set to true, the user will still be able to make the window fullscreen. Set fullscreen to false to disable the fullscreen control </li>
     *     <li>always_on_top {Boolean}  whether the window should always stay on top of other windows.</li>
     *     <li>visible_on_all_workspaces {Boolean}   whether the window should be visible on all workspaces simultaneously (on platforms that support multiple workspaces, currently Mac OS X and Linux). </li>
     *     <li>fullscreen {Boolean} whether window is fullscreen : Beware, if frame is also set to false in fullscreen it will prevent the mouse from being captured on the very edges of the screen. You should avoid activate it if fullscreen is also set to true. </li>
     *     <li>show_in_taskbar {Boolean} whether the window is shown in taskbar or dock </li>
     *     <li>frame {Boolean} specify it to false to make the window frameless : Beware, if frame is set to false in fullscreen it will prevent the mouse from being captured on the very edges of the screen. You should avoid activate it if fullscreen is also set to true.</li>
     *     <li>show {Boolean} specify it to false if you want your app to be hidden on startup</li>
     *     <li>kiosk {Boolean} whether to use Kiosk mode : Kiosk mode, the app will be fullscreen and try to prevent users from leaving the app, so you should remember to provide a way in app to leave Kiosk mode. This mode is mainly used for presentation on public displays</li>
     *     <li>transparent {Boolean} whether to turn on transparent window mode : Control the transparency with rgba background value in CSS. Use command line option --disable-transparency to disable this feature completely. , There is experimental support for “click-through” on the transparent region: add --disable-gpu option to the command line.</li>
     * </ul>
     */
    interface open_options {
        global?:boolean,
        transparent?:number,
        // TODO need a method to show a warining if user inpute not match any element of the array
        order?:
            "first"|
            "last"|
            "middle"|number
            ,
        id?:string,
        title?:string,
        width?:integer,
        height?:integer,
        toolbar?:boolean,
        icon?:string,
        position?:"null"|"center"|"mouse",
        min_width?:integer,
        min_height?:integer,
        max_width?:integer,
        max_height?:integer,
        as_desktop?:boolean,
        resizable?:boolean,
        always_on_top?:boolean,
        visible_on_all_workspaces?:boolean,
        fullscreen?:boolean,
        show_in_taskbar?:boolean,
        frame?:boolean,
        show?:boolean,
        kiosk?:boolean,
        new_instance?:boolean,
        inject_js_start?:string,
        inject_js_end?:string
    }

    /**
     *
     * @param {string} url URL to be loaded in the opened window
     * @param {nw.Window.open_options} options : Optional see <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#window-subfields"> Window subfields<a/> in manifest format. And following extra fields can also be used in options
     * <ul>
     *     <li> new_instance {Boolean} Optional whether to open a new window in a separate render process.</li>
     *     <li>inject_js_start {String} Optional the script to be injected before document loaded. See <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#inject_js_start">Manifest format</a></li>
     *     <li>inject_js_end {String} Optional the script to be injected before document unloaded. See <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#inject_js_end">Manifest format</a></li>
     *     <li> id {String} Optional the id used to identify the window. This will be used to remember the size and position of the window and restore that geometry when a window with the same id is later opened. See also <a href="https://developer.chrome.com/apps/app_window#type-CreateWindowOptions">the Chrome App documentation <a/> </li>
     * </ul>
     * @param {(window: nw.Window.window) => void} callback  : Optional callback when with the opened native Window object
     *
     * <p style="color:orange">Note</p>
     * <p>You should wait for the Window’s loaded event before interacting with any of its components.</p>
     * <hr/>
     * <p style="color:orange">Focus</p>
     * <p>The opened window is not focused by default. If you want it to be focused by default, you can set focus to true in options.</p>
     * <hr/>
     */
    function open(
        url:string,
        options?:open_options,
        callback?:(window:windowObject)=>void
    ):object;

    /**
     * @description If window_object is not specifed, then return current window’s Window object, otherwise return window_object‘s Window object
     <hr/>
     <p style="color:orange">Note</p>
     <p>If window_object is iframe‘s, the function will still return topmost window’s Window object</p>
     * @param {string} window_object Optional is the DOM window
     * @returns {nw.Window.window}  the native Window object
     * @example
        * // Get the current window
    var win = nw.Window.get();

* // Get iframe's window
    var iframeWin = nw.Window.get(iframe.contentWindow);

* //This will return true
    console.log(iframeWin === win);

* // Create a new window and get it
    nw.Window.open('https:* //github.com/nwjs/nw.js', {}, function(new_win) {
        * // do something with the newly created window
    });
    */
    function get(window_object?:string):windowObject;
    /**
     * @description the native Window object
     */
    export interface windowObject {
        /**
         * @description Get the corresponding DOM window object of the native window.
         *
         * this refer to Window in lib.dom.d.ts
         */
        window: HtmlDomWindow; // TODO get a method to import directly from 'lib.dom.d.ts'

        /**
         * @description Get or set left offset from window to screen.
         */
        x: integer;

        /**
         * @description Get or set top offset from window to screen.
         */
        y: integer;

        /**
         * @description Get or set window’s size:width.
         */
        width: integer;

        /**
         * @description Get or set window’s size:height
         */
        height: integer;

        /**
         * @description Get or set window’s title.
         */
        title: string;

        /**
         * @description Get or set window’s menubar. Set with a Menu with type menubar. When win.menu is set to null, the menubar is completely removed for Windows and Linux, and the menubar is cleared out on Mac.
         * See <a href="https://nwjs.readthedocs.io/en/latest/For%20Users/Advanced/Customize%20Menubar/">Customize Menubar</a> for the usage of menubars. And see Menu and MenuItem for detailed APIs.
         * @see Menu
         * @see MenuItem
         */
        menu: Menu;

        /**
         * @description Get whether the window is always on top of other windows.
         */
        isAlwaysOnTop: boolean;

        /**
         * @description Get whether we’re in fullscreen mode.
         */
        isFullscreen: boolean;
        /**
         * @description Get whether transparency is turned on
         */
        isTransparent: boolean;
        /**
         * @description Get whether we’re in kiosk mode.
         */
        isKioskMode: boolean;

        /**
         * @description Get or set the page zoom. 0 for normal size; positive value for zooming in; negative value for zooming out.
         */
        zoomLevel: number;

        /**
         * @description This includes multiple functions to manipulate the cookies.
         * The API is defined in the same way as <a href="https://developer.chrome.com/extensions/cookies.html">Chrome Extensions.<a/>
         * NW.js supports the get, getAll, remove and set methods;
         * onChanged event (supporting both addListener and removeListener
         * function on this event).
         *
         * And anything related to CookieStore in the Chrome extension API is not supported, because there is only one global cookie store in NW.js apps.
         */
        cookies: Cookies;

        /**
         * @description Moves a window’s left and top edge to the specified coordinates.
         * @param {integer} x offset to the left of the screen
         * @param {integer} y  offset to the top of the screen
         */
        moveTo(x: integer, y: integer): undefined;

        /**
         *
         * @description Moves a window a specified number of pixels relative to its current coordinates.
         * @param {integer} x horizontal offset
         * @param {integer} y vertical offset
         */
        moveBy(x: integer, y: integer): undefined;

        /**
         *
         * @description Resizes a window to the specified width and height.
         * @param {integer} width  the width of the window
         * @param {integer} height  the height of the window
         */
        resizeTo(width: integer, height: integer): undefined;

        /**
         * @description Resizes a window by the specified amount.
         * @param {integer} width the offset width of the window
         * @param {integer} height  the offset height of the window
         */
        resizeBy(width: integer, height: integer): undefined;

        /**
         * @description Focus on the window.
         */
        focus(): undefined;

        /**
         * @description  Move focus away. Usually it will move focus to other windows of your app, since on some platforms there is no concept of blur.
         */
        blur(): undefined;

        /**
         * @description Show the window if it’s not shown.
         * show(false) has the same effect with hide().
         * <p style="color:green">show will not focus on the window on some platforms, so you need to call focus if you want to.</p>
         *
         * @param {boolean} is_show Optional specify whether the window should be shown or hidden. It’s set to true by default.
         * @returns {undefined}
         */
        show(is_show?: boolean): undefined;

        /**
         * @description Hide the window. User will not be able to find the window once it’s hidden.
         * @returns {undefined}
         */
        hide(): undefined;

        /**
         * @description Close current window. And you can prevent the closing by listening to the close event. If force is specified and equals to true, then the close event will be ignored.
         *
         * @param {boolean} force pecify whether to close the window forcely and bypass close event.
         * @example
         * Usually you would like to listen to the close event and do some
         * shutdown work and then do a close(true) to really close the window.
         *
         win.on('close', function() {
                this.hide(); // Pretend to be closed already
                console.log("We're closing...");
                this.close(true); // then close it forcely
            });
         win.close();

         */
        close(force?: boolean): undefined;

        /**
         * @description Reloads the current window.
         */
        reload(): undefined;

        /**
         * @description Reloads the current page by starting a new renderer process from scratch.
         * @returns {undefined}
         */
        reloadDev(): undefined;

        /**
         * @description Like reload(), but don’t use caches (aka “shift-reload”).
         * @returns {undefined}
         */
        reloadIgnoringCache(): undefined

        /**
         * @description Maximize the window on GTK and Windows, and zoom the window on Mac OS X.
         * @returns {undefined}
         */
        maximize(): undefined;

        /**
         * @description
         *  Unmaximize the window, i.e. the reverse of maximize().
         * This feature is deprecated since 0.13.0. It’s now replaced by restore event.
         *
         * @deprecated
         * @returns {undefined}
         */
        unmaximize(): undefined;

        /**
         * @description Minimize the window to task bar on Windows, iconify the window on GTK, and miniaturize the window on Mac OS X.
         */
        minimize(): undefined;

        /**
         * @description Restore window to previous state after the window is minimized, i.e. the reverse of minimize(). It’s not named unminimize since restore is used commonly.
         */
        restore(): undefined;

        /**
         * @description Make the window fullscreen.
         * <p style="color:orange">Note</p>
         * This function is different with HTML5 FullScreen API, which can make part of the page fullscreen,  Window.enterFullscreen() will only fullscreen the whole window.
         */
        enterFullscreen(): undefined;

        /**
         * @description Leave the fullscreen mode.
         */
        leaveFullscreen(): undefined;

        /**
         * @description Toggle the fullscreen mode.
         */
        toggleFullscreen(): undefined;

        /**
         * @description Enter the Kiosk mode. In Kiosk mode, the app will be fullscreen and try to prevent users from leaving the app, so you should remember to provide a way in app to leave Kiosk mode. This mode is mainly used for presentation on public displays.
         */
        enterKioskMode(): undefined;

        /**
         * @description Leave the Kiosk mode.
         * @see enterKioskMode
         */
        leaveKioskMode(): undefined;

        /**
         * @description Toggle the kiosk mode.
         * @see enterKioskMode
         */
        toggleKioskMode(): undefined;

        /**
         * @deprecated
         * @description This feature is deprecated since 0.13.0
         *
         * Turn on/off the transparency support. See more info on <a href="https://nwjs.readthedocs.io/en/latest/For%20Users/Advanced/Transparent%20Window/">Transparent Window.</a>
         * @param {boolean} transparent whether to set the window to be transparent
         * @returns {undefined}
         */
        setTransparent(transparent: boolean): undefined;

        /**
         * @description  <p style="color:red">Only For Mac <p/>
         * Turn the window’s native shadow on/off. Useful for frameless, transparent windows.
         * @param {boolean} shadow whether the window has a shadow
         */
        setShadow(shadow: boolean): undefined;

        /**
         * @description Open the devtools to inspect the window.
         * <hr/>
         * The optional iframe as String should be the value of id attribute of any <iframe> element in the window. It jails the DevTools to inspect the <iframe> only. If it is an empty string, this feature has no effect.
         *<hr/>
         * The optional iframe as HTMLIFrameElement should be the iframe object. And it serves the same purpose with the id argument.
         *<hr/>
         * This function returns a Window object via the callback. You can use any properties and methods of Window except the events.
         *<hr/>
         * This API is only available on SDK build flavor.
         *<hr/>
         * The behavior of the function is changed since 0.13.0
         *<hr/>
         * See also in <a href="https://nwjs.readthedocs.io/en/latest/References/webview%20Tag/">webview reference<a/> on how to open DevTools for webview or open DevTools in a webview.
         *<hr/>
         * @param {string | HTMLFrameElement} iframe Optional the id or the element of the <iframe> to be jailed on. By default, the DevTools is shown for entire window.
         * @param {Function} callback callback with the native window of the DevTools window.
         * @returns {undefined}
         */
        showDevTools(iframe?: string | HTMLFrameElement, callback?: (window: Window) => {}): undefined;

        /**
         * @description Close the devtools window.
         *
         * This API is only available on SDK build flavor.
         * @returns {undefined}
         */
        closeDevTools(): undefined;

        /**
         * @description Enumerate the printers in the system. The callback function will receive an array of JSON objects for the printer information. The device name of the JSON object can be used as parameter in nw.Window.print()
         */
        getPrinters(callback: (printers: Array<PrintersData>) => {}): undefined;

        /**
         * @description Query the status of devtools window.
         *
         * This API is only available on SDK build flavor.
         * @returns {boolean}
         */
        isDevToolsOpen(): boolean;


        /**
         * @description Print the web contents in the window with or without the need for user’s interaction.
         *  options is a JSON object {PrintOptions}
         *
         *  NOTE: If no options are being passed, win.print({}) is what should be called.
         *  @see PrintOptions
         *
         * @param {nw.Window.PrintOptions} options
         * @returns {any}
         */
        print(options?: PrintOptions): any;

        /**
         * @description Set window’s maximum size.
         * @param {integer} width the maximum width of the window
         * @param {integer} height  the maximum height of the window
         */
        setMaximumSize(width: integer, height: integer): undefined;

        /**
         * @description Set window’s minimum size.
         * @param {integer} width the minimum width of the window
         * @param {integer} height the minimum height of the window
         */
        setMinimumSize(width: integer, height: integer): undefined;

        /**
         * @description Set whether window is resizable.
         * @param {boolean} resizable whether the window can be resized
         */
        setResizable(resizable: boolean): undefined;

        /**
         * @description Sets the widget to be on top of all other windows in the window system.
         * @param {boolean} top whether the window should always be on top
         */
        setAlwaysOnTop(top: boolean): undefined;

        /**
         * @description For : Mac and Linux
         *
         * For platforms that support multiple workspaces (currently Mac OS X and Linux), this allows NW.js windows to be visible on all workspaces simultaneously.
         * @param {boolean} visible whether the window should be visible on all workspaces
         */
        setVisibleOnAllWorkspaces(visible: boolean): undefined;

        /**
         * Returns a a boolean indicating if the platform (currently Mac OS X and Linux) support Window API method setVisibleOnAllWorkspace(Boolean)
         * @returns {boolean} if the platform (currently Mac OS X and Linux) support Window API method setVisibleOnAllWorkspace(Boolean)
         */
        canSetVisibleOnAllWorkspaces(): boolean;

        /**
         * @description Move window to specified position. Currently only center is supported on all platforms, which will put window in the middle of the screen.
         *
         * @param {"null" | "center" | "mouse"} position the position of the window. There are three valid positions: null or center or mouse
         */
        setPosition(position: "null" | "center" | "mouse"): undefined;

        /**
         *@description Control whether to show window in taskbar or dock
         *
         * See also show_in_taskbar in <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#show_in_taskbar">Manifest-format.<a/>
         * @param {boolean} show whether show in task bar
         */
        setShowInTaskbar(show: boolean): undefined;

        /**
         * @description Request the user’s attention by making the window flashes in the task bar.
         *
         * <p style="color:orange">Note On : Mac</p>
         * On Mac, value < 0 will trigger NSInformationalRequest, while value > 0 will trigger NSCriticalRequest.
         * @param {boolean | integer} attention  If a Boolean, it indicates to request or cancel user’s attention. If an Integer, it indicates the number of times the window flashes.
         * @returns {undefined}
         */
        requestAttention(attention: boolean | integer): undefined;

        /**
         * @description Captures the visible area of the window.
         * @param {Function} callback  the callback when finished capturing the window
         * @param {string | nw.Window.CapturePageConfig} config Optional if a String, see config.format for valid values
         * @example
         *
         Example usage:
         * // png as base64string
         win.capturePage(function(base64string){
        * // do something with the base64string
        }, { format : 'png', datatype : 'raw'} );

         * // png as node buffer
         win.capturePage(function(buffer){
        * // do something with the buffer
      }, { format : 'png', datatype : 'buffer'} );
         */
        capturePage(callback: () => {}, config: string | CapturePageConfig): MimeType | string;

        /**
         * @description Note For Linux:
         *
         * Only Ubuntu is supported, and you’ll need to specify the application .desktop file through NW_DESKTOP env. If NW_DESKTOP env variable is not found, it uses nw.desktop by default.
         *
         * @param {float} progress valid values within [0, 1]. Setting to negative value (<0) removes the progress bar.
         */
        setProgressBar(progress: float): undefined;

        /**
         * @description Set the badge label on the window icon in taskbar or dock.
         *
         * <a style="color:orange">Note For Linux</a>
         * This API is only supported on Ubuntu and the label is restricted to a string number only. You’ll also need to specify the .desktop file for your application (see the note on setProgressBar)
         * @param {string} label
         * @returns {undefined}
         */
        setBadgeLabel(label: string): undefined;

        /**
         * @description Execute a piece of JavaScript in the frame.
         * @param {HTMLFrameElement} frame the frame to execute in. If iframe is null, it assumes in current window / frame
         * @param {string} script the source code of the script to be executed
         * @returns {any}
         */
        eval(frame: HTMLFrameElement | null, script: string): any;

        /**
         * @description Load and execute the compiled binary in the frame. See <a href="https://nwjs.readthedocs.io/en/latest/For%20Users/Advanced/Protect%20JavaScript%20Source%20Code/">Protect JavaScript Source Code.</a>
         * @param {HTMLFrameElement} frame  the frame to execute in. If iframe is null, it assumes in current window / frame.
         * @param {string|ArrayBuffer|BufferSource} path  the path or Buffer or ArrayBuffer of the binary file generated by nwjc
         */
        evalNWBin(frame: HTMLFrameElement | null, path: string | ArrayBuffer | BufferSource): any;

        /**
         * @description Removes all listeners, or those of the specified eventName.
         * @param {string | any} eventName
         * @returns {any}
         */
        removeAllListeners(eventName: string | any): any;

        /**
         * @description Load and execute the compiled binary for Modules in the frame.
         * The binary should be compiled with nwjc --nw-module.
         * The following code will load lib.bin as module and other modules
         * can refer to it with something like import * from './lib.js':
         *  <p style="color:rgb(180,80,50); font-size:18pt">nw.Window.get().evalNWBinModule(null, 'lib.bin', 'lib.js');<p/>
         *
         * <p style="color:rgb(180,80,190);background-color:rgb(100,40,22)">experimental : </p>
         * This API is subject to change in future versions as we’re exploring ways to support this feature better. <a href="https://github.com/nwjs/nw.js/issues/6303">Discuss here.</a>
         *
         *
         * @param {HTMLIFrameElement} frame  the frame to execute in. If iframe is null, it assumes in current window / frame.
         * @param {string | ArrayBuffer | BufferSource} path  the path or Buffer or ArrayBuffer of the binary file generated by nwjc
         * @param {string} module_path  the module URL related to the current document. It will be used to <a href="https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier">resolve the module specifier.</a>
         */
        evalNWBinModule(frame: HTMLIFrameElement | null, path: string | ArrayBuffer | BufferSource, module_path: string): any;

        // TODO Next Method in source code but not in docs
        /**
         * @description This Method in source code but not in the docs
         * @param {number} menu
         */
        setMenu(menu: number): any;

        /**
         * @description Window Events Listners
         * For All Events
         * <hr/>
         * @see onClose
         * @see onClosed
         * @see onLoading
         * @see onLoaded
         * @see onDocumentStart
         * @see onDocumentEnd
         * @see onFocus
         * @see onBlur
         * @see onMinimize
         * @see onRestore
         * @see onMaximize
         * @see onMove
         * @see onResize
         * @see onEnterFullscreen
         * @see onLeaveFullscreen
         * @see onZoom
         * @see onCapturepagedone
         * @see onDevtoolsOpened
         * @see onDevtoolsClosed
         * @see onNewWinPolicy
         * @see onNavigation
         *
         */
        on(event: windowEvents, callback: Function): any;

        /**
         * @alias onClose
         * @description The close event is a special event that will affect the result of the Window.close() function. If developer is listening to the close event of a window, the Window.close() emit the close event without closing the window.
         *
         Usually you would do some shutdown work in the callback of close event, and then call this.close(true) to really close the window, which will not be caught again. Forgetting to add true when calling this.close() in the callback will result in infinite loop.
         And if the shutdown work takes some time, users may feel that the app is exiting slowly, which is bad experience, so you could just hide the window in the close event before really closing it to make a smooth user experience.

         <h4>Note For Mac</h4>
         On Mac, there is an argument passed to the callback indicating whether it’s being closed by ⌘+Q. It will be set to string quit if that’s true, otherwise undefined.
         * @param {"close"} event
         * @param {Function} callback
         * @example
         win.on('close', function() {
            this.hide(); // Pretend to be closed already
            console.log("We're closing...");
            this.close(true); // then close it forcely
        });
         win.close();
         */
        on(event: "close", callback: (closedTypeForMac: string | undefined) => {}): undefined;

        /**
         * @alias onClosed
         * @description The closed event is emitted after the corresponding window
         * is closed. Normally you will not be able to get this event since
         * after the window is closed all js objects will be released.
         * But it is useful when listening to the window’s events in another window,
         * whose objects will not be released.
         *
         * @param {"closed"} event
         * @param {Function} callback
         * @example
         * // Open a new window.
         nw.Window.open('popup.html', {}, function (win) {
        * // Release the 'win' object here after the new window is closed.
        win.on('closed', function () {
            win = null;
        });

        * // Listen to main window's close event
        nw.Window.get().on('close', function () {
            * // Hide the window to give user the feeling of closing immediately
            this.hide();

            * // If the new window is still open then close it.
            if (win !== null) {
                win.close(true);
            }

            * // After closing the new window, close the main window.
            this.close(true);
        });
    });
         */
        on(event: "closed", callback: Function): undefined;

        /**
         * @alias onLoading
         * @description Emitted when the window starts to reload, normally you cannot catch this event because usually it’s emitted before you actually setup the callback.

         The only situation that you can catch this event is when you refresh the window and listen to this event in another window.
         * @param {"loading"} event
         * @param {Function} callback
         */
        on(event: "loading", callback: Function): undefined;

        /**
         * @alias onLoaded
         * @description Emitted when the window is fully loaded, this event behaves the same with window.onload, but doesn’t rely on the DOM.
         * @param {"loaded"} event
         * @param {Function} callback
         * @returns {undefined}
         */
        on(event: "loaded", callback: Function): undefined;

        /**
         * @alias onDocumentStart
         * @description frame {HTMLIFrameElement} is the iframe object, or null if the event is for the window.
         *
         * Emitted when the document object in this window or a child iframe is available, after all files are loaded, but before DOM is constructed or any script is run.
         It will not be fired on the new window being created with nw.Window.open(): the callback of that function will be fired at the same point of this event.

         See inject_js_start in <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#inject_js_start">Manifest-format</a>.
         */
        on(event: "document-start", callback: (frame: HTMLIFrameElement | null) => {}): undefined;

        /**
         * @alias onDocumentEnd
         * @description frame {HTMLIFrameElement} is the iframe object, or null if the event is for the window.
         * Emitted when the document object in this window or a child iframe is unloaded, but before the onunload event is emitted.
         * See inject_js_end in <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#inject_js_end">Manifest-format<a/>
         */
        on(event: "document-end", callback: (frame: HTMLIFrameElement | null) => {}): undefined;

        /**
         * @alias onFocus
         * @description Emitted when window gets focus.
         */
        on(event: "focus", callback: () => {}): undefined;

        /**
         * @alias onBlur
         * @description Emitted when window loses focus.
         */
        on(event: "blur", callback: () => {}): undefined;

        /**
         * @alias onMinimize
         * @description Emitted when window is minimized.
         */
        on(event: "minimize", callback: () => {}): undefined;

        /**
         * @alias onRestore
         * @description Emitted when window is restored from minimize, maximize and fullscreen state.
         */
        on(event: "restore", callback: () => {}): undefined;

        /**
         * @alias onMaximize
         * @description Emitted when window is maximized.
         */
        on(event: "maximize", callback: () => {}): undefined;

        /**
         * @alias onMove
         * @description Emitted after window is moved. The callback is called with 2 arguments: (x, y) for the new location of the left / top corner of the window.
         */
        on(event: "move", callback: (x: integer, y: integer) => {}): undefined;

        /**
         * @alias onResize
         * @description Emitted after window is resized. The callback is called with 2 arguments: (width, height) for the new size of the window.
         */
        on(event: "resize", callback: (width: integer, height: integer) => {}): undefined;

        /**
         * @alias onEnterFullscreen
         * @description Emitted when window enters fullscreen state.
         */
        on(event: "enter-fullscreen", callback: () => {}): undefined;

        /**
         * @alias onLeaveFullscreen
         * @description Emitted when window leaves fullscreen state.
         * @deprecated
         */
        on(event: "leave-fullscreen", callback: () => {}): undefined;

        /**
         * @alias onZoom
         * @description Emitted when window zooming changed. It has a parameter indicating the new zoom level. See win.zoom() method for the parameter’s value definition.
         */
        on(event: "zoom", callback: () => {}): undefined;

        /**
         * @alias onCapturepagedone
         * @deprecated
         * @description This feature is deprecated since 0.13.0. Use the callback with win.capturePage() instead. See Migration Notes from 0.12 to 0.13.
         *
         * Emitted after the capturePage method is called and image data is ready. See win.capturePage() callback function for the parameter’s value definition.
         */
        on(event: "capturepagedone", callback: () => {}): undefined;

        /**
         * @alias onDevtoolsOpened
         * @deprecated
         * @description This feature is deprecated since 0.13.0. Use the callback passed to win.showDevtools instead. See Migration Notes from 0.12 to 0.13.
         */
        on(event: "devtools-opened", callback: (url: string) => {}): undefined;

        /**
         * @alias onDevtoolsClosed
         * @description Emitted after Devtools is closed.
         */
        on(event: "devtools-closed", callback: () => {}): undefined;


        /**
         * @alias onNewWinPolicy
         * @description Emitted when a new window is requested from this window or a child iframe. You can call policy.* methods in the callback to change the default behavior of opening new windows.
         *
         * For example, you can open the URL in system brower when user tries to open in a new window:
         *
         frame {HTMLIFrameElement} is the object of the child iframe where the request is from, or null if it’s from the top window.
         url {String} is the address of the requested link
         policy {Object} is an object with the following methods:
         ignore() : ignore the request, navigation won’t happen.
         forceCurrent() : force the link to be opened in the same frame
         forceDownload() : force the link to be a downloadable, or open by external program
         forceNewWindow() : force the link to be opened in a new window
         forceNewPopup() : force the link to be opened in a new popup window
         setNewWindowManifest(m) : control the options for the new popup window. The object m is in the same format as the <a href="https://nwjs.readthedocs.io/en/latest/References/Manifest%20Format/#window-subfields">Window subfields</a> in manifest format.
         *@example
         * nw.Window.get().on('new-win-policy', function(frame, url, policy) {
         * // do not open the window
          policy.ignore();
         * // and open it in external browser
          nw.Shell.openExternal(url);
        });

         */
        on(event: "new-win-policy", callback: (frame: HTMLFrameElement | null, url: string, policy:windowPolicy) => {}): undefined;


        /**
         * @alias onNavigation
         * @description Emitted when navigating to another page. Similar to new-win-policy, you can call policy.ignore() within the callback to ignore the navigation.
         * <hr/>
         * details of callback parameters :
         * <hr/>
         frame {HTMLIFrameElement} is the object of the child iframe where the request is from, or null if it’s from the top window.
         * <hr/>
         url {String} is the address of the requested link
         * <hr/>
         policy {Object} is an object with the following methods:
         <li>ignore() : ignore the request, navigation won’t happen.</li>
         *
         */
        on(event: "navigation", callback: (frame: HTMLFrameElement | null, url: string, policy: {
            ignore(): any;
        }
        ) => {}): any;
    }

    // TODO : we should move MainManifest to the global scope , complete MainManifest from base.schema.json we written before
    /**
     * @description  js template for Manifest.json
     * @see open_options
     * @alias MainManifestJson
     */
    interface MainManifest{
        Window:open_options
    }

    /**
     * @description window Policy Object
     * @see onNewWinPolicy
     */
    interface windowPolicy{
        ignore(): any,
        forceCurrent(): any,
        forceDownload(): any,
        forceNewWindow(): any,
        forceNewPopup(): any,
        setNewWindowManifest(m: MainManifest['Window']): any
    }
    type windowEvents=
        "close"|
        "closed"|
        "loading"|
        "loaded"|
        "document-start"|
        "document-end"|
        "focus"|
        "blur"|
        "minimize"|
        "restore"|
        "maximize"|
        "move"|
        "resize"|
        "enter-fullscreen"|
        "leave-fullscreen"|
        "zoom"|
        "capturepagedone"|
        "devtools-opened"|
        "devtools-closed"|
        "new-win-policy"|
        "navigation"|
        string;

    /**
     * @description <p style="color:green">Details</p>
     *
     * format {String} optional the image format used to generate the image. It supports two
     * formats: "png" and "jpeg". If ignored, it’s "jpeg" by default.
     *<hr/>
     * datatype {String} it supports three types: "raw", "buffer" and "datauri". If ignored, it’s "datauri" by default.
     *
     * <p style="color:orange;background-color:rgb(55,9,80)">raw or datauri </p>
     *
     * <p style="color:rgb(220,144,2);background-color:rgb(80,11,180)">The "raw" only contains the Base64 encoded image. But "datauri" contains the mime type headers as well, and it can be directly assigned to src of Image to load the image.<p/>
     */
    interface CapturePageConfig{
        format:"jpeg"|"png",
        datatype:"datauri"|"buffer"|"raw"
    }
    interface Cookies {

    }
    interface PrintersData{
        cupsEnterprisePrinter:boolean,
        deviceName:string,
        printerDescription:string,
        printerName:string,
        printerOptions:{
            "printer-location":string,
            "printer-make-and-model":string,
            system_driverinfo:string
        }
    }

    /**
     * @description options is a JSON object with the following options
     *
     *<ul>
     *     <li> <p style="color:rgb(255,166,11)"> autoprint {Boolean} <p/>  whether to print without the need for user’s interaction; optional, true by default </li>
     *     <li> <p style="color:rgb(255,166,11)"> printer {String}<p/> <the device name of the printer returned by nw.Window.getPrinters(); No need to set this when printing to PDF/li>
     *     <li> <p style="color:rgb(255,166,11)"> pdf_path {String}<p/>  the path of the output PDF when printing to PDF</li>
     *     <li> <p style="color:rgb(255,166,11)"> headerFooterEnabled {Boolean}<p/> whether to enable header and footer</li>
     *     <li> <p style="color:rgb(255,166,11)">landscape {Boolean <p/> whether to use landscape or portrait </li>
         *     <li> <p style="color:rgb(255,166,11)">mediaSize {JSON Object <p/> the paper size spec
         *     Explain :
         *         <ul>
         *             <li style="background-color:rgb(33,33,33)">'mediaSize':{'name': 'CUSTOM', 'width_microns': 279400, 'height_microns': 215900, 'custom_display_name':'Letter', 'is_default': true}</li>
         *         </ul>
         *     </li>
         *     <li> <p style="color:rgb(255,166,11)"> shouldPrintBackgrounds {Boolean} <p/> whether to print CSS backgrounds </li>
         *     <li> <p style="color:rgb(255,166,11)">marginsType {Integer} <p/>  0 - Default; 1 - No margins; 2 - minimum; 3 - Custom, see marginsCustom. </li>
         *     <li> <p style="color:rgb(255,166,11)"> marginsCustom {JSON Object} <p/> the custom margin setting; units are points. :
         *     Explain :
         *      <ul>
         *          <li style="background-color:rgb(33,33,33)">"marginsCustom":{"marginBottom":54,"marginLeft":70,"marginRight":28,"marginTop":32}/li>
         *      </ul>
         *     </li>
         *     <li> <p style="color:rgb(255,166,11)"> copies {Integer}<p/>  the number of copies to print.</li>
         *     <li> <p style="color:rgb(255,166,11)"> scaleFactor {Integer}<p/> the scale factor; 100 is the default </li>
         *     <li> <p style="color:rgb(255,166,11)"> headerString {String} <p/> string to replace the URL in the header. </li>
         *     <li> <p style="color:rgb(255,166,11)"> footerString {String} <p/>string to replace the URL in the footer. </li>
         *</ul>
     */
    interface PrintOptions {
        autoprint?:boolean,
        printer?:string,
        pdf_path?:string,
        headerFooterEnabled?:boolean,
        landscape?:boolean,
        mediaSize?:{
            name:string,
            width_microns:integer,
            height_microns:integer,
            custom_display_name:string,
            is_default:boolean
        },
        shouldPrintBackgrounds:boolean,
        marginsType:0|1|2|3,
        marginsCustom:{
            marginBottom:integer,
            marginLeft:integer,
            marginRight:integer,
            marginTop:integer
        },
        copies:integer,
        scaleFactor:integer,
        headerString:string,
        footerString:string
    }
}

// this will support process and nw.process
// TODO : Document it and check functions parameters and returned value type

declare namespace nw.process{
    export const versions:{
        "ares":string,
        nw:string,
        chromium:string,
        "nw-flavor":string,
        "cldr":string,
        "http_parser":string,
        "icu":string,
        "modules":string,
        "napi":string,
        "nghttp2":string,
        "node":string,
        "node-webkit":string,
        "nw-commit-id":string,
        "openssl":string,
        "unicode":string,
        "uv":string,
        "v8":string,
        "zlib":string,

    };
    export const title:string;
    export const __nwjs:number;
    export const version:string;
    export const arch:string;
    export const platform:string;
    export const release:object;
    export const argv:object;
    export const execArgv:object;
    export const env:object;
    export const pid:number;
    export const features:object;
    export const ppid:number;
    export const execPath:string;
    export const debugPort:number;
    export function _debugProcess():any;
    export function _debugEnd():any;
    export function _startProfilerIdleNotifier():any;
    export function _stopProfilerIdleNotifier():any;
    export function abort():any;
    export function chdir():any;
    export function umask():any;
    export function _getActiveRequests():any;
    export function _getActiveHandles():any;
    export function _kill():any;
    export function cwd():any;
    export function dlopen():any;
    export function reallyExit():any;
    export function uptime():any;
    export function _rawDebug():any;
    export const moduleLoadList:object;
    export function binding():any;
    export function _linkedBinding():any;
    export const _events:object;
    export const _eventsCount:number;
    export const _maxListeners:undefined;
    export function _fatalException():any;
    export const domain:object;
    export const _exiting:boolean;
    export function assert():any;
    export const config:object;
    export function setUncaughtExceptionCaptureCallback():any;
    export function hasUncaughtExceptionCaptureCallback():any;
    export function emitWarning():any;
    export function nextTick():any;
    export function _tickCallback():any;
    export const stdout:object;
    export const stderr:object;
    export function stdin():string;
    export function openStdin():any;
    export function hrtime():any;
    export function cpuUsage():any;
    export function memoryUsage():any;
    export function exit():any;
    export function kill():any;
    export const argv0:string;
    export const mainModule:object;
    export function setMaxListeners():any;
    export function getMaxListeners():any;
    export function emit():any;
    export function addListener():any;
    export function on():any;
    export function prependListener():any;
    export function once():any;
    export function prependOnceListener():any;
    export function removeListener():any;
    export function off():any;
    export function removeAllListeners():any;
    export function listeners():any;
    export function rawListeners():any;
    export function listenerCount():any;
    export function eventNames():any;

}

declare namespace nw.Clipboard{
    /**
     * @description get the system clipboard
     * @see nw.Clipboard.Clipboard
     * @example
     // get the system clipboard
     var clipboard = nw.Clipboard.get();

     // Read from clipboard
     var text = clipboard.get('text');
     console.log(text);

     // Or write something
     clipboard.set('I love NW.js :)', 'text');

     // And clear it!
     clipboard.clear();
     */
    export function get():nw.Clipboard.Clipboard;

    /**
     * @description Optional the type of the data. Support text, png, jpeg, html and rtf. By default, type is set to "text".
     */
    type AllowedClipboardDataTypes ="text"|"png"|"jpg"|"html"|"rtf";

    /**
     * @description JSON object containing data, type and raw to be written to clipboard
     * <hr/>
     *  for detailed arguments specification
     * @see nw.Clipboard.Clipboard.set
     */
    interface clipboardData {
        data:string,type?:AllowedClipboardDataTypes,raw?:boolean
    }
    /**
     * @description JSON object containing type and raw to be retrieve data from clipboard
     * <hr/>
     *  for detailed arguments specification
     * @see nw.Clipboard.Clipboard.get
     */
    interface clipboardDataGet {
        type?:AllowedClipboardDataTypes,raw?:boolean
    }

    /**
     * @description  JSON object containing data and type , raw retrieved from clipboard
     */
    interface clipboardDataGetReturn {
        data?:boolean,type:AllowedClipboardDataTypes,raw?:boolean
        // data : may not return any data
        // but must return the type we send it
    }

    /**
     * @description Clipboard is an abstraction of clipboard for Windows, Linux and Mac.
     * <a href="http://docs.nwjs.io/en/latest/References/Clipboard/">Docs</a>
     */
    class Clipboard {
        /**
         *
         * @param {string} data : the data to write to the clipboard
         * @param {nw.Clipboard.AllowedClipboardDataTypes} type  Optional the type of the data. Support text, png, jpeg, html and rtf. By default, type is set to "text"
         * @param {boolean} raw Optional requiring raw image data. This option is only valid if type is png or jpeg. By default, raw is set to false
         * @returns {any}
         * @description Write data of type to the clipboard.
         * This method will clear the clipboard and replace with
         * The given data. Hence another call to this method will
         * Overwrite with the new one. To write multiple types of data
         * To clipboard simultaneously, you will need to use set(clipboardDataList).
         *<hr/>
         * <h3>Format of Image</h3>
         * <p style="background-color:rgb(30,30,30)">
         * Images read or written from clipboard can be either JPEG or PNG. When raw is not set or set to false, the data is expected to be a valid data URI encoded with Base64. When raw is set to  true, the data is only the Base64 encoded image data not including the data:<mime-type>;base64, part.
         * </p>
         */
        set(data:string,type?:AllowedClipboardDataTypes,raw?:boolean):any;

        /**
         * @param {nw.Clipboard.clipboardData} clipboardData JSON object containing data, type and raw to be written to clipboard
         * @returns {any}
         * @see nw.Clipboard.Clipboard.set detailed arguments specification
         * @name set_clipboardData
         */
        set(clipboardData:clipboardData):any;

        /**
         * @param {Array<nw.Clipboard.clipboardData>} clipboardDataList Array of clipboardData to be written to clipboard
         * @returns {any}
         * @see nw.Clipboard.clipboardData clipboardData
         * @see nw.Clipboard.Clipboard.set set(data, [type, [raw]])
         * @see set_clipboardData set(clipboardData)
         * @name set_clipboardDataList
         * @description  Array of clipboardData to be written to clipboard
         * <hr/>
         * Multiple types of data can be written to clipboard simultaneously with this method.
         * @example
         * Example: write an image and a <img> pointing to the image to the clipboard
         * var fs = require('fs');
         var path = require('path');

         // resolve path as absolute path in order to be used by other applications
         var pngPath = path.resolve('nw.png');
         // read the image from file system as base64 encoded string
         var data = fs.readFileSync(pngPath).toString('base64');
         // transform file path to URL
         var html = '<img src="file:///' + encodeURI(data.replace(/^\//, '')) + '">';

         var clip = nw.Clipboard.get();
         // write both PNG and HTML to clipboard
         clip.set([
         {type: 'png', data: data, raw: true},
         {type: 'html', data: html}
         ]);
         */
        set(clipboardDataList:Array<clipboardData>):any;

        /**
         *
         * @param {nw.Clipboard.AllowedClipboardDataTypes} type  Optional the type of the data. Support text, png, jpeg, html and rtf. By default, type is set to "text"
         * @param {boolean} raw Optional requiring raw image data. This option is only valid if type is png or jpeg
         * @returns {string}  the data retrieved from the clipboard
         * @description Get the data of type from clipboard
         */
        get(type:AllowedClipboardDataTypes,raw?:boolean):string;

        /**
         * @description Get the data of type from clipboard
         * @param {nw.Clipboard.clipboardDataGet} type JSON object containing type and raw argument for reading data from clipboard
         * @returns {string} the data retrieved from the clipboard
         * @name get_clipboardDataGet
         * @see get
         */
        get(type:clipboardDataGet):string;

        /**
         * @description Get the data of type from clipboard
         * @name get_Array_clipboardDataGet
         * @param {Array<nw.Clipboard.clipboardDataGet>} type Array of clipboardData for reading data from clipboard. Multiple types of data can be read from clipboard simultaneously with this method
         * @returns {Array<nw.Clipboard.clipboardDataGetReturn>}  array of clipboardData retrieved from the clipboard. Each item contains type, data and raw (optional) attributes
         * @see get
         * @see get_clipboardDataGet get(type:clipboardDataGet)
         */
        get(type:Array<clipboardDataGet>):Array<clipboardDataGetReturn>;

        /**
         *
         * @returns {Array<nw.Clipboard.AllowedClipboardDataTypes>}  list of available types of data in clipboard currently
         * @description You can use the returned list as a suggestion to get the right data from clipboard.
         * <hr/>
         * @example
         * Each item is one of following types
         text: plain text. Can be read by clip.get('text').
         html: HTML text. Can be read by clip.get('html').
         rtf: RTF (Rich Text Format). Can be read by clip.get('rtf').
         png: PNG image. Can be read by clip.get('png').
         jpeg: JPEG image. Can be read by clip.get('jpeg').
         */
        readAvailableTypes():Array<AllowedClipboardDataTypes>;

        /**
         * @description Clear the clipboard.
         * @returns {null}
         */
        clear():null;

    }

}

/**
 * @alias Screen
 * @description Screen is an instance of EventEmitter object, and you’re able to use Screen.on(...) to respond to native screen’s events.
 * Screen is a singleton object, need to be initiated once by calling nw.Screen.Init()
 * <a href="https://nwjs.readthedocs.io/en/nw14/References/Screen/">Docs</a>
 */
declare namespace nw.Screen {

    /**
     * @alias screen
     * @description screen has following structure :
     * @example
     screen {
    // unique id for a screen
        id: int,

    // physical screen resolution, can be negative, not necessarily start from 0,depending on screen arrangement
            bounds: {
            x: int,
                y: int,
                width: int,
                height: int
        },

    // useable area within the screen bound
        work_area: {
            x: int,
                y: int,
                width: int,
                height: int
        },

        scaleFactor: float,
            isBuiltIn: bool,
            rotation: int,
            touchSupport: int
    }
     */
    interface screen {
        id: integer,
// physical screen resolution, can be negative, not necessarily start from 0,depending on screen arrangement
        bounds: {
            x: integer,
            y: integer,
            width: integer,
            height: integer
        },
        // un-seable area within the screen bound
        work_area: {
            x: integer,
            y: integer,
            width: integer,
            height: integer
        },

        scaleFactor: float,
        isBuiltIn: boolean,
        rotation: integer,
        touchSupport: integer
    }
    /**
     *
     * @description Init the Screen singleton object, you only need to call this once
     * @see nw.Screen
     */
    export function Init(): any;

    /**
     * Get the array of screen (number of screen connected to the computer)
     * @returns {Array<nw.Screen.screen>}
     * @see screen
     */
    export function screens(): Array<screen>;

    // we just add string to prevent Ides compiler from showing any warning

    /**
     * @description Support "screen" & "window"
     */
    type screenSources="screen" | "window" | string;
    /**
     * @description Sharing Screen Of Our Devices-display [laptop/pc/mac] and for our Applications
     *
     * <p style="color:rgb(220,140,13)">Note<p/>
     * <p style="background-color:rgb(33,33,33)">Screen sharing by selection; Currently only working in Windows and OSX and some linux distribution.</p>
     * @param {string} sources  array of source types. Two types are supported by this API: "screen" and "window".
     * @param {Function} callback callback function with chosen streamId. streamId will be false if failed to execute or existing session is alive.
     *
     * @example
     nw.Screen.Init(); // you only need to call this once
     nw.Screen.chooseDesktopMedia(["window","screen"],
     function(streamId) {
                var vid_constraint = {
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: streamId,
                        maxWidth: 1920,
                        maxHeight: 1080
                    },
                    optional: []
                };
                navigator.webkitGetUserMedia({audio: false, video: vid_constraint}, ()=>{console.log(arguments)}, ()=>{console.log(arguments)});
            }
     );
     */
    export function chooseDesktopMedia(sources:Array<screenSources>,callback:Function):any;

    /**
     * @description Next Events Are Allowed
     * <ul>
     *     <li>displayAdded(screen) : Emitted when a new screen added, the callback is called with 1 argument screen. See Screen.screens for the format.</li>
     *     <li>displayRemoved (screen) : Emitted when a new screen added, the callback is called with 1 argument screen. See Screen.screens for the format.</li>
     *     <li>displayRemoved (screen) : Emitted when existing screen removed, the callback is called with 1 argument screen. See Screen.screens for the format</li>
     *     </ul>
     *
     * @see screens
     */
    type AllowedScreenEvents="displayBoundsChanged"|
        "displayAdded"|
        "displayRemoved";

    /**
     * @inheritDoc
     * @returns {any}
     */
    export function on(event:AllowedScreenEvents,callback:(screen:screen)=>{}):any;

    /**
     * @description This API behaves similar functions as Screen.chooseDesktopMedia. But it doesn’t have GUI. You can use this API to monitor the changes of screens and windows on desktop and implement your own UI.
     * Screen.DesktopCaptureMonitor is an instance of EventEmitter. You can use
     * Screen.DesktopCaptureMonitor.on() to listen to the events.
     * @example
     var dcm = nw.Screen.DesktopCaptureMonitor;
     nw.Screen.Init();
     dcm.on("added", function (id, name, order, type) {
   //select first stream and shutdown
   var constraints = {
      audio: {
         mandatory: {
             chromeMediaSource: "system",
             chromeMediaSourceId: dcm.registerStream(id)
          }
      },
      video: {
         mandatory: {
             chromeMediaSource: 'desktop',
             chromeMediaSourceId: dcm.registerStream(id)
         }
      }
  };

  // _TODO: call getUserMedia with contraints

          dcm.stop();
        });

     dcm.on("removed", function (id) { });
     dcm.on("orderchanged", function (id, new_order, old_order) { });
     dcm.on("namechanged", function (id, name) { });
     dcm.on("thumbnailchanged", function (id, thumbnail) { });
     dcm.start(true, true);
     *
     */
    export type DesktopCaptureMonitor=EventEmitter;


    /**
     * @description Next Events Are Allowed
     * <ul>
     *     <li>displayAdded(screen) : Emitted when a new screen added, the callback is called with 1 argument screen. See Screen.screens for the format.</li>
     *     <li>displayRemoved (screen) : Emitted when a new screen added, the callback is called with 1 argument screen. See Screen.screens for the format.</li>
     *     <li>displayRemoved (screen) : Emitted when existing screen removed, the callback is called with 1 argument screen. See Screen.screens for the format</li>
     *     </ul>
     *
     * <p style="color:orange">Usage With it's Functions</p>
     dcm.on("added", function (id, name, order, type , primary)
     dcm.on("removed", function (id) { });
     dcm.on("orderchanged", function (id, new_order, old_order) { });
     dcm.on("namechanged", function (id, name) { });
     dcm.on("thumbnailchanged", function (id, thumbnail) { });

     * <p style="color:orange">More Details</p>
     *
     <p style="color:green">Event: added (id, name, order, type, primary)   </p>
     <p style="color:rgb(112,60,118)">Emit when a new source was added  </p>

     <p>
     id {String} is the media id. Use registerStream(id) to obtain a valid stream id used with getUserMedia(). See registerStream
     <hr/>
     name {String} is the title of the window or screen
     <hr/>
     order {Integer} is the z-order of the windows, if screens are selected they will appear first
     <hr/>
     type {String} type of the stream: “screen”, “window”, “other” or “unknown”
     <hr/>
     primary {Boolean} Windows OS only this will be true if the source is the primary monitor
     </p>
     <hr/>
     <hr/>


     <p style="color:green">Event: removed (order)</p>
     <p style="color:rgb(112,60,118)">Emit when a source was removed.  </p>
     order {Integer} is the order of the media source that is no longer capturable
     <hr/>
     <hr/>

     <p style="color:green">Event: orderchanged (id, new_order, old_order)</p>
     <p style="color:rgb(112,60,118)">Emit when the Z-order of a source changed (this may change for windows as others are focused).</p>
     id {String} is the media id of the screen or window that has changed z-order
     <hr/>
     new_order {Integer} is the new z-order
     <hr/>
     old_order {Integer} is the old z-order
     <hr/>
     <hr/>

     <p style="color:green">Event: namechanged (id, name)</p>
     <p style="color:rgb(112,60,118)">Emit when the name of the source has changed. This can happen when a window changes title.</p>

     id {String} is the media id of the screen or window that has a name changed
     <hr/>
     name {String} is the new name of the screen or window
     <hr/>
     <hr/>

     <p style="color:green">Event: thumbnailchanged (id, thumbnail)</p>
     <p style="color:rgb(112,60,118)">Emit when the thumbnail of a source changed.</p>

     id {String} is the media id of the screen or window that has an updated thumbnail
     <hr/>
     thumbnail {String} is the base64 encoded png of the thumbnail
     <hr/>
     <hr/>

     *
     * @see screens
     */
    type AllowedDesktopCaptureMonitorEvents="added"|
        "removed"|
        "orderchanged"|
        "namechanged"|
        "thumbnailchanged"|string;

    // const AllowedDesktopCaptureMonitorCallbacks:[
    //      (id:string, name:string, order:number, type:string, primary:boolean)=>any,
    //      (id:string)=>any,
    //     (id:string, new_order:number, old_order:number)=>any,
    //     (id:string,name:string)=>any,
    //     (id:string,thumbnail:string)=>any,
    //     ()=>{},
    //     Function
    //     ];
    export namespace DesktopCaptureMonitor{

        /**
         * @description Details Of actions parameters of callbacks
         *
         dcm.on("added", function (id, name, order, type , primary)
         dcm.on("removed", function (id) { });
         dcm.on("orderchanged", function (id, new_order, old_order) { });
         dcm.on("namechanged", function (id, name) { });
         dcm.on("thumbnailchanged", function (id, thumbnail) { });


         */
        export function on(event:AllowedDesktopCaptureMonitorEvents,callback:()=>{}):any;

        /**
         * @description Boolean of whether the DesktopCaptureMonitor is started.
         */
        export const started:Boolean;

        /**
         * @description The DesktopCaptureMonitor will start monitoring the system and trigger the the events. The screen may flicker if while DesktopCaptureMonitor is running.
         * @param {boolean} should_include_screens  whether should include screens
         * @param {boolean} should_include_windows whether should include windows
         */
        export function start(should_include_screens:boolean,should_include_windows:boolean):any;

        /**
         * @description The DesktopCaptureMonitor will stop monitoring the system. DesktopCaptureMonitor should be stopped after a stream is selected.
         */
        export function stop():any;

        /**
         * @description Register and return a valid stream id passed into chromeMediaSourceId in getUserMedia constraints
         */
        export function registerStream(id:string):string;


    }
}

declare namespace nw.Shell{
    /**
     * @description Open the given external URI in the desktop’s default manner. For example, mailto: URLs in the default mail user agent.
     * @param {string} uri A URL to open in system default manner.
     */
    export function openExternal(uri:string):any;

    /**
     * @description Open the given file_path in the desktop’s default manner.
     * @param {string} file_path  path to a local file
     */
    export function openItem(file_path:string):any;

    /**
     * @description Show the given file_path in the parent folder with file manager. If possible, select the file.
     * @param {string} file_path  path to a local file
     */
    export function showItemInFolder(file_path:string):any;
}

declare namespace nw{
    /**
     * @description Tray is an abstraction of different controls on different platforms, usually it’s a small icon shown on the OS’s notification area. On Mac OS X it’s called Status Item, on GTK it’s Status Icon, and on Windows it’s System Tray Icon
     * <a href="https://nwjs.readthedocs.io/en/latest/References/Tray/">Docs</a>
     *
     * <p style="color:rgb(90,120,190)">Note: All Tray options can be modify on the fly</p>
     * <p style="color:rgb(255,172,11)">Using Tray With Page Navigation</p>
     <p style="background-color:rgb(33,33,33)">
     Trays created in the page that can be navigated will not be functional
     after a reload or navigation. The reason is that the tray and even the
     web page will be garbage collected by JS engine after navigation to prevent
     memory leak. So it’s recommended to use trays in background page, which is
     existed for the life cycle of your app. See bg-script and main for how to
     execute scripts in the background page.
     </p>

     * <p style="color:rgb(255,172,11)">Details</p>
     Create a new Tray, option is an object contains initial settings for the Tray. Every field has its own property in the Tray, see documentation of each property for details.
     *<p style="color:rgb(255,172,11)">option {Object}</p>
     <ul style="background-color:rgb(33,33,33)">
     <li>title {String} title</li>
     <li>tooltip {String} tooltip</li>
     <li>icon {String} icon</li>
     <li>alticon {String} alternate</li>
     <li>iconsAreTemplates {Boolean} whether icons are templates</li>
     <li>menu {Menu} popup menu</li>
     </ul>

     * <p style="color:rgb(255,172,11)">Note For : Mac</p>
     * <p style="color:rgb(80,190,11)">NW.js does not support menulet (⌘+drag) since it will prohibit NW.js apps from being distributed in the App Store.</p>
     * @example
     // Create a tray icon
     var tray = new nw.Tray({ title: 'Tray', icon: 'img/icon.png' });
     // Give it a menu
     var menu = new nw.Menu();
     menu.append(new nw.MenuItem({ type: 'checkbox', label: 'box1' }));
     tray.menu = menu;

     // Remove the tray
     tray.remove();
     tray = null;
     */
    export class Tray extends EventEmitter{

        constructor(option?:TrayOption);

        /**
         * @description Get or set the title of the tray.
         * <hr/>
         * On Mac OS X title will be showed on status bar along with its icon, but it doesn’t have effects on GTK and Windows, since the latter two platforms only support tray to be showed as icons.
         */
        title:string;

        /**
         * @description Get or set the tooltip of the tray. tooltip shows when you hover the Tray with mouse.
         * <hr/>
         * <p style="color:rgb(255,175,00)">Note</p>
         * tooltip is showed on all three platforms. Should be set as Tray property rather from option object constructor.
         */
        tooltip:string;

        /**
         * @description Get or set the icon of the tray, icon must a path to your icon file. It can be a relative path which points to an icon in your app, or an absolute path pointing to a file in user’s system.
         * <p style="color:rgb(255,175,00)">Mac</p>
         * Mac OS X caveat: when used in notification context, png icon is not sized down like in windows notification area, it is rather displayed in 1:1 ratio.
         */
        icon:string;

        /**
         * @description  <p style="color:rgb(255,175,00)">Only Mac</p>
         *
         Get or set the alternate (active) tray icon.
         */
        alticon:string;

        /**
         * @description <p style="color:rgb(255,175,00)">Only Mac</p>
         *
         Get or set whether icon and alticon images are treated as “templates” (true by default). When the property is set to true the images are treated as “templates” and the system automatically ensures proper styling according to the various states of the status item (e.g. dark menu, light menu, etc.). Template images should consist only of black and clear colours and can use the alpha channel in the image to adjust the opacity of black content.
         */
        iconsAreTemplates:boolean;

        /**
         * @description Get or set the menu of the tray, menu will be showed when you click on the tray icon.

         <p style="color:rgb(255,175,00)">Note</p>
         <p>
         Get or set the menu of the tray, menu will be showed when you click on the tray icon.

         On Mac OS X the menu will be showed when you click on the tray (which is the only action available for tray icons on Mac OS X). On Windows and Linux, the menu will be showed when you single click on the tray with right mouse button, clicking with left mouse button sends the click event and does not show a menu.
         </p>
         <p style="color:rgb(255,175,00)">So</p>
         In order to reduce differences from different platforms, setting menu property is the only way to bind a menu to tray, there’s no way to popup a menu with left mouse button click on Linux and Windows.

         <p style="color:rgb(255,175,00)" >Note On The Last Line From Official Docs</p>
         <p style="background-color:rgb(33,33,33)">
         We Can actually We can bind menu to a tray icon without using menu property
         By listen to click event
         </p>
         <hr/>
         <p>See Next Example</p>
         <p style="background-color:rgb(50,70,60)">
         ourTray.on('click',(ev)=>{ourMenu.popup(ev.x,ev.y)});
         </p>
         This Will show popup menu with left click
         */
        menu:Menu;

        /**
         * Remove the tray.
         * <p style="color:rgb(255,175,00)">Note</p>
         * Once removed, you will not be able to show it again and you should set your tray variable to null to make it garbage collected. There is no way temporarily hide a tray icon.
         */
        remove:Function;

        /**
         * @description inherited from EventEmitter
         * There is only on event Available 'click'
         */
        on(event:AvailableTrayEvents, callback:(ev:{x:number,y:number})=>{}):undefined;
    }

    /**
     * @description Events
     * <p style="color:rgb(255,175,00)">click</p>
     * Emitted when user clicks the menu item with left mouse button.
     * You cannot catch click with right mouse button, because it is used to show menu. Even if you’re not binding a menu to a tray, you still can not listen to it. Double click events are also ignored.
     * <p style="color:rgb(255,175,00)">Note : For Mac</p>
     * NW.js does not support menulet (⌘+drag) since it will prohibit NW.js apps from being distributed in the App Store.
     */
    type AvailableTrayEvents="click"|string;
    /**
     * @description You must set title or icon
     */
    interface TrayOption {
        title:string,
        tooltip?:string,
        icon?:string,
        alticon?:string,
        iconsAreTemplates?:boolean,
        menu?:Menu
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  