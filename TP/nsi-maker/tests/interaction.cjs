const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const { pathToFileURL } = require('node:url');
(async()=>{
  const browser = await chromium.launch({headless:true});
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  const external=[];page.on('request',r=>{if(/^https?:/.test(r.url()))external.push(r.url());});
  await page.goto(pathToFileURL(path.resolve('index.html')).href);
  assert.equal(await page.locator('main section').count(),18);
  for(const link of await page.locator('nav a').all()){
    const hash=await link.getAttribute('href');await link.click();assert.equal(await page.locator(hash).count(),1);
  }
  for(const button of await page.locator('#steps button').all()) {await button.click();assert.equal(await button.getAttribute('aria-pressed'),'true');assert.ok((await page.locator('#step-info').innerText()).length>30);}
  for(const button of await page.locator('#shape-buttons button').all()) {await button.click();assert.equal(await button.getAttribute('aria-pressed'),'true');}
  await page.locator('#layer').fill('1');assert.equal(await page.locator('#layers rect').count(),1);
  await page.locator('#layer').fill('50');assert.equal(await page.locator('#layers rect').count(),50);
  await page.locator('#animate').click();assert.equal(await page.locator('#layer').inputValue(),'50');
  await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('#animate').click();await page.waitForTimeout(300);await page.locator('#animate').click();assert.ok(+(await page.locator('#layer').inputValue())<50);
  await page.locator('#diameter').fill('90');await page.locator('#thickness').fill('15');await page.locator('#hole').fill('25');
  assert.match(await page.locator('#disk-code').innerText(),/diametre = 90;/);
  assert.match(await page.locator('#disk-svg').getAttribute('aria-label'),/90/);
  const diskDownload=page.waitForEvent('download');await page.locator('#download-scad').click();const disk=await diskDownload;assert.equal(disk.suggestedFilename(),'disque.scad');
  assert.equal(await page.locator('#show-solution').isDisabled(),true);
  for(let i=1;i<=3;i++){await page.locator('#hint').click();assert.equal(await page.locator('#hints p').count(),i);assert.equal(await page.locator('#show-solution').isDisabled(),i<3);}
  await page.locator('#show-solution').click();assert.equal(await page.locator('#solution').isVisible(),true);
  const pythonDownload=page.waitForEvent('download');await page.locator('#download-python').click();const python=await pythonDownload;assert.equal(python.suggestedFilename(),'hanoi.py');fs.mkdirSync('tests/artifacts',{recursive:true});await python.saveAs('tests/artifacts/hanoi.py');
  await page.locator('#show-solution').click();assert.equal(await page.locator('#solution').isVisible(),false);
  await page.locator('#quiz-form button[type=submit]').click();assert.match(await page.locator('#score').innerText(),/0 \/ 8/);assert.match(await page.locator('#score').innerText(),/8 question/);
  for(const [i,answer] of [1,2,1,2,0,0,1,2].entries())await page.locator(`input[name=q${i}][value="${answer}"]`).check();
  await page.locator('#quiz-form button[type=submit]').click();assert.match(await page.locator('#score').innerText(),/8 \/ 8/);
  await page.locator('input[name=q0][value="0"]').check();await page.locator('#quiz-form button[type=submit]').click();assert.match(await page.locator('#score').innerText(),/7 \/ 8/);assert.match(await page.locator('#feedback-0').innerText(),/SCAD/);
  await page.locator('#quiz-form button[type=reset]').click();assert.equal(await page.locator('input:checked').count(),0);assert.equal(await page.locator('#score').innerText(),'');
  // Every visible code block has a working local clipboard button or selection fallback.
  for(const button of await page.locator('pre:visible .copy').all()){await button.click();await page.waitForFunction(el=>/Copié|Sélectionne/.test(el.textContent),await button.elementHandle());}
  for(const [width,height] of [[1440,1000],[768,1024],[390,844],[320,700]]){
    await page.setViewportSize({width,height});await page.goto(pathToFileURL(path.resolve('index.html')).href);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);
    await page.screenshot({path:`tests/artifacts/maker-${width}.png`,fullPage:width===1440});
  }
  assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
  await browser.close();console.log('PASS: navigation, shapes, layers, parameters, downloads, hints, quiz, copy, responsive, no external requests, no JS errors.');
})().catch(e=>{console.error(e);process.exit(1);});
