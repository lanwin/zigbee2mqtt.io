"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84960],{339055:(e,t,o)=>{o.r(t),o.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-b8916678","path":"/devices/PJ-1203A.html","title":"TuYa PJ-1203A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa PJ-1203A control via MQTT","description":"Integrate your TuYa PJ-1203A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-01T13:40:11.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Late Energy Flow Bug","slug":"late-energy-flow-bug","link":"#late-energy-flow-bug","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"AC frequency (numeric)","slug":"ac-frequency-numeric","link":"#ac-frequency-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power a (numeric)","slug":"power-a-numeric","link":"#power-a-numeric","children":[]},{"level":3,"title":"Power b (numeric)","slug":"power-b-numeric","link":"#power-b-numeric","children":[]},{"level":3,"title":"Power ab (numeric)","slug":"power-ab-numeric","link":"#power-ab-numeric","children":[]},{"level":3,"title":"Current a (numeric)","slug":"current-a-numeric","link":"#current-a-numeric","children":[]},{"level":3,"title":"Current b (numeric)","slug":"current-b-numeric","link":"#current-b-numeric","children":[]},{"level":3,"title":"Power factor a (numeric)","slug":"power-factor-a-numeric","link":"#power-factor-a-numeric","children":[]},{"level":3,"title":"Power factor b (numeric)","slug":"power-factor-b-numeric","link":"#power-factor-b-numeric","children":[]},{"level":3,"title":"Energy flow a (enum)","slug":"energy-flow-a-enum","link":"#energy-flow-a-enum","children":[]},{"level":3,"title":"Energy flow b (enum)","slug":"energy-flow-b-enum","link":"#energy-flow-b-enum","children":[]},{"level":3,"title":"Energy a (numeric)","slug":"energy-a-numeric","link":"#energy-a-numeric","children":[]},{"level":3,"title":"Energy b (numeric)","slug":"energy-b-numeric","link":"#energy-b-numeric","children":[]},{"level":3,"title":"Energy produced a (numeric)","slug":"energy-produced-a-numeric","link":"#energy-produced-a-numeric","children":[]},{"level":3,"title":"Energy produced b (numeric)","slug":"energy-produced-b-numeric","link":"#energy-produced-b-numeric","children":[]},{"level":3,"title":"Update frequency (numeric)","slug":"update-frequency-numeric","link":"#update-frequency-numeric","children":[]},{"level":3,"title":"Timestamp a (numeric)","slug":"timestamp-a-numeric","link":"#timestamp-a-numeric","children":[]},{"level":3,"title":"Timestamp b (numeric)","slug":"timestamp-b-numeric","link":"#timestamp-b-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1719219131000},"filePathRelative":"devices/PJ-1203A.md"}')},348986:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var r=o(166252);const a=(0,r._)("h1",{id:"tuya-pj-1203a",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#tuya-pj-1203a","aria-hidden":"true"},"#"),(0,r.Uk)(" TuYa PJ-1203A")],-1),n=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),i=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"PJ-1203A")],-1),c=(0,r._)("td",null,"Vendor",-1),d=(0,r._)("tr",null,[(0,r._)("td",null,"Description"),(0,r._)("td",null,"Bidirectional energy meter with 80A current clamp")],-1),u=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"ac_frequency, voltage, power_a, power_b, power_ab, current_a, current_b, power_factor_a, power_factor_b, energy_flow_a, energy_flow_b, energy_a, energy_b, energy_produced_a, energy_produced_b, update_frequency, timestamp_a, timestamp_b, linkquality")],-1),l=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PJ-1203A.png",alt:"TuYa PJ-1203A"})])],-1),s=(0,r.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="late-energy-flow-bug" tabindex="-1"><a class="header-anchor" href="#late-energy-flow-bug" aria-hidden="true">#</a> Late Energy Flow Bug</h3><p>Some or all PJ-1203A suffer from a bug that causes the energy flow direction to be reported during the next cycle update. In parctice, that means that an incorrect direction is published during <code>update_frequency</code>frequency seconds after any transition between <code>producing</code> and <code>consuming</code>.</p><p>For each channel <code>x</code>, the option <code>late_energy_flow_x</code> attempts to solve that problem by delaying the publication of <code>power_x</code>, <code>current_x</code>, <code>power_factor_x</code> and <code>energy_flow_x</code> until the next update of <code>energy_flow_x</code>.</p><p>The attribute <code>timestamp_x</code> indicates when the power value was actually received from the device. This is typically <code>update_frequency</code> seconds before the publication time when the option <code>late_energy_flow_x</code> is enabled. It should be noted that this delay does not occur when the power value is zero because the energy flow datapoint is neither produced by the device nor needed to compute the sign.</p>',5),h=(0,r._)("h2",{id:"options",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,r.Uk)(" Options")],-1),p=(0,r.uE)('<ul><li><p><code>late_energy_flow_a</code>: Delay channel A publication until the next energy flow update (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>late_energy_flow_b</code>: Delay channel B publication until the next energy flow update (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>signed_power_a</code>: Report energy flow direction for channel A using signed power (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>signed_power_b</code>: Report energy flow direction for channel B using signed power (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric" aria-hidden="true">#</a> AC frequency (numeric)</h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric" aria-hidden="true">#</a> Power a (numeric)</h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-b-numeric" aria-hidden="true">#</a> Power b (numeric)</h3><p>Instantaneous measured power (phase B). Value can be found in the published state on the <code>power_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-ab-numeric" tabindex="-1"><a class="header-anchor" href="#power-ab-numeric" aria-hidden="true">#</a> Power ab (numeric)</h3><p>Instantaneous measured power (phase AB). Value can be found in the published state on the <code>power_ab</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric" aria-hidden="true">#</a> Current a (numeric)</h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-b-numeric" aria-hidden="true">#</a> Current b (numeric)</h3><p>Instantaneous measured electrical current (phase B). Value can be found in the published state on the <code>current_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-factor-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-a-numeric" aria-hidden="true">#</a> Power factor a (numeric)</h3><p>Instantaneous measured power factor (phase A). Value can be found in the published state on the <code>power_factor_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-b-numeric" aria-hidden="true">#</a> Power factor b (numeric)</h3><p>Instantaneous measured power factor (phase B). Value can be found in the published state on the <code>power_factor_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="energy-flow-a-enum" tabindex="-1"><a class="header-anchor" href="#energy-flow-a-enum" aria-hidden="true">#</a> Energy flow a (enum)</h3><p>Direction of energy (phase A). Value can be found in the published state on the <code>energy_flow_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>consuming</code>, <code>producing</code>, <code>sign</code>.</p><h3 id="energy-flow-b-enum" tabindex="-1"><a class="header-anchor" href="#energy-flow-b-enum" aria-hidden="true">#</a> Energy flow b (enum)</h3><p>Direction of energy (phase B). Value can be found in the published state on the <code>energy_flow_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>consuming</code>, <code>producing</code>, <code>sign</code>.</p><h3 id="energy-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-a-numeric" aria-hidden="true">#</a> Energy a (numeric)</h3><p>Sum of consumed energy (phase A). Value can be found in the published state on the <code>energy_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-b-numeric" aria-hidden="true">#</a> Energy b (numeric)</h3><p>Sum of consumed energy (phase B). Value can be found in the published state on the <code>energy_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-a-numeric" aria-hidden="true">#</a> Energy produced a (numeric)</h3><p>Sum of produced energy (phase A). Value can be found in the published state on the <code>energy_produced_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-b-numeric" aria-hidden="true">#</a> Energy produced b (numeric)</h3><p>Sum of produced energy (phase B). Value can be found in the published state on the <code>energy_produced_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="update-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#update-frequency-numeric" aria-hidden="true">#</a> Update frequency (numeric)</h3><p>Update frequency. Value can be found in the published state on the <code>update_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;update_frequency&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>60</code>. The unit of this value is <code>s</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="timestamp-a-numeric" tabindex="-1"><a class="header-anchor" href="#timestamp-a-numeric" aria-hidden="true">#</a> Timestamp a (numeric)</h3><p>Timestamp at power measure (phase a). Value can be found in the published state on the <code>timestamp_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="timestamp-b-numeric" tabindex="-1"><a class="header-anchor" href="#timestamp-b-numeric" aria-hidden="true">#</a> Timestamp b (numeric)</h3><p>Timestamp at power measure (phase b). Value can be found in the published state on the <code>timestamp_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',40),m={},b=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.kq)(" !!!! "),(0,r.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,r.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,r.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,r.kq)(" !!!! "),a,(0,r._)("table",null,[n,(0,r._)("tbody",null,[i,(0,r._)("tr",null,[c,(0,r._)("td",null,[(0,r.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,r.w5)((()=>[(0,r.Uk)("TuYa")])),_:1})])]),d,u,l])]),(0,r.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),s,(0,r.kq)(" Notes END: Do not edit below this line "),h,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[(0,r.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);