const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch();const page=await browser.newPage({reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(pathToFileURL(path.resolve('index.html')).href);
 const state=()=>page.locator('#hanoi-state').innerText();
 await page.locator('#hanoi-move').click();assert.match(await state(),/A = \[5, 4, 3, 2\].*B = \[1\]/);
 const before=await state();await page.locator('#hanoi-move').click();assert.equal(await state(),before);assert.match(await page.locator('#hanoi-message').innerText(),/Interdit/);
 await page.locator('#hanoi-from').selectOption('C');await page.locator('#hanoi-move').click();assert.equal(await state(),before);assert.match(await page.locator('#hanoi-message').innerText(),/vide/);
 await page.locator('#hanoi-from').selectOption('B');await page.locator('#hanoi-move').click();assert.equal(await state(),before);assert.match(await page.locator('#hanoi-message').innerText(),/différentes/);
 await page.locator('#hanoi-reset').click();
 async function solve(n,a,b,c){if(!n)return;await solve(n-1,a,c,b);await page.locator('#hanoi-from').selectOption(a);await page.locator('#hanoi-to').selectOption(c);await page.locator('#hanoi-move').click();await solve(n-1,b,a,c);}
 await solve(5,'A','B','C');assert.match(await state(),/C = \[5, 4, 3, 2, 1\]/);assert.match(await page.locator('#hanoi-message').innerText(),/31 déplacement.*Bravo/);
 await page.locator('#job-remove').click();assert.match(await page.locator('#job-message').innerText(),/File vide/);
 for(const name of ['Test de tolérance','Disques','Base']){await page.locator('#job-kind').selectOption(name);await page.locator('#job-add').click();}
 await page.locator('#job-remove').click();assert.match(await page.locator('#job-message').innerText(),/Sortie : Test de tolérance #1.*2/);
 await page.locator('#job-remove').click();assert.match(await page.locator('#job-message').innerText(),/Sortie : Disques #2/);
 await page.locator('#job-reset').click();assert.equal(await page.locator('#job-queue span').count(),0);
 for(let i=0;i<8;i++)await page.locator('#job-add').click();assert.equal(await page.locator('#job-add').isDisabled(),true);await page.locator('#job-remove').click();assert.equal(await page.locator('#job-add').isEnabled(),true);
 for(const [j,expected] of [['3','[5, 6, 3, 9]'],['4','[9, 3, 6, 5]'],['2','[9, 3, 5, 6]'],['3','[9, 6, 5, 3]']]){await page.locator('#pancake-count').selectOption(j);await page.locator('#pancake-flip').click();assert.ok((await page.locator('#pancake-state').innerText()).includes(expected));}
 assert.match(await page.locator('#pancake-message').innerText(),/Tri réussi/);await page.locator('#pancake-reset').click();assert.match(await page.locator('#pancake-state').innerText(),/5, 9, 3, 6/);
 fs.mkdirSync('tests/artifacts',{recursive:true});
 for(const width of [1440,768,390,320]){await page.setViewportSize({width,height:900});await page.locator('#s01').scrollIntoViewIfNeeded();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:`tests/artifacts/s01-${width}.png`});}
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS S01: legal/illegal/empty moves, full 31-move solution, FIFO/empty/bounded queue, pancake sequence, resets and responsive.');
})().catch(e=>{console.error(e);process.exit(1)});
