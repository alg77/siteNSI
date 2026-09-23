'use strict';
// Each execution gets a fresh Worker, so globals and modified modules never leak.
importScripts('vendor/pyodide/pyodide.js');
self.onmessage=async({data})=>{
 try{
  const py=await loadPyodide({indexURL:new URL('vendor/pyodide/',self.location.href).href});
  let count=0;
  const output=text=>{if(count>=20000)return;const part=(text+'\n').slice(0,20000-count);count+=part.length;postMessage({type:'output',text:part});if(count===20000)postMessage({type:'output',text:'\n[Sortie limitée à 20 000 caractères]\n'});};
  py.setStdout({batched:output});py.setStderr({batched:output});
  py.globals.set('_source',data.source);py.globals.set('_test',data.test||'');py.globals.set('_stdin',data.stdin||'');py.globals.set('_testing',!!data.testing);
  postMessage({type:'running'});
  await py.runPythonAsync(`
import sys, io, traceback
sys.stdin = io.StringIO(_stdin)
namespace = {"__name__": "atelier_tests" if _testing else "__main__"}
try:
    exec(compile(_source, "eleve.py", "exec"), namespace)
    if _testing:
        exec(compile(_test, "test_fourni.py", "exec"), namespace)
except BaseException:
    traceback.print_exc()
    raise
`);
  postMessage({type:'done',ok:true});
 }catch(error){postMessage({type:'done',ok:false,error:String(error.message||error).slice(-6000)});}
};
