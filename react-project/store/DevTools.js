//DevTools
import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


const DevTools = createDevTools(

 <DockMonitor toggleVisibilityKey = "ctrl-h" changePositionKey = "ctrl-q">
   <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
 </DockMonitor>
) 
  //做了一个开发测试的工具而已
  export default DevTools;