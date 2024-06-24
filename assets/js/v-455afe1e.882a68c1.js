"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38489],{959866:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-455afe1e","path":"/devices/ZBDongle-E.html","title":"SONOFF ZBDongle-E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBDongle-E control via MQTT","description":"Integrate your SONOFF ZBDongle-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"How to create a SONOFF ZBDongle-E Router","slug":"how-to-create-a-sonoff-zbdongle-e-router","link":"#how-to-create-a-sonoff-zbdongle-e-router","children":[]},{"level":3,"title":"Hints","slug":"hints","link":"#hints","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light indicator level (numeric)","slug":"light-indicator-level-numeric","link":"#light-indicator-level-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1719219131000},"filePathRelative":"devices/ZBDongle-E.md"}')},672714:(e,t,o)=>{o.r(t),o.d(t,{default:()=>R});var i=o(166252);const l=o.p+"assets/img/putty-bootloader-1.0c50b302.png",n=o.p+"assets/img/putty-bootloader-2.b39ba5a6.png",r=(0,i._)("h1",{id:"sonoff-zbdongle-e",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#sonoff-zbdongle-e","aria-hidden":"true"},"#"),(0,i.Uk)(" SONOFF ZBDongle-E")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZBDongle-E")],-1),d=(0,i._)("td",null,"Vendor",-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Sonoff Zigbee 3.0 USB Dongle Plus (EFR32MG21) with router firmware")],-1),h=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"light_indicator_level, linkquality")],-1),g=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.png",alt:"SONOFF ZBDongle-E"})])],-1),c=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),p=(0,i._)("h3",{id:"how-to-create-a-sonoff-zbdongle-e-router",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#how-to-create-a-sonoff-zbdongle-e-router","aria-hidden":"true"},"#"),(0,i.Uk)(" How to create a SONOFF ZBDongle-E Router")],-1),f={href:"https://sonoff.tech/wp-content/uploads/2022/11/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/Router",target:"_blank",rel:"noopener noreferrer"},m={href:"https://darkxst.github.io/silabs-firmware-builder/",target:"_blank",rel:"noopener noreferrer"},_=(0,i._)("strong",null,"Google Chrome",-1),w=(0,i._)("strong",null,"Microsoft Edge",-1),k=(0,i._)("h3",{id:"hints",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#hints","aria-hidden":"true"},"#"),(0,i.Uk)(" Hints")],-1),v=(0,i._)("p",null,"The guide from SONOFF is not very detailed. Here are some additional hints:",-1),S=(0,i._)("li",null,[(0,i.Uk)("First, you have to disassemble the device and pull the logic board out of its housing. You need a "),(0,i._)("strong",null,"J00 Phillips screwdriver"),(0,i.Uk)(" for this. "),(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-screws.jpg",width:"130",height:"129"}),(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-board-in-housing.jpg",width:"130",height:"117"})],-1),y={href:"https://en.wikipedia.org/wiki/XMODEM",target:"_blank",rel:"noopener noreferrer"},O=(0,i.uE)("<ul><li><p>install XMODEM transfer protocol and terminal emulator Putty with</p><p>debian based OS: <code>sudo apt install lrzsz putty</code> arch based OS: <code>sudo paxman -S lrzsz putty</code></p></li><li><p>user needs to be in dialout group in order to access serial ports</p><p>debian based OS: <code>sudo adduser $USER dialout</code> arch based OS: <code>sudo usermod -a -G uucp $USER</code></p></li><li><p>log in and out so that group membership comes into effect (You can check by running <code>id</code>)</p></li></ul>",1),U=(0,i.uE)('<li>Third, you must operate on the naked logic board while it is plugged in. This is a lot easier if you use a <strong>USB extension cable</strong>.</li><li>Forth, to enter the Bootloader Mode, you have to <ul><li><p>Plug the device in</p></li><li><p>Connect to the device with the serial software (for serial connection parameters, see guide)</p><p><code>putty -serial -sercfg 115200,8,n,1 /dev/ttyACM0</code><br><img src="'+l+'" width="350" height="250"><br> If you get the error <code>PuTTY: unable to load font &quot;server:fixed&quot;</code>, run <code>export GDK_BACKEND=x11</code> previous to the putty command.</p></li><li><p>Press and hold the &quot;BOOT&quot; button (upper button in the lower right corner next to the USB plug in the photo below)</p></li><li><p>and then press the &quot;RST.&quot; button (lower button in the lower right corner next to the USB plug in the photo below) to restart the device <img src="https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-naked.jpg" width="648" height="242"></p></li></ul></li>',2),E=(0,i._)("br",null,null,-1),F=(0,i._)("img",{src:n,width:"350",height:"250"},null,-1),D={href:"https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/Router",target:"_blank",rel:"noopener noreferrer"},N=(0,i._)("p",null,[(0,i._)("code",null,"wget https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/blob/master/Dongle-E/Router/Z3RouterUSBDonlge_EZNet6.10.3_V1.0.0.gbl")],-1),B=(0,i._)("li",null,[(0,i._)("p",null,"Send the file through XMODEM"),(0,i._)("p",null,[(0,i.Uk)("debian based OS: "),(0,i._)("code",null,"sx Z3RouterUSBDonlge_EZNet6.10.3_V1.0.0.gbl < /dev/ttyACM0 > /dev/ttyACM0"),(0,i.Uk)(" arch based OS: "),(0,i._)("code",null,"lrzsz-sx -X Z3RouterUSBDonlge_EZNet6.10.3_V1.0.0.gbl < /dev/ttyACM0 > /dev/ttyACM0"),(0,i.Uk)(" (Without the -X it will not use the xmodem protocol)")])],-1),Z=(0,i._)("li",null,[(0,i._)("p",null,"Wait for 'Serial upload complete', then press '2' in the Bootloader Terminal to restart the dongle.")],-1),x=(0,i._)("li",null,"Finally, the dongle LED blinks green, inidicating it is in paring mode. Pair as usual with Z2M.",-1),q=(0,i._)("li",null,"Note: The dongle may not pair successfully if it is plugged into a USB 3.x socket, if it fails to pair try moving it to a USB 2 socket or a standalone USB charger.",-1),M=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light-indicator-level-numeric" tabindex="-1"><a class="header-anchor" href="#light-indicator-level-numeric" aria-hidden="true">#</a> Light indicator level (numeric)</h3><p>Brightness of the indicator light. Value can be found in the published state on the <code>light_indicator_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),T={},R=(0,o(983744).Z)(T,[["render",function(e,t){const o=(0,i.up)("RouterLink"),l=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),r,(0,i._)("table",null,[a,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=SONOFF"},{default:(0,i.w5)((()=>[(0,i.Uk)("SONOFF")])),_:1})])]),u,h,g])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,p,(0,i._)("p",null,[(0,i.Uk)('You can create a powerful Zigbee router from an ordinary Sonoff Zigbee 3.0 USB Dongle Plus (Model "ZBDongle-E" with EFR32MG21 chip) by flashing a router firmware onto the device. You can find the official guide for flashing the device here: '),(0,i._)("a",f,[(0,i.Uk)("SONOFF Zigbee 3.0 USB dongle plus firmware flashing"),(0,i.Wm)(l)]),(0,i.Uk)(". The guide also contains the link to the official "),(0,i._)("a",b,[(0,i.Uk)("SONOFF Router Firmware for the ZBDongle-E"),(0,i.Wm)(l)]),(0,i.Uk)(".")]),(0,i._)("p",null,[(0,i.Uk)("As an alternative to disassembling the device, you can also use the browser-based "),(0,i._)("a",m,[(0,i.Uk)("Silabs Firmware Flasher"),(0,i.Wm)(l)]),(0,i.Uk)(". Before flashing, download the router firmware and plug the dongle into a USB port on your computer. A browser supporting the WebSerial API is required; if in doubt, use "),_,(0,i.Uk)(" or "),w,(0,i.Uk)(". After the flashing is done, the dongle will immediately reboot into pairing mode. Pair as usual with Z2M.")]),k,v,(0,i._)("ul",null,[S,(0,i._)("li",null,[(0,i.Uk)("Second, you need a "),(0,i._)("strong",null,[(0,i.Uk)("software supporting the "),(0,i._)("a",y,[(0,i.Uk)("XMODEM file transfer protocol"),(0,i.Wm)(l)])]),(0,i.Uk)(" for sending the firmware image to the device. On Debian Linux like Ubuntu you can use lrzsz, "),O]),U,(0,i._)("li",null,[(0,i.Uk)("Fifth, to upload the file, in the bootloader terminal press '1' to initiate the upload"),E,F,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("p",null,[(0,i.Uk)("Open another terminal on the host system. Download the router firmware *.gbl file from "),(0,i._)("a",D,[(0,i.Uk)("here"),(0,i.Wm)(l)]),(0,i.Uk)(", e.g.")]),N]),B,Z])]),x,q]),(0,i.kq)(" Notes END: Do not edit below this line "),M])}]])}}]);