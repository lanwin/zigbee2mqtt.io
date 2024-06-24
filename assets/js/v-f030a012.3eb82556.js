"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27747],{892216:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-f030a012","path":"/devices/SOMFY-1241752.html","title":"SOMFY SOMFY-1241752 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SOMFY SOMFY-1241752 control via MQTT","description":"Integrate your SOMFY SOMFY-1241752 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:09:09.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Setting limits","slug":"setting-limits","link":"#setting-limits","children":[]},{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]},{"level":3,"title":"Battery level","slug":"battery-level","link":"#battery-level","children":[]},{"level":3,"title":"OTA Update","slug":"ota-update","link":"#ota-update","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1719219131000},"filePathRelative":"devices/SOMFY-1241752.md"}')},670629:(e,t,o)=>{o.r(t),o.d(t,{default:()=>q});var i=o(166252);const a=(0,i._)("h1",{id:"somfy-somfy-1241752",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#somfy-somfy-1241752","aria-hidden":"true"},"#"),(0,i.Uk)(" SOMFY SOMFY-1241752")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"SOMFY-1241752")],-1),l=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Blinds from vendors using this roller")],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position), battery, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SOMFY-1241752.png",alt:"SOMFY SOMFY-1241752"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),p=(0,i._)("br",null,null,-1),m={href:"https://asset.somfy.com/Document/c2c8f7f2-d075-4af7-9b57-544cc97da65c_5157264_Sonesse%20ULTRA%2030%20WF%20Zigbee%20Li-ion.pdf",target:"_blank",rel:"noopener noreferrer"},g=(0,i._)("h3",{id:"setting-limits",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#setting-limits","aria-hidden":"true"},"#"),(0,i.Uk)(" Setting limits")],-1),v={href:"https://apps.apple.com/us/app/set-go-connect/id1450506599",target:"_blank",rel:"noopener noreferrer"},f={href:"https://play.google.com/store/apps/details?id=com.somfy.setandgo&hl=en_US&gl=US",target:"_blank",rel:"noopener noreferrer"},b=(0,i.uE)('<h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory Reset</h3><p>Use paperclip to press and hold the programming button until the motor jogs three times.</p><h3 id="battery-level" tabindex="-1"><a class="header-anchor" href="#battery-level" aria-hidden="true">#</a> Battery level</h3><p>Battery percentage level is reported, it may take some time for this to come through.</p><h3 id="ota-update" tabindex="-1"><a class="header-anchor" href="#ota-update" aria-hidden="true">#</a> OTA Update</h3><p>The devices are claiming Zigbee support for over-the-air updates but I don&#39;t have sufficient information on this to give it a go. If you have any documentation, please get in touch @nonodename.</p>',6),y=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),k=(0,i.uE)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),_={},q=(0,o(983744).Z)(_,[["render",function(e,t){const o=(0,i.up)("RouterLink"),_=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[n,(0,i._)("tbody",null,[r,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=SOMFY"},{default:(0,i.w5)((()=>[(0,i.Uk)("SOMFY")])),_:1})])]),s,d,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,(0,i._)("p",null,[(0,i.Uk)("Use a paperclip to press and hold the programming button until the motor jogs twice."),p,(0,i.Uk)(" For more information, see "),(0,i._)("a",m,[(0,i.Uk)("documentation"),(0,i.Wm)(_)]),(0,i.Uk)(" from SOMFY.")]),g,(0,i._)("p",null,[(0,i.Uk)("Currently not possible over Zigbee. Enable the Bluetooth radio by using a paper clip to press the set button five times. Use the Set & Go "),(0,i._)("a",v,[(0,i.Uk)("iOS"),(0,i.Wm)(_)]),(0,i.Uk)(),(0,i._)("a",f,[(0,i.Uk)("Android"),(0,i.Wm)(_)]),(0,i.Uk)(" application to set up and down stop limits.")]),b,(0,i.kq)(" Notes END: Do not edit below this line "),y,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),k])}]])}}]);